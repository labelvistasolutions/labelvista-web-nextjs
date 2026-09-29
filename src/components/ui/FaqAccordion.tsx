"use client";

import React, { useState } from "react";

export interface FaqItem {
  question: string;
  answer: string;
}

const defaultFaqs: FaqItem[] = [
  {
    question: "What types of labels do you manufacture?",
    answer:
      "We make barcode labels, product labels, thermal paper rolls, A4 label sheets, jewellery tags, garment labels, and security labels.",
  },
  {
    question: "Can you make labels in custom sizes and shapes?",
    answer:
      "Yes. We can make labels in custom sizes, shapes, and roll core sizes. We also offer permanent, removable, and freezer-safe glue.",
  },
  {
    question: "What printing options do you offer?",
    answer:
      "We offer 6-color UV flexo printing and flat-belt printing. We can print clear text, bright colors, and sharp barcodes.",
  },
  {
    question: "Will your barcode labels work with my printer?",
    answer:
      "Yes. Our labels are available for many popular printers, including Zebra, TSC, TVS, Citizen, Godex, and Honeywell. Share your printer model with us so we can suggest the right label.",
  },
  {
    question: "Do you make thermal paper rolls for billing and card machines?",
    answer:
      "Yes. We make thermal paper rolls for billing machines, card machines, weighing scales, cash counters, and other thermal printers.",
  },
  {
    question: "Do you make hologram and tamper-proof stickers?",
    answer:
      "Yes. We make 2D and 3D hologram stickers, as well as VOID and tamper-proof stickers to help protect your products.",
  },
  {
    question: "Where is your factory located?",
    answer:
      "Our factory is in Kamrej, Surat, Gujarat. We manufacture and supply labels and thermal rolls to businesses across India.",
  },
  {
    question: "Can you print our logo and design on the labels?",
    answer:
      "Yes. We can print your logo, product details, barcode, QR code, and other designs on your labels.",
  },
  {
    question: "What is the minimum order quantity for custom labels?",
    answer:
      "The minimum order depends on the label size, material, printing, and quantity. Contact us with your requirements and we will suggest the right quantity.",
  },
  {
    question: "How can I get a price for my labels?",
    answer:
      "Send us your label size, material, quantity, design, and other requirements. Our team will check your needs and give you a quote.",
  },
];

interface FaqAccordionProps {
  items?: FaqItem[];
}

export default function FaqAccordion({ items = defaultFaqs }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto divide-y divide-cream-border border-y border-cream-border">
      {items.map((faq, idx) => {
        const isOpen = openIndex === idx;
        const questionId = `faq-question-${idx}`;
        const answerId = `faq-answer-${idx}`;

        return (
          <div key={idx} className="transition-colors duration-200">
            <button
              type="button"
              id={questionId}
              aria-expanded={isOpen}
              aria-controls={answerId}
              onClick={() => toggleItem(idx)}
              className="w-full py-5 sm:py-6 flex items-center justify-between gap-4 text-left group cursor-pointer focus-visible:outline-2 focus-visible:outline-brand-navy focus-visible:outline-offset-2 rounded-sm"
            >
              <span
                className={`font-headline-sm text-[16px] sm:text-[17.5px] font-bold tracking-tight transition-colors duration-200 ${isOpen
                  ? "text-brand-red"
                  : "text-brand-navy group-hover:text-brand-navy-light"
                  }`}
              >
                {faq.question}
              </span>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen
                  ? "bg-brand-red/10 text-brand-red rotate-180"
                  : "bg-cream-muted text-brand-charcoal-muted group-hover:bg-cream-subtle group-hover:text-brand-navy"
                  }`}
              >
                <span className="material-symbols-outlined text-[20px] leading-none select-none">
                  expand_more
                </span>
              </div>
            </button>

            <div
              id={answerId}
              role="region"
              aria-labelledby={questionId}
              className={`grid transition-all duration-300 ease-in-out ${isOpen
                ? "grid-rows-[1fr] opacity-100 pb-5 sm:pb-6"
                : "grid-rows-[0fr] opacity-0 pointer-events-none"
                }`}
            >
              <div className="overflow-hidden">
                <p className="font-body-md text-[15px] sm:text-[15.5px] text-brand-charcoal-muted leading-relaxed pr-4 sm:pr-8">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
