/**
 * Diamonds Pizza Bakers - Main Global Script
 * Handles navigation, mobile menu, active page state, header interactions,
 * floating WhatsApp button, and utility helpers.
 */

document.addEventListener("DOMContentLoaded", () => {
  initStickyHeader();
  initMobileNav();
  highlightActiveNav();
  initSmoothScroll();
  initCategoryCards();
  initCustomOrderForm();
});

/**
 * Sticky Header elevation & backdrop effect on scroll
 */
function initStickyHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
}

/**
 * Mobile Navigation Drawer & Hamburger Toggle
 */
function initMobileNav() {
  const toggleBtn = document.querySelector(".mobile-nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const overlay = document.querySelector(".nav-overlay");
  const navLinks = document.querySelectorAll(".nav-menu .nav-link");

  if (!toggleBtn || !navMenu) return;

  const toggleMenu = (open) => {
    const isOpen = open !== undefined ? open : !navMenu.classList.contains("active");
    toggleBtn.classList.toggle("active", isOpen);
    navMenu.classList.toggle("active", isOpen);
    if (overlay) overlay.classList.toggle("active", isOpen);
    document.body.classList.toggle("menu-open", isOpen);
    toggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  };

  toggleBtn.addEventListener("click", () => toggleMenu());
  if (overlay) overlay.addEventListener("click", () => toggleMenu(false));

  navLinks.forEach((link) => {
    link.addEventListener("click", () => toggleMenu(false));
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navMenu.classList.contains("active")) {
      toggleMenu(false);
    }
  });
}

/**
 * Highlights currently active navigation link based on window.location
 */
function highlightActiveNav() {
  const currentPath = window.location.pathname.toLowerCase();
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href").toLowerCase();
    const isHome = (currentPath === "" || currentPath === "/" || currentPath.endsWith("index.html")) && href.includes("index.html");
    const isMatch = isHome || (href !== "index.html" && currentPath.endsWith(href));

    if (isMatch) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    } else {
      link.classList.remove("active");
      link.removeAttribute("aria-current");
    }
  });
}

/**
 * Category cards click routing
 * When a visitor clicks a category on the homepage, navigates to menu.html?category=XYZ
 */
function initCategoryCards() {
  const categoryCards = document.querySelectorAll("[data-category-target]");
  categoryCards.forEach((card) => {
    card.addEventListener("click", (e) => {
      e.preventDefault();
      const targetCat = card.getAttribute("data-category-target");
      window.location.href = `menu.html?category=${encodeURIComponent(targetCat)}`;
    });
  });
}

/**
 * Smooth scrolling for in-page anchors
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        e.preventDefault();
        targetElem.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

/**
 * Custom order form validation & WhatsApp submission (for contact.html)
 */
function initCustomOrderForm() {
  const form = document.getElementById("custom-order-form");
  if (!form) return;

  // Set minimum date to today for preferred date picker
  const dateInput = document.getElementById("preferredDate");
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.min = today;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Required fields
    const customerName = form.customerName.value.trim();
    const mobileNumber = form.mobileNumber.value.trim();
    const customOrder = form.customOrder.value.trim();
    const details = form.details.value.trim();
    const quantity = form.quantity.value.trim();

    // Optional fields
    const preferredSize = form.preferredSize ? form.preferredSize.value.trim() : "";
    const preferredDate = form.preferredDate ? form.preferredDate.value.trim() : "";
    const preferredTime = form.preferredTime ? form.preferredTime.value.trim() : "";
    const budget = form.budget ? form.budget.value.trim() : "";
    const instructions = form.instructions ? form.instructions.value.trim() : "";

    // Validation
    let errors = [];
    if (!customerName) errors.push("Please enter your name.");
    if (!mobileNumber || mobileNumber.length < 10) errors.push("Please enter a valid 10-digit mobile number.");
    if (!customOrder) errors.push("Please state the food item or custom order name.");
    if (!details) errors.push("Please provide your customisation details.");
    if (!quantity) errors.push("Please state the quantity or number of people.");

    const errorContainer = document.getElementById("form-errors");
    if (errors.length > 0) {
      if (errorContainer) {
        errorContainer.innerHTML = errors.map((err) => `<p class="form-error-item">⚠️ ${err}</p>`).join("");
        errorContainer.classList.add("visible");
      } else {
        alert(errors.join("\n"));
      }
      return;
    }

    if (errorContainer) {
      errorContainer.innerHTML = "";
      errorContainer.classList.remove("visible");
    }

    // Call WhatsApp order generator
    if (window.sendCustomOrder) {
      window.sendCustomOrder({
        customerName,
        mobileNumber,
        customOrder,
        details,
        quantity,
        preferredSize,
        preferredDate,
        preferredTime,
        budget,
        instructions
      });
    }

    // Inform user in UI
    const successContainer = document.getElementById("form-success");
    if (successContainer) {
      successContainer.innerHTML = "Opening WhatsApp with your customised enquiry... Please review and press send in WhatsApp to discuss your order with our team!";
      successContainer.classList.add("visible");
      setTimeout(() => successContainer.classList.remove("visible"), 8000);
    }
  });
}

