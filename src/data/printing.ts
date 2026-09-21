export interface PrintingCapability {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: "navy" | "green" | "red";
  description: string;
  machinery: string;
  highlights: string[];
  image: string;
  imageAlt: string;
}

export const printingCapabilities: PrintingCapability[] = [
  {
    id: "flexo-uv",
    title: "6-Color Flexo UV & Varnish Printing",
    subtitle: "High-Speed Roll Printing",
    badge: "ROTARY FLEXO",
    badgeColor: "navy",
    description: "Our 6-color flexo UV machines print bright colors and sharp details. An in-line varnish adds a protective clear coat that shields against water, scratches, and oils.",
    machinery: "6-Color Flexo UV Press with Rotary Cutting & In-Line Varnish",
    highlights: [
      "Sharp text, clear pictures, and smooth color blends",
      "UV inks dry instantly to prevent any ink smudging",
      "Options for shiny foil, lamination, and back-side printing",
      "Exact cutting control with ±0.05 mm accuracy"
    ],
    image: "/images/printing/flexo-uv-press.jpg",
    imageAlt: "High-tech multi-station industrial flexographic UV label printing press operating at high speed"
  },
  {
    id: "flat-belt",
    title: "2-Color & 4-Color Flat Belt Printing",
    subtitle: "Industrial & Barcode Printing",
    badge: "FLAT BELT",
    badgeColor: "green",
    description: "Our flat belt printing machines handle thick tags, shipping labels, and industrial stocks that need dark, heavy ink coverage on different papers.",
    machinery: "2-Color & 4-Color Flat Belt Printing Machines",
    highlights: [
      "Dark and solid ink coverage for easy barcode scanning",
      "Great for shipping carton labels and warning tags",
      "Works well on colored, fluorescent, and thick papers",
      "Affordable setup for medium and large orders"
    ],
    image: "/images/printing/flat-belt-press.jpg",
    imageAlt: "Precision 2-color and 4-color flat belt label printing press machinery in factory"
  },
  {
    id: "textile-printing",
    title: "Multi-Color Textile Tags & Garment Printing",
    subtitle: "Clothing Tags & Wash Labels",
    badge: "TEXTILE LINES",
    badgeColor: "navy",
    description: "We make printed hang tags, soft satin ribbons, and taffeta wash care labels for clothing brands. Our wash-proof inks stay clear even after repeated washing.",
    machinery: "Fabric Ribbon Presses & Multi-Color Tag Cutters",
    highlights: [
      "Clear care symbols and easy-to-read text in any language",
      "Smooth cut edges that do not scratch the skin",
      "Thick card tags with custom hole punching and strings",
      "Tested for colorfastness up to 90°C washing"
    ],
    image: "/images/printing/textile-press.jpg",
    imageAlt: "Industrial multi-color fabric ribbon and garment wash care label printing press"
  },
  {
    id: "security-hologram",
    title: "Hologram & Security Label Converting",
    subtitle: "Tamper Protection & Brand Safety",
    badge: "TAMPER PROOF",
    badgeColor: "red",
    description: "We make security labels with 2D/3D holograms, shiny foil stamps, and tamper-evident materials to protect products from fakes and unauthorized opening.",
    machinery: "Laser Hologram Application Unit & Tamper-Evident Converter",
    highlights: [
      "Bright shiny hologram patterns that are hard to copy",
      "Leaves a VOID pattern if someone tries to peel the sticker",
      "Supports serial numbers and QR codes for tracking",
      "Tamper-evident materials that tear upon removal"
    ],
    image: "/images/printing/security-hologram.jpg",
    imageAlt: "Tamper evident holographic security seal"
  }
];
