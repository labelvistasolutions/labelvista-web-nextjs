"use client";

import React, { useState, useMemo } from "react";
import { productsData } from "@/data/products";
import { productCategories } from "@/data/categories";
import ProductCard from "@/components/ui/ProductCard";
import DirectInquiriesCTA from "@/components/ui/DirectInquiriesCTA";
import Link from "next/link";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";

export default function ProductsCataloguePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.categorySlug === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="flex flex-col w-full bg-[#FAF6F0]">
      {/* Products Catalogue Section */}
      <section className="relative w-full pt-10 sm:pt-14 lg:pt-16 pb-16 sm:pb-20 lg:pb-24">
        <div className="site-container flex flex-col">
          {/* Catalogue Header */}
          <ScrollReveal direction="up" distance={20} className="flex flex-col items-start gap-3.5 w-full mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-brand-red/10 text-brand-red font-label-tag text-label-tag uppercase tracking-wider font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
              Our Products
            </div>
            <h1 className="font-headline-xl text-3xl sm:text-4xl lg:text-5xl text-brand-navy tracking-tight font-extrabold leading-[1.14]">
              Labels, Sheets &amp; Ribbons.
            </h1>
            <p className="font-body-lg text-[16px] sm:text-[17px] lg:text-[18px] text-brand-charcoal-muted leading-relaxed tracking-[0.012em] max-w-none">
              Explore our barcode rolls, color printed labels, jewelry tags, A4 sheets, and thermal ribbons.
            </p>
          </ScrollReveal>

          {/* Search & Filter directly on page */}
          <ScrollReveal direction="up" distance={16} delay={0.05} className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 w-full mb-8 sm:mb-10">
            {/* Search Input */}
            <div className="relative w-full sm:w-72 md:w-80 shrink-0">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 text-[18px] pointer-events-none">
                search
              </span>
              <input
                id="product-search"
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 bg-white border border-cream-border rounded-xl text-sm text-brand-charcoal placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-navy/20 shadow-2xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search query"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">close</span>
                </button>
              )}
            </div>

            {/* Category Dropdown */}
            <div className="relative w-full sm:w-64 md:w-72 shrink-0">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 text-[18px] pointer-events-none">
                filter_list
              </span>
              <select
                id="category-filter"
                aria-label="Filter by category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-9 py-2.5 bg-white border border-cream-border rounded-xl text-sm font-medium text-brand-charcoal focus:outline-none focus:ring-2 focus:ring-brand-navy/20 cursor-pointer appearance-none transition-colors shadow-2xs"
              >
                <option value="all">All Products ({productsData.length})</option>
                {productCategories.map((cat) => {
                  const count = productsData.filter((p) => p.categorySlug === cat.slug).length;
                  return (
                    <option key={cat.slug} value={cat.slug}>
                      {cat.name} ({count})
                    </option>
                  );
                })}
              </select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 text-[20px] pointer-events-none">
                expand_more
              </span>
            </div>
          </ScrollReveal>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <StaggerGroup
              key={`${selectedCategory}-${searchQuery}`}
              threshold={0}
              rootMargin="60px 0px 0px 0px"
              staggerInterval={0.04}
              baseDelay={0}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {filteredProducts.map((product, idx) => (
                <StaggerItem
                  key={product.slug}
                  index={idx}
                  distance={16}
                  duration={0.5}
                  className="h-full"
                >
                  <ProductCard product={product} index={idx} />
                </StaggerItem>
              ))}
            </StaggerGroup>
          ) : (
            <div className="text-center py-16 bg-[#FFFDF9] rounded-2xl border border-cream-border p-8 sm:p-12 max-w-xl mx-auto shadow-sm">
              <span className="material-symbols-outlined text-stone-300 text-5xl mb-3">
                inventory_2
              </span>
              <h3 className="font-headline-sm text-brand-navy text-xl mb-2 font-bold">
                No products found
              </h3>
              <p className="font-body-md text-brand-charcoal-muted text-[15px] mb-6 leading-relaxed">
                Try searching with a different word or choose another category above.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="btn-navy px-6 py-2.5 rounded-lg font-label-tag text-label-tag uppercase tracking-wider font-bold"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Direct Inquiries & Custom Orders CTA */}
      <DirectInquiriesCTA />
    </div>
  );
}
