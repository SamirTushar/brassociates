// Contact Information - Loaded from environment variables
export const CONTACT_PHONE =
  process.env.NEXT_PUBLIC_CONTACT_PHONE || "+91-7066481275";
export const CONTACT_WHATSAPP =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917066481275";
export const WHATSAPP_LINK = `https://wa.me/${CONTACT_WHATSAPP}`;
export const PHONE_LINK = `tel:${CONTACT_PHONE}`;
export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "adv.bhaktirajput@gmail.com";
export const ADDRESS =
  process.env.NEXT_PUBLIC_ADDRESS || "Flat No 02, Ground Floor, Ayodhya House, Sant Dnyaneshwar Colony, Warje, Pune – 411052, Maharashtra, India";

// Firm Information
export const FIRM_NAME = "Adv. Bhakti Rajput & Associates";
export const TAGLINE = "Trusted Legal Solutions for Family Law, Civil Matters, Criminal Defense, and Legal Documentation";

// Colors (for reference)
export const COLORS = {
  primary: "#1e3a5f", // navy
  secondary: "#b8924c", // gold
  cream: "#f8f5f0",
  dark: "#2d2d2d",
  muted: "#6b7280",
} as const;
