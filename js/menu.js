/**
 * Diamonds Pizza Bakers - Interactive Menu Component
 * Renders all 30 products, supports dynamic category filtering, search,
 * live portion size selection, quantity adjustment, real-time price calculation,
 * and direct WhatsApp ordering.
 */

// Global state for active product selections: { [productId]: { size: 'Small', quantity: 1 } }
const menuState = {};

document.addEventListener("DOMContentLoaded", () => {
  initMenu();
});

function getMenuItems() {
  if (typeof window !== "undefined" && window.MENU_ITEMS) return window.MENU_ITEMS;
  if (typeof MENU_ITEMS !== "undefined") return MENU_ITEMS;
  return [];
}

function getMenuCategories() {
  if (typeof window !== "undefined" && window.MENU_CATEGORIES) return window.MENU_CATEGORIES;
  if (typeof MENU_CATEGORIES !== "undefined") return MENU_CATEGORIES;
  return [];
}

function initMenu() {
  const menuGrid = document.getElementById("menu-grid");
  const filterContainer = document.getElementById("category-filters");
  const searchInput = document.getElementById("menu-search-input");

  if (!menuGrid) return; // Not on menu page

  // Check URL param for initial category filter, default to 'all'
  const urlParams = new URLSearchParams(window.location.search);
  let activeCategory = urlParams.get("category") || "all";
  let activeSearch = "";

  // Render Category Filter Buttons
  renderCategoryFilters(filterContainer, activeCategory, (newCategory) => {
    activeCategory = newCategory;
    // Update URL query string without reloading page
    const newUrl = new URL(window.location);
    if (newCategory === "all") {
      newUrl.searchParams.delete("category");
    } else {
      newUrl.searchParams.set("category", newCategory);
    }
    window.history.replaceState({}, "", newUrl);
    renderProducts(menuGrid, activeCategory, activeSearch);
  });

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      activeSearch = e.target.value.toLowerCase().trim();
      renderProducts(menuGrid, activeCategory, activeSearch);
    });
  }

  // Initial render: All 30 items
  renderProducts(menuGrid, activeCategory, activeSearch);
}

/**
 * Render filter category buttons
 */
function renderCategoryFilters(container, activeCategory, onSelect) {
  const categories = getMenuCategories();
  if (!container || categories.length === 0) return;

  container.innerHTML = categories.map((cat) => {
    const isActive = cat.id === activeCategory ? "active" : "";
    return `
      <button type="button" class="category-pill ${isActive}" data-category="${cat.id}">
        <span class="cat-icon">${cat.icon}</span>
        <span class="cat-name">${cat.name}</span>
      </button>
    `;
  }).join("");

  container.querySelectorAll(".category-pill").forEach((btn) => {
    btn.addEventListener("click", () => {
      container.querySelectorAll(".category-pill").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const catId = btn.getAttribute("data-category");
      onSelect(catId);
    });
  });
}

/**
 * Render Menu Product Cards
 */
