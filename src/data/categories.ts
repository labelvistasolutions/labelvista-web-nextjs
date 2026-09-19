export interface Category {
  id: string;
  slug: string;
  name: string;
  badge: string;
  badgeType: "navy" | "red" | "green";
  shortDescription: string;
  description: string;
  icon: string;
}

export const productCategories: Category[] = [
  {
    id: "barcode-labels",
    slug: "barcode-labels",
    name: "Barcode & Logistics",
    badge: "ROLL FORM",
    badgeType: "navy",
    shortDescription: "Thermal transfer & direct thermal barcode rolls for flawless scanning accuracy.",
    description: "Engineered barcode labels designed for supply chain tracking, retail POS systems, warehouse inventory management, and automated logistics.",
    icon: "qr_code_2",
  },
  {
    id: "product-labels",
    slug: "product-labels",
    name: "Packaging & Branding",
    badge: "MULTI-COLOR",
    badgeType: "green",
    shortDescription: "Vibrant multi-color branding labels with protective gloss or matte varnish.",
    description: "Premium prime packaging labels featuring vibrant 6-color flexo UV printing, gloss/matte lamination, and moisture-resistant adhesives.",
    icon: "label",
  },
  {
    id: "jewellery-tags",
    slug: "jewellery-tags",
    name: "Jewellery & Tags",
    badge: "TEAR RESISTANT",
    badgeType: "navy",
    shortDescription: "High-tear non-adhesive and adhesive tags with rat-tail and barbell profiles.",
    description: "Specialized synthetic films and durable papers engineered for fine jewellery, watches, optical frames, apparel, and luxury product presentation.",
    icon: "diamond",
  },
  {
    id: "a4-sheet-labels",
    slug: "a4-sheet-labels",
    name: "A4 Sheet Stock",
    badge: "SHEET STOCK",
    badgeType: "green",
    shortDescription: "Precision laser and inkjet compatible universal die-cut label sheets.",
    description: "Universal multipurpose A4 self-adhesive sheets with permanent adhesive grip, available in Chromo, Fluorescent, and Transparent finishes.",
    icon: "layers",
  },
  {
    id: "thermal-products",
    slug: "thermal-products",
    name: "Thermal Paper & Ribbons",
    badge: "THERMAL GRADE",
    badgeType: "navy",
    shortDescription: "Premium POS billing, receipt rolls, ATM rolls, and Dymo-compatible media.",
    description: "High-sensitivity thermal paper rolls and ribbons designed for clean, high-contrast, long-lasting thermal printing without head wear.",
    icon: "receipt_long",
  },
  {
    id: "specialty-security",
    slug: "specialty-security",
    name: "Security & Brand Protection",
    badge: "TAMPER EVIDENT",
    badgeType: "red",
    shortDescription: "Tamper-evident void films, holographic foils, and high-tack industrial substrates.",
    description: "High-security brand protection solutions including holographic foil stamping, void-pattern adhesive transfer, and extreme-environment substrates.",
    icon: "security",
  },
  {
    id: "raw-papers-films",
    slug: "raw-papers-films",
    name: "Raw Substrates & Films",
    badge: "CONVERTING STOCK",
    badgeType: "navy",
    shortDescription: "Stock load papers, plastic polyester films, and specialized gumming tapes.",
    description: "Jumbo reels and converted stock rolls of pressure-sensitive face-papers, release liners, and transparent protective laminates.",
    icon: "tune",
  },
  {
    id: "hardware-trading",
    slug: "hardware-trading",
    name: "Barcode Hardware & Equipment",
    badge: "TRADING & GEAR",
    badgeType: "navy",
    shortDescription: "Barcode printers, scanners, mobile handheld terminals, and Dymo machines.",
    description: "Complete automated barcode hardware, handheld laser and 2D QR scanners, industrial mobile terminals, and desktop thermal printers.",
    icon: "print",
  }
];
