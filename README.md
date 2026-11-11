# Diamonds Pizza Bakers – Official Restaurant Website

A professional, high-performance, responsive 4-page website for **Diamonds Pizza Bakers** located in Rajgarh, Churu, Rajasthan.

---

## 🍽️ Official Business Information

- **Business Name:** Diamonds Pizza Bakers
- **Address:** PILANI MOAD, NEAR SONI HOSPITAL KE PASS, RAJGARH, RAJGARH, CHURU, RAJASTHAN – 331023
- **Contact Number:** +91-7666351686
- **Email:** DiamondsPizzaBakers@gmail.com
- **FSSAI License No.:** `22224090005730`
- **BRN Registration No.:** `8004650013000049`
- **UDYAM Registration No.:** `UDYAM-RJ-11-0050968`

---

## 📂 Project Architecture

```
diamonds-pizza-bakers/
│
├── index.html                  # 1. Home Page (Brand presentation, hero, intro, Explore Menu CTA, Why Choose Us, Footer)
├── about.html                  # 2. About Page (Story, food passion, quality focus, verified registrations)
├── menu.html                   # 3. Menu Page (E-commerce-style cards, in-place category filters, live size & price calculation, WhatsApp ordering)
├── contact.html                # 4. Contact Page (Directory, Google Maps, "Create Your Own Custom Order" form)
│
├── css/
│   └── style.css               # Unified Design System (Oven Charcoal & Mozzarella Gold, responsive typography)
│
├── js/
│   ├── menu-data.js            # Centralized single source of truth for all menu items, portions, and prices
│   ├── menu.js                 # Dynamic menu renderer, in-place category filtering, dynamic price calculator
│   ├── whatsapp.js             # WhatsApp click-to-chat order and custom enquiry message generator
│   └── main.js                 # Sticky header behavior, mobile navigation drawer, form validation
│
└── assets/
    ├── logo/                   # Custom SVG brand logos, badge, and favicon
    └── images/                 # Real food photography from catalogue PDF + generated missing items
```

---

## 🍕 How WhatsApp Ordering Works

This website utilizes direct WhatsApp click-to-chat integration (`https://wa.me/917666351686`).

### 1. Regular Menu Ordering (from `menu.html`)
Customers select portion sizes (`Small`, `Medium`, `Large`) and quantities. Clicking **Order on WhatsApp** compiles the pre-filled message:

```text
Hello Diamonds Pizza Bakers!

I would like to order:

Product: [Product Name]
Size: [Selected Size, if applicable]
Quantity: [Selected Quantity]
Unit Price: ₹[Unit Price]
Total: ₹[Total Price]

Please confirm my order.
```

### 2. Custom Celebration & Party Orders (from `contact.html`)
Customers submit their custom requirements through the dedicated **Create Your Own Custom Order** form. Form inputs are validated and compiled into a structured enquiry for direct kitchen discussion.

---

## ➕ How to Add New Menu Items in the Future

All menu items are managed centrally in [`js/menu-data.js`](file:///c:/Users/bhavi/OneDrive/Documents/Diamonds/js/menu-data.js). To add a new product, append an object to `MENU_ITEMS`:

```javascript
{
  id: "my-new-pizza",
  name: "Tandoori Mushroom Pizza",
  category: "pizza",
  categoryLabel: "Specialty Pizzas",
  image: "assets/images/menu/my-new-pizza.jpg",
  description: "Marinated mushrooms with bell peppers and mozzarella.",
  hasSizes: true,
  sizes: [
    { name: "Small", label: "Small (S)", price: 150 },
    { name: "Medium", label: "Medium (M)", price: 200 },
    { name: "Large", label: "Large (L)", price: 270 }
  ],
  defaultPrice: 150,
  isFeatured: false,
  badge: "New"
}
```

The Menu page will render the new card, configure the size selectors, and calculate prices automatically.

---

## 🚀 Running & Deploying Locally

### Preview Locally in Browser
```powershell
Start-Process "index.html"
```

### Run a Local HTTP Server
```powershell
python -m http.server 8080
```
Then visit `http://localhost:8080`.

### Deploying to Production
This website is built entirely with semantic **HTML5**, **CSS3**, and **Vanilla JavaScript** with zero build tools or framework dependencies. You can upload the contents of this folder directly to any web host (GitHub Pages, Netlify, Vercel, Hostinger, AWS S3, or cPanel).

