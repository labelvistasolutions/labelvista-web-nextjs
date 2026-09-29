/**
 * WhatsApp integration utilities for Labelvista Solutions
 * Uses the authentic WhatsApp contact number (+91 99096 50066)
 */

export const WHATSAPP_PHONE = "919909650066";

/**
 * Returns a WhatsApp click-to-chat URL with a pre-filled product enquiry message
 * Example: "Hello, I am interested in Barcode Labels & Barcode Printed Labels. Please share more details."
 */
export function getWhatsAppProductUrl(productName: string): string {
  const message = `Hello, I am interested in ${productName}. Please share more details.`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

/**
 * Returns a general WhatsApp click-to-chat URL
 */
export function getWhatsAppGeneralUrl(): string {
  const message = "Hello Labelvista, I would like to inquire about your printing labels and roll printing solutions.";
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
