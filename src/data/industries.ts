export interface Industry {
  id: string;
  name: string;
  icon: string;
  colorClass: string;
  badge: string;
  shortDescription: string;
  description: string;
  solutions: string[];
  keyProducts: string[];
}

export const industriesData: Industry[] = [
  {
    id: "pharma",
    name: "Pharma",
    icon: "medication",
    colorClass: "text-brand-red",
    badge: "21 CFR COMPLIANT",
    shortDescription: "Safe, clear labels for medicine bottles, vials, and tablet boxes.",
    description: "We make clean medicine labels with safe adhesives. They stick firmly to small glass vials, medicine bottles, and cold storage boxes.",
    solutions: [
      "Safe, low-migration glue approved for medicine packaging",
      "Cold-storage labels that stick down to -196°C",
      "Peel-and-reveal labels with extra space for instructions",
      "Tamper-proof box seals and clear 2D barcode codes"
    ],
    keyProducts: ["Pharmacy Labels", "Hologram & Security Labels", "Thermal Transfer Ribbons"]
  },
  {
    id: "retail",
    name: "Retail",
    icon: "shopping_bag",
    colorClass: "text-brand-green",
    badge: "HIGH VOLUME",
    shortDescription: "Barcode rolls, price stickers, and cash counter receipt rolls.",
    description: "We supply supermarkets, department stores, and shops with fast-printing receipt rolls, price tags, and barcode carton stickers.",
    solutions: [
      "BPA-free thermal paper rolls for cash billing",
      "Removable price stickers that leave no glue marks",
      "Strong barcode rolls for shipping boxes and inventory",
      "Bright fluorescent stickers for sales and discounts"
    ],
    keyProducts: ["Barcode Labels", "POS Thermal Billing Rolls", "A4 Sheet Labels"]
  },
  {
    id: "food",
    name: "Food",
    icon: "restaurant",
    colorClass: "text-brand-navy",
    badge: "FOOD GRADE",
    shortDescription: "Labels for food jars, bottles, pouches, and frozen items.",
    description: "Our food labels stay bright and sticky in refrigerators, freezers, and kitchens. Water and cooking oils will not wash the ink away.",
    solutions: [
      "Freezer glue that stays stuck down to -40°C",
      "Protective coating that repels water and cooking oils",
      "Clear see-through stickers for glass jars",
      "Weighing scale label rolls for bakery and grocery counters"
    ],
    keyProducts: ["Product Labels", "Barcode Labels", "A4 Label Sheets"]
  },
  {
    id: "bottling",
    name: "Bottling",
    icon: "liquor",
    colorClass: "text-brand-red",
    badge: "PREMIUM FINISH",
    shortDescription: "Labels for glass bottles, juice containers, and beverages.",
    description: "We make bottle labels that look great and stick tightly. They will not peel off when wet with condensation or soaked in cold ice buckets.",
    solutions: [
      "Water-resistant papers and clear plastic films",
      "Shiny gold, silver, and metallic foil finishes",
      "Raised clear varnish for a premium feel",
      "Strong glue that wraps tightly around curved glass"
    ],
    keyProducts: ["Multi-Color Product Labels", "Foil Labels", "Hologram Security Labels"]
  },
  {
    id: "chemicals",
    name: "Chemicals",
    icon: "science",
    colorClass: "text-brand-green",
    badge: "BS 5609 RATED",
    shortDescription: "Tough synthetic labels that resist oils, chemicals, and sunlight.",
    description: "Our heavy-duty synthetic labels are made for chemical drums, motor oil cans, and cleaning products. The printing stays sharp even around solvents.",
    solutions: [
      "Tear-proof plastic and polyester label stocks",
      "Chemical-resistant and scratch-proof resin printing",
      "Extra-strong glue made for rough plastic drums",
      "Standard warning diamond labels for hazardous items"
    ],
    keyProducts: ["Industrial Labels", "Barcode Labels", "Thermal Transfer Ribbons"]
  },
  {
    id: "diamonds",
    name: "Diamonds",
    icon: "diamond",
    colorClass: "text-brand-navy",
    badge: "MICRO-PRECISION",
    shortDescription: "Tear-proof tags and micro-barcodes for diamond packets and stones.",
    description: "We make tiny, tear-proof tags for diamond traders in Surat and around the world. Print clear carat weight, clarity, and certificate numbers.",
    solutions: [
      "Tough synthetic film that never tears during handling",
      "Micro 2D QR codes and barcodes for quick scanning",
      "Glue-free center stems that protect precious stones",
      "Clear black print that will not smudge or smear"
    ],
    keyProducts: ["Jewellery & Rat-Tail Tags", "Diamond Labels", "Thermal Transfer Ribbons"]
  },
  {
    id: "textiles",
    name: "Textiles",
    icon: "styler",
    colorClass: "text-brand-red",
    badge: "WASH RESISTANT",
    shortDescription: "Clothing price tags, wash care labels, and brand ribbons.",
    description: "We supply garment makers and fashion brands with cloth care labels, satin ribbons, and thick card swing tags.",
    solutions: [
      "Soft nylon taffeta and satin ribbon rolls",
      "Wash-proof inks that stay clear in hot water washes",
      "Thick card swing tags with custom hole punching",
      "Smooth cut edges that feel soft on the skin"
    ],
    keyProducts: ["Textile Tags & Garment Labels", "Colour Patch Rolls", "Product Tags"]
  },
  {
    id: "jewellery",
    name: "Jewellery",
    icon: "watch",
    colorClass: "text-brand-green",
    badge: "ZERO RESIDUE",
    shortDescription: "Glue-free center tags for gold, silver, and luxury watches.",
    description: "Our jewelry tags keep precious metals clean. The non-sticky center section leaves no glue residue on rings, necklaces, or watches.",
    solutions: [
      "Non-sticky center stems that protect gold and silver",
      "Shiny silver, gold, and clean white tag finishes",
      "Tear-proof material that will not break by accident",
      "Works with standard jewelry inventory software"
    ],
    keyProducts: ["Jewellery & Rat-Tail Tags", "Diamond Labels", "Specialty Security Labels"]
  }
];
