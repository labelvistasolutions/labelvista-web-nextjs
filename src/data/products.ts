export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  name: string;
  categorySlug: string;
  categoryName: string;
  badge: string;
  badgeType: "navy" | "red" | "green";
  shortDescription: string;
  description: string;
  image: string;
  imageAlt: string;
  featured: boolean;
  applications: string[];
  customisationOptions: string[];
  features: string[];
  specifications: ProductSpecification[];
  a4Codes?: { code: string; size: string }[];
}

export const productsData: Product[] = [
  // 1. Barcode Labels & Barcode Printed Labels (COMBINED)
  {
    slug: "barcode-labels",
    name: "Barcode Labels & Barcode Printed Labels",
    categorySlug: "barcode-labels",
    categoryName: "Barcode & Logistics",
    badge: "ROLL FORM",
    badgeType: "navy",
    shortDescription: "Blank and pre-printed sequential barcode label rolls for inventory tracking, retail POS, and logistics.",
    description: "Comprehensive barcode label solutions including blank direct thermal / thermal transfer rolls and factory pre-printed sequential barcode rolls. Engineered for supply chain tracking, retail POS systems, warehouse inventory management, and automated logistics with 100% verified optical scan accuracy.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJx_wRv9CadNKsEagI6Uyy0TzooIxktua0iaHTCu7D8KkNQ4uaQwBHf2Q8SpTl1cjpEKX6XYVDYOitq1UpZnQ-BnTdrcpB8o9tsxYtNs5FbT81lff8Iduaqjy5tUrgrUIwybNDV-cMnisXg74qm5I8-T4kOQRGazcEkbY5GtNNbGMXBSYkvAQrEoGEKslu0BIVZitnYDtGh3yIKrdFC1k9GKLlvERafAFR51TQyjFxkJW0-95jLPNr",
    imageAlt: "High quality blank and pre-printed barcode label rolls with sharp barcodes",
    featured: true,
    applications: [
      "Retail store price tags, SKU codes, and cash counter automated checkout",
      "Warehouse pallet tracking, shipping carton labels, and bin location codes",
      "Sequential serial numbering for asset tracking and warranty verification",
      "Healthcare patient wristbands, medicine bottles, and laboratory sample tubes"
    ],
    customisationOptions: [
      "Form: Blank rolls for on-demand printing or factory pre-printed sequential codes",
      "Symbologies: Code 128, Code 39, EAN-13, UPC-A, 2D QR Code, DataMatrix",
      "Roll Cores: 25mm (1\"), 40mm (1.5\"), or 76mm (3\") industrial core spools",
      "Paper Types: Semi-gloss Chromo paper, Direct Thermal paper, Synthetic BoPP film"
    ],
    features: [
      "High Scanning Accuracy: Crisp edge contrast for instant first-pass barcode scanning",
      "Jam-Free Feeding: Precision rotary die-cut edges prevent printer head jams",
      "Strong Permanent Gumming: Reliable bond on corrugated cardboard, plastic, and metal",
      "Smudge-Proof Resin Inks: Resists rubbing, chemical exposure, and sunlight"
    ],
    specifications: [
      { label: "Printing Process", value: "Direct Thermal / Thermal Transfer / Pre-Printed UV" },
      { label: "Barcode Standards", value: "Code 128, Code 39, EAN-13, QR Code, DataMatrix" },
      { label: "Substrates Available", value: "Chromo Paper, Direct Thermal, Synthetic Film" },
      { label: "Adhesive Grip", value: "Permanent Strong Glue, Removable, Deep Freeze" },
      { label: "Core Dimensions", value: "25mm, 40mm, 76mm Industrial Cores" },
      { label: "Manufacturing Base", value: "Surat, Gujarat, India" }
    ]
  },

  // 2. Multi Color Product Labels
  {
    slug: "product-labels",
    name: "Multi Color Product Labels",
    categorySlug: "product-labels",
    categoryName: "Packaging & Branding",
    badge: "6-COLOR FLEXO",
    badgeType: "green",
    shortDescription: "Vibrant prime product packaging labels with protective gloss or matte varnish.",
    description: "Custom printed prime packaging labels produced on 6-color flexo UV rotary presses. Designed for bottles, jars, pouches, and cans with high color saturation and moisture-resistant adhesives.",
    image: "/images/products/product-labels.jpg",
    imageAlt: "Vibrant custom multi-color printed prime product packaging labels",
    featured: true,
    applications: [
      "Food jars, snack pouches, spice containers, and edible oil cans",
      "Motor oil bottles, lubricants, and automotive chemical containers",
      "Beverage bottles, mineral water, fruit juices, and beer bottles",
      "Personal care, shampoo, body lotion, and cosmetic jars"
    ],
    customisationOptions: [
      "Substrates: Gloss Chromo Paper, White BoPP, Transparent Film, Vinyl",
      "Finishing: Gloss UV Varnish, Satin Matte Varnish, Soft Touch",
      "Shapes: Custom die-cut contours, round, oval, wrap-around"
    ],
    features: [
      "Vibrant 6-Color UV Print: High-fidelity photo reproduction and rich brand colors",
      "Protective In-Line Varnish: Shields inks from moisture, friction, and spills",
      "Strong Adhesion: Bonds firmly on glass, HDPE, PET, and cardboard surfaces",
      "Roll Format for Automatic Applicators: Optimized for high-speed labeling machines"
    ],
    specifications: [
      { label: "Printing Machinery", value: "6-Color Flexo UV with In-Line Rotary Varnish" },
      { label: "Substrate Types", value: "Chromo, Synthetic BoPP, PE, Clear Polyester" },
      { label: "Surface Protection", value: "Full UV Gloss Varnish / Matte Lamination" },
      { label: "Registration Accuracy", value: "±0.05 mm Optical Registration" }
    ]
  },

  // 3. Ultra Violet (UV) Labels
  {
    slug: "ultra-violet-labels",
    name: "Ultra Violet (UV) Labels",
    categorySlug: "product-labels",
    categoryName: "Packaging & Branding",
    badge: "UV CURED",
    badgeType: "green",
    shortDescription: "UV-cured, fade-resistant labels engineered for outdoor durability and chemical resistance.",
    description: "Ultra Violet cured labels engineered for harsh outdoor environments, chemical storage, and sunny retail displays. UV inks dry instantaneously under UV light, forming a tough cross-linked polymer layer that prevents fading, scuffing, and chemical degradation.",
    image: "/images/products/product-labels.jpg",
    imageAlt: "High-gloss UV cured protective labels for industrial and outdoor applications",
    featured: false,
    applications: [
      "Outdoor agricultural equipment, chemical drums, and fertilizer sacks",
      "Automotive battery casings and engine compartment labels",
      "Sunlight-exposed storefront products and garden supplies",
      "Industrial machinery identification and rating plates"
    ],
    customisationOptions: [
      "UV Coatings: High-Gloss UV, Matte UV, and Chemical-Resistant Barrier Coat",
      "Films: Weatherproof Polyester (PET) and Vinyl (PVC)",
      "Adhesives: Ultra-high tack solvent acrylic for textured plastic and powder coats"
    ],
    features: [
      "Zero UV Fading: Inks resist sunlight yellowing and degradation",
      "Instant Drying: Eliminates ink bleeding and smudging completely",
      "Chemical & Oil Resistance: Resists oils, grease, brake fluid, and detergents"
    ],
    specifications: [
      { label: "Curing Method", value: "High-Intensity UV Polymerization" },
      { label: "Weather Resistance", value: "Outdoor UV Stable up to 3 Years" },
      { label: "Substrate Base", value: "Heavy-Duty Vinyl / Top-Coated Polyester" }
    ]
  },

  // 4. Pharmacy & Healthcare Labels
  {
    slug: "pharmacy-labels",
    name: "Pharmacy Labels",
    categorySlug: "product-labels",
    categoryName: "Packaging & Branding",
    badge: "PHARMA GRADE",
    badgeType: "green",
    shortDescription: "Precision medicine bottle labels, syrup labels, and prescription drug packaging.",
    description: "Pharmaceutical labels engineered for medicine bottles, syrup glass containers, pill jars, and ointment tubes. Features crisp micro-text printing for batch codes, expiry dates, dosage instructions, and regulatory compliance.",
    image: "/images/products/pharmacy-labels.jpg",
    imageAlt: "Pharmaceutical medicine bottles, cough syrups and supplement pill jars with printed labels",
    featured: false,
    applications: [
      "Cough mixture, tonic, and syrup glass and PET bottles",
      "Prescription pill containers, capsule bottles, and vitamin jars",
      "Diagnostic sample tubes, test vials, and clinical reagent bottles",
      "Hospital pharmacy dispensary instruction labels"
    ],
    customisationOptions: [
      "Materials: Moisture-resistant Chromo, Synthetic PP, and Clear BoPP",
      "Finishing: Alcohol-resistant varnish and anti-smudge laminations",
      "Shapes: Curved wrap-around labels and tamper-evident cap seals"
    ],
    features: [
      "Alcohol & Moisture Resistant: Inks and varnish resist chemical spills",
      "Ultra-Sharp Micro Text: Clear legibility for tiny dosage instructions and barcodes",
      "Pharma-Safe Acrylic Gumming: Non-toxic adhesive safe for indirect medical packaging",
      "Strong Curvature Grip: Will not lift or flag on small diameter vials"
    ],
    specifications: [
      { label: "Standard Category", value: "Healthcare & Pharmaceutical Labelling" },
      { label: "Substrates", value: "Medical Grade Chromo, Top-Coated BoPP Film" },
      { label: "Adhesive Type", value: "Pharma-Safe Permanent Acrylic Gumming" },
      { label: "Printing Process", value: "6-Color UV Flexo with In-Line Protective Varnish" }
    ]
  },

  // 5. Foil Labels
  {
    slug: "foil-labels",
    name: "Foil Labels",
    categorySlug: "product-labels",
    categoryName: "Packaging & Branding",
    badge: "METALLIC FOIL",
    badgeType: "red",
    shortDescription: "Hot and cold metallic gold and silver foil stamped labels for luxury cosmetics and beverages.",
    description: "Brilliant metallic gold, silver, and holographic foil stamped labels. Designed to create premium shelf appeal for luxury perfumes, high-end cosmetic jars, boutique liquor bottles, and gourmet foods.",
    image: "/images/products/foil-labels.jpg",
    imageAlt: "Luxury perfume bottles and cosmetic cream jars with shimmering gold and silver foil embossed roll labels",
    featured: false,
    applications: [
      "Luxury perfumes, colognes, and essential oil glass bottles",
      "Premium cosmetics, night creams, and beauty serum jars",
      "Boutique spirits, craft wine, and artisanal beverage bottles",
      "Gourmet chocolates, gift confectionary, and luxury hampers"
    ],
    customisationOptions: [
      "Foil Types: Bright Gold, Matte Gold, Mirror Silver, Rose Gold, Holographic Foil",
      "Embossing: Multi-level 3D embossing and debossing contours",
      "Base Stocks: Textured linen paper, metallized BoPP, and velvet touch films"
    ],
    features: [
      "Luxury Visual Impact: Radiant reflective metallic finish commands attention",
      "Tactile Texture: Deep embossed contours create a premium feel in hand",
      "Durable Lamination: Resists essential oils, perfumes, and surface scuffing",
      "Precision Optical Alignment: Exact registration between print and foil layers"
    ],
    specifications: [
      { label: "Embellishment", value: "Hot Foil Stamping & 3D Embossing" },
      { label: "Foil Shades", value: "Rich Gold, Silver, Copper, Holographic Foil" },
      { label: "Base Substrates", value: "Textured Estate Paper, Metallized BoPP, Clear PET" },
      { label: "Production Line", value: "High-Speed Rotary Foil Unit & Flexo Press" }
    ]
  },

  // 6. Colour Patch Rolls & Self-Adhesive Round Labels (COMBINED)
  {
    slug: "colour-patch-rolls",
    name: "Colour Patch Rolls & Self-Adhesive Round Labels",
    categorySlug: "product-labels",
    categoryName: "Packaging & Branding",
    badge: "COLOUR DOTS",
    badgeType: "green",
    shortDescription: "Vibrant solid color rolls and circular self-adhesive dot stickers in red, green, blue, and yellow.",
    description: "Complete solid color labeling solutions combining continuous dyed fabric/paper rolls and precision die-cut self-adhesive round dot stickers. Extensively used for quality control inspection marking, garment accenting, document priority filing, and packaging identification.",
    image: "/images/products/colour-patch-rolls.jpg",
    imageAlt: "Vibrant solid color patch rolls and self-adhesive round dot color stickers",
    featured: false,
    applications: [
      "Quality control inspection passing, testing dots, and calibration status",
      "Document filing, priority color-coding, and office folder indexing",
      "Clothing trim, garment tags, collar accents, and textile labeling",
      "Retail sale discount pricing circles and box color-marking"
    ],
    customisationOptions: [
      "Format: Continuous roll ribbons or pre-die-cut round dot sheets/rolls",
      "Diameters: 10mm, 15mm, 19mm (3/4\"), 25mm (1\"), 50mm (2\") circular cuts",
      "Materials: Satin ribbon, cotton fabric, Chromo paper, fluorescent film",
      "Colors: Vibrant primary red, green, royal blue, yellow, and custom shades"
    ],
    features: [
      "Even Solid Color: High-pigment dyes coated evenly across the entire surface",
      "Easy Circular Peel: Matrix kiss-cut enables quick hand peeling without tearing",
      "Strong Stickiness: Bonds reliably to paper, plastic, textiles, and metal"
    ],
    specifications: [
      { label: "Delivery Format", value: "Continuous Rolls & Die-Cut Round Sheets" },
      { label: "Materials", value: "Satin, Cotton, Chromo Paper, Fluorescent" },
      { label: "Standard Sizes", value: "10mm, 15mm, 19mm, 25mm, 50mm / Custom Widths" },
      { label: "Adhesive Grip", value: "Self-Adhesive Strong Gumming Grip" }
    ]
  },

  // 7. Taffeta Printed – Non Printed Labels (COMBINED)
  {
    slug: "taffeta-printed-labels",
    name: "Taffeta Printed – Non Printed Labels",
    categorySlug: "product-labels",
    categoryName: "Packaging & Branding",
    badge: "WASH CARE",
    badgeType: "green",
    shortDescription: "Custom printed wash care labels and blank nylon taffeta fabric ribbon rolls for apparel.",
    description: "Comprehensive textile labeling solutions offering both factory multi-color printed wash care labels and continuous blank nylon taffeta fabric rolls for on-demand thermal barcode printing. Engineered to endure repeated domestic and industrial laundering up to 90°C without fading or fraying.",
    image: "/images/products/textile-tags-labels.jpg",
    imageAlt: "Taffeta printed and non-printed fabric wash care clothing labels and ribbon rolls",
    featured: false,
    applications: [
      "Garment side-seam wash care instructions and fiber composition tags",
      "Clothing brand logo labels, neck tags, and size indicators",
      "Bed linens, home textiles, towels, and mattress certification labels",
      "In-house on-demand barcode and care label printing in apparel factories"
    ],
    customisationOptions: [
      "Options: Factory multi-color printed or blank rolls for thermal printers",
      "Fabrics: Coated Nylon Taffeta, Soft Satin, Woven Polyester Ribbon",
      "Widths: 20mm, 25mm, 30mm, 35mm, 40mm, 50mm slit widths",
      "Cutting: Ultrasonic cut, heat-sealed cut, or continuous spool"
    ],
    features: [
      "90°C Wash-Proof: Certified colorfast inks withstand hot water wash cycles",
      "Skin-Friendly Edges: Ultrasonic soft-slit edges prevent neck itching or scratching",
      "Thermal Transfer Ready: Blank rolls accept textile resin ribbons with sharp contrast"
    ],
    specifications: [
      { label: "Fabric Material", value: "100% Coated Polyamide Nylon Taffeta / Satin" },
      { label: "Wash Durability", value: "Certified Colorfast up to 90°C Washing" },
      { label: "Print Process", value: "Multi-Color UV Flexo / Thermal Resin Transfer" },
      { label: "Roll Cores", value: "25.4mm (1\") / 76.2mm (3\") Industrial Cores" }
    ]
  },

  // 8. Jewellery Tag Labels, Diamond & Garment Tags (COMBINED)
  {
    slug: "jewellery-tag-labels",
    name: "Jewellery Tag Labels, Diamond & Garment Tags",
    categorySlug: "jewellery-tags",
    categoryName: "Jewellery & Tags",
    badge: "TEAR RESISTANT",
    badgeType: "navy",
    shortDescription: "Glue-free shank jewelry tags, diamond packet labels, and luxury apparel swing tags.",
    description: "All-in-one jewelry and luxury merchandise tagging solution. Includes glue-free shank rat-tail and barbell jewelry tags, Surat-grade diamond sorting packet labels, and thick card garment swing tickets. Completely residue-free to protect gold, silver, and precious gems.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBiNfiFA0aedp615cEXrsUhSZ7k7lYV6VVGskusH6xy_6U9qyVaXSr0ol78K4inqa0gDOHpjj5HJHOytOe9wanAHT7BMDtZymSb2boYFlFCgxmTDRIGIDq8lAT5KEtzPOVdhoG92TlPK-yXt4qSDBdHGRAYmnsWQaNg7N1-eURZUoaepwCxKgR_VUYfx3pv8ZY34RPaHAqxXKL3UTKcWZQZl6NwFqcJxmI4DNi7RYA5gtbWNG_ulGIY",
    imageAlt: "Jewelry rat tail and dumbbell barbell tags for gold rings and diamond packets",
    featured: true,
    applications: [
      "Jewelry showcase presentation: Gold rings, diamond necklaces, earrings, bangles",
      "Certified loose diamond sorting parcels and precious gemstone vault packets",
      "Luxury watches, optical frames, and sunglasses retail pricing",
      "Designer fashion garments, apparel collections, and boutique clothing tags"
    ],
    customisationOptions: [
      "Shapes: Rat-tail profile, dumbbell barbell profile, fold-over packet seals, swing tags",
      "Colors: Pure White, Metallic Bright Silver, Gold Luster, Textured Kraft",
      "Pre-Printing: Custom jewelry store branding, diamond grading fields (Carat, Clarity, Cut)"
    ],
    features: [
      "100% Glue-Free Center Shank: Leaves zero adhesive residue on precious metals or gems",
      "Indestructible BoPET Film: Tough synthetic material will not tear during customer handling",
      "Ultrasonic Cleaner Proof: Remains intact inside chemical jewelry cleaning baths",
      "Micro-Barcode Accuracy: High-resolution thermal transfer barcode readability"
    ],
    specifications: [
      { label: "Material Composition", value: "Biaxially-Oriented Synthetic BoPET Film / Art Board" },
      { label: "Adhesive Characteristic", value: "Zonal Non-Stick Center Shank / Residue-Free" },
      { label: "Compatibility", value: "Thermal Transfer Barcode Printers (Resin Ribbon)" },
      { label: "Standard Colors", value: "White, Bright Silver, Gold, Kraft" }
    ]
  },

  // 9. Printed & Non-Printed Product Tags
  {
    slug: "printed-product-tags",
    name: "Printed & Non-Printed Product Tags",
    categorySlug: "jewellery-tags",
    categoryName: "Jewellery & Tags",
    badge: "SWING TAGS",
    badgeType: "navy",
    shortDescription: "Custom printed apparel hang tags and blank die-cut card swing tickets with strings.",
    description: "Thick card stock hang tags available custom printed with brand artwork or supplied blank for in-house stamping and pricing. Features precision die-cutting, metallic brass eyelets, and string cords for high-end retail presentation.",
    image: "/images/products/product-tags.jpg",
    imageAlt: "Printed and blank apparel swing tags in pastel pink, emerald green, and black card stock",
    featured: false,
    applications: [
      "Fashion apparel brands, denim, shirts, and designer garments",
      "Luggage, leather goods, footwear, and boutique merchandise",
      "Handmade crafts, gift items, and retail promotional pricing",
      "In-house price stamping and manual warehouse stock tagging"
    ],
    customisationOptions: [
      "Options: Full-color custom printed or blank card stock tags",
      "Stocks: Art Card (300-400 GSM), Kraft Board, Textured Linen, Synthetic",
      "Finishing: Matte Lamination, Spot UV, Gold Foil Stamping, Brass Eyelets"
    ],
    features: [
      "Stiff & Premium Board: Thick card will not bend or crease during showroom handling",
      "Radiant Multi-Color Print: Crisp graphics on single or both sides",
      "Ready to Hang: Pre-punched eyelets with optional cotton string cords"
    ],
    specifications: [
      { label: "Card Weight", value: "300 GSM to 450 GSM Art Board / Kraft" },
      { label: "Finishing", value: "Die-Cut, Eyelet Insertion, String Cord" },
      { label: "Printing Process", value: "Full Color Offset / Flexo Multi-Station" }
    ]
  },

  // 10. A4 Size Label Sheets
  {
    slug: "a4-sheet-labels",
    name: "A4 Size Label Sheets",
    categorySlug: "a4-sheet-labels",
    categoryName: "A4 Sheet Stock",
    badge: "SHEET STOCK",
    badgeType: "green",
    shortDescription: "Self-adhesive A4 label sheets in 23 universal die-cut layouts for laser and inkjet printers.",
    description: "Multipurpose A4 self-adhesive label sheets engineered for standard office laser printers, inkjet printers, and photocopiers. Available in 23 standard die-cut sizes with strong permanent gumming grip for parceling, shipping, file organization, and product labeling.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMptVX_mMcsmqcFUIeyWjFlkcO_2IQ8biu4XnrLPhAOs2fH5B5gPVbfpwV_HURgvIWOsGOUP5CjGz-H1ArBtXJS7lm359ynNkwVPw8BjUK6dOW8mS7uc1yUOOzdEKOzAZJDNvRAc0vyO26JkZrkuCUgG57YUzlO_eaBfyFAIhkP9inRbPnoJ23EomDtFpTnZHM3d-bckIV4wUTNR9W7Dfp3B_63eQdOaCDxlJWiNqeYVIobKUGl9EL",
    imageAlt: "Die-cut A4 self-adhesive sticker sheets fanned out on table",
    featured: true,
    applications: [
      "Product labeling on glass jars, bottles, cartons, and plastic boxes",
      "Mailing & shipping address labels for envelopes and courier parcels",
      "Office filing: Binder labels, folder spines, and storage box indexing",
      "Event name badges, visitor passes, and classroom stickers"
    ],
    customisationOptions: [
      "Paper Variations: Bright White Chromo, High-Visibility Fluorescent, Transparent",
      "Sheet Layouts: Available in 1 to 33 labels per A4 sheet (23 standard cuts)",
      "Pack Sizes: Retail packs of 100 sheets or wholesale carton packaging"
    ],
    features: [
      "Jam-Free Feeding: Lay-flat backing paper will not curl inside laser printers",
      "Good Gumming Grip: Permanent self-adhesive sticks securely to all surfaces",
      "Easy to Peel: Precision matrix kiss-cut enables quick peeling without tearing",
      "Universal Printer Compatibility: Laser, Inkjet, and Copier certified"
    ],
    specifications: [
      { label: "Sheet Dimensions", value: "210 mm × 297 mm (ISO A4 Standard)" },
      { label: "Paper Variations", value: "Chromo Paper, Fluorescent Colors, Transparent BoPP" },
      { label: "Adhesive Grip", value: "Self-Adhesive Permanent Gumming Grip" },
      { label: "Printer Compatibility", value: "Laser Printers, Inkjet Printers, Photocopiers" }
    ],
    a4Codes: [
      { code: "SWASIFI00S", size: "210 mm × 297 mm (1 label per sheet)" },
      { code: "SWASIG100S", size: "202 mm × 290 mm (1 label per sheet)" },
      { code: "SWALSOILI00S", size: "210 mm × 290 mm (1 label per sheet)" },
      { code: "SWALSOZLI00S", size: "199 mm × 145 mm (2 labels per sheet)" },
      { code: "SWALSZFIODS", size: "210 mm × 148.5 mm (2 labels per sheet)" },
      { code: "SWAS3FIODS", size: "210 mm × 96 mm (3 labels per sheet)" },
      { code: "SW-LSO4L100S", size: "99 mm × 146 mm (4 labels per sheet)" },
      { code: "SW-LSO4F100S", size: "105 mm × 148.5 mm (4 labels per sheet)" },
      { code: "SWASOSL100S", size: "100 mm × 56 mm (6 labels per sheet)" },
      { code: "SWASOGL100S", size: "100 mm × 54 mm (6 labels per sheet)" },
      { code: "SWASGF100S", size: "105 mm × 89 mm (6 labels per sheet)" },
      { code: "SWALSO5L100S", size: "100 mm × 72 mm (8 labels per sheet)" },
      { code: "SWASTOL100S", size: "100 mm × 58 mm (10 labels per sheet)" },
      { code: "SWAS12L100S", size: "99 mm × 45 mm (12 labels per sheet)" },
      { code: "SWLS14L100S", size: "99.6 mm × 38.4 mm (14 labels per sheet)" },
      { code: "SWALS16L100S", size: "100 mm × 38 mm (16 labels per sheet)" },
      { code: "SWAS16L100S", size: "100 mm × 34 mm (16 labels per sheet)" },
      { code: "SWAS18L100S", size: "63.5 mm × 46.6 mm (18 labels per sheet)" },
      { code: "SW-LS20L100S", size: "98 mm × 21 mm (20 labels per sheet)" },
      { code: "SW-LS22L100S", size: "74 mm × 38 mm (22 labels per sheet)" },
      { code: "SW-LS24L100S", size: "63 mm × 34 mm (24 labels per sheet)" },
      { code: "SW-LS25L100S", size: "38 mm × 75 mm (25 labels per sheet)" },
      { code: "SW-LS30L100S", size: "67 mm × 25 mm (30 labels per sheet)" },
      { code: "SW-LS33L100S", size: "68 mm × 25.40 mm (33 labels per sheet)" }
    ]
  },

  // 11. POS Thermal Billing Rolls
  {
    slug: "pos-thermal-billing-rolls",
    name: "POS Thermal Billing Rolls",
    categorySlug: "thermal-products",
    categoryName: "Thermal Paper & Ribbons",
    badge: "POS ROLLS",
    badgeType: "navy",
    shortDescription: "High-sensitivity thermal paper receipt rolls for retail cash registers and billing machines.",
    description: "Premium lint-free direct thermal paper rolls engineered for retail POS counters, billing printers, and credit card swipe machines. Produces dark, sharp black text and barcodes instantly without ink or ribbon.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsddaBtYnge5s3gUVNfkz4rpcmd5fp_sgEhtZa4y1p8dNDaA5TFJDu0zDQRSLzocA8jQmSPmw1LKyoJsVIo0w1RDhQUsLUSjuNFBWj7FG01YXvx0L83g-20utOMTSC7U0PIj29XPEuouvQ41XKSzM7GtZyssXBCzMc4cQ0JSXEvwRk2d1txMyjK3NrECbNmyGNLSVM44duO21MOuHiuOjOGHjo2jZlXZdd9vp9KIZVrSHPGaE1gTkx",
    imageAlt: "Smooth thermal paper receipt rolls and POS billing rolls in warehouse",
    featured: true,
    applications: [
      "Supermarket and retail checkout counter receipt printers",
      "Restaurant kitchen order tickets and customer billing bills",
      "Credit card POS swipe terminals and wireless payment machines",
      "Toll plazas, parking meters, and ticketing kiosks"
    ],
    customisationOptions: [
      "Widths: 79mm (3\"), 57mm (2\"), 80mm, and custom slit widths",
      "Roll Lengths: 15m, 25m, 50m, 80m standard windings",
      "Custom Printing: Pre-printed store logo or return policy on back side",
      "Cores: Plastic core or cardboard core options"
    ],
    features: [
      "Deep Black Image: High-contrast thermal coating for sharp legibility",
      "Printhead Protection: Smooth dust-free paper protects thermal print heads",
      "End-of-Roll Red Warning: Red indicator line signals when roll needs changing",
      "Long Legibility: Images remain legible for years under normal storage"
    ],
    specifications: [
      { label: "Paper Grade", value: "High Sensitivity Top-Coated Thermal Paper" },
      { label: "Standard Sizes", value: "79mm × 50m, 57mm × 15m, 57mm × 25m, 80mm × 80m" },
      { label: "Core Types", value: "Plastic Core / Cardboard Core" },
      { label: "Printhead Wear", value: "Low Abrasive Printhead-Safe Formulation" }
    ]
  },

  // 12. POS Thermal ATM Rolls
  {
    slug: "pos-thermal-atm-rolls",
    name: "POS Thermal ATM Rolls",
    categorySlug: "thermal-products",
    categoryName: "Thermal Paper & Ribbons",
    badge: "ATM GRADE",
    badgeType: "navy",
    shortDescription: "Long-wound, small-core thermal receipt rolls engineered for bank ATM cash machines.",
    description: "High-sensitivity thermal paper rolls manufactured specifically for bank ATM teller machines. Engineered with small core diameters and long roll lengths to reduce maintenance frequency and ensure jam-free receipt dispensing.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsddaBtYnge5s3gUVNfkz4rpcmd5fp_sgEhtZa4y1p8dNDaA5TFJDu0zDQRSLzocA8jQmSPmw1LKyoJsVIo0w1RDhQUsLUSjuNFBWj7FG01YXvx0L83g-20utOMTSC7U0PIj29XPEuouvQ41XKSzM7GtZyssXBCzMc4cQ0JSXEvwRk2d1txMyjK3NrECbNmyGNLSVM44duO21MOuHiuOjOGHjo2jZlXZdd9vp9KIZVrSHPGaE1gTkx",
    imageAlt: "Bank ATM thermal cash receipt rolls stacked in warehouse",
    featured: false,
    applications: [
      "Automated Teller Machine (ATM) transaction receipt printing",
      "Bank deposit kiosks and self-service passbook printers",
      "Financial terminal mini-statement slips",
      "High-volume unattended currency dispensing kiosks"
    ],
    customisationOptions: [
      "Roll Width: Standard 79mm, 80mm, and custom kiosk dimensions",
      "Roll Length: 150m to 300m extra-long roll windings",
      "Sensor Marks: Black sense marks on back for automatic receipt cutting",
      "Bank Watermarks: Custom back-side security printing with bank logos"
    ],
    features: [
      "Jam-Free Dispensing: Precision slit edges prevent paper jams in ATM cutters",
      "High Thermal Sensitivity: Dark, instant black print without ribbon or toner",
      "Printhead Protection: Smooth dust-free paper preserves thermal print heads",
      "5-Year Image Stability: Transaction records remain legible for auditing"
    ],
    specifications: [
      { label: "Application", value: "Bank ATM & Financial Kiosk Dispensing" },
      { label: "Paper Grade", value: "High-Sensitivity Top-Coated Thermal Paper" },
      { label: "Standard Widths", value: "79mm / 80mm / 3.125 Inch" },
      { label: "Core Dimensions", value: "12.7mm (0.5\") / 25mm Plastic or Coreless" }
    ]
  },

  // 13. Dymo & Brother Printer Rolls (COMBINED)
  {
    slug: "dymo-brother-rolls",
    name: "Dymo & Brother Printer Rolls",
    categorySlug: "thermal-products",
    categoryName: "Thermal Paper & Ribbons",
    badge: "DESKTOP MEDIA",
    badgeType: "navy",
    shortDescription: "Direct thermal label rolls on spools compatible with Dymo LabelWriter and Brother QL desktop printers.",
    description: "Pre-sized direct thermal replacement rolls engineered for Dymo LabelWriter and Brother QL series desktop printers. Designed for address labeling, courier shipping tags, file folder tabs, and barcode price stickers with zero ink, toner, or ribbon required.",
    image: "/images/products/dymo-brother-rolls.jpg",
    imageAlt: "Dymo and Brother compatible desktop direct thermal label rolls on black plastic spindle",
    featured: false,
    applications: [
      "Office correspondence and envelope address labeling",
      "Courier parcel shipping labels (e.g. 4x6\" standard shipping)",
      "File folder tabs, binder labels, and document box indexing",
      "Visitor name badges and event access passes"
    ],
    customisationOptions: [
      "Compatibility: Dymo LabelWriter 450/550/4XL & Brother QL-500/700/800/1100",
      "Formats: Pre-die-cut address/shipping sizes and continuous drop-in rolls",
      "Adhesives: Permanent strong acrylic or easily peelable removable glue"
    ],
    features: [
      "Automatic Notch Alignment: Precision optical holes align every label automatically",
      "100% Ink-Free: Heat-activated thermal coating produces sharp high-contrast print",
      "High Printing Speed: Handles rapid desktop printing without jamming or curling"
    ],
    specifications: [
      { label: "Compatible Printers", value: "Dymo LabelWriter & Brother QL Series" },
      { label: "Coating", value: "Direct Thermal Top-Coated" },
      { label: "Core / Spool", value: "Drop-In Plastic Spindle / Cartridge Compatible" }
    ]
  },

  // 14. Receipts Slips
  {
    slug: "receipts-slips",
    name: "Receipts Slips",
    categorySlug: "thermal-products",
    categoryName: "Thermal Paper & Ribbons",
    badge: "BILLING SLIPS",
    badgeType: "navy",
    shortDescription: "Pre-printed receipt slips, transaction rolls, and cash register vouchers.",
    description: "Custom pre-printed thermal receipt rolls and slips featuring your company watermark, return policies, promotional coupons, or terms on the reverse side. Delivers a professional retail touch to customer checkout slips.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsddaBtYnge5s3gUVNfkz4rpcmd5fp_sgEhtZa4y1p8dNDaA5TFJDu0zDQRSLzocA8jQmSPmw1LKyoJsVIo0w1RDhQUsLUSjuNFBWj7FG01YXvx0L83g-20utOMTSC7U0PIj29XPEuouvQ41XKSzM7GtZyssXBCzMc4cQ0JSXEvwRk2d1txMyjK3NrECbNmyGNLSVM44duO21MOuHiuOjOGHjo2jZlXZdd9vp9KIZVrSHPGaE1gTkx",
    imageAlt: "Pre-printed thermal billing receipt slips and transaction vouchers",
    featured: false,
    applications: [
      "Retail store customer purchase receipts with warranty terms",
      "Restaurant guest check slips and promotional discount vouchers",
      "Hospital OPD billing and appointment slip printouts",
      "Parking validation tickets and entrance tokens"
    ],
    customisationOptions: [
      "Backside Printing: 1-color to 4-color custom logo, warranty terms, or QR links",
      "Paper Sizes: 79mm, 57mm, 80mm continuous roll widths",
      "Paper Thickness: 55 GSM, 65 GSM, 75 GSM premium thermal paper"
    ],
    features: [
      "Clear Backside Print: Sharp reverse-side printing that will not bleed through",
      "Instant Thermal Reaction: Front side remains fully sensitive to thermal heat",
      "Enhanced Brand Identity: Turns every customer receipt into a marketing touchpoint"
    ],
    specifications: [
      { label: "Printing Process", value: "Backside Flexo Print + Front Thermal Active" },
      { label: "Paper Weights", value: "55 GSM / 65 GSM / 75 GSM" },
      { label: "Roll Dimensions", value: "79mm × 50m / Custom Lengths" }
    ]
  },

  // 15. Thermal Transfer Ribbons (Wax, Wax-Resin, Resin)
  {
    slug: "thermal-transfer-ribbons",
    name: "Thermal Transfer Ribbons",
    categorySlug: "thermal-products",
    categoryName: "Thermal Paper & Ribbons",
    badge: "TTR GRADE",
    badgeType: "navy",
    shortDescription: "Premium wax, wax-resin, and pure resin thermal transfer ribbons for barcode printers.",
    description: "High-grade thermal transfer ribbon rolls (TTR) engineered for sharp barcode and text printing on paper and synthetic labels. Back-coated with silicone to protect printer heads from friction and heat buildup.",
    image: "/images/products/thermal-transfer-ribbons.jpg",
    imageAlt: "Thermal transfer ribbons rolls in wax, wax-resin and resin on industrial cores",
    featured: false,
    applications: [
      "Wax Ribbons: Standard paper shipping labels and warehouse barcode tags",
      "Wax-Resin Ribbons: Semi-gloss labels, pharmaceutical boxes, and retail items",
      "Pure Resin Ribbons: Synthetic film labels, chemical drums, and asset tags",
      "Washable Textile Resin: Garment care wash labels"
    ],
    customisationOptions: [
      "Formulations: Wax (economical), Wax-Resin (scratch-resistant), Pure Resin (chemical proof)",
      "Widths: 55mm, 85mm, 110mm, or custom slit dimensions",
      "Winding: Ink Outside (CSO) or Ink Inside (CSI) for Zebra, TSC, Citizen"
    ],
    features: [
      "Crisp High-Density Black: Deep black contrast ensures 100% barcode readability",
      "Silicon Back-Coating: Extends thermal printhead life by reducing friction",
      "High Printing Speeds: Clean ink release up to 12 inches per second"
    ],
    specifications: [
      { label: "Formulations Available", value: "Wax, Wax-Resin, Full Resin, Textile Resin" },
      { label: "Core Dimensions", value: "12.7mm (0.5\") with notches / 25.4mm (1.0\")" },
      { label: "Compatibility", value: "Zebra, TSC, Citizen, Godex, Datamax, Sato" }
    ]
  },

  // 16. Thermal Transparent Ribbons
  {
    slug: "thermal-transparent-ribbons",
    name: "Thermal Transparent Ribbons",
    categorySlug: "thermal-products",
    categoryName: "Thermal Paper & Ribbons",
    badge: "TRANSPARENT",
    badgeType: "navy",
    shortDescription: "Clear thermal ribbons for see-through label printing that preserves packaging design.",
    description: "Thermal transparent ribbons print clean, protective text and codes without obscuring the underlying bottle, glass, or container artwork. Seamlessly integrates with standard thermal transfer machinery.",
    image: "/images/products/thermal-transparent-ribbons.jpg",
    imageAlt: "Thermal transparent ribbon rolls and clear cosmetic label applications",
    featured: false,
    applications: [
      "Cosmetic bottles and perfume jars where product transparency is vital",
      "Clear plastic containers, beverage bottles, and glass jars",
      "Protective clear over-print barrier for high-end luxury packaging"
    ],
    customisationOptions: [
      "Roll Width: Slit to fit any thermal transfer printer model",
      "Core Sizes: 0.5 inch or 1.0 inch industrial cores",
      "Roll Length: 100m, 300m continuous roll lengths"
    ],
    features: [
      "Invisible Clean Finish: Blends with clear bottle surfaces without background glare",
      "Smudge-Proof: Print will not rub off during shipping or storage",
      "Printer Safe: Back-coating prevents thermal head damage"
    ],
    specifications: [
      { label: "Ribbon Type", value: "Thermal Transparent Specialty Film" },
      { label: "Compatibility", value: "Standard Thermal Transfer Printers" },
      { label: "Core Dimensions", value: "12.7mm (0.5\") / 25.4mm (1.0\")" }
    ]
  },

  // 17. Hologram & Void Security Labels
  {
    slug: "hologram-security-labels",
    name: "Hologram & Void Labels",
    categorySlug: "specialty-security",
    categoryName: "Security & Brand Protection",
    badge: "TAMPER EVIDENT",
    badgeType: "red",
    shortDescription: "Custom 3D optical hologram stickers and tamper-evident VOID security seals.",
    description: "High-security brand protection labels featuring multi-channel 2D/3D optical holograms and tamper-evident adhesive transfer. When peeled, the label leaves a permanent 'VOID' or checkerboard pattern on the surface, preventing reuse.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3AyrxlUUj8fL6ZyrsmS5XCIO8NeJ9rFIpjcUk0Ye507N8eIfd1naX01EOMkW_9n0sGmxQ_TG385Qs9Zt1TqnPTkn-6OuZ9OR-fpJQl72pr1RqXLk2HXWx6Or4AsmRgqRzcoaGZV1pBSjUZPV2pkfYNxMlM-ybeZ-cGeNEJpnQUqFOWp917WAJDMDJQ2Y2iW7B6vPfDN8B63_thD4vtTa0poRJCOSHOQtSdx4QqYVj-m8MTYqjmdqK",
    imageAlt: "Holographic tamper-evident security labels with optical light reflection",
    featured: true,
    applications: [
      "Pharmaceutical box safety seals and medical device packaging",
      "Consumer electronics, laptop warranty seals, and smartphone box stickers",
      "Luxury goods, cosmetics, and automotive spare parts authentication",
      "Factory QC inspection pass and security clearance tags"
    ],
    customisationOptions: [
      "Hologram Effects: 2D/3D Multi-Level, Dot Matrix Kinetic, Micro-Text",
      "Tamper Patterns: VOID text, Checkerboard pattern, Destructive fragile paper",
      "Tracking: Sequential serial numbers, QR codes, and laser numbering"
    ],
    features: [
      "Anti-Counterfeiting: Complex optical patterns cannot be reproduced by color copiers",
      "Instant Tamper Evidence: Shows immediately if a box has been opened or resealed",
      "Strong Chemical Bond: Sticks permanently to paper, plastic, painted metal, and glass"
    ],
    specifications: [
      { label: "Security Technology", value: "2D/3D Optical Holography + Tamper VOID Transfer" },
      { label: "Substrate Base", value: "Metallized Polyester (PET) / Destructive Paper" },
      { label: "Adhesive Type", value: "High-Tack Tamper-Evident Solvent Acrylic" }
    ]
  },

  // 18. Stock Load Papers
  {
    slug: "stock-load-papers",
    name: "Stock Load Papers",
    categorySlug: "raw-papers-films",
    categoryName: "Raw Substrates & Films",
    badge: "MASTER ROLLS",
    badgeType: "navy",
    shortDescription: "Jumbo master reels of self-adhesive label stock for printing presses and converters.",
    description: "High-grade master rolls of pressure-sensitive label face papers including Chromo, Mirror Coated, and Direct Thermal papers with silicone glassine release backing. Supplied to printing presses and packaging converters.",
    image: "/images/products/raw-paper-stock.jpg",
    imageAlt: "Industrial jumbo rolls of self-adhesive label paper stock in factory",
    featured: false,
    applications: [
      "Flexographic, letterpress, and offset roll label printing presses",
      "High-speed die-cutting, slitting, and label conversion facilities",
      "Continuous stationery and commercial sticker manufacturing"
    ],
    customisationOptions: [
      "Jumbo Widths: 1000mm, 1070mm master reels or custom slit widths",
      "Face Stocks: 75-80 GSM Semi-Gloss Chromo, Cast Coated, Thermal Eco/Top",
      "Release Liners: 60 GSM Yellow/White Glassine Liner, Kraft Liner"
    ],
    features: [
      "Consistent Adhesive Coating: Uniform hot-melt or acrylic gumming coat",
      "High Tensile Strength: Runs without tearing on high-speed rotary presses",
      "Clean Matrix Stripping: Smooth release liner facilitates fast weed stripping"
    ],
    specifications: [
      { label: "Face Weight", value: "70 GSM - 85 GSM Chromo / Thermal" },
      { label: "Liner Weight", value: "58 GSM - 62 GSM Glassine / Kraft Liner" },
      { label: "Roll Diameters", value: "Up to 1000mm Outer Diameter / 76mm Core" }
    ]
  },

  // 19. All Type Gumming Tappers & Papers
  {
    slug: "gumming-tappers-papers",
    name: "All Type Gumming Papers & Tappers",
    categorySlug: "raw-papers-films",
    categoryName: "Raw Substrates & Films",
    badge: "GUMMING STOCK",
    badgeType: "navy",
    shortDescription: "Water-activated gummed tape, self-adhesive masking papers, and industrial tape rolls.",
    description: "Industrial gumming tapes and specialty adhesive papers including reinforced water-activated gummed paper tape, self-adhesive brown packaging tapes, and converting adhesive films for carton sealing and box manufacturing.",
    image: "/images/products/raw-paper-stock.jpg",
    imageAlt: "Industrial rolls of gummed tape and adhesive packaging papers",
    featured: false,
    applications: [
      "Corrugated carton secure tamper-evident sealing",
      "Industrial book binding and cardboard box joint reinforcing",
      "Eco-friendly 100% recyclable shipping box taping"
    ],
    customisationOptions: [
      "Types: Plain Water-Activated Gummed Paper, Fiberglass Reinforced Tape",
      "Widths: 48mm (2\"), 72mm (3\"), and custom slitting",
      "Printing: Custom brand logo printing on brown or white kraft tape"
    ],
    features: [
      "Fiber-Tear Bond: Fuses with cardboard to create a tamper-evident seal",
      "Heavy-Duty Strength: Reinforced fiberglass threads withstand heavy carton weights",
      "Eco-Friendly: 100% biodegradable and recyclable with corrugated cardboard"
    ],
    specifications: [
      { label: "Adhesive Type", value: "Water-Activated Starch / Natural Rubber Adhesive" },
      { label: "Base Substrate", value: "Virgin Kraft Paper / Reinforced Cross-Weave" }
    ]
  },

  // 20. Plastic Polyester Films & Clear BoPP Films
  {
    slug: "plastic-polyester-films",
    name: "Plastic Polyester Films",
    categorySlug: "raw-papers-films",
    categoryName: "Raw Substrates & Films",
    badge: "FILM STOCK",
    badgeType: "navy",
    shortDescription: "Clear polyester (PET), white BoPP, and transparent laminating films for converters.",
    description: "Converting reels of transparent and metallized plastic polyester films (BoPET, BoPP, and PE). Ideal for label lamination, clear beverage container labeling, and tear-resistant synthetic tag conversion.",
    image: "/images/products/raw-paper-stock.jpg",
    imageAlt: "Clear transparent polyester laminating film reels in warehouse",
    featured: false,
    applications: [
      "Thermal lamination over printed labels for gloss protection",
      "No-look clear bottle labeling for beverage and cosmetics",
      "Industrial synthetic tear-proof tag manufacturing"
    ],
    customisationOptions: [
      "Film Types: Clear BoPET, Metallized Silver PET, White Polypropylene (BoPP)",
      "Thickness: 12 micron, 25 micron, 50 micron, 100 micron gauge choices",
      "Surface Treatment: Corona treated for enhanced ink receptivity"
    ],
    features: [
      "Ultra-High Transparency: Optical clarity without haze or discoloration",
      "Tear & Moisture Proof: Impervious to water, alcohol, oils, and weathering",
      "Smooth Dimensional Stability: Does not stretch or shrink under tension"
    ],
    specifications: [
      { label: "Film Polymers", value: "Biaxially-Oriented Polyester (PET), Polypropylene (BoPP)" },
      { label: "Thickness Range", value: "12 Micron to 150 Micron" },
      { label: "Surface Corona", value: "> 42 Dynes/cm for Printability" }
    ]
  },

  // 21. Barcode Printers
  {
    slug: "barcode-printers",
    name: "Barcode Printers",
    categorySlug: "hardware-trading",
    categoryName: "Barcode Hardware & Equipment",
    badge: "HARDWARE",
    badgeType: "navy",
    shortDescription: "High-performance industrial and desktop thermal transfer barcode label printers.",
    description: "Authorized supply of commercial barcode label printers from global leaders (TSC, Zebra, Citizen, Godex). Designed for high-speed, 24/7 continuous printing of shipping labels, product tags, and serialized barcodes.",
    image: "/images/products/dymo-brother-rolls.jpg",
    imageAlt: "Industrial desktop thermal barcode label printer and supplies",
    featured: true,
    applications: [
      "Warehouse dispatch and pallet shipping label printing",
      "Retail checkout barcode tag and price sticker generation",
      "Manufacturing plant part tracking and serial number printing",
      "Hospital patient wristband and specimen barcode generation"
    ],
    customisationOptions: [
      "Models: Desktop Compact Printers, Rugged Metal Industrial Presses",
      "Resolution: 203 DPI, 300 DPI, and 600 DPI ultra-high precision",
      "Connectivity: USB, Ethernet LAN, Wi-Fi, and Bluetooth interfaces"
    ],
    features: [
      "Dual Technology: Supports both Direct Thermal and Thermal Transfer modes",
      "High Speed Output: Prints up to 14 inches per second without jamming",
      "Heavy-Duty Reliability: Solid metal casing designed for tough factory environments",
      "Full Media Support: Prints on paper, vinyl, polyester, taffeta, and tag boards"
    ],
    specifications: [
      { label: "Brands Supplied", value: "TSC, Zebra, Citizen, Godex, Honeywell" },
      { label: "Print Resolutions", value: "203 DPI / 300 DPI / 600 DPI" },
      { label: "Max Print Width", value: "4.0 Inch (104mm) to 8.0 Inch (216mm)" },
      { label: "Warranty Support", value: "Comprehensive Manufacturer Warranty & AMC" }
    ]
  },

  // 22. Dymo Printers
  {
    slug: "dymo-printers",
    name: "Dymo Printers",
    categorySlug: "hardware-trading",
    categoryName: "Barcode Hardware & Equipment",
    badge: "DYMO GEAR",
    badgeType: "navy",
    shortDescription: "Compact electronic Dymo LabelWriter desktop printers for office and shipping labels.",
    description: "Compact desktop label printers from Dymo engineered for offices, pharmacies, and small businesses. Prints clean address labels, file folder tags, name badges, and barcodes directly from your PC or Mac without ink or toner.",
    image: "/images/products/dymo-brother-rolls.jpg",
    imageAlt: "Dymo LabelWriter desktop compact electronic label printer",
    featured: false,
    applications: [
      "Office correspondence and envelope address labeling",
      "Pharmacy prescription bottle labeling and pill box warnings",
      "Visitor name badges and temporary access pass printing",
      "File folder tabs and document archive indexing"
    ],
    customisationOptions: [
      "Models: Dymo LabelWriter 450, 450 Turbo, 550, 4XL Wide Format",
      "Software: Direct integration with Microsoft Word, Excel, and Outlook"
    ],
    features: [
      "Thermal Direct Technology: Zero ink cartridges or toner ribbons required",
      "High Speed: Prints up to 71 standard address labels per minute",
      "Compact Footprint: Fits neatly on small office desks and reception counters"
    ],
    specifications: [
      { label: "Print Method", value: "Direct Thermal" },
      { label: "Resolution", value: "300 × 600 DPI" },
      { label: "OS Compatibility", value: "Windows & macOS" }
    ]
  },

  // 23. Smart Label Printers
  {
    slug: "smart-label-printers",
    name: "Smart Label Printers",
    categorySlug: "hardware-trading",
    categoryName: "Barcode Hardware & Equipment",
    badge: "SMART TECH",
    badgeType: "navy",
    shortDescription: "High-speed compact electronic desktop smart label printers for business workflow.",
    description: "Smart digital label printers designed for fast on-demand labeling in laboratories, retail stores, and commercial offices. Features seamless wireless connectivity and automated label format detection.",
    image: "/images/products/dymo-brother-rolls.jpg",
    imageAlt: "Smart label printer desktop hardware for commercial business",
    featured: false,
    applications: [
      "Retail shelf-edge price tagging and promotional stickers",
      "Laboratory test tube and clinical sample tracking",
      "E-commerce small parcel shipping labels"
    ],
    customisationOptions: [
      "Interface: Wireless Wi-Fi, Bluetooth BLE, USB 2.0",
      "Media Support: Continuous thermal rolls and pre-die-cut labels"
    ],
    features: [
      "Smart Media Recognition: Automatically detects label size and type",
      "Instant Wireless Print: Print directly from smartphones, tablets, and POS terminals",
      "Quiet Operation: Ultra-low noise mechanism ideal for front-desk environments"
    ],
    specifications: [
      { label: "Category", value: "Smart Label Hardware" },
      { label: "Connectivity", value: "Bluetooth, Wi-Fi, USB" },
      { label: "Resolution", value: "300 DPI High Resolution" }
    ]
  },

  // 24. Barcode Scanners
  {
    slug: "barcode-scanners",
    name: "Barcode Scanners",
    categorySlug: "hardware-trading",
    categoryName: "Barcode Hardware & Equipment",
    badge: "SCANNERS",
    badgeType: "navy",
    shortDescription: "Handheld corded and wireless 1D laser and 2D QR barcode scanners for retail and warehouse.",
    description: "High-speed handheld barcode scanners equipped with advanced optical decoders. Instantly reads 1D barcodes, high-density 2D QR codes, and digital smartphone screens even if the codes are scratched or poorly printed.",
    image: "/images/products/barcode-labels.jpg",
    imageAlt: "Handheld laser barcode scanner reading product barcodes",
    featured: false,
    applications: [
      "Supermarket and retail POS cash counter barcode checkout",
      "Warehouse stock receiving, inventory audits, and dispatch scanning",
      "Healthcare patient bedside barcode verification",
      "Courier parcel tracking and logistics sorting"
    ],
    customisationOptions: [
      "Form Factors: Corded USB Gun, Wireless 2.4G/Bluetooth with Charging Cradle",
      "Optics: 1D Linear Laser or 2D CMOS Area Imager (QR, DataMatrix, PDF417)"
    ],
    features: [
      "Omnidirectional Scanning: Reads barcodes from any angle without precise alignment",
      "Damaged Code Decoding: Reads smudged, creased, or reflective barcodes effortlessly",
      "Rugged Drop-Tested: IP54 sealed housing withstands multiple drops to concrete"
    ],
    specifications: [
      { label: "Optical Engine", value: "1D Laser / 2D Area Imager (640×480 CMOS)" },
      { label: "Scan Rate", value: "Up to 300 Scans / Second" },
      { label: "Drop Resistance", value: "1.5 Meter Drop Tested to Concrete" },
      { label: "Supported Symbologies", value: "Code 128, EAN-13, QR Code, DataMatrix, Aztec" }
    ]
  },

  // 25. Mobile Terminal
  {
    slug: "mobile-terminals",
    name: "Mobile Terminal",
    categorySlug: "hardware-trading",
    categoryName: "Barcode Hardware & Equipment",
    badge: "MOBILE PDA",
    badgeType: "navy",
    shortDescription: "Rugged industrial handheld mobile computer terminals for warehouse inventory management.",
    description: "Enterprise-grade mobile computing terminals running Android OS with integrated high-speed 1D/2D barcode scan engines, physical numeric keypads, and touchscreens. Connects directly to ERP and WMS warehouse software over Wi-Fi and 4G.",
    image: "/images/products/barcode-labels.jpg",
    imageAlt: "Industrial mobile handheld terminal with barcode scanner and touchscreen",
    featured: false,
    applications: [
      "Warehouse inventory counting, picking, packing, and cross-docking",
      "Field service logistics, proof-of-delivery, and route accounting",
      "Manufacturing shop floor assembly verification and asset management",
      "Retail store inventory lookups and price audits"
    ],
    customisationOptions: [
      "Keypads: Full Alphanumeric, Numeric with Function Keys",
      "Accessories: Pistol Grip Trigger Handle, Multi-Slot Charging Cradles"
    ],
    features: [
      "All-Day Battery Life: 5000mAh+ hot-swappable battery for 12+ hour shifts",
      "Ultra-Rugged IP65/IP67: Dust-proof and waterproof for harsh warehouses",
      "Long-Range Scanning: Scans pallet barcodes up to 15 meters away"
    ],
    specifications: [
      { label: "Operating System", value: "Android Enterprise with Security Updates" },
      { label: "Scanner Engine", value: "Zebra / Honeywell Long-Range 2D Imager" },
      { label: "IP Sealing", value: "IP65 / IP67 Water & Dust Ingress Protection" },
      { label: "Wireless Network", value: "Dual-Band Wi-Fi, 4G LTE, Bluetooth 5.0, GPS" }
    ]
  },

  // 26. Barcode CCD Scanners
  {
    slug: "barcode-ccd-scanners",
    name: "Barcode CCD Scanners",
    categorySlug: "hardware-trading",
    categoryName: "Barcode Hardware & Equipment",
    badge: "CCD SCANNER",
    badgeType: "navy",
    shortDescription: "Solid-state CCD barcode scanners for high-reliability contact and near-contact scanning.",
    description: "Solid-state CCD barcode scanners with no moving internal parts. Offers exceptional long-term reliability and instant scanning of paper barcodes, laminated stickers, and computer display screens.",
    image: "/images/products/barcode-labels.jpg",
    imageAlt: "Barcode CCD contact scanner reading product barcodes",
    featured: false,
    applications: [
      "Document tracking, library book checking, and office indexing",
      "Electronic component assembly line tracking",
      "Point-of-sale retail cashier scanning"
    ],
    customisationOptions: [
      "Interfaces: USB HID, RS-232 Serial, Keyboard Wedge",
      "Stands: Hands-free adjustable desk mount stand"
    ],
    features: [
      "Zero Moving Parts: Solid-state optical sensor ensures years of maintenance-free operation",
      "Screen Scanning: Reads barcodes displayed on smartphone and computer monitors",
      "Rapid Response: Instantaneous beep and LED scan confirmation"
    ],
    specifications: [
      { label: "Sensor Type", value: "Linear CCD Solid-State Sensor" },
      { label: "Scan Frequency", value: "330 Scans / Second" },
      { label: "Interface", value: "USB Plug-and-Play (No drivers required)" }
    ]
  }
];
