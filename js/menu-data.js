/**
 * Diamonds Pizza Bakers - Central Master Menu Data
 * Authoritative single source of truth for 33 client-approved menu items, portion sizes, prices, and original imagery.
 * Directly extracted from the official client PDF catalogue.
 */

const RESTAURANT_INFO = {
  name: "Diamonds Pizza Bakers",
  tagline: "Authentic Crusts, Rich Spices & Fresh Bakes",
  phone: "+91-7666351686",
  phoneRaw: "917666351686",
  email: "DiamondsPizzaBakers@gmail.com",
  address: "PILANI MOAD, NEAR SONI HOSPITAL KE PASS, RAJGARH, RAJGARH, CHURU, RAJASTHAN – 331023",
  shortAddress: "Pilani Moad, Near Soni Hospital, Rajgarh, Churu, Rajasthan – 331023",
  fssai: "22224090005730",
  brn: "8004650013000049",
  udyam: "UDYAM-RJ-11-0050968",
  hours: "Monday – Sunday: 11:00 AM – 11:00 PM"
};

const MENU_CATEGORIES = [
  { id: "all", name: "All Items", icon: "✨" },
  { id: "pizza", name: "Pizza", icon: "🍕" },
  { id: "burgers", name: "Burgers & Wraps", icon: "🍔" },
  { id: "beverages", name: "Beverages", icon: "🥤" },
  { id: "pastas", name: "Pastas", icon: "🍝" },
  { id: "sides", name: "Sides & Bites", icon: "🍟" },
  { id: "meals", name: "Rice & Meals", icon: "🍛" }
];

