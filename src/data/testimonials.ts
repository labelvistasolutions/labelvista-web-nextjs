export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  industry: string;
  quote: string;
  image: string;
  rating?: number;
  highlightBadge: string;
}

// Simple, natural Indian English testimonials with lightweight optimized WebP avatars
export const testimonialsData: TestimonialItem[] = [
  {
    id: "testimonial-1",
    name: "Rajesh Patel",
    role: "Managing Director",
    company: "Apex Agro & Packaged Foods",
    location: "Ahmedabad",
    industry: "FMCG & Packaging",
    highlightBadge: "Applicator-Grade Rolls",
    image: "/images/testimonials/customer-1.webp",
    rating: 5,
    quote:
      "The label cutting is very accurate and our machine runs smoothly without any issue. Print quality is always consistent.",
  },
  {
    id: "testimonial-2",
    name: "Neha Mehta",
    role: "Head of Procurement",
    company: "Suncure Pharma Ltd.",
    location: "Vadodara",
    industry: "Pharma Packaging",
    highlightBadge: "2D DataMatrix & Tamper-Evident",
    image: "/images/testimonials/customer-2.webp",
    rating: 5,
    quote:
      "Barcode printing is very clear and scannable. Their tamper-proof labels and fast response make our work very easy.",
  },
  {
    id: "testimonial-3",
    name: "Kunal Desai",
    role: "GM Operations",
    company: "Surat Texfab Apparels",
    location: "Surat",
    industry: "Garments & Textiles",
    highlightBadge: "Clean-Peel Fabric Adhesive",
    image: "/images/testimonials/customer-3.webp",
    rating: 5,
    quote:
      "The stickers stick well on fabric and peel off cleanly without leaving any glue marks. Very reliable service.",
  },
  {
    id: "testimonial-4",
    name: "Priya Shah",
    role: "Supply Chain Lead",
    company: "LogiFast Freight Hubs",
    location: "Bhiwandi",
    industry: "Logistics & Supply Chain",
    highlightBadge: "Thermal Transfer Barcodes",
    image: "/images/testimonials/customer-4.webp",
    rating: 5,
    quote:
      "We order barcode labels in bulk regularly. Printing does not smudge during transport and scanner reads them quickly.",
  },
  {
    id: "testimonial-5",
    name: "Smita Parekh",
    role: "Brand Director",
    company: "Pristine Botanicals",
    location: "Mumbai",
    industry: "Cosmetics & Retail",
    highlightBadge: "Foil & Moisture Resistant",
    image: "/images/testimonials/customer-5.webp",
    rating: 5,
    quote:
      "The gold foil finish and label quality on our bottles look very premium. Delivery is always on time.",
  },
  {
    id: "testimonial-6",
    name: "Rahul Joshi",
    role: "Plant In-Charge",
    company: "Apex Specialty Chemicals",
    location: "Ankleshwar",
    industry: "Industrial & Chemical",
    highlightBadge: "Solvent & Weather Resistant",
    image: "/images/testimonials/customer-6.webp",
    rating: 5,
    quote:
      "Labels stay stuck on chemical drums even in hot and outdoor weather. Good material and dependable team.",
  },
];
