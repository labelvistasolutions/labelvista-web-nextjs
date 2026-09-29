import React from "react";
import Link from "next/link";
import { printingCapabilities } from "@/data/printing";
import ScrollReveal from "@/components/motion/ScrollReveal";
import ImageReveal from "@/components/motion/ImageReveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";

export const metadata = {
  title: "Printing Work & Machinery Capabilities | Labelvista Solutions",
  description: "Explore our 6-color Flexo UV, 2 & 4-color Flat Belt printing machines, varnish surface finishing, and hologram security label converting.",
};

export default function PrintingWorkPage() {
  return (
    <div className="flex flex-col w-full bg-[#FAF6F0]">
      {/* Page Hero */}
      <section className="relative w-full bg-[#FAF6F0] border-b border-cream-border py-14 sm:py-18 lg:py-20 overflow-hidden">
        {/* Subtle background precision pattern */}
        <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

        <div className="relative site-container">
          <ScrollReveal direction="up" distance={20} className="flex flex-col items-start gap-3.5 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-brand-red/10 text-brand-red font-label-tag text-[12px] uppercase tracking-wider font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
              Printing &amp; Production Lines
            </div>
            <h1 className="font-headline-xl text-3xl sm:text-4xl lg:text-5xl text-brand-navy tracking-tight font-extrabold leading-[1.12]">
              Clear Printing. Quality You Can See.
            </h1>
            <p className="font-body-lg text-[16px] sm:text-[17px] text-brand-charcoal-muted leading-relaxed tracking-[0.012em]">
              We use 6-color flexo UV machines, flat belt presses, and security foil units. We print barcode rolls, product packaging labels, and clothing tags with sharp text and long-lasting colors.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Capability Sections (Alternating Editorial Layouts) */}
      <div className="w-full flex flex-col">
        {printingCapabilities.map((cap, index) => {
          // Make the 3rd capability a rich Dark Navy section for striking visual rhythm
          const isDarkSection = index === 2;
          const isEven = index % 2 === 1;

          const badgeBg =
            cap.badgeColor === "green"
              ? "bg-brand-green text-white"
              : cap.badgeColor === "red"
              ? "bg-brand-red text-white"
              : "bg-brand-navy text-white";

          if (isDarkSection) {
            return (
              <section
                key={cap.id}
                id={cap.id}
                className="w-full py-16 sm:py-20 lg:py-24 bg-gradient-navy-red text-white border-y border-white/10 relative overflow-hidden"
              >
                {/* Subtle dark grid background */}
                <div className="absolute inset-0 bg-dot-dark opacity-35 pointer-events-none" />

                <div className="relative site-container">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                    {/* Visual Side */}
                    <div className="lg:col-span-6">
                      <ImageReveal
                        delay={0.1}
                        duration={1.1}
                        zoomScale={1.05}
                        containerClassName="group rounded-xl bg-[#0A192F] border border-white/12 aspect-[16/11] shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
                      >
                        <img
                          src={cap.image}
                          alt={cap.imageAlt}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                        />
                        <span
                          className={`absolute top-3.5 left-3.5 px-3 py-1 rounded-md ${badgeBg} font-label-tag text-[11px] uppercase tracking-wider font-bold shadow-sm border border-white/10`}
                        >
                          {cap.badge}
                        </span>
                      </ImageReveal>
                    </div>

                    {/* Content Side */}
                    <ScrollReveal direction="up" distance={22} delay={0.15} className="lg:col-span-6 flex flex-col items-start gap-4 sm:gap-5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 border border-white/15 font-label-tag text-[11.5px] uppercase tracking-widest text-emerald-300 font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        {cap.subtitle}
                      </span>

                      <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-[32px] text-white tracking-tight font-extrabold leading-tight">
                        {cap.title}
                      </h2>

                      <p className="font-body-md text-[15.5px] text-slate-300 leading-relaxed">
                        {cap.description}
                      </p>

                      {/* Machinery Specification Tag */}
                      <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.04] border border-white/10 w-full flex flex-col gap-0.5">
                        <span className="font-label-tag text-[10.5px] text-slate-400 uppercase tracking-wider font-bold">
                          Installed Machinery
                        </span>
                        <span className="font-headline-sm text-[15px] sm:text-[15.5px] text-white font-bold">
                          {cap.machinery}
                        </span>
                      </div>

                      {/* Highlights */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 w-full pt-1">
                        {cap.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2.5">
                            <span className="material-symbols-outlined text-emerald-400 text-[18px] shrink-0 mt-0.5">
                              check_circle
                            </span>
                            <span className="font-body-sm text-[13.5px] sm:text-[14px] text-slate-200 leading-snug">
                              {h}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Action CTA */}
                      <Link
                        href={`/contact?subject=${encodeURIComponent(cap.title)}`}
                        className="btn-primary mt-1 px-6 sm:px-7 py-3 rounded-lg font-label-tag text-[12px] uppercase tracking-wider font-bold"
                      >
                        <span>Inquire About {cap.badge}</span>
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </Link>
                    </ScrollReveal>
                  </div>
                </div>
              </section>
            );
          }

          // Standard Light Sections with Alternating Layout
          return (
            <section
              key={cap.id}
              id={cap.id}
              className={`w-full py-16 sm:py-20 lg:py-24 ${
                index % 2 === 0 ? "bg-[#FAF6F0]" : "bg-[#F5EFE6]"
              } border-b border-cream-border relative overflow-hidden`}
            >
              <div className="site-container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                  {/* Visual Column */}
                  <div className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <ImageReveal
                      delay={0.1}
                      duration={1.1}
                      zoomScale={1.05}
                      containerClassName="group rounded-xl bg-white border border-stone-200/90 aspect-[16/11] shadow-[0_4px_20px_rgba(12,35,64,0.04)]"
                    >
                      <img
                        src={cap.image}
                        alt={cap.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                      />
                      <span
                        className={`absolute top-3.5 left-3.5 px-3 py-1 rounded-md ${badgeBg} font-label-tag text-[11px] uppercase tracking-wider font-bold shadow-sm`}
                      >
                        {cap.badge}
                      </span>
                    </ImageReveal>
                  </div>

                  {/* Content Column */}
                  <ScrollReveal
                    direction="up"
                    distance={22}
                    delay={0.15}
                    className={`lg:col-span-6 flex flex-col items-start gap-4 sm:gap-5 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-brand-navy/10 font-label-tag text-[11.5px] uppercase tracking-widest text-brand-navy font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-navy"></span>
                      {cap.subtitle}
                    </span>

                    <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-[32px] text-brand-navy tracking-tight font-extrabold leading-tight">
                      {cap.title}
                    </h2>

                    <p className="font-body-md text-[15.5px] text-brand-charcoal-muted leading-relaxed">
                      {cap.description}
                    </p>

                    {/* Machinery Specification Tag */}
                    <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-stone-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] w-full flex flex-col gap-0.5">
                      <span className="font-label-tag text-[10.5px] text-stone-500 uppercase tracking-wider font-bold">
                        Installed Machinery
                      </span>
                      <span className="font-headline-sm text-[15px] sm:text-[15.5px] text-brand-navy font-bold">
                        {cap.machinery}
                      </span>
                    </div>

                    {/* Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 w-full pt-1">
                      {cap.highlights.map((h, i) => (
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

                    {/* Action CTA */}
                    <Link
                      href={`/contact?subject=${encodeURIComponent(cap.title)}`}
                      className="btn-navy mt-1 px-6 sm:px-7 py-3 rounded-lg font-label-tag text-[12px] uppercase tracking-wider font-bold"
                    >
                      <span>Inquire About {cap.badge}</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </Link>
                  </ScrollReveal>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Technical Precision Summary & Engineering Specifications */}
      <section className="w-full bg-gradient-navy-red text-white py-18 sm:py-22 lg:py-26 border-t border-white/10 relative overflow-hidden">
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
              <div className="group rounded-xl bg-[#061325]/75 border border-white/10 p-7 sm:p-8 lg:p-9 flex flex-col justify-between transition-colors duration-300 hover:border-brand-red/40 shadow-xs h-full">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                    <span className="font-label-tag text-[11px] uppercase tracking-widest text-slate-400 font-bold">
                      SPEC 01 / TOLERANCE
                    </span>
                    <span className="w-2 h-2 rounded-full bg-brand-red"></span>
                  </div>

                  <span className="font-headline-xl text-3xl sm:text-4xl lg:text-[40px] text-brand-red font-extrabold tracking-tight block mb-2 leading-none">
                    ±0.05 mm
                  </span>

                  <h3 className="font-headline-sm text-lg text-white font-bold tracking-tight mb-2">
                    Cutting Accuracy
                  </h3>

                  <p className="font-body-sm text-[14px] text-slate-300 leading-relaxed">
                    Electronic optical sensors calibrate real-time web tension to ensure dies cut within strict ±0.05 mm tolerances.
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
              <div className="group rounded-xl bg-[#061325]/75 border border-white/10 p-7 sm:p-8 lg:p-9 flex flex-col justify-between transition-colors duration-300 hover:border-emerald-400/40 shadow-xs h-full">
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

            {/* Spec 3: Standard Dies */}
            <StaggerItem index={2}>
              <div className="group rounded-xl bg-[#061325]/75 border border-white/10 p-7 sm:p-8 lg:p-9 flex flex-col justify-between transition-colors duration-300 hover:border-white/30 shadow-xs h-full">
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

          {/* Bottom Direct CTA */}
          <ScrollReveal direction="up" distance={16} delay={0.2} className="mt-14 sm:mt-16 text-center">
            <Link
              href="/contact"
              className="btn-primary px-8 py-3.5 rounded-lg font-label-tag text-[12px] uppercase tracking-wider font-bold"
            >
              <span>Get Custom Print Quotation</span>
              <span className="material-symbols-outlined text-[16px]">send</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
