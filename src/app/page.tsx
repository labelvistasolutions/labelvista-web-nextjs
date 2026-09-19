import React from "react";
import Link from "next/link";
import { productsData } from "@/data/products";
import { industriesData } from "@/data/industries";
import ProductCard from "@/components/ui/ProductCard";
import ScrollReveal from "@/components/motion/ScrollReveal";
import ImageReveal from "@/components/motion/ImageReveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";

export default function HomePage() {
  const featuredProducts = productsData.filter((p) => p.featured);

  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: HERO SECTION */}
      <section className="relative w-full bg-[#FAF6F0] overflow-hidden border-b border-cream-border">
        {/* Subtle Engineering Grid Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-15"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-7 sm:pt-10 lg:pt-12 xl:pt-14 pb-12 sm:pb-16 lg:pb-18 xl:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 flex flex-col items-start gap-5 sm:gap-6 z-10">
              {/* Technical Eyebrow */}
              <ScrollReveal direction="up" distance={16} delay={0.05}>
                <div className="flex flex-wrap items-center gap-2 text-brand-navy font-label-mono text-[11px] sm:text-[12px] uppercase tracking-wider font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0"></span>
                  <span>PRECISION LABEL MANUFACTURING</span>
                  <span className="text-brand-charcoal-muted/40">•</span>
                  <span className="text-brand-charcoal-muted font-medium">±0.05 MM ACCURACY</span>
                </div>
              </ScrollReveal>

              {/* Authoritative Manufacturing Headline */}
              <ScrollReveal direction="up" distance={22} delay={0.15}>
                <h1 className="font-headline-xl text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] text-brand-navy font-extrabold tracking-tight leading-[1.08] max-w-xl">
                  Precision Manufacturing. Exceptional Labels.
                </h1>
              </ScrollReveal>

              {/* High-Confidence Description */}
              <ScrollReveal direction="up" distance={20} delay={0.28}>
                <p className="text-brand-charcoal-muted font-body-lg text-[16px] sm:text-[17px] lg:text-[18px] leading-[1.65] tracking-[0.012em] max-w-lg">
                  We make high-quality labels for businesses that need clear, dependable printing. Our factory in Surat, Gujarat handles cutting, printing, and roll finishing for all order sizes.
                </p>
              </ScrollReveal>

              {/* Restrained Premium CTAs */}
              <ScrollReveal direction="up" distance={18} delay={0.4}>
                <div className="flex flex-wrap items-center gap-3.5 pt-1">
                  <Link
                    href="/products"
                    className="btn-navy min-w-[175px] h-12 px-6 rounded-lg font-label-tag text-[12px] uppercase tracking-wider font-bold"
                  >
                    <span>Explore Products</span>
                    <span className="material-symbols-outlined text-[16px] leading-none">arrow_forward</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="btn-primary min-w-[175px] h-12 px-6 rounded-lg font-label-tag text-[12px] uppercase tracking-wider font-bold"
                  >
                    <span>Get Quote</span>
                    <span className="material-symbols-outlined text-[16px] leading-none">send</span>
                  </Link>
                </div>
              </ScrollReveal>

              {/* Manufacturing Technical Specification Strip */}
              <ScrollReveal direction="up" distance={16} delay={0.52} className="w-full">
                <div className="grid grid-cols-3 gap-4 sm:gap-6 w-full pt-6 mt-1 border-t border-cream-border">
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-2xl sm:text-3xl text-brand-navy font-extrabold tracking-tight">14+</span>
                    <span className="font-label-mono text-[10px] sm:text-[11px] text-brand-charcoal-muted uppercase tracking-wider font-medium mt-1 leading-tight">
                      Years<br className="sm:hidden" /> Experience
                    </span>
                  </div>
                  <div className="flex flex-col border-l border-cream-border pl-4 sm:pl-6">
                    <span className="font-headline-sm text-2xl sm:text-3xl text-brand-navy font-extrabold tracking-tight">6-Color</span>
                    <span className="font-label-mono text-[10px] sm:text-[11px] text-brand-charcoal-muted uppercase tracking-wider font-medium mt-1 leading-tight">
                      UV<br className="sm:hidden" /> Printing
                    </span>
                  </div>
                  <div className="flex flex-col border-l border-cream-border pl-4 sm:pl-6">
                    <span className="font-headline-sm text-2xl sm:text-3xl text-brand-navy font-extrabold tracking-tight">ISO 9001</span>
                    <span className="font-label-mono text-[10px] sm:text-[11px] text-brand-charcoal-muted uppercase tracking-wider font-medium mt-1 leading-tight">
                      Certified<br className="sm:hidden" /> Quality
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Manufacturing Showcase Column */}
            <div className="lg:col-span-6 relative z-10 w-full">
              <ImageReveal
                delay={0.2}
                duration={1.15}
                zoomScale={1.05}
                containerClassName="group rounded-2xl shadow-xl hover:shadow-2xl ring-1 ring-cream-border hover:ring-cream-border-dark aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] lg:scale-[1.04] lg:origin-center bg-cream-card transition-all duration-500 overflow-hidden cursor-pointer"
              >
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src="https://lh3.googleusercontent.com/aida/AEtjO1XfhRZAhbvVEVBrNJVX8e_GY6rNSMWHdmBigwLj0PFcSXV6qjv3OsEi1OLimb7VJClYR7QAo5-Irg4VvEbBiCqOiPEIbK0CI7qPe_dspoC90MbjvC4hspwVEDC5nPlqURx_HyiAfmrypvM0hhna49sYmNYAgiEAQKUltcNp-prRdVn3la6YWcMkjp-qjIGBKvVQ9JXzscST7uck9okgStnwmbFvEMv6z18qB8XZ4hZ0jNqZdoxXIf6cYLc"
                    alt="Industrial precision roll label manufacturing and flexographic printing facility"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Depth Vignette & Subtle Lighting Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy-dark/30 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Subtle Refined Technical Specification Tag */}
                  <div className="absolute bottom-3.5 left-3.5 bg-brand-navy-dark/85 group-hover:bg-brand-navy-dark/95 backdrop-blur-sm px-3 py-1.5 rounded text-[#FAF6F0] flex items-center gap-2 border border-white/10 shadow-sm transition-all duration-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-green group-hover:animate-pulse shrink-0"></span>
                    <span className="font-label-mono text-[10px] sm:text-[11px] tracking-wider uppercase font-medium text-cream-surface">
                      Surat Manufacturing Facility • Rotary Press
                    </span>
                  </div>
                </div>
              </ImageReveal>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: HORIZONTAL MANUFACTURING CAPABILITY SPECIFICATION BAND */}
      <section className="w-full bg-[#F3ECE0] border-b border-cream-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-7 sm:py-8">
          <StaggerGroup
            staggerInterval={0.08}
            baseDelay={0.05}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-cream-border"
          >
            {/* 01 */}
            <StaggerItem index={0} className="flex flex-col gap-1 lg:px-6 first:lg:pl-0">
              <div className="flex items-center gap-2">
                <span className="font-label-mono text-[11px] font-bold text-brand-red tracking-wider">01</span>
                <span className="font-label-tag text-[12px] font-bold uppercase tracking-wider text-brand-navy">Premium Materials</span>
              </div>
              <p className="font-body-sm text-[13px] text-brand-charcoal-muted leading-relaxed pl-5 sm:pl-0">
                Quality self-adhesive papers and films
              </p>
            </StaggerItem>

            {/* 02 */}
            <StaggerItem index={1} className="flex flex-col gap-1 lg:px-6">
              <div className="flex items-center gap-2">
                <span className="font-label-mono text-[11px] font-bold text-brand-red tracking-wider">02</span>
                <span className="font-label-tag text-[12px] font-bold uppercase tracking-wider text-brand-navy">Precision Cutting</span>
              </div>
              <p className="font-body-sm text-[13px] text-brand-charcoal-muted leading-relaxed pl-5 sm:pl-0">
                Precise cutting and roll finishing
              </p>
            </StaggerItem>

            {/* 03 */}
            <StaggerItem index={2} className="flex flex-col gap-1 lg:px-6">
              <div className="flex items-center gap-2">
                <span className="font-label-mono text-[11px] font-bold text-brand-red tracking-wider">03</span>
                <span className="font-label-tag text-[12px] font-bold uppercase tracking-wider text-brand-navy">Clear Printing</span>
              </div>
              <p className="font-body-sm text-[13px] text-brand-charcoal-muted leading-relaxed pl-5 sm:pl-0">
                6-color UV printing for sharp details
              </p>
            </StaggerItem>

            {/* 04 */}
            <StaggerItem index={3} className="flex flex-col gap-1 lg:px-6 last:lg:pr-0">
              <div className="flex items-center gap-2">
                <span className="font-label-mono text-[11px] font-bold text-brand-red tracking-wider">04</span>
                <span className="font-label-tag text-[12px] font-bold uppercase tracking-wider text-brand-navy">Fast Production</span>
              </div>
              <p className="font-body-sm text-[13px] text-brand-charcoal-muted leading-relaxed pl-5 sm:pl-0">
                Fast and reliable production on machines
              </p>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* SECTION 3: ABOUT SECTION */}
      <section className="w-full bg-[#FAF6F0] py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
            {/* Left Image */}
            <div className="lg:col-span-6 relative">
              <ImageReveal
                delay={0.1}
                duration={1.05}
                zoomScale={1.05}
                containerClassName="rounded-2xl bg-cream-card aspect-[4/3] shadow-xl ring-1 ring-cream-border"
              >
                <img
                  className="w-full h-full object-cover"
                  alt="Roll label manufacturing and finishing in factory"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnuoNF8LM2gluuSawAHBeFRE9f0P68swI-LYS7TvfS-Co9IBrvCUA_sZ57cFUC4mIkySb-47LLgsDSsU1racE-UbUzIQO3RGLZw8qTc7hoBr8m-ZER8v4eHbEPjWBL4XGYUx_y1nvJriOgkaAgdk9YM6aBj_VZ1BUUZXII39X9Ov_I2uZBGx92dYGPJ2_euhShNZEjU6B7IB7tkHRwY6WCjlUzRAv9N4DLN8lmgY1AcWSri6-gY9iE"
                />
              </ImageReveal>
            </div>

            {/* Right Content */}
            <ScrollReveal direction="up" distance={24} delay={0.15} className="lg:col-span-6 flex flex-col items-start gap-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-brand-red/10 text-brand-red font-label-tag text-[11px] uppercase tracking-wider font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
                About Labelvista
              </div>

              <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-[36px] text-brand-navy font-extrabold tracking-tight leading-[1.2]">
                Labels Made with Care and Precision.
              </h2>

              <p className="font-body-lg text-[16px] sm:text-[17px] text-brand-charcoal-muted leading-[1.65] tracking-[0.012em]">
                Labelvista makes self-adhesive labels and thermal paper rolls for businesses. We print and finish labels at our factory in Surat, Gujarat. Every roll is checked for strong sticking and clear printing.
              </p>

              {/* Product Strengths */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 w-full pt-4 mt-1 border-t border-cream-border">
                <div className="flex flex-col gap-1">
                  <span className="font-label-tag text-[12px] uppercase tracking-wider text-brand-navy font-bold">
                    Strong Adhesive
                  </span>
                  <p className="font-body-sm text-[14px] text-brand-charcoal-muted leading-snug">
                    Sticks well on different surfaces
                  </p>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="font-label-tag text-[12px] uppercase tracking-wider text-brand-navy font-bold">
                    Material Choices
                  </span>
                  <p className="font-body-sm text-[14px] text-brand-charcoal-muted leading-snug">
                    Paper, synthetic and clear film
                  </p>
                </div>
              </div>

              <Link
                href="/about"
                className="btn-navy mt-2 h-11 px-6 rounded-lg font-label-tag text-[12px] uppercase tracking-wider font-bold"
              >
                <span>Learn More</span>
                <span className="material-symbols-outlined text-[16px] leading-none">arrow_forward</span>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY LABELVISTA */}
      <section className="w-full bg-[#071527] text-white py-18 sm:py-24 border-y border-white/10 relative overflow-hidden">
        {/* Extremely Subtle Background Grid Pattern */}
        <div className="absolute inset-0 bg-grid-dark opacity-20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          {/* Section Header */}
          <ScrollReveal direction="up" distance={24} className="flex flex-col items-start mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 border border-white/15 text-cream-surface font-label-tag text-[11px] uppercase tracking-widest font-bold mb-3 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
              Why Choose Us
            </div>
            <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-[40px] text-white tracking-tight leading-tight font-extrabold">
              Why Businesses Choose Labelvista
            </h2>
            <p className="font-body-md text-[16px] sm:text-[17px] text-slate-300 mt-2 max-w-xl leading-relaxed">
              We deliver reliable labels on time, every time.
            </p>
          </ScrollReveal>

          <StaggerGroup staggerInterval={0.09} baseDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {/* Card 1 */}
            <StaggerItem index={0}>
              <div className="p-7 sm:p-8 rounded-2xl bg-[#0D223D] border border-white/15 hover:border-white/30 hover:bg-[#112B4C] flex flex-col gap-4 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group h-full">
                <div className="w-12 h-12 rounded-xl bg-red-500/20 border border-red-400/30 flex items-center justify-center text-red-400 shadow-inner group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[24px]">verified</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-headline-sm text-lg text-white font-bold group-hover:text-red-200 transition-colors">
                    Premium Quality
                  </h3>
                  <p className="font-body-sm text-[14.5px] text-slate-200 leading-relaxed font-normal">
                    Strong adhesives and sharp printing tested for everyday use.
                  </p>
                </div>
              </div>
            </StaggerItem>

            {/* Card 2 */}
            <StaggerItem index={1}>
              <div className="p-7 sm:p-8 rounded-2xl bg-[#0D223D] border border-white/15 hover:border-white/30 hover:bg-[#112B4C] flex flex-col gap-4 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group h-full">
                <div className="w-12 h-12 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-300 shadow-inner group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[24px]">dashboard_customize</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-headline-sm text-lg text-white font-bold group-hover:text-sky-200 transition-colors">
                    Custom Orders
                  </h3>
                  <p className="font-body-sm text-[14.5px] text-slate-200 leading-relaxed font-normal">
                    Custom shapes, label sizes, and roll cores made for any printer.
                  </p>
                </div>
              </div>
            </StaggerItem>

            {/* Card 3 */}
            <StaggerItem index={2}>
              <div className="p-7 sm:p-8 rounded-2xl bg-[#0D223D] border border-white/15 hover:border-white/30 hover:bg-[#112B4C] flex flex-col gap-4 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group h-full">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300 shadow-inner group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[24px]">print</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-headline-sm text-lg text-white font-bold group-hover:text-emerald-200 transition-colors">
                    Modern Printing
                  </h3>
                  <p className="font-body-sm text-[14.5px] text-slate-200 leading-relaxed font-normal">
                    High-speed UV printing machines with bright, clear colors.
                  </p>
                </div>
              </div>
            </StaggerItem>

            {/* Card 4 */}
            <StaggerItem index={3}>
              <div className="p-7 sm:p-8 rounded-2xl bg-[#0D223D] border border-white/15 hover:border-white/30 hover:bg-[#112B4C] flex flex-col gap-4 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group h-full">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-300 shadow-inner group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[24px]">domain</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-headline-sm text-lg text-white font-bold group-hover:text-amber-200 transition-colors">
                    Many Industries
                  </h3>
                  <p className="font-body-sm text-[14.5px] text-slate-200 leading-relaxed font-normal">
                    Trusted by food, retail, pharma, and chemical brands.
                  </p>
                </div>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* SECTION 5: PRODUCTS / PORTFOLIO */}
      <section className="w-full bg-[#FAF6F0] py-18 sm:py-24 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <ScrollReveal direction="up" distance={24} className="flex flex-col items-center text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-brand-red/10 text-brand-red font-label-tag text-[11px] uppercase tracking-widest font-bold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
              Our Products
            </div>
            <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-[40px] text-brand-navy tracking-tight font-extrabold">
              Explore Our Label Range
            </h2>
            <p className="font-body-md text-[16px] sm:text-[17px] text-brand-charcoal-muted max-w-lg mt-2 leading-relaxed">
              We make rolls and sheets for barcode, product, and packaging needs.
            </p>
          </ScrollReveal>

          <StaggerGroup staggerInterval={0.08} baseDelay={0.05} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredProducts.map((product, idx) => (
              <StaggerItem key={product.slug} index={idx} className="h-full">
                <ProductCard product={product} index={idx} />
              </StaggerItem>
            ))}
          </StaggerGroup>

          <ScrollReveal direction="up" distance={16} delay={0.2} className="flex justify-center mt-12 sm:mt-16">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 h-12 px-8 rounded-lg bg-brand-navy text-[#FAF6F0] font-label-tag text-[12px] uppercase tracking-wider font-bold hover:bg-brand-navy-light transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <span>View All Products</span>
              <span className="material-symbols-outlined text-[16px] leading-none">arrow_forward</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 6: PRINTING / MANUFACTURING */}
      <section className="w-full bg-[#071527] text-[#FAF6F0] py-18 sm:py-24 lg:py-28 border-y border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-15 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
            {/* Left Content Column */}
            <ScrollReveal direction="up" distance={24} className="lg:col-span-6 flex flex-col items-start gap-6">
              {/* Section Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 border border-white/15 text-cream-surface font-label-tag text-[11px] uppercase tracking-widest font-bold shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
                <span>Printing &amp; Finishing Lines</span>
              </div>

              {/* Heading */}
              <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-[40px] text-white tracking-tight leading-tight font-extrabold">
                Clear Printing. Quality You Can See.
              </h2>

              {/* Supporting Text */}
              <p className="font-body-md text-[16px] sm:text-[17px] text-slate-300 leading-relaxed font-normal max-w-xl">
                Our modern machines give you bright colors and clean edges on every roll.
              </p>

              {/* Structured Manufacturing Capability List */}
              <div className="w-full pt-2 pb-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 divide-y sm:divide-y-0 divide-white/10 border-t border-b border-white/15">
                  {/* Column 1 */}
                  <div className="flex flex-col divide-y divide-white/10">
                    <div className="flex items-center gap-3.5 py-3.5 group">
                      <span className="font-label-mono text-[11px] font-bold text-brand-red tracking-wider shrink-0">01</span>
                      <span className="font-body-md text-[14.5px] sm:text-[15px] text-slate-200 font-medium group-hover:text-white transition-colors">
                        Flat Belt Printing
                      </span>
                    </div>
                    <div className="flex items-center gap-3.5 py-3.5 group">
                      <span className="font-label-mono text-[11px] font-bold text-brand-red tracking-wider shrink-0">02</span>
                      <span className="font-body-md text-[14.5px] sm:text-[15px] text-slate-200 font-medium group-hover:text-white transition-colors">
                        Multi-Color Printing
                      </span>
                    </div>
                    <div className="flex items-center gap-3.5 py-3.5 group">
                      <span className="font-label-mono text-[11px] font-bold text-brand-red tracking-wider shrink-0">03</span>
                      <span className="font-body-md text-[14.5px] sm:text-[15px] text-slate-200 font-medium group-hover:text-white transition-colors">
                        Flexo UV Printing
                      </span>
                    </div>
                  </div>

                  {/* Column 2 */}
                  <div className="flex flex-col divide-y divide-white/10">
                    <div className="flex items-center gap-3.5 py-3.5 group">
                      <span className="font-label-mono text-[11px] font-bold text-brand-red tracking-wider shrink-0">04</span>
                      <span className="font-body-md text-[14.5px] sm:text-[15px] text-slate-200 font-medium group-hover:text-white transition-colors">
                        Protective Varnish
                      </span>
                    </div>
                    <div className="flex items-center gap-3.5 py-3.5 group">
                      <span className="font-label-mono text-[11px] font-bold text-brand-red tracking-wider shrink-0">05</span>
                      <span className="font-body-md text-[14.5px] sm:text-[15px] text-slate-200 font-medium group-hover:text-white transition-colors">
                        Textile &amp; Clothing Tags
                      </span>
                    </div>
                    <div className="flex items-center gap-3.5 py-3.5 group">
                      <span className="font-label-mono text-[11px] font-bold text-brand-red tracking-wider shrink-0">06</span>
                      <span className="font-body-md text-[14.5px] sm:text-[15px] text-slate-200 font-medium group-hover:text-white transition-colors">
                        Hologram Security Seals
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Refined CTA Link */}
              <Link
                href="/printing-work"
                className="inline-flex items-center gap-2 h-11 px-5 rounded-lg border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white font-label-tag text-[12px] uppercase tracking-wider font-bold transition-all shadow-2xs group mt-1"
              >
                <span>Explore Printing Work</span>
                <span className="material-symbols-outlined text-[15px] leading-none transition-transform duration-300 group-hover:translate-x-1">
                  arrow_forward
                </span>
              </Link>
            </ScrollReveal>

            {/* Right Manufacturing Image Column */}
            <div className="lg:col-span-6 relative">
              <ImageReveal
                delay={0.15}
                duration={1.1}
                zoomScale={1.05}
                containerClassName="rounded-2xl bg-brand-navy-deep aspect-[4/3] shadow-2xl ring-1 ring-white/15"
              >
                <img
                  className="w-full h-full object-cover hover:scale-[1.025] transition-transform duration-500 ease-out"
                  alt="Industrial flexographic UV label printing press operating at high speed"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5CAdrKglL7bDyOoOAbpMHsTduba5YduTC-33l2HiSIx3PBq88CPAkyEeHwvHNC-fnD7drWvg-F84TMYZnkpLbmeBwGIhUpPSOoCKHixML_y6Jjea-Q3IRDX6nQVvYNMz1sr7P03tURpaQVB9KXZ7CS_xkZdoSpEn1XigjVpVLTRrrHB18Z-kcnXxu4vPDQme1bKT_tDvs-KvOAQjylkaFMo8XtD2bxMuc4YCEHeYkmR4WNIHoK549"
                />
                <div className="absolute bottom-4 left-4 bg-brand-navy-dark/90 backdrop-blur-md px-3.5 py-2 rounded-lg flex items-center gap-2 border border-white/15 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green shrink-0"></span>
                  <span className="font-label-mono text-[10px] sm:text-[11px] text-white tracking-wider uppercase font-semibold">
                    HIGH-SPEED PRINTING PRESS
                  </span>
                </div>
              </ImageReveal>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: OPERATIONAL DIRECTIVE */}
      <section className="w-full bg-[#FAF6F0] py-16 sm:py-20 lg:py-28 border-b border-cream-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <ScrollReveal
            direction="up"
            distance={28}
            className="rounded-3xl bg-brand-navy-dark text-white p-10 sm:p-14 lg:p-20 relative overflow-hidden shadow-2xl border border-white/10"
          >
            <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto gap-8 sm:gap-10 lg:gap-12">
              {/* Directive Eyebrow */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-brand-gold font-label-tag text-[12px] sm:text-[13px] uppercase tracking-[0.25em] font-bold">
                <span className="w-2 h-2 rounded-full bg-brand-gold shrink-0"></span>
                <span>Our Commitment</span>
              </div>

              {/* Core Triad Slogan */}
              <h2 className="font-headline-xl text-3xl sm:text-4xl lg:text-[46px] xl:text-[52px] text-white font-extrabold tracking-tight leading-[1.15]">
                Precision <span className="text-brand-red font-light mx-1.5">•</span> Performance <span className="text-brand-red font-light mx-1.5">•</span> Perfection
              </h2>

              {/* Enhanced High-Readability Description */}
              <p className="font-body-lg text-[18px] sm:text-[20px] lg:text-[22px] text-slate-200 leading-[1.7] tracking-[0.03em] max-w-3xl">
                Every label we make in Surat meets exact size standards, strong stickiness, and clean print quality.
              </p>

              {/* 3 Pillar Cards */}
              <StaggerGroup
                staggerInterval={0.1}
                baseDelay={0.15}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 w-full pt-10 sm:pt-14 mt-2 border-t border-white/10 text-left"
              >
                <StaggerItem index={0} className="flex flex-col gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-red shrink-0"></span>
                    <span className="font-headline-sm text-lg sm:text-xl text-white font-bold tracking-tight">
                      Precision
                    </span>
                  </div>
                  <p className="font-body-md text-[15px] sm:text-[16px] text-slate-300 leading-[1.65] tracking-[0.02em]">
                    Exact ±0.05 mm cutting so your labels apply smoothly on automatic machines.
                  </p>
                </StaggerItem>

                <StaggerItem index={1} className="flex flex-col gap-3 md:border-l md:border-white/15 md:pl-8 lg:md:pl-10">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-green shrink-0"></span>
                    <span className="font-headline-sm text-lg sm:text-xl text-white font-bold tracking-tight">
                      Performance
                    </span>
                  </div>
                  <p className="font-body-md text-[15px] sm:text-[16px] text-slate-300 leading-[1.65] tracking-[0.02em]">
                    Strong adhesive that stays stuck in hot, cold, or damp storage.
                  </p>
                </StaggerItem>

                <StaggerItem index={2} className="flex flex-col gap-3 md:border-l md:border-white/15 md:pl-8 lg:md:pl-10">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-red shrink-0"></span>
                    <span className="font-headline-sm text-lg sm:text-xl text-white font-bold tracking-tight">
                      Perfection
                    </span>
                  </div>
                  <p className="font-body-md text-[15px] sm:text-[16px] text-slate-300 leading-[1.65] tracking-[0.02em]">
                    ISO 9001 certified quality checks on every roll before shipping.
                  </p>
                </StaggerItem>
              </StaggerGroup>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 7: INDUSTRIES & FINAL CONVERSION CTA */}
      <section id="industries" className="w-full bg-[#FAF6F0] py-16 sm:py-20 lg:py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-14 sm:gap-16">
          <div className="flex flex-col items-center text-center">
            <ScrollReveal direction="up" distance={20}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-brand-red/10 text-brand-red font-label-tag text-[11px] uppercase tracking-widest font-bold mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
                <span>Industries We Serve</span>
              </div>
              <h2 className="font-headline-lg text-3xl sm:text-4xl text-brand-navy tracking-tight mb-2">
                Labels for Different Businesses
              </h2>
              <p className="font-body-md text-[16px] sm:text-[17px] text-brand-charcoal-muted max-w-lg mb-8 sm:mb-10">
                We make custom labels designed for your specific industry needs.
              </p>
            </ScrollReveal>

            {/* 8 Industry Cards Grid with Smooth Stagger */}
            <StaggerGroup
              staggerInterval={0.04}
              baseDelay={0.05}
              className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3.5 sm:gap-4 w-full"
            >
              {industriesData.map((ind, idx) => (
                <StaggerItem key={ind.id} index={idx}>
                  <div className="flex flex-col items-center justify-center p-5 rounded-xl bg-[#FFFDF9] border border-cream-border shadow-xs hover:shadow-md hover:border-brand-navy/30 hover:-translate-y-1 transition-all duration-300 group select-none h-full">
                    <span className={`material-symbols-outlined ${ind.colorClass} text-[28px] mb-2 group-hover:scale-110 transition-transform`}>
                      {ind.icon}
                    </span>
                    <span className="font-headline-sm text-[13px] sm:text-[14px] text-brand-navy font-bold text-center leading-tight">
                      {ind.name}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>

          {/* Direct Technical Inquiry Card */}
          <ScrollReveal
            direction="up"
            distance={24}
            className="rounded-3xl bg-[#071527] text-white p-8 sm:p-12 lg:p-14 shadow-xl border border-white/12 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10"
          >
            <div className="absolute inset-0 bg-grid-dark opacity-15 pointer-events-none"></div>

            <div className="flex flex-col items-start gap-3.5 max-w-xl relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 border border-white/15 text-cream-surface font-label-tag text-[11px] uppercase tracking-widest font-bold shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0"></span>
                <span>Direct Inquiries</span>
              </div>
              <h3 className="font-headline-lg text-2xl sm:text-3xl lg:text-[36px] text-white tracking-tight leading-[1.18] font-extrabold">
                Need Custom Labels for Your Business?
              </h3>
              <p className="font-body-md text-[16px] sm:text-[17px] text-slate-300 leading-relaxed font-normal">
                Talk to our team for material advice and quick wholesale quotes.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3.5 shrink-0 relative z-10 w-full sm:w-auto">
              <Link
                href="/contact"
                className="btn-primary w-full sm:w-auto min-w-[165px] h-12 px-6 rounded-lg font-label-tag text-[12px] uppercase tracking-wider font-bold"
              >
                <span>Get a Quote</span>
                <span className="material-symbols-outlined text-[16px] leading-none">send</span>
              </Link>
              <Link
                href="/contact"
                className="btn-outline-white w-full sm:w-auto min-w-[165px] h-12 px-6 rounded-lg font-label-tag text-[12px] uppercase tracking-wider font-bold"
              >
                <span className="material-symbols-outlined text-[18px] leading-none">support_agent</span>
                <span>Call Support</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
