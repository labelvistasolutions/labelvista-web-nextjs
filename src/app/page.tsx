import React from "react";
import Link from "next/link";
import { productsData } from "@/data/products";
import { industriesData } from "@/data/industries";
import ProductCard from "@/components/ui/ProductCard";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialsSection from "@/components/ui/TestimonialsSection";
import DirectInquiriesCTA from "@/components/ui/DirectInquiriesCTA";
import ScrollReveal from "@/components/motion/ScrollReveal";
import ImageReveal from "@/components/motion/ImageReveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";

export default function HomePage() {
  const featuredProducts = productsData.filter((p) => p.featured).slice(0, 6);

  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: IMMERSIVE HERO SECTION */}
      <section className="relative w-full min-h-[640px] sm:min-h-[680px] lg:min-h-[720px] xl:min-h-[760px] flex flex-col justify-between overflow-hidden bg-brand-navy-deep">
        {/* Full-Cover Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-manufacturing.jpg"
            alt="Labelvista industrial precision roll label manufacturing and flexographic printing facility"
            className="w-full h-full object-cover object-center scale-[1.02] transform-gpu"
          />

          {/* Transparent Directional Dark Overlay (Subtle vignette for text readability while revealing the image) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#061325]/78 via-[#0A192F]/48 to-[#061325]/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061325]/60 via-transparent to-[#061325]/25" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 site-container pt-16 sm:pt-20 lg:pt-24 xl:pt-28 pb-20 sm:pb-24 lg:pb-28 my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 xl:gap-14 items-center">

            {/* Left Column: Authoritative White Typography & Primary CTAs */}
            <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-start gap-5 sm:gap-6">
              {/* Category Eyebrow */}
              <ScrollReveal direction="up" distance={16} delay={0.05}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white font-label-mono text-[11px] sm:text-[12px] uppercase tracking-wider font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0 shadow-xs"></span>
                  <span>PRECISION LABEL MANUFACTURING</span>
                </div>
              </ScrollReveal>

              {/* Dominant Headline */}
              <ScrollReveal direction="up" distance={22} delay={0.15}>
                <h1 className="font-headline-xl text-3xl sm:text-5xl lg:text-[46px] xl:text-[54px] text-white font-extrabold tracking-tight leading-[1.08] max-w-2xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
                  Precision Labels. <br />
                  <span className="text-white/95 relative inline-block">
                    Built for Every Application.
                    <span className="absolute left-0 bottom-1 w-full h-[3px] bg-gradient-to-r from-brand-red via-brand-red/60 to-transparent rounded-full" />
                  </span>
                </h1>
              </ScrollReveal>

              {/* Concise Supporting Description */}
              <ScrollReveal direction="up" distance={20} delay={0.25}>
                <p className="text-white/90 font-body-lg text-[15px] sm:text-[17px] lg:text-[18px] leading-[1.65] tracking-[0.012em] max-w-xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]">
                  We make high-quality labels for businesses that need clear, dependable printing. Our factory in Surat, Gujarat handles cutting, printing, and roll finishing for all order sizes.
                </p>
              </ScrollReveal>

              {/* Integrated Action CTAs */}
              <ScrollReveal direction="up" distance={18} delay={0.35}>
                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <Link
                    href="/products"
                    className="inline-flex items-center justify-center gap-2 min-w-[170px] h-12 px-6 rounded-xl bg-brand-red hover:bg-brand-red-hover text-white font-label-tag text-[12px] uppercase tracking-wider font-bold shadow-lg hover:shadow-brand-red/30 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>Explore Products</span>
                    <span className="material-symbols-outlined text-[16px] leading-none">arrow_forward</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 min-w-[150px] h-12 px-6 rounded-xl bg-white hover:bg-[#FAF6F0] text-brand-navy border border-white font-label-tag text-[12px] uppercase tracking-wider font-extrabold shadow-md hover:shadow-white/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>Get a Quote</span>
                    <span className="material-symbols-outlined text-[16px] leading-none text-brand-navy">send</span>
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Floating Information Spec Panel (Copper Stone inspired) */}
            <div className="lg:col-span-6 xl:col-span-5 relative z-10 w-full">
              <ScrollReveal
                direction="up"
                distance={24}
                delay={0.25}
                className="rounded-2xl sm:rounded-3xl bg-black/40 sm:bg-black/35 backdrop-blur-xl [backdrop-filter:blur(24px)] [-webkit-backdrop-filter:blur(24px)] border border-white/15 p-6 sm:p-7 lg:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.45)] text-white flex flex-col gap-5"
              >
                {/* Panel Top Header */}
                <div className="flex flex-col gap-1.5 pb-4 border-b border-white/10">
                  <span className="font-label-mono text-[10px] sm:text-[11px] text-brand-gold uppercase tracking-widest font-semibold">
                    SIGNATURE CAPABILITIES
                  </span>
                  <h2 className="font-headline-sm text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                    Spec-Ready Engineering
                  </h2>
                </div>

                {/* Two Inner Feature Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Feature 1 */}
                  <div className="p-4 sm:p-4.5 rounded-xl bg-white/[0.07] border border-white/10 hover:bg-white/[0.1] hover:border-white/20 transition-all duration-200 flex flex-col gap-2">
                    <div className="w-8 h-8 rounded-lg bg-brand-red/20 text-brand-red flex items-center justify-center shrink-0 border border-brand-red/30">
                      <span className="material-symbols-outlined text-[18px]">precision_manufacturing</span>
                    </div>
                    <span className="font-label-mono text-[10px] uppercase tracking-wider text-white/90 font-bold mt-1">
                      PRECISION PRINTING
                    </span>
                    <p className="font-body-sm text-[12px] sm:text-[13px] text-cream-border/80 leading-relaxed">
                      Up to 6-Color UV flexographic printing with sharp barcode scannability.
                    </p>
                  </div>

                  {/* Feature 2 */}
                  <div className="p-4 sm:p-4.5 rounded-xl bg-white/[0.07] border border-white/10 hover:bg-white/[0.1] hover:border-white/20 transition-all duration-200 flex flex-col gap-2">
                    <div className="w-8 h-8 rounded-lg bg-brand-gold/20 text-brand-gold flex items-center justify-center shrink-0 border border-brand-gold/30">
                      <span className="material-symbols-outlined text-[18px]">verified</span>
                    </div>
                    <span className="font-label-mono text-[10px] uppercase tracking-wider text-white/90 font-bold mt-1">
                      ISO 9001 QUALITY
                    </span>
                    <p className="font-body-sm text-[12px] sm:text-[13px] text-cream-border/80 leading-relaxed">
                      Certified adhesive bonding &amp; tight-tolerance rotary die-cutting.
                    </p>
                  </div>
                </div>

                {/* Bottom Verification Footer Strip */}
                <div className="pt-2 flex items-center justify-between text-[11px] sm:text-xs font-label-mono text-cream-border/75">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-green shadow-xs animate-pulse" />
                    <span>Surat Manufacturing Plant</span>
                  </div>
                  <span className="text-white/80 font-bold">14+ Years Ex.</span>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>

        {/* Subtle Curved Bottom Transition into Section 2 */}
        <div className="relative z-10 w-full leading-none overflow-hidden -mb-[1px]">
          <svg
            viewBox="0 0 1440 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-8 sm:h-11 lg:h-12 block preserve-3d"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C360,40 1080,48 1440,16 L1440,48 L0,48 Z"
              fill="#F3ECE0"
            />
          </svg>
        </div>
      </section>

      {/* SECTION 2: HORIZONTAL MANUFACTURING CAPABILITY SPECIFICATION BAND */}
      <section className="w-full bg-[#F3ECE0] border-b border-cream-border">
        <div className="site-container py-8 sm:py-9">
          <StaggerGroup
            staggerInterval={0.08}
            baseDelay={0.05}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-cream-border"
          >
            {/* 01 */}
            <StaggerItem index={0} className="flex flex-col gap-1.5 lg:px-6 first:lg:pl-0">
              <div className="flex items-center gap-2.5">
                <span className="font-label-mono text-[13px] font-bold text-brand-red tracking-wider">01</span>
                <span className="font-label-tag text-[13.5px] sm:text-[14px] font-bold uppercase tracking-wider text-brand-navy">Premium Materials</span>
              </div>
              <p className="font-body text-[14px] sm:text-[14.5px] text-brand-charcoal-muted leading-relaxed pl-6 sm:pl-0">
                Quality self-adhesive papers and films
              </p>
            </StaggerItem>

            {/* 02 */}
            <StaggerItem index={1} className="flex flex-col gap-1.5 lg:px-6">
              <div className="flex items-center gap-2.5">
                <span className="font-label-mono text-[13px] font-bold text-brand-red tracking-wider">02</span>
                <span className="font-label-tag text-[13.5px] sm:text-[14px] font-bold uppercase tracking-wider text-brand-navy">Precision Cutting</span>
              </div>
              <p className="font-body text-[14px] sm:text-[14.5px] text-brand-charcoal-muted leading-relaxed pl-6 sm:pl-0">
                Precise cutting and roll finishing
              </p>
            </StaggerItem>

            {/* 03 */}
            <StaggerItem index={2} className="flex flex-col gap-1.5 lg:px-6">
              <div className="flex items-center gap-2.5">
                <span className="font-label-mono text-[13px] font-bold text-brand-red tracking-wider">03</span>
                <span className="font-label-tag text-[13.5px] sm:text-[14px] font-bold uppercase tracking-wider text-brand-navy">Clear Printing</span>
              </div>
              <p className="font-body text-[14px] sm:text-[14.5px] text-brand-charcoal-muted leading-relaxed pl-6 sm:pl-0">
                6-color UV printing for sharp details
              </p>
            </StaggerItem>

            {/* 04 */}
            <StaggerItem index={3} className="flex flex-col gap-1.5 lg:px-6 last:lg:pr-0">
              <div className="flex items-center gap-2.5">
                <span className="font-label-mono text-[13px] font-bold text-brand-red tracking-wider">04</span>
                <span className="font-label-tag text-[13.5px] sm:text-[14px] font-bold uppercase tracking-wider text-brand-navy">Fast Production</span>
              </div>
              <p className="font-body text-[14px] sm:text-[14.5px] text-brand-charcoal-muted leading-relaxed pl-6 sm:pl-0">
                Fast and reliable production on machines
              </p>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* SECTION 3: ABOUT SECTION */}
      <section className="w-full bg-[#FAF6F0] py-16 sm:py-20 lg:py-24">
        <div className="site-container">
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
                  src="/images/facility/surat-plant.jpg"
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
      <section className="w-full bg-gradient-navy-red text-white py-18 sm:py-24 border-y border-white/10 relative overflow-hidden">
        {/* Extremely Subtle Background Grid Pattern */}
        <div className="absolute inset-0 bg-grid-dark opacity-20 pointer-events-none"></div>

        <div className="site-container relative z-10">
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
              <div className="p-7 sm:p-8 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/12 hover:border-white/25 flex flex-col gap-4 hover:-translate-y-1.5 transition-all duration-300 group h-full">
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
              <div className="p-7 sm:p-8 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/12 hover:border-white/25 flex flex-col gap-4 hover:-translate-y-1.5 transition-all duration-300 group h-full">
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
              <div className="p-7 sm:p-8 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/12 hover:border-white/25 flex flex-col gap-4 hover:-translate-y-1.5 transition-all duration-300 group h-full">
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
              <div className="p-7 sm:p-8 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/12 hover:border-white/25 flex flex-col gap-4 hover:-translate-y-1.5 transition-all duration-300 group h-full">
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

        <div className="site-container relative z-10">
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
      <section className="w-full bg-gradient-navy-red text-[#FAF6F0] py-18 sm:py-24 lg:py-28 border-y border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-15 pointer-events-none"></div>

        <div className="site-container relative z-10">
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

              {/* High-Visibility Brand Red CTA Button */}
              <Link
                href="/printing-work"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-brand-red hover:bg-brand-red-hover text-white font-label-tag text-[12px] uppercase tracking-wider font-bold transition-all duration-200 shadow-md hover:shadow-brand-red/30 hover:-translate-y-0.5 active:translate-y-0 group mt-2"
              >
                <span>Explore Printing Work</span>
                <span className="material-symbols-outlined text-[16px] leading-none transition-transform duration-300 group-hover:translate-x-1">
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
                  src="/images/printing/flexo-uv-press.jpg"
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

      {/* SECTION 6: INDUSTRIES */}
      <section id="industries" className="w-full bg-[#FAF6F0] py-16 sm:py-20 lg:py-24 scroll-mt-20 border-b border-cream-border">
        <div className="site-container flex flex-col gap-10 sm:gap-12">
          <div className="flex flex-col items-center text-center">
            <ScrollReveal direction="up" distance={20}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-brand-red/10 text-brand-red font-label-tag text-[11px] uppercase tracking-widest font-bold mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
                <span>Industries We Serve</span>
              </div>
              <h2 className="font-headline-lg text-3xl sm:text-4xl text-brand-navy tracking-tight mb-2 font-extrabold">
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
        </div>
      </section>

      {/* SECTION 7: OPERATIONAL DIRECTIVE (OUR COMMITMENT) - FULL WIDTH */}
      <section className="w-full bg-gradient-navy-red text-white py-18 sm:py-24 lg:py-28 border-y border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none"></div>

        <div className="site-container relative z-10">
          <ScrollReveal
            direction="up"
            distance={24}
            className="flex flex-col items-center text-center max-w-5xl mx-auto gap-8 sm:gap-10 lg:gap-12"
          >
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
            <p className="font-body-lg text-[15px] sm:text-[17px] lg:text-[18px] text-slate-200 leading-relaxed tracking-[0.015em] max-w-none md:whitespace-nowrap text-center">
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
                  Exact precise cutting so your labels apply smoothly on automatic machines.
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
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 7: CLIENT TESTIMONIALS (Authentic Indian B2B Experiences) */}
      <TestimonialsSection />

      {/* SECTION 8: FAQ (FREQUENTLY ASKED QUESTIONS) */}
      <section id="faq" className="w-full bg-[#FAF6F0] py-16 sm:py-20 lg:py-24 border-t border-cream-border scroll-mt-20">
        <div className="site-container">
          <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
            <ScrollReveal direction="up" distance={20}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-brand-red/10 text-brand-red font-label-tag text-[11px] uppercase tracking-widest font-bold mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
                <span>FAQ</span>
              </div>
              <h2 className="font-headline-lg text-3xl sm:text-4xl text-brand-navy tracking-tight font-extrabold mb-2">
                Frequently Asked Questions
              </h2>
              <p className="font-body-md text-[16px] sm:text-[17px] text-brand-charcoal-muted max-w-2xl leading-relaxed">
                Quick answers to common questions about our label sizes, printing, and orders.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up" distance={24} delay={0.1}>
            <FaqAccordion />
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 9: FINAL CONVERSION CTA (Direct Inquiries) */}
      <DirectInquiriesCTA />
    </div>
  );
}
