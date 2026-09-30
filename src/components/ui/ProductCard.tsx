import React from "react";
import Link from "next/link";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  return (
    <div className="relative group rounded-xl overflow-hidden bg-white border border-cream-border hover:border-brand-navy/35 shadow-2xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer h-full">
      {/* Stretched link to make the entire card navigate to product details */}
      <Link
        href={`/products/${product.slug}`}
        className="absolute inset-0 z-10"
        aria-label={`View details for ${product.name}`}
      />

      {/* Image Container: Occupies ~60-65% visual height */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#F3ECE0] shrink-0">
        <img
          src={product.image}
          alt={product.imageAlt}
          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
          loading="lazy"
        />
        {/* Lightweight Transparent Tag Over Image */}
        <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded bg-black/25 backdrop-blur-xs text-white font-label-mono text-[9.5px] uppercase tracking-wider font-semibold shadow-2xs border border-white/30 z-20">
          {product.badge}
        </span>
      </div>

      {/* Compact Content Section (~35-40% visual height) */}
      <div className="p-4 sm:p-4.5 flex flex-col flex-1 justify-between gap-3 bg-white">
        <div className="flex flex-col gap-1 flex-1">
          <div className="flex items-center justify-between gap-2">
            <span className="font-label-tag text-[10px] uppercase tracking-widest text-brand-charcoal-muted font-semibold">
              {product.categoryName}
            </span>
            {index !== undefined && (
              <span className="font-label-mono text-[11px] text-brand-red font-bold tracking-wider">
                {String(index + 1).padStart(2, "0")}
              </span>
            )}
          </div>

          <h3 className="font-headline-sm text-[16px] sm:text-[17px] text-brand-navy group-hover:text-brand-red transition-colors tracking-tight font-bold leading-snug">
            {product.name}
          </h3>

          <p className="font-body-sm text-[13px] text-brand-charcoal-muted leading-relaxed line-clamp-2">
            {product.shortDescription}
          </p>
        </div>

        {/* Action Row */}
        <div className="flex items-center justify-between pt-3 border-t border-cream-border/70 mt-auto">
          {/* Visual View Details Indicator */}
          <div className="inline-flex items-center gap-1.5 font-label-tag text-[11px] text-brand-red uppercase tracking-wider font-bold group-hover:text-brand-red-hover transition-colors">
            <span>View Details</span>
            <span className="material-symbols-outlined text-[15px] leading-none transition-transform duration-300 group-hover:translate-x-1">
              arrow_forward
            </span>
          </div>

          {/* Proper Compact Button: GET QUOTE → */}
          <Link
            href={`/contact?product=${encodeURIComponent(product.name)}`}
            className="relative z-20 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-brand-navy hover:bg-brand-navy-light text-white font-label-tag text-[10.5px] uppercase tracking-wider font-bold shadow-2xs hover:shadow-xs hover:scale-[1.02] transition-all duration-200 group/btn"
          >
            <span>Get a Quote</span>
            <span className="material-symbols-outlined text-[11px] leading-none transition-transform duration-200 group-hover/quote:translate-x-0.5">
              send
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
