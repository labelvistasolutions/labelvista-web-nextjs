import React from "react";
import Link from "next/link";
import ScrollReveal from "@/components/motion/ScrollReveal";

interface DirectInquiriesCTAProps {
  className?: string;
  bgWrapperClass?: string;
}

export default function DirectInquiriesCTA({
  className = "",
  bgWrapperClass = "w-full bg-[#FAF6F0] pb-20 sm:pb-24 lg:pb-28",
}: DirectInquiriesCTAProps) {
  return (
    <section className={`${bgWrapperClass} ${className}`}>
      <div className="site-container">
        <ScrollReveal
          direction="up"
          distance={24}
          className="rounded-3xl bg-gradient-to-br from-[#061325] via-[#0A192F] to-[#16070E] text-white p-10 sm:p-14 lg:p-16 xl:p-20 shadow-2xl border border-white/15 relative overflow-hidden flex flex-col justify-between gap-10 min-h-[420px] sm:min-h-[460px] lg:min-h-[490px]"
        >
          {/* Background Ambient Glows & Grid */}
          <div className="absolute inset-0 bg-grid-dark opacity-15 pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-red/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-brand-navy-light/20 blur-3xl pointer-events-none" />

          {/* Top Row: Eyebrow + Headlines + Supporting Context */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            <div className="lg:col-span-8 flex flex-col items-start gap-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-cream-surface font-label-mono text-[11px] sm:text-[12px] uppercase tracking-widest font-semibold backdrop-blur-sm shadow-xs">
                <span className="w-2 h-2 rounded-full bg-brand-red shrink-0 shadow-xs animate-pulse"></span>
                <span>DIRECT INQUIRIES &amp; CUSTOM ORDERS</span>
              </div>

              <h3 className="font-headline-lg text-2xl sm:text-4xl lg:text-[40px] text-white tracking-tight leading-[1.14] font-extrabold max-w-2xl">
                Need Custom Labels Engineered for Your Business?
              </h3>

              <p className="font-body-lg text-[16px] sm:text-[18px] text-cream-border/90 leading-relaxed font-normal max-w-xl">
                Get direct factory pricing, tailored adhesive recommendations, and fast sample delivery from our Surat manufacturing facility.
              </p>
            </div>

            {/* Right CTA Actions */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-stretch gap-4 shrink-0 w-full">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center justify-center gap-2.5 w-full h-[52px] px-7 rounded-xl font-label-tag text-[13px] uppercase tracking-wider font-bold shadow-lg hover:shadow-brand-red/30 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Request a Quote</span>
                <span className="material-symbols-outlined text-[18px] leading-none">send</span>
              </Link>
              <a
                href="tel:+919898706129"
                className="inline-flex items-center justify-center gap-2.5 w-full h-[52px] px-7 rounded-xl bg-white hover:bg-[#FAF6F0] text-brand-navy border border-white font-label-tag text-[13px] uppercase tracking-wider font-extrabold shadow-md hover:shadow-white/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span className="material-symbols-outlined text-[19px] leading-none text-brand-navy">call</span>
                <span>Call Direct Support</span>
              </a>
            </div>
          </div>

          {/* Bottom Value Badges Strip */}
          <div className="pt-8 border-t border-white/12 grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-brand-red shrink-0 border border-white/10">
                <span className="material-symbols-outlined text-[20px]">schedule</span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-tag text-xs font-bold text-white uppercase tracking-wider">Quick Response</span>
                <span className="text-xs text-cream-border/75 font-body-sm mt-0.5">Prompt quotes &amp; fast response</span>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-brand-gold shrink-0 border border-white/10">
                <span className="material-symbols-outlined text-[20px]">tune</span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-tag text-xs font-bold text-white uppercase tracking-wider">Custom Engineering</span>
                <span className="text-xs text-cream-border/75 font-body-sm mt-0.5">Custom sizes, dies &amp; adhesives</span>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-brand-green shrink-0 border border-white/10">
                <span className="material-symbols-outlined text-[20px]">verified</span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-tag text-xs font-bold text-white uppercase tracking-wider">ISO 9001:2015</span>
                <span className="text-xs text-cream-border/75 font-body-sm mt-0.5">Certified manufacturing standards</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