function renderProducts(grid, category, search) {
  const items = getMenuItems();
  if (!grid || items.length === 0) return;

  let filtered = items;

  // Filter by category
  if (category && category !== "all") {
    filtered = filtered.filter((item) => item.category === category);
  }

  // Filter by search query
  if (search) {
    filtered = filtered.filter((item) => {
      return (
        item.name.toLowerCase().includes(search) ||
        (item.description && item.description.toLowerCase().includes(search)) ||
        (item.categoryLabel && item.categoryLabel.toLowerCase().includes(search))
      );
    });
  }

  // Empty state handling
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="menu-empty-state" style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
        <div class="empty-icon" style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
        <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">No menu items found</h3>
        <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">Try selecting another category or clear your search term.</p>
        <button type="button" class="btn btn-secondary" id="reset-filters-btn">
          Show All 30 Items
        </button>
      </div>
    `;

    const resetBtn = document.getElementById("reset-filters-btn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        const sInput = document.getElementById("menu-search-input");
        if (sInput) sInput.value = "";
        const allBtn = document.querySelector('[data-category="all"]');
        if (allBtn) allBtn.click();
      });
    }
    return;
  }

  // Render cards
  grid.innerHTML = filtered.map((item) => createProductCardHtml(item)).join("");
  attachProductCardEvents(grid);
}

/**
 * Generates HTML for an individual E-Commerce-style Product Card
 */
function createProductCardHtml(item) {
  // Ensure default state exists
  if (!menuState[item.id]) {
    const initialSize = item.hasSizes && item.sizes && item.sizes.length > 0 ? item.sizes[0].name : null;
    menuState[item.id] = {
      size: initialSize,
      quantity: 1
    };
  }

  const currentState = menuState[item.id];
  let unitPrice = item.defaultPrice;

  if (item.hasSizes && currentState.size) {
    const sizeObj = item.sizes.find((s) => s.name === currentState.size);
    if (sizeObj) unitPrice = sizeObj.price;
  }

  const totalPrice = unitPrice * currentState.quantity;

  // Size buttons HTML
  let sizeSelectorHtml = "";
  if (item.hasSizes && item.sizes && item.sizes.length > 0) {
    sizeSelectorHtml = `
      <div class="product-sizes-wrapper">
        <label class="size-label">Select Size:</label>
        <div class="product-sizes" role="radiogroup" aria-label="Portion size">
          ${item.sizes.map((s) => {
            const isSelected = s.name === currentState.size ? "active" : "";
            return `
              <button type="button" class="size-btn ${isSelected}" data-product="${item.id}" data-size="${s.name}" data-price="${s.price}" title="${s.label} - ₹${s.price}">
                <span class="size-btn-name">${s.name}</span>
                <span class="size-btn-price">₹${s.price}</span>
              </button>
            `;
          }).join("")}
        </div>
      </div>
    `;
  }

  const badgeHtml = item.badge ? `<span class="product-badge">${item.badge}</span>` : "";

  return `
    <article class="product-card" id="card-${item.id}" data-product-id="${item.id}">
      <div class="product-image-container">
        <img 
          src="${item.image}" 
          alt="${item.name} - Diamonds Pizza Bakers" 
          class="product-image"
          loading="lazy"
          onerror="this.onerror=null; this.src='assets/images/categories/cat-pizza.jpg';"
        />
        ${badgeHtml}
        <span class="product-category-tag">${item.categoryLabel || item.category}</span>
      </div>

      <div class="product-body">
        <div class="product-header">
          <div class="product-title-group">
            <span class="veg-badge" title="100% Pure Vegetarian"><span class="veg-dot"></span></span>
            <h3 class="product-title">${item.name}</h3>
          </div>
          <div class="product-pricing">
            <span class="price-currency">₹</span>
            <span class="product-unit-price" id="unit-price-${item.id}">${unitPrice}</span>
            ${item.hasSizes ? '<span class="price-qualifier">from</span>' : ""}
          </div>
        </div>

        ${item.description ? `<p class="product-description">${item.description}</p>` : ""}

        ${sizeSelectorHtml}

        <div class="product-actions-bar">
          <div class="quantity-control-wrapper">
            <label class="qty-label" for="qty-${item.id}">Qty:</label>
            <div class="quantity-control">
              <button type="button" class="qty-btn qty-minus" data-product="${item.id}" aria-label="Decrease quantity">−</button>
              <span class="qty-value" id="qty-val-${item.id}">${currentState.quantity}</span>
              <button type="button" class="qty-btn qty-plus" data-product="${item.id}" aria-label="Increase quantity">+</button>
            </div>
          </div>

          <div class="total-price-display">
            <span class="total-label">Total:</span>
            <span class="total-amount" id="total-${item.id}">₹${totalPrice}</span>
          </div>
        </div>

        <button type="button" class="btn btn-whatsapp-order" data-order-product="${item.id}">
          <svg class="wa-icon" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.83a8.18 8.18 0 01-5.82 2.41c-1.42 0-2.82-.37-4.06-1.07l-.29-.16-3.02.79.81-2.95-.19-.3a8.19 8.19 0 01-1.25-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.25-1.49-1.4-1.74-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.23.25-.87.85-.87 2.08 0 1.22.89 2.41 1.02 2.58.13.17 1.76 2.68 4.26 3.76.6.26 1.06.41 1.42.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.22-.16-.47-.29z"/>
          </svg>
          <span>Order on WhatsApp</span>
        </button>
      </div>
    </article>
  `;
}

/**
 * Attach event listeners to size buttons, quantity controls, and order buttons
 */
function attachProductCardEvents(container) {
  // Size selection
  container.querySelectorAll(".size-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const prodId = btn.getAttribute("data-product");
      const sizeName = btn.getAttribute("data-size");
      const price = parseInt(btn.getAttribute("data-price"), 10);

      // Update state
      if (!menuState[prodId]) menuState[prodId] = { quantity: 1 };
      menuState[prodId].size = sizeName;

      // Update UI active class
      const card = document.getElementById(`card-${prodId}`);
      if (card) {
        card.querySelectorAll(".size-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        // Update unit price and total price display
        const unitElem = document.getElementById(`unit-price-${prodId}`);
        if (unitElem) unitElem.textContent = price;

        updateCardTotal(prodId, price);
      }
    });
  });

  // Quantity decrement
  container.querySelectorAll(".qty-minus").forEach((btn) => {
    btn.addEventListener("click", () => {
      const prodId = btn.getAttribute("data-product");
      if (!menuState[prodId]) menuState[prodId] = { quantity: 1 };
      if (menuState[prodId].quantity > 1) {
        menuState[prodId].quantity -= 1;
        updateQuantityDisplay(prodId);
      }
    });
  });

  // Quantity increment
  container.querySelectorAll(".qty-plus").forEach((btn) => {
    btn.addEventListener("click", () => {
      const prodId = btn.getAttribute("data-product");
      if (!menuState[prodId]) menuState[prodId] = { quantity: 1 };
      if (menuState[prodId].quantity < 50) {
        menuState[prodId].quantity += 1;
        updateQuantityDisplay(prodId);
      }
    });
  });

  // WhatsApp Order Click
  container.querySelectorAll("[data-order-product]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const prodId = btn.getAttribute("data-order-product");
      triggerWhatsAppOrder(prodId);
    });
  });
}

function updateQuantityDisplay(prodId) {
  const qtyElem = document.getElementById(`qty-val-${prodId}`);
  if (qtyElem) qtyElem.textContent = menuState[prodId].quantity;

  const items = getMenuItems();
  const item = items.find((i) => i.id === prodId);
  if (!item) return;

  let unitPrice = item.defaultPrice;
  if (item.hasSizes && menuState[prodId].size) {
    const s = item.sizes.find((sz) => sz.name === menuState[prodId].size);
    if (s) unitPrice = s.price;
  }

  updateCardTotal(prodId, unitPrice);
}

function updateCardTotal(prodId, unitPrice) {
  const totalElem = document.getElementById(`total-${prodId}`);
  if (totalElem) {
    const total = unitPrice * (menuState[prodId]?.quantity || 1);
    totalElem.textContent = `₹${total}`;
  }
}

/**
 * Gathers product order parameters and triggers WhatsApp sending
 */
function triggerWhatsAppOrder(prodId) {
  const items = getMenuItems();
  const item = items.find((i) => i.id === prodId);
  if (!item) return;

  const state = menuState[prodId] || { quantity: 1 };
  let unitPrice = item.defaultPrice;
  let selectedSize = null;

  if (item.hasSizes && item.sizes && item.sizes.length > 0) {
    selectedSize = state.size || item.sizes[0].name;
    const sizeObj = item.sizes.find((s) => s.name === selectedSize);
    if (sizeObj) unitPrice = sizeObj.price;
  }

  const quantity = state.quantity || 1;
  const totalPrice = unitPrice * quantity;

  if (typeof window !== "undefined" && window.sendProductOrder) {
    window.sendProductOrder({
      productName: item.name,
      size: selectedSize,
      quantity,
      unitPrice,
      totalPrice
    });
  }
}

// Bind to window for global access
if (typeof window !== "undefined") {
  window.initMenu = initMenu;
  window.renderProducts = renderProducts;
  window.renderCategoryFilters = renderCategoryFilters;
  window.triggerWhatsAppOrder = triggerWhatsAppOrder;
}
