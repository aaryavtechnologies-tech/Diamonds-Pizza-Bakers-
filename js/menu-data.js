/**
 * Diamonds Pizza Bakers - Central Master Menu Data
 * Authoritative single source of truth for all 30 menu items, portion sizes, prices, and imagery.
 * Official Contact: +91-7666351686 | Pilani Moad, Rajgarh, Churu, Rajasthan
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
  // ==================== 1. PIZZAS (10 items) ====================
  {
    id: "paneer-tikka-pizza",
    name: "Paneer Tikka Pizza",
    category: "pizza",
    categoryLabel: "Pizzas",
    image: "assets/images/menu/paneer-tikka-pizza.jpg",
    description: "Stone-baked pizza topped with spiced paneer, capsicum, onions, and mozzarella cheese.",
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
    categoryLabel: "Pizzas",
    image: "assets/images/menu/cheese-corn-pizza.jpg",
    description: "Crispy pizza baked with sweet corn kernels and melted mozzarella cheese.",
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
    categoryLabel: "Pizzas",
    image: "assets/images/menu/onion-capsicum-pizza.jpg",
    description: "Classic pizza topped with crisp green capsicum, sliced onions, and cheese.",
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
    id: "paneer-onion-pizza",
    name: "Paneer Onion Pizza",
    category: "pizza",
    categoryLabel: "Pizzas",
    image: "assets/images/menu/paneer-onion-pizza.jpg",
    description: "Fresh pizza topped with soft paneer cubes, red onions, and cheese.",
    hasSizes: true,
    sizes: [
      { name: "Small", label: "Small (S)", price: 140 },
      { name: "Medium", label: "Medium (M)", price: 180 },
      { name: "Large", label: "Large (L)", price: 240 }
    ],
    defaultPrice: 140,
    isFeatured: true,
    badge: "Special"
  },
  {
    id: "veggie-paradise-pizza",
    name: "Veggie Paradise Pizza",
    category: "pizza",
    categoryLabel: "Pizzas",
    image: "assets/images/menu/veggie-paradise-pizza.jpg",
    description: "Loaded pizza with bell peppers, olives, corn, onions, and melted cheese.",
    hasSizes: true,
    sizes: [
      { name: "Small", label: "Small (S)", price: 130 },
      { name: "Medium", label: "Medium (M)", price: 170 },
      { name: "Large", label: "Large (L)", price: 220 }
    ],
    defaultPrice: 130,
    isFeatured: true,
    badge: "Chef Choice"
  },
  {
    id: "regular-cheese-pizza",
    name: "Regular Cheese Pizza (Veg)",
    category: "pizza",
    categoryLabel: "Pizzas",
    image: "assets/images/menu/regular-cheese-pizza.jpg",
    description: "Simple crust baked with seasoned tomato sauce and dairy mozzarella cheese.",
    hasSizes: true,
    sizes: [
      { name: "Small", label: "Small (S)", price: 80 },
      { name: "Medium", label: "Medium (M)", price: 120 },
      { name: "Large", label: "Large (L)", price: 160 }
    ],
    defaultPrice: 80,
    isFeatured: false,
    badge: "Value"
  },
  {
    id: "vegetable-pizza",
    name: "Vegetable Pizza",
    category: "pizza",
    categoryLabel: "Pizzas",
    image: "assets/images/menu/vegetable-pizza.jpg",
    description: "Topped with fresh bell peppers, onions, tomatoes, sweet corn, and mozzarella.",
    hasSizes: true,
    sizes: [
      { name: "Small", label: "Small (S)", price: 110 },
      { name: "Medium", label: "Medium (M)", price: 150 },
      { name: "Large", label: "Large (L)", price: 200 }
    ],
    defaultPrice: 110,
    isFeatured: false,
    badge: "Fresh"
  },
  {
    id: "cheese-tomato-pizza",
    name: "Cheese and Tomato Pizza",
    category: "pizza",
    categoryLabel: "Pizzas",
    image: "assets/images/menu/cheese-tomato-pizza.jpg",
    description: "Classic pizza baked with sliced juicy tomatoes, oregano, and melted cheese.",
    hasSizes: true,
    sizes: [
      { name: "Small", label: "Small (S)", price: 100 },
      { name: "Medium", label: "Medium (M)", price: 140 },
      { name: "Large", label: "Large (L)", price: 180 }
    ],
    defaultPrice: 100,
    isFeatured: false,
    badge: "Italian Style"
  },
  {
    id: "tomato-onion-chilli-pizza",
    name: "Tomato Onion & Chilli Pizza",
    category: "pizza",
    categoryLabel: "Pizzas",
    image: "assets/images/menu/tomato-onion-chilli-pizza.jpg",
    description: "Topped with diced tomatoes, onions, green chillies, and melted mozzarella cheese.",
    hasSizes: true,
    sizes: [
      { name: "Small", label: "Small (S)", price: 80 },
      { name: "Medium", label: "Medium (M)", price: 120 },
      { name: "Large", label: "Large (L)", price: 160 }
    ],
    defaultPrice: 80,
    isFeatured: false,
    badge: "Spicy"
  },
  {
    id: "cheese-pizza",
    name: "Cheese Pizza",
    category: "pizza",
    categoryLabel: "Pizzas",
    image: "assets/images/menu/cheese-pizza.jpg",
    description: "Freshly baked crust topped with savory tomato sauce and double cheese.",
    hasSizes: true,
    sizes: [
      { name: "Small", label: "Small (S)", price: 70 },
      { name: "Medium", label: "Medium (M)", price: 110 },
      { name: "Large", label: "Large (L)", price: 150 }
    ],
    defaultPrice: 70,
    isFeatured: false,
    badge: "All-Time Favorite"
  },

  // ==================== 2. BURGERS & WRAPS (4 items) ====================
  {
    id: "aloo-tikki-burger",
    name: "Aloo Tikki Burger",
    category: "burgers",
    categoryLabel: "Burgers",
    image: "assets/images/menu/aloo-tikki-burger.jpg",
    description: "Spiced potato patty with onions, tomatoes, and sauce in toasted buns.",
    hasSizes: false,
    defaultPrice: 70,
    isFeatured: true,
    badge: "Crispy"
  },
  {
    id: "veg-cheese-burger",
    name: "Veg Cheese Burger",
    category: "burgers",
    categoryLabel: "Burgers",
    image: "assets/images/menu/veg-cheese-burger.jpg",
    description: "Crispy vegetable patty topped with cheese slice, veggies, and mayonnaise.",
    hasSizes: true,
    sizes: [
      { name: "Single", label: "Single Patty", price: 50 },
      { name: "Double", label: "Double Patty", price: 80 }
    ],
    defaultPrice: 50,
    isFeatured: true,
    badge: "Bestseller"
  },
  {
    id: "veg-sandwich-tea-combo",
    name: "Veg Sandwich & Tea Combo",
    category: "burgers",
    categoryLabel: "Combos",
    image: "assets/images/menu/veg-sandwich-tea-combo.jpg",
    description: "Grilled spiced vegetable sandwich served hot with fresh Indian masala tea.",
    hasSizes: false,
    defaultPrice: 150,
    isFeatured: false,
    badge: "Tea Time Special"
  },
  {
    id: "veg-shawarma",
    name: "Veg Shawarma & Veg Cheese Shawarma",
    category: "burgers",
    categoryLabel: "Wraps",
    image: "assets/images/menu/veg-shawarma.jpg",
    description: "Pita wrap filled with spiced paneer, vegetables, and creamy garlic sauce.",
    hasSizes: true,
    sizes: [
      { name: "Regular", label: "Regular Shawarma", price: 90 },
      { name: "Cheese", label: "Cheese Shawarma", price: 120 }
    ],
    defaultPrice: 90,
    isFeatured: false,
    badge: "Popular Wrap"
  },

  // ==================== 3. PASTAS (3 items) ====================
  {
    id: "red-sauce-pasta",
    name: "Red Sauce Pasta (Arrabbiata)",
    category: "pastas",
    categoryLabel: "Pastas",
    image: "assets/images/menu/red-sauce-pasta.jpg",
    description: "Penne pasta cooked in spicy garlic tomato sauce with herbs.",
    hasSizes: true,
    sizes: [
      { name: "Single", label: "Single Serving", price: 150 },
      { name: "Double", label: "Double Sharing", price: 260 }
    ],
    defaultPrice: 150,
    isFeatured: false,
    badge: "Italian Classic"
  },
  {
    id: "paneer-makhani-pasta",
    name: "Paneer Makhani Pasta",
    category: "pastas",
    categoryLabel: "Pastas",
    image: "assets/images/menu/paneer-makhani-pasta.jpg",
    description: "Penne pasta tossed in a creamy spiced tomato and paneer gravy.",
    hasSizes: true,
    sizes: [
      { name: "Single", label: "Single Serving", price: 180 },
      { name: "Double", label: "Double Sharing", price: 320 }
    ],
    defaultPrice: 180,
    isFeatured: true,
    badge: "Desi Fusion"
  },
  {
    id: "creamy-paneer-pasta",
    name: "Zero Oil Creamy Paneer Pasta",
    category: "pastas",
    categoryLabel: "Pastas",
    image: "assets/images/menu/creamy-paneer-pasta.jpg",
    description: "Macaroni pasta prepared in milk and paneer sauce with vegetables.",
    hasSizes: true,
    sizes: [
      { name: "Single", label: "Single Serving", price: 200 },
      { name: "Double", label: "Double Sharing", price: 350 }
    ],
    defaultPrice: 200,
    isFeatured: false,
    badge: "Guilt Free"
  },

  // ==================== 4. SIDES & STREET BITES (6 items) ====================
  {
    id: "french-fries",
    name: "French Fries",
    category: "sides",
    categoryLabel: "Sides & Bites",
    image: "assets/images/menu/french-fries.jpg",
    description: "Crispy salted golden potato fries served hot with tomato ketchup.",
    hasSizes: true,
    sizes: [
      { name: "Regular", label: "Regular Portion", price: 120 },
      { name: "Large", label: "Large Sharing", price: 160 }
    ],
    defaultPrice: 120,
    isFeatured: true,
    badge: "Crunchy"
  },
  {
    id: "garlic-bread",
    name: "Garlic Bread",
    category: "sides",
    categoryLabel: "Sides & Bites",
    image: "assets/images/menu/garlic-bread.jpg",
    description: "Toasted artisan bread slices brushed with garlic herb butter.",
    hasSizes: true,
    sizes: [
      { name: "Regular", label: "Classic Garlic Bread", price: 110 },
      { name: "Cheese", label: "With Melted Cheese", price: 150 }
    ],
    defaultPrice: 110,
    isFeatured: false,
    badge: "Oven Baked"
  },
  {
    id: "garlic-breadsticks",
    name: "Garlic Breadsticks",
    category: "sides",
    categoryLabel: "Sides & Bites",
    image: "assets/images/menu/garlic-breadsticks.jpg",
    description: "Freshly baked soft breadsticks served with savory garlic seasoning.",
    hasSizes: true,
    sizes: [
      { name: "Plain", label: "Breadsticks Only", price: 110 },
      { name: "Cheese Dip", label: "With Cheese Dip", price: 140 }
    ],
    defaultPrice: 110,
    isFeatured: false,
    badge: "Hot Dip"
  },
  {
    id: "veg-spring-rolls",
    name: "Vegetable Spring Rolls (4 pcs)",
    category: "sides",
    categoryLabel: "Sides & Bites",
    image: "assets/images/menu/veg-spring-rolls.jpg",
    description: "Crispy fried rolls stuffed with seasoned shredded vegetables.",
    hasSizes: false,
    defaultPrice: 120,
    isFeatured: false,
    badge: "Crispy"
  },
  {
    id: "veg-fried-momos",
    name: "Veg Fried Momos (8 pcs)",
    category: "sides",
    categoryLabel: "Sides & Bites",
    image: "assets/images/menu/veg-fried-momos.jpg",
    description: "Crisp fried vegetable dumplings served with spicy momo chutney.",
    hasSizes: false,
    defaultPrice: 170,
    isFeatured: true,
    badge: "Spicy Dip"
  },
  {
    id: "samosa",
    name: "Samosa (2 pcs)",
    category: "sides",
    categoryLabel: "Sides & Bites",
    image: "assets/images/menu/samosa.jpg",
    description: "Crispy fried pastry pockets stuffed with spiced potatoes and peas.",
    hasSizes: false,
    defaultPrice: 70,
    isFeatured: false,
    badge: "Desi Snack"
  },

  // ==================== 5. RICE & MEALS (4 items) ====================
  {
    id: "veg-biryani",
    name: "Veg Biryani",
    category: "meals",
    categoryLabel: "Rice & Meals",
    image: "assets/images/menu/veg-biryani.jpg",
    description: "Aromatic basmati rice cooked with mixed vegetables and whole spices.",
    hasSizes: true,
    sizes: [
      { name: "Half", label: "Half Portion", price: 220 },
      { name: "Full", label: "Full Portion", price: 380 }
    ],
    defaultPrice: 220,
    isFeatured: true,
    badge: "Dum Cooked"
  },
  {
    id: "dal-chawal",
    name: "Dal Chawal",
    category: "meals",
    categoryLabel: "Rice & Meals",
    image: "assets/images/menu/dal-chawal.jpg",
    description: "Yellow dal cooked with cumin and ghee, served with steamed rice.",
    hasSizes: true,
    sizes: [
      { name: "Regular", label: "Regular Portion", price: 150 },
      { name: "Special Thali", label: "Special Thali with Papad", price: 220 }
    ],
    defaultPrice: 150,
    isFeatured: false,
    badge: "Comfort Meal"
  },
  {
    id: "veg-fried-rice",
    name: "Veg Fried Rice",
    category: "meals",
    categoryLabel: "Rice & Meals",
    image: "assets/images/menu/veg-fried-rice.jpg",
    description: "Wok-tossed steamed rice cooked with mixed vegetables and soy sauce.",
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
    name: "Indian Veg Soup Vegetable",
    category: "meals",
    categoryLabel: "Rice & Meals",
    image: "assets/images/menu/indian-veg-soup.jpg",
    description: "Warm vegetable broth prepared with mixed greens and mild spices.",
    hasSizes: false,
    defaultPrice: 150,
    isFeatured: false,
    badge: "Warm Broth"
  },

  // ==================== 6. BEVERAGES (3 items) ====================
  {
    id: "indian-masala-tea",
    name: "Indian Masala Tea",
    category: "beverages",
    categoryLabel: "Beverages",
    image: "assets/images/menu/indian-masala-tea.jpg",
    description: "Freshly brewed milk tea boiled with ginger, cardamom, and spices.",
    hasSizes: true,
    sizes: [
      { name: "Cup", label: "Single Cup", price: 50 },
      { name: "Pot", label: "Tea Pot (Serves 2-3)", price: 90 }
    ],
    defaultPrice: 50,
    isFeatured: true,
    badge: "Fresh Brew"
  },
  {
    id: "apple-orange-juice",
    name: "Apple and Orange Juice",
    category: "beverages",
    categoryLabel: "Beverages",
    image: "assets/images/menu/apple-orange-juice.jpg",
    description: "Chilled blended juice made from fresh apples and sun-ripened oranges.",
    hasSizes: true,
    sizes: [
      { name: "Glass", label: "Regular Glass", price: 70 },
      { name: "Pitcher", label: "Juice Pitcher", price: 130 }
    ],
    defaultPrice: 70,
    isFeatured: false,
    badge: "Fresh Squeezed"
  },
  {
    id: "mango-juice",
    name: "Mango Juice",
    category: "beverages",
    categoryLabel: "Beverages",
    image: "assets/images/menu/mango-juice.jpg",
    description: "Thick chilled juice prepared from sweet ripe mango pulp.",
    hasSizes: true,
    sizes: [
      { name: "Glass", label: "Regular Glass", price: 70 },
      { name: "Pitcher", label: "Juice Pitcher", price: 130 }
    ],
    defaultPrice: 70,
    isFeatured: false,
    badge: "Seasonal"
  }
];

// Explicitly bind to window for global access across all browser scripts
if (typeof window !== "undefined") {
  window.RESTAURANT_INFO = RESTAURANT_INFO;
  window.MENU_CATEGORIES = MENU_CATEGORIES;
  window.MENU_ITEMS = MENU_ITEMS;
}

// Support CommonJS environment if needed
if (typeof module !== "undefined" && module.exports) {
  module.exports = { RESTAURANT_INFO, MENU_CATEGORIES, MENU_ITEMS };
}
