/**
 * Diamonds Pizza Bakers - WhatsApp Direct Ordering Engine
 * Restaurant Phone: +91-7666351686
 */

const WHATSAPP_PHONE = "917666351686";

/**
 * Builds standard WhatsApp click-to-chat URL
 * Compatible with mobile app, desktop app, and WhatsApp Web
 */
function createWhatsAppUrl(message) {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`;
}

/**
 * Generates regular menu product order WhatsApp message and opens WhatsApp
 * Required format:
 * Hello Diamonds Pizza Bakers, I would like to order:
 * - Product: [Product Name]
 * - Size: [Selected Size, if applicable]
 * - Quantity: [Selected Quantity]
 * - Price: ₹[Total Price]
 * 
 * Please confirm my order.
 * 
 * @param {Object} order
 * @param {string} order.productName
 * @param {string} [order.size] - e.g. "Small", "Medium", "Large", or null
 * @param {number} order.quantity
 * @param {number} order.unitPrice
 * @param {number} order.totalPrice
 */
function sendProductOrder({ productName, size, quantity, unitPrice, totalPrice }) {
  const lines = [
    "Hello Diamonds Pizza Bakers, I would like to order:",
    `- Product: ${productName}`
  ];

  if (size && size.trim() !== "") {
    lines.push(`- Size: ${size}`);
  }

  lines.push(`- Quantity: ${quantity}`);
  lines.push(`- Price: ₹${totalPrice}`);
  lines.push("");
  lines.push("Please confirm my order.");

  const message = lines.join("\n");
  const url = createWhatsAppUrl(message);
  window.open(url, "_blank", "noopener,noreferrer");
}

/**
 * Generates custom order WhatsApp message from contact/catering form
 * @param {Object} data
 */
function sendCustomOrder(data) {
  const lines = [
    "Hello Diamonds Pizza Bakers, I would like to place a custom order / enquiry:",
    `- Customer Name: ${data.customerName || "Customer"}`,
    `- Mobile Number: ${data.mobileNumber || data.phone || "Not specified"}`,
    `- Food Item / Order: ${data.customOrder || data.selectedItems || "Custom Order"}`,
    `- Customisation Details: ${data.details || data.notes || "Standard preparation"}`,
    `- Quantity / People: ${data.quantity || data.guestCount || "1"}`
  ];

  if (data.preferredSize && data.preferredSize.trim() !== "") {
    lines.push(`- Preferred Size: ${data.preferredSize}`);
  }
  if (data.preferredDate && data.preferredDate.trim() !== "") {
    lines.push(`- Preferred Date: ${data.preferredDate}`);
  }
  if (data.preferredTime && data.preferredTime.trim() !== "") {
    lines.push(`- Preferred Time: ${data.preferredTime}`);
  }
  if (data.budget && data.budget.trim() !== "") {
    lines.push(`- Estimated Budget: ${data.budget}`);
  }
  if (data.instructions && data.instructions.trim() !== "") {
    lines.push(`- Additional Instructions: ${data.instructions}`);
  }

  lines.push("");
  lines.push("Please confirm availability and details.");

  const message = lines.join("\n");
  const url = createWhatsAppUrl(message);
  window.open(url, "_blank", "noopener,noreferrer");
}

// Bind to window for global browser access
if (typeof window !== "undefined") {
  window.WHATSAPP_PHONE = WHATSAPP_PHONE;
  window.createWhatsAppUrl = createWhatsAppUrl;
  window.sendProductOrder = sendProductOrder;
  window.sendCustomOrder = sendCustomOrder;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { WHATSAPP_PHONE, createWhatsAppUrl, sendProductOrder, sendCustomOrder };
}
