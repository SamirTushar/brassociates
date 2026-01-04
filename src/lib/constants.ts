// Contact Information - Loaded from environment variables
export const CONTACT_PHONE =
  process.env.NEXT_PUBLIC_CONTACT_PHONE || "+91-7767012533";
export const CONTACT_WHATSAPP =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917767012533";
export const WHATSAPP_LINK = `https://wa.me/${CONTACT_WHATSAPP}`;
export const PHONE_LINK = `tel:${CONTACT_PHONE}`;
export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@brassociates.in";
export const ADDRESS =
  process.env.NEXT_PUBLIC_ADDRESS || "Kothrud, Pune, Maharashtra";

// Firm Information
export const FIRM_NAME = "Bhakti Rajput & Associates";
export const TAGLINE = "Justice. Integrity. Results.";

// Colors (for reference)
export const COLORS = {
  primary: "#1e3a5f", // navy
  secondary: "#b8924c", // gold
  cream: "#f8f5f0",
  dark: "#2d2d2d",
  muted: "#6b7280",
} as const;
