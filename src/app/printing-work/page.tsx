import React from "react";
import Link from "next/link";
import { printingCapabilities } from "@/data/printing";
import DirectInquiriesCTA from "@/components/ui/DirectInquiriesCTA";
import ScrollReveal from "@/components/motion/ScrollReveal";
import ImageReveal from "@/components/motion/ImageReveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";

export const metadata = {
  title: "Printing Work & Machinery Capabilities | Labelvista Solutions",
  description: "Explore our 6-color Flexo UV, 2 & 4-color Flat Belt printing machines, varnish surface finishing, and hologram security label converting.",
};

export default function PrintingWorkPage() {
  const cap1 = printingCapabilities[0]; // 6-Color Flexo UV
  const cap2 = printingCapabilities[1]; // Flat Belt
  const cap3 = printingCapabilities[2]; // Textile Lines
  const cap4 = printingCapabilities[3]; // Security Hologram

  return (
    <div className="flex flex-col w-full bg-[#FAF6F0]">
      {/* Continuous Page Hero & Header */}
      <section className="relative w-full pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-12 overflow-hidden">
        {/* Subtle ambient grid pattern */}
        <div className="absolute inset-0 bg-grid-light opacity-25 pointer-events-none" />

        <div className="relative site-container">
          <ScrollReveal direction="up" distance={20} className="flex flex-col items-start gap-3.5 w-full">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-brand-red/10 text-brand-red font-label-tag text-[12px] uppercase tracking-wider font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
              Printing &amp; Production Lines
            </div>
            <h1 className="font-headline-xl text-3xl sm:text-4xl lg:text-5xl text-brand-navy tracking-tight font-extrabold leading-[1.15]">
              Clear Printing. Quality You Can See.
            </h1>
            <p className="font-body-lg text-[16px] sm:text-[17px] lg:text-[18px] text-brand-charcoal-muted leading-relaxed tracking-[0.012em] max-w-5xl">
              We use 6-color flexo UV machines, flat belt presses, and security foil units. We print barcode rolls, product packaging labels, and clothing tags with sharp text and long-lasting colors.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CAPABILITY 1: HERO SPOTLIGHT (6-Color Flexo UV - Large Wide Dominant Stage) */}
      {/* ========================================================================= */}
      <section id={cap1.id} className="w-full pb-16 sm:pb-20 lg:pb-24">
        <div className="site-container flex flex-col gap-8 sm:gap-10">
          {/* Dominant Wide Machinery Stage */}
          <ScrollReveal direction="up" distance={24} delay={0.1}>
            <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#061325] border border-cream-border shadow-[0_12px_40px_rgba(12,35,64,0.08)] aspect-[16/9] sm:aspect-[21/10] lg:aspect-[21/9] group">
              <img
                src={cap1.image}
                alt={cap1.imageAlt}
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
              
              {/* Overlay Badge on Image */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                <span className="px-3.5 py-1.5 rounded-lg bg-brand-navy/90 backdrop-blur-md text-white border border-white/20 font-label-tag text-[11px] sm:text-[12px] uppercase tracking-wider font-bold shadow-md">
                  {cap1.badge} &bull; PRIMARY PRODUCTION LINE
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Editorial Content Below Large Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Title & Description */}
            <ScrollReveal direction="up" distance={20} delay={0.15} className="lg:col-span-7 flex flex-col items-start gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-red" />
                <span className="font-label-mono text-xs uppercase tracking-widest text-brand-navy font-bold">
                  {cap1.subtitle}
                </span>
              </div>

              <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-[34px] text-brand-navy tracking-tight font-extrabold leading-tight">
                {cap1.title}
              </h2>

              <p className="font-body-md text-[16px] sm:text-[17px] text-brand-charcoal-muted leading-relaxed">
                {cap1.description}
              </p>

              {/* Machinery Specification */}
              <div className="p-4 rounded-xl bg-white border border-cream-border w-full flex flex-col gap-1 shadow-2xs mt-1">
                <span className="font-label-tag text-[10.5px] text-brand-charcoal-muted uppercase tracking-wider font-bold">
                  Installed Machinery
                </span>
                <span className="font-headline-sm text-[15px] sm:text-[16px] text-brand-navy font-bold">
                  {cap1.machinery}
                </span>
              </div>
            </ScrollReveal>

            {/* Highlights & Action */}
            <ScrollReveal direction="up" distance={20} delay={0.2} className="lg:col-span-5 flex flex-col justify-between gap-6 bg-white p-6 sm:p-7 rounded-2xl border border-cream-border shadow-sm">
              <div className="flex flex-col gap-3">
                <span className="font-label-tag text-xs uppercase tracking-wider text-brand-navy font-bold pb-2 border-b border-cream-border/60">
                  Key Capabilities
                </span>
                <div className="flex flex-col gap-2.5">
                  {cap1.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-brand-red text-[18px] shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-[13.5px] sm:text-[14px] text-brand-charcoal leading-snug">
                        {h}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href={`/contact?subject=${encodeURIComponent(cap1.title)}`}
                className="btn-primary w-full py-3.5 rounded-xl font-label-tag text-[12px] uppercase tracking-wider font-bold flex items-center justify-center gap-2"
              >
                <span>Inquire About {cap1.badge}</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CAPABILITY 2: SIDE-BY-SIDE ASYMMETRIC (2 & 4-Color Flat Belt Printing)     */}
      {/* ========================================================================= */}
      <section id={cap2.id} className="w-full py-16 sm:py-20 lg:py-24">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Large Machinery Visual (Left, 7 Cols) */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="up" distance={24} delay={0.1}>
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-cream-border aspect-[16/11] shadow-[0_8px_30px_rgba(12,35,64,0.06)] group">
                  <img
                    src={cap2.image}
                    alt={cap2.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-4 left-4 sm:top-5 sm:left-5">
                    <span className="px-3.5 py-1.5 rounded-lg bg-brand-green text-white font-label-tag text-[11px] uppercase tracking-wider font-bold shadow-sm">
                      {cap2.badge}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Content Side (Right, 5 Cols) */}
            <ScrollReveal direction="up" distance={22} delay={0.15} className="lg:col-span-5 flex flex-col items-start gap-4 sm:gap-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-brand-navy/10 font-label-tag text-[11.5px] uppercase tracking-widest text-brand-navy font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span>
                {cap2.subtitle}
              </span>

              <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-[32px] text-brand-navy tracking-tight font-extrabold leading-tight">
                {cap2.title}
              </h2>

              <p className="font-body-md text-[15.5px] sm:text-[16px] text-brand-charcoal-muted leading-relaxed">
                {cap2.description}
              </p>

              {/* Machinery Specification */}
              <div className="p-4 rounded-xl bg-white border border-cream-border w-full flex flex-col gap-1 shadow-2xs">
                <span className="font-label-tag text-[10.5px] text-brand-charcoal-muted uppercase tracking-wider font-bold">
                  Installed Machinery
                </span>
                <span className="font-headline-sm text-[15px] sm:text-[15.5px] text-brand-navy font-bold">
                  {cap2.machinery}
                </span>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-1 gap-2.5 w-full pt-1">
                {cap2.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-brand-green text-[18px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span className="font-body-sm text-[13.5px] sm:text-[14px] text-brand-charcoal leading-snug">
                      {h}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href={`/contact?subject=${encodeURIComponent(cap2.title)}`}
                className="btn-navy mt-2 px-7 py-3.5 rounded-xl font-label-tag text-[12px] uppercase tracking-wider font-bold inline-flex items-center gap-2"
              >
                <span>Inquire About {cap2.badge}</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CAPABILITY 3: ALTERNATING ASYMMETRIC (Multi-Color Textile & Garment)      */}
      {/* ========================================================================= */}
      <section id={cap3.id} className="w-full py-16 sm:py-20 lg:py-24">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Content Side (Left on Desktop, 5 Cols) */}
            <ScrollReveal direction="up" distance={22} delay={0.15} className="lg:col-span-5 lg:order-1 flex flex-col items-start gap-4 sm:gap-5 order-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-brand-navy/10 font-label-tag text-[11.5px] uppercase tracking-widest text-brand-navy font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-navy"></span>
                {cap3.subtitle}
              </span>

              <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-[32px] text-brand-navy tracking-tight font-extrabold leading-tight">
                {cap3.title}
              </h2>

              <p className="font-body-md text-[15.5px] sm:text-[16px] text-brand-charcoal-muted leading-relaxed">
                {cap3.description}
              </p>

              {/* Machinery Specification */}
              <div className="p-4 rounded-xl bg-white border border-cream-border w-full flex flex-col gap-1 shadow-2xs">
                <span className="font-label-tag text-[10.5px] text-brand-charcoal-muted uppercase tracking-wider font-bold">
                  Installed Machinery
                </span>
                <span className="font-headline-sm text-[15px] sm:text-[15.5px] text-brand-navy font-bold">
                  {cap3.machinery}
                </span>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-1 gap-2.5 w-full pt-1">
                {cap3.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-brand-navy text-[18px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span className="font-body-sm text-[13.5px] sm:text-[14px] text-brand-charcoal leading-snug">
                      {h}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href={`/contact?subject=${encodeURIComponent(cap3.title)}`}
                className="btn-navy mt-2 px-7 py-3.5 rounded-xl font-label-tag text-[12px] uppercase tracking-wider font-bold inline-flex items-center gap-2"
              >
                <span>Inquire About {cap3.badge}</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </ScrollReveal>

            {/* Large Machinery Visual (Right on Desktop, 7 Cols) */}
            <div className="lg:col-span-7 lg:order-2 order-1">
              <ScrollReveal direction="up" distance={24} delay={0.1}>
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-cream-border aspect-[16/11] shadow-[0_8px_30px_rgba(12,35,64,0.06)] group">
                  <img
                    src={cap3.image}
                    alt={cap3.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-4 left-4 sm:top-5 sm:left-5">
                    <span className="px-3.5 py-1.5 rounded-lg bg-brand-navy text-white font-label-tag text-[11px] uppercase tracking-wider font-bold shadow-sm">
                      {cap3.badge}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CAPABILITY 4: SECURITY & HOLOGRAM CONVERTING (Precision Security Focus)   */}
      {/* ========================================================================= */}
      <section id={cap4.id} className="w-full py-16 sm:py-20 lg:pb-28">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Large Machinery Visual (Left, 7 Cols) */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="up" distance={24} delay={0.1}>
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-cream-border aspect-[16/11] shadow-[0_8px_30px_rgba(12,35,64,0.06)] group">
                  <img
                    src={cap4.image}
                    alt={cap4.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-4 left-4 sm:top-5 sm:left-5">
                    <span className="px-3.5 py-1.5 rounded-lg bg-brand-red text-white font-label-tag text-[11px] uppercase tracking-wider font-bold shadow-sm">
                      {cap4.badge}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Content Side (Right, 5 Cols) */}
            <ScrollReveal direction="up" distance={22} delay={0.15} className="lg:col-span-5 flex flex-col items-start gap-4 sm:gap-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-brand-red/10 font-label-tag text-[11.5px] uppercase tracking-widest text-brand-red font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
                {cap4.subtitle}
              </span>

              <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-[32px] text-brand-navy tracking-tight font-extrabold leading-tight">
                {cap4.title}
              </h2>

              <p className="font-body-md text-[15.5px] sm:text-[16px] text-brand-charcoal-muted leading-relaxed">
                {cap4.description}
              </p>

              {/* Machinery Specification */}
              <div className="p-4 rounded-xl bg-white border border-cream-border w-full flex flex-col gap-1 shadow-2xs">
                <span className="font-label-tag text-[10.5px] text-brand-charcoal-muted uppercase tracking-wider font-bold">
                  Installed Machinery
                </span>
                <span className="font-headline-sm text-[15px] sm:text-[15.5px] text-brand-navy font-bold">
                  {cap4.machinery}
                </span>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-1 gap-2.5 w-full pt-1">
                {cap4.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-brand-red text-[18px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span className="font-body-sm text-[13.5px] sm:text-[14px] text-brand-charcoal leading-snug">
                      {h}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href={`/contact?subject=${encodeURIComponent(cap4.title)}`}
                className="btn-primary mt-2 px-7 py-3.5 rounded-xl font-label-tag text-[12px] uppercase tracking-wider font-bold inline-flex items-center gap-2"
              >
                <span>Inquire About {cap4.badge}</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* TECHNICAL PRECISION SUMMARY & ENGINEERING SPECIFICATIONS                  */}
      {/* ========================================================================= */}
      <section className="w-full bg-gradient-navy-red text-white py-18 sm:py-22 lg:py-26 relative overflow-hidden">
        {/* Engineering dot background */}
        <div className="absolute inset-0 bg-dot-dark opacity-30 pointer-events-none" />

        <div className="relative site-container">
          {/* Section Heading */}
          <ScrollReveal direction="up" distance={20} className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-md bg-white/10 font-label-tag text-[12px] uppercase tracking-widest text-emerald-300 font-bold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Quality Assurance
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-[34px] text-white font-extrabold tracking-tight mb-3">
              Precision Engineering at Every Step
            </h2>
            <p className="font-body-md text-[16px] text-slate-300 leading-relaxed">
              Every roll and sheet is checked to make sure colors match and cuts are accurate.
            </p>
          </ScrollReveal>

          {/* 3 Refined Engineering Spec Cards */}
          <StaggerGroup staggerInterval={0.1} baseDelay={0.05} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {/* Spec 1: Cutting Accuracy */}
            <StaggerItem index={0}>
              <div className="group rounded-2xl bg-[#061325]/75 border border-white/10 p-7 sm:p-8 lg:p-9 flex flex-col justify-between transition-colors duration-300 hover:border-brand-red/40 shadow-xs h-full">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                    <span className="font-label-tag text-[11px] uppercase tracking-widest text-slate-400 font-bold">
                      SPEC 01 / TOLERANCE
                    </span>
                    <span className="w-2 h-2 rounded-full bg-brand-red"></span>
                  </div>

                  <span className="font-headline-xl text-3xl sm:text-4xl lg:text-[40px] text-brand-red font-extrabold tracking-tight block mb-2 leading-none">
                    &plusmn;0.05 mm
                  </span>

                  <h3 className="font-headline-sm text-lg text-white font-bold tracking-tight mb-2">
                    Cutting Accuracy
                  </h3>

                  <p className="font-body-sm text-[14px] text-slate-300 leading-relaxed">
                    Electronic optical sensors calibrate real-time web tension to ensure dies cut within strict &plusmn;0.05 mm tolerances.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11.5px] font-label-tag text-slate-400 font-bold uppercase tracking-wider">
                  <span>Registration Control</span>
                  <span className="text-emerald-400">Calibrated</span>
                </div>
              </div>
            </StaggerItem>

            {/* Spec 2: UV Flexo Printing */}
            <StaggerItem index={1}>
              <div className="group rounded-2xl bg-[#061325]/75 border border-white/10 p-7 sm:p-8 lg:p-9 flex flex-col justify-between transition-colors duration-300 hover:border-emerald-400/40 shadow-xs h-full">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                    <span className="font-label-tag text-[11px] uppercase tracking-widest text-slate-400 font-bold">
                      SPEC 02 / UV CURING
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  </div>

                  <span className="font-headline-xl text-3xl sm:text-4xl lg:text-[40px] text-emerald-400 font-extrabold tracking-tight block mb-2 leading-none">
                    6 Color UV
                  </span>

                  <h3 className="font-headline-sm text-lg text-white font-bold tracking-tight mb-2">
                    UV Flexo Printing
                  </h3>

                  <p className="font-body-sm text-[14px] text-slate-300 leading-relaxed">
                    High-output UV curing stations instantly dry specialized inks so multi-color prints stay vibrant, smudge-free, and crisp.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11.5px] font-label-tag text-slate-400 font-bold uppercase tracking-wider">
                  <span>Instant Polymerization</span>
                  <span className="text-emerald-400">Active</span>
                </div>
              </div>
            </StaggerItem>

            {/* Spec 3: Ready Tooling */}
            <StaggerItem index={2}>
              <div className="group rounded-2xl bg-[#061325]/75 border border-white/10 p-7 sm:p-8 lg:p-9 flex flex-col justify-between transition-colors duration-300 hover:border-white/30 shadow-xs h-full">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                    <span className="font-label-tag text-[11px] uppercase tracking-widest text-slate-400 font-bold">
                      SPEC 03 / READY TOOLING
                    </span>
                    <span className="w-2 h-2 rounded-full bg-white"></span>
                  </div>

                  <span className="font-headline-xl text-3xl sm:text-4xl lg:text-[40px] text-white font-extrabold tracking-tight block mb-2 leading-none">
                    24+ Sizes
                  </span>

                  <h3 className="font-headline-sm text-lg text-white font-bold tracking-tight mb-2">
                    Standard Dies Ready
                  </h3>

                  <p className="font-body-sm text-[14px] text-slate-300 leading-relaxed">
                    Pre-configured rotary dies and matrix converters ready for immediate high-volume roll and A4 sheet production.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11.5px] font-label-tag text-slate-400 font-bold uppercase tracking-wider">
                  <span>Tooling Inventory</span>
                  <span className="text-emerald-400">In Stock</span>
                </div>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* Direct Inquiries & Custom Orders CTA */}
      <DirectInquiriesCTA bgWrapperClass="w-full bg-[#FAF6F0] pt-16 sm:pt-20 pb-20 sm:pb-24 lg:pb-28" />
    </div>
  );
}