const MENU_ITEMS = [
  // ==========================================
  // 1. PIZZAS — 11 ITEMS
  // ==========================================
  {
    id: "paneer-tikka-pizza",
    name: "Paneer Tikka Pizza",
    category: "pizza",
    categoryLabel: "Tandoori & Fusion Pizzas",
    image: "assets/images/menu/paneer-tikka-pizza.jpg",
    photoPending: false,
    description: "Smoky tandoori-spiced paneer chunks paired with roasted capsicum, red onions, mint-mayo swirl drizzle, and rich mozzarella cheese on stone-baked dough.",
    hasSizes: true,
    sizes: [
      { name: "Small", label: "Small (S)", price: 180 },
      { name: "Medium", label: "Medium (M)", price: 230 },
      { name: "Large", label: "Large (L)", price: 300 }
    ],
    defaultPrice: 180,
    isFeatured: true,
    badge: "Bestseller"
  },
  {
    id: "cheese-corn-pizza",
    name: "Cheese Corn Pizza",
    category: "pizza",
    categoryLabel: "Classic Pizzas",
    image: "assets/images/menu/cheese-corn-pizza.jpg",
    photoPending: false,
    description: "Juicy golden American sweet corn kernels generously scattered over creamy melted mozzarella with aromatic herbs and cracked black pepper.",
    hasSizes: true,
    sizes: [
      { name: "Small", label: "Small (S)", price: 100 },
      { name: "Medium", label: "Medium (M)", price: 140 },
      { name: "Large", label: "Large (L)", price: 180 }
    ],
    defaultPrice: 100,
    isFeatured: true,
    badge: "Popular"
  },
  {
    id: "onion-capsicum-pizza",
    name: "Onion Capsicum Pizza",
    category: "pizza",
    categoryLabel: "Classic Pizzas",
    image: "assets/images/menu/onion-capsicum-pizza.jpg",
    photoPending: false,
    description: "A timeless favorite combining crisp green bell peppers, crunchy red onions, and seasoned tomato sauce smothered in golden baked cheese.",
    hasSizes: true,
    sizes: [
      { name: "Small", label: "Small (S)", price: 90 },
      { name: "Medium", label: "Medium (M)", price: 130 },
      { name: "Large", label: "Large (L)", price: 170 }
    ],
    defaultPrice: 90,
    isFeatured: false,
    badge: "Classic"
  },
  {
    id: "paneer-pizza",
    name: "Paneer Pizza",
    category: "pizza",
    categoryLabel: "Desi Specials",
    image: "assets/images/menu/paneer-pizza.jpg",
    photoPending: false,
    description: "Freshly baked pizza topped with soft marinated paneer cubes, red onions, and melted mozzarella cheese.",
    hasSizes: true,
    sizes: [
      { name: "Small", label: "Small (S)", price: 140 },
      { name: "Medium", label: "Medium (M)", price: 170 },
      { name: "Large", label: "Large (L)", price: 250 }
    ],
    defaultPrice: 140,
    isFeatured: false,
    badge: "Chef's Special"
  },
  {
    id: "veggie-paradise-pizza",
    name: "Veggie Paradise Pizza",
    category: "pizza",
    categoryLabel: "Specialty Pizzas",
    image: "assets/images/menu/veggie-paradise-pizza.jpg",
    photoPending: false,
    description: "A colorful medley of black olives, jalapenos, sweet corn, crisp red onions, crunchy bell peppers, and golden mozzarella.",
    hasSizes: true,
    sizes: [
      { name: "Small", label: "Small (S)", price: 130 },
      { name: "Medium", label: "Medium (M)", price: 170 },
      { name: "Large", label: "Large (L)", price: 220 }
    ],
    defaultPrice: 130,
    isFeatured: true,
    badge: "Specialty"
  },
  {
    id: "regular-cheese-pizza",
    name: "Pizza Regular Cheese (Veg)",
    category: "pizza",
    categoryLabel: "Value Pizzas",
    image: "assets/images/menu/regular-cheese-pizza.jpg",
    photoPending: false,
    description: "Freshly baked single-serve pizza with signature sauce, sprinkled with herbs and topped with warm melted dairy cheese.",
    hasSizes: false,
    defaultPrice: 80,
    isFeatured: false,
    badge: "Value"
  },
  {
    id: "vegetable-pizza",
    name: "Vegetable Pizza",
    category: "pizza",
    categoryLabel: "Hand-Tossed Pizzas",
    image: "assets/images/menu/vegetable-pizza.jpg",
    photoPending: false,
    description: "Oven-baked hand-stretched crust topped with chef's signature herb tomato sauce, melted mozzarella, crunchy bell peppers, onions, ripe tomatoes, and sweet corn seasoned with Italian herbs.",
    hasSizes: true,
    sizes: [
      { name: "Small", label: "Small (S)", price: 110 },
      { name: "Medium", label: "Medium (M)", price: 160 },
      { name: "Large", label: "Large (L)", price: 190 }
    ],
    defaultPrice: 110,
    isFeatured: false,
    badge: "Hand-Tossed"
  },
  {
    id: "paneer-onion-pizza",
    name: "Paneer Onion Pizza",
    category: "pizza",
    categoryLabel: "Hand-Tossed Pizzas",
    image: "assets/images/menu/paneer-onion-pizza.jpg",
    photoPending: false,
    description: "Generously loaded with tender marinated paneer cubes, crisp red onion rings, fresh green chillies, and a golden blend of mozzarella and cheddar cheese over seasoned pizza sauce.",
    hasSizes: true,
    sizes: [
      { name: "Small", label: "Small (S)", price: 150 },
      { name: "Medium", label: "Medium (M)", price: 190 },
      { name: "Large", label: "Large (L)", price: 300 }
    ],
    defaultPrice: 150,
    isFeatured: true,
    badge: "Signature"
  },
  {
    id: "cheese-tomato-pizza",
    name: "Cheese And Tomato Pizza",
    category: "pizza",
    categoryLabel: "Classic Margherita Style",
    image: "assets/images/menu/cheese-tomato-pizza.jpg",
    photoPending: false,
    description: "Classic Italian-style pie featuring a rich, bubbling layer of dairy mozzarella topped with juicy oven-roasted diced Roma tomatoes and fragrant dried oregano.",
    hasSizes: true,
    sizes: [
      { name: "Small", label: "Small (S)", price: 100 },
      { name: "Medium", label: "Medium (M)", price: 150 },
      { name: "Large", label: "Large (L)", price: 200 }
    ],
    defaultPrice: 100,
    isFeatured: false,
    badge: "Margherita"
  },
  {
    id: "tomato-onion-chilli-pizza",
    name: "Tomato Onion & Chilli Pizza",
    category: "pizza",
    categoryLabel: "Spicy Specials",
    image: "assets/images/menu/tomato-onion-chilli-pizza.jpg",
    photoPending: false,
    description: "A zesty combination of garden-fresh tomatoes, thinly sliced crunchy onions, and spicy green chillies baked to perfection with gooey melted cheese.",
    hasSizes: true,
    sizes: [
      { name: "Small", label: "Small (S)", price: 80 },
      { name: "Medium", label: "Medium (M)", price: 120 },
      { name: "Large", label: "Large (L)", price: 170 }
    ],
    defaultPrice: 80,
    isFeatured: false,
    badge: "Spicy"
  },
  {
    id: "cheese-pizza",
    name: "Cheese Pizza",
    category: "pizza",
    categoryLabel: "Classic Pizzas",
    image: "assets/images/menu/cheese-pizza.jpg",
    photoPending: false,
    description: "The ultimate comfort slice with a double coating of premium stretchy mozzarella cheese over our slow-simmered savory tomato base on a golden-brown crispy crust.",
    hasSizes: true,
    sizes: [
      { name: "Small", label: "Small (S)", price: 70 },
      { name: "Medium", label: "Medium (M)", price: 120 },
      { name: "Large", label: "Large (L)", price: 150 }
    ],
    defaultPrice: 70,
    isFeatured: false,
    badge: "Classic"
  },

  // ==========================================
  // 2. PASTAS — 3 ITEMS
  // ==========================================
  {
    id: "red-sauce-pasta",
    name: "Red Sauce Pasta",
    category: "pastas",
    categoryLabel: "Italian Pasta",
    image: "assets/images/menu/red-sauce-pasta.jpg",
    photoPending: false,
    description: "Al dente penne pasta tossed in a robust Italian plum tomato concassé infused with garlic, chilli flakes, extra virgin olive oil, and fresh basil, garnished with grated cheese.",
    hasSizes: false,
    defaultPrice: 150,
    isFeatured: true,
    badge: "Popular"
  },
  {
    id: "paneer-makhani-pasta",
    name: "Paneer Makhani Pasta",
    category: "pastas",
    categoryLabel: "Desi Fusion Pasta",
    image: "assets/images/menu/paneer-makhani-pasta.jpg",
    photoPending: false,
    description: "An exquisite fusion of tender penne pasta and cottage cheese simmered in a luscious, mildly spiced buttery makhani gravy enriched with cream and kasuri methi.",
    hasSizes: false,
    defaultPrice: 180,
    isFeatured: true,
    badge: "Fusion"
  },
  {
    id: "creamy-paneer-pasta",
    name: "Zero Oil Creamy Paneer Pasta",
    category: "pastas",
    categoryLabel: "Healthy & Diet Friendly",
    image: "assets/images/menu/creamy-paneer-pasta.jpg",
    photoPending: false,
    description: "Guilt-free creamy macaroni pasta prepared without added oil or butter, bound in a wholesome paneer and milk reduction flavored with herbs, cracked pepper, and bell peppers.",
    hasSizes: false,
    defaultPrice: 200,
    isFeatured: false,
    badge: "Healthy Choice"
  },

  // ==========================================
  // 3. BURGERS & WRAPS — 3 ITEMS
  // ==========================================
  {
    id: "aloo-tikki-burger",
    name: "Aloo Tikki Burger",
    category: "burgers",
    categoryLabel: "Burgers",
    image: "assets/images/menu/aloo-tikki-burger.jpg",
    photoPending: false,
    description: "Crispy spiced potato cutlet seasoned with traditional Indian chaat spices, layered with freshly cut cucumbers, tomatoes, onions, and tangy sauce in soft toasted buns.",
    hasSizes: false,
    defaultPrice: 70,
    isFeatured: false,
    badge: "Popular"
  },
  {
    id: "veg-cheese-burger",
    name: "Veg Cheese Burger",
    category: "burgers",
    categoryLabel: "Gourmet Burgers",
    image: "assets/images/menu/veg-cheese-burger.jpg",
    photoPending: false,
    description: "Golden fried spiced vegetable and potato patty topped with a slice of creamy melted cheese, crunchy lettuce, sliced tomatoes, onions, and house mayonnaise in a toasted sesame bun.",
    hasSizes: true,
    sizes: [
      { name: "Small", label: "Small (S)", price: 50 },
      { name: "Medium", label: "Medium (M)", price: 70 }
    ],
    defaultPrice: 50,
    isFeatured: true,
    badge: "Bestseller"
  },
  {
    id: "veg-sandwich-tea",
    name: "Veg Sandwich And Tea",
    category: "burgers",
    categoryLabel: "Combos & Breakfast",
    image: "assets/images/menu/veg-sandwich-tea.jpg",
    photoPending: false,
    description: "Golden grilled sandwich loaded with spiced vegetable filling and mint chutney, served hot alongside a freshly brewed cup of aromatic Indian masala tea.",
    hasSizes: false,
    defaultPrice: 150,
    isFeatured: true,
    badge: "Combo Deal"
  },

  // ==========================================
  // 4. SIDES & BITES — 6 ITEMS
  // ==========================================
  {
    id: "french-fries",
    name: "French Fries",
    category: "sides",
    categoryLabel: "Hot Crispy Sides",
    image: "assets/images/menu/french-fries.jpg",
    photoPending: false,
    description: "Deep-fried golden potato batons fried to a satisfying crunch on the outside and fluffy on the inside, salted and served hot with tangy tomato ketchup.",
    hasSizes: true,
    sizes: [
      { name: "Small", label: "Small (S)", price: 120 },
      { name: "Medium", label: "Medium (M)", price: 180 }
    ],
    defaultPrice: 120,
    isFeatured: false,
    badge: "Crispy"
  },
  {
    id: "garlic-bread",
    name: "Garlic Bread",
    category: "sides",
    categoryLabel: "Oven-Baked Breads",
    image: "assets/images/menu/garlic-bread.jpg",
    photoPending: false,
    description: "Thick slices of freshly baked artisan bread brushed generously with fragrant garlic butter, fresh parsley, and toasted until golden.",
    hasSizes: true,
    sizes: [
      { name: "Small", label: "Small (S)", price: 110 },
      { name: "Medium", label: "Medium (M)", price: 160 }
    ],
    defaultPrice: 110,
    isFeatured: false,
    badge: "Fresh Baked"
  },
  {
    id: "garlic-breadsticks",
    name: "Garlic Breadsticks",
    category: "sides",
    categoryLabel: "Fresh Bakes",
    image: "assets/images/menu/garlic-breadsticks.jpg",
    photoPending: false,
    description: "Soft, freshly baked dough sticks infused with roasted garlic, brushed with butter, and sprinkled with Italian herbs and sea salt.",
    hasSizes: true,
    sizes: [
      { name: "Small", label: "Small (S)", price: 110 },
      { name: "Medium", label: "Medium (M)", price: 160 }
    ],
    defaultPrice: 110,
    isFeatured: false,
    badge: "Popular"
  },
  {
    id: "veg-spring-rolls",
    name: "Vegetable Spring Rolls (4 pc)",
    category: "sides",
    categoryLabel: "Starters & Appetizers",
    image: "assets/images/menu/veg-spring-rolls.jpg",
    photoPending: false,
    description: "Crispy golden fried pastry rolls stuffed with wok-tossed shredded cabbage, carrots, bell peppers, and scallions, served with sweet chilli dip.",
    hasSizes: false,
    defaultPrice: 120,
    isFeatured: false,
    badge: "Crispy"
  },
  {
    id: "veg-fried-momos",
    name: "Veg Fried Momos (8 pc)",
    category: "sides",
    categoryLabel: "Tibetan & Street Bites",
    image: "assets/images/menu/veg-fried-momos.jpg",
    photoPending: false,
    description: "Hand-pleated dumplings stuffed with seasoned minced vegetables, fried to a crunchy texture and served alongside fiery spicy momo chutney.",
    hasSizes: false,
    defaultPrice: 170,
    isFeatured: true,
    badge: "Bestseller"
  },
  {
    id: "samosa",
    name: "Samosa (2 pc)",
    category: "sides",
    categoryLabel: "Traditional Snacks",
    image: "assets/images/menu/samosa.jpg",
    photoPending: false,
    description: "Crisp, golden-brown pyramid pastries filled with a savory mixture of spiced potatoes, green peas, cumin, and garam masala, served with mint and tamarind chutneys.",
    hasSizes: false,
    defaultPrice: 70,
    isFeatured: false,
    badge: "Traditional"
  },

  // ==========================================
  // 5. BEVERAGES — 6 ITEMS
  // ==========================================
  {
    id: "orange-juice",
    name: "Orange Juice",
    category: "beverages",
    categoryLabel: "Fresh Juices",
    image: "assets/images/menu/orange-juice.jpg",
    photoPending: false,
    description: "Chilled cold-pressed fruit refreshment made from tangy sun-ripened oranges, served fresh without artificial flavors.",
    hasSizes: false,
    defaultPrice: 70,
    isFeatured: false,
    badge: "Fresh Pressed"
  },
  {
    id: "thums-up",
    name: "Thums Up",
    category: "beverages",
    categoryLabel: "Chilled Soft Drinks",
    image: "assets/images/menu/thums-up.jpg",
    photoPending: false,
    description: "Refreshing carbonated cold drink — bold, spicy Thums Up cola served chilled.",
    hasSizes: false,
    defaultPrice: 60,
    isFeatured: false,
    badge: "Chilled"
  },
  {
    id: "sprite",
    name: "Sprite",
    category: "beverages",
    categoryLabel: "Chilled Soft Drinks",
    image: "assets/images/menu/sprite.jpg",
    photoPending: false,
    description: "Refreshing carbonated cold drink — crisp lemon-lime Sprite served chilled.",
    hasSizes: false,
    defaultPrice: 60,
    isFeatured: false,
    badge: "Chilled"
  },
  {
    id: "coca-cola",
    name: "Coca-Cola",
    category: "beverages",
    categoryLabel: "Chilled Soft Drinks",
    image: "assets/images/menu/coca-cola.jpg",
    photoPending: false,
    description: "Popular fizzy chilled soda served cold — classic Coca-Cola.",
    hasSizes: false,
    defaultPrice: 80,
    isFeatured: false,
    badge: "Classic Soda"
  },
  {
    id: "fanta",
    name: "Fanta",
    category: "beverages",
    categoryLabel: "Chilled Soft Drinks",
    image: "assets/images/menu/fanta.jpg",
    photoPending: false,
    description: "Popular fizzy chilled soda served cold — zesty citrus Fanta Orange.",
    hasSizes: false,
    defaultPrice: 80,
    isFeatured: false,
    badge: "Citrus Fizz"
  },
  {
    id: "tea",
    name: "Tea",
    category: "beverages",
    categoryLabel: "Hot Beverages",
    image: "assets/images/menu/tea.jpg",
    photoPending: false,
    description: "Freshly brewed full-cream milk tea boiled with select tea leaves, crushed ginger, cardamom, and aromatic warming spices.",
    hasSizes: false,
    defaultPrice: 50,
    isFeatured: true,
    badge: "Traditional"
  },

  // ==========================================
  // 6. RICE & MEALS — 4 ITEMS
  // ==========================================
  {
    id: "veg-biryani",
    name: "Veg Biryani",
    category: "meals",
    categoryLabel: "Rice Specialties",
    image: "assets/images/menu/veg-biryani.jpg",
    photoPending: false,
    description: "Long-grain aromatic basmati rice dum-cooked with garden-fresh vegetables, whole spices, saffron, caramelized onions, and roasted cashews.",
    hasSizes: true,
    sizes: [
      { name: "Half", label: "Half Portion", price: 220 },
      { name: "Full", label: "Full Portion", price: 400 }
    ],
    defaultPrice: 220,
    isFeatured: true,
    badge: "Dum Biryani"
  },
  {
    id: "dal-chawal",
    name: "Dal Chawal",
    category: "meals",
    categoryLabel: "Homestyle Meals",
    image: "assets/images/menu/dal-chawal.jpg",
    photoPending: false,
    description: "Wholesome yellow lentils slow-cooked and tempered with desi ghee, cumin seeds, garlic, and dried red chillies, paired with steamed fragrant white rice.",
    hasSizes: true,
    sizes: [
      { name: "Half", label: "Half Portion", price: 150 },
      { name: "Full", label: "Full Portion", price: 210 }
    ],
    defaultPrice: 150,
    isFeatured: false,
    badge: "Homestyle"
  },
  {
    id: "veg-fried-rice",
    name: "Veg Fried Rice",
    category: "meals",
    categoryLabel: "Indo-Chinese Wok Rice",
    image: "assets/images/menu/veg-fried-rice.jpg",
    photoPending: false,
    description: "Wok-tossed steamed rice sauteed on high heat with finely chopped carrots, French beans, cabbage, bell peppers, soy sauce, and fresh spring onions.",
    hasSizes: true,
    sizes: [
      { name: "Half", label: "Half Portion", price: 110 },
      { name: "Full", label: "Full Portion", price: 190 }
    ],
    defaultPrice: 110,
    isFeatured: false,
    badge: "Wok Tossed"
  },
  {
    id: "indian-veg-soup",
    name: "Indian Veg Soup (Vegetable)",
    category: "meals",
    categoryLabel: "Soups & Broths",
    image: "assets/images/menu/indian-veg-soup.jpg",
    photoPending: false,
    description: "A light, nourishing vegetable broth packed with finely diced seasonal greens, sweet corn, crushed black pepper, and herbs simmered to warmth.",
    hasSizes: false,
    defaultPrice: 150,
    isFeatured: false,
    badge: "Healthy Soup"
  }
];

function getMenuItems() {
  return MENU_ITEMS;
}

function getMenuCategories() {
  return MENU_CATEGORIES;
}

function getMenuItemById(id) {
  return MENU_ITEMS.find((item) => item.id === id);
}

function getRestaurantInfo() {
  return RESTAURANT_INFO;
}
