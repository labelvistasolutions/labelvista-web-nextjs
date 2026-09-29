import React from "react";
import Link from "next/link";
import { companyData } from "@/data/company";
import ScrollReveal from "@/components/motion/ScrollReveal";
import ImageReveal from "@/components/motion/ImageReveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";

export const metadata = {
  title: "About Us | Labelvista Solutions",
  description: "Learn about Labelvista Solutions, our 14+ years history, manufacturing infrastructure in Surat, Gujarat, and ISO certified label production.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-[#FAF6F0]">
      {/* Page Header */}
      <section className="relative w-full bg-[#FAF6F0] border-b border-cream-border py-14 lg:py-20">
        <div className="site-container">
          <ScrollReveal direction="up" distance={20} className="flex flex-col items-start gap-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-brand-red/10 text-brand-red font-label-tag text-label-tag uppercase tracking-wider font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
              About Labelvista Solutions
            </div>
            <h1 className="font-headline-xl text-3xl sm:text-4xl lg:text-5xl text-brand-navy tracking-tight font-extrabold leading-[1.12]">
              Reliable Label Manufacturing Since {companyData.establishedYear}.
            </h1>
            <p className="font-body-lg text-[17px] sm:text-[18px] text-brand-charcoal-muted leading-relaxed tracking-[0.012em]">
              We are an Indian label maker with over 14 years of experience. We specialize in barcode labels, thermal rolls, and multi-color printing.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Company Overview & Facility */}
      <section className="relative w-full py-18 sm:py-22 lg:py-26 overflow-hidden">
        {/* Subtle background industrial pattern */}
        <div className="absolute inset-0 bg-dot-pattern opacity-35 pointer-events-none" />

        <div className="relative site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Visual Left */}
            <div className="lg:col-span-6 relative">
              <ImageReveal
                delay={0.1}
                duration={1.1}
                zoomScale={1.05}
                containerClassName="group rounded-2xl bg-white shadow-[0_12px_36px_rgba(12,35,64,0.07)] border border-stone-200/90 aspect-[4/3]"
              >
                <img
                  src="/images/facility/surat-plant.jpg"
                  alt="Industrial label slitting and roll winding manufacturing facility in Surat"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                />

                {/* Integrated Facility Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-navy-dark/95 to-transparent pt-14 pb-5 px-6 flex items-center justify-between text-white">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-brand-green">
                      <span className="material-symbols-outlined text-[20px]">precision_manufacturing</span>
                    </div>
                    <div>
                      <span className="font-headline-sm text-[15px] font-bold text-white block leading-tight">
                        Surat Production Plant
                      </span>
                      <span className="font-body-sm text-[12px] text-stone-300">
                        Gujarat, India
                      </span>
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/10 border border-white/15 text-[11px] font-label-tag font-semibold uppercase tracking-wider text-emerald-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Operational
                  </span>
                </div>
              </ImageReveal>
            </div>

            {/* Content Right */}
            <ScrollReveal direction="up" distance={22} delay={0.15} className="lg:col-span-6 flex flex-col items-start gap-6">
              <div className="space-y-3">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-md bg-brand-green/10 font-label-tag text-[12px] uppercase tracking-widest text-brand-green font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span>
                  Manufacturing Facility
                </span>
                <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-[34px] text-brand-navy tracking-tight font-extrabold leading-tight">
                  Modern Facility in Surat, Gujarat.
                </h2>
              </div>

              <div className="space-y-3.5">
                <p className="font-body-md text-[16px] text-brand-charcoal-muted leading-relaxed">
                  We produce high-grade labels at our production plant in <strong className="text-brand-navy font-semibold">Surat, Gujarat</strong>. Our team brings over 14 years of hands-on experience in label materials, precision adhesives, and high-speed printing.
                </p>
                <p className="font-body-md text-[16px] text-brand-charcoal-muted leading-relaxed">
                  We supply barcode rolls, product packaging labels, and custom tags. Every batch is checked carefully so that it prints clearly and sticks securely.
                </p>
              </div>

              {/* Information Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-1">
                <div className="p-5 rounded-xl bg-white border border-stone-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-brand-navy/30 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="material-symbols-outlined text-[18px] text-brand-navy">location_on</span>
                    <span className="font-label-tag text-[11px] text-stone-500 uppercase tracking-wider font-bold">
                      Location
                    </span>
                  </div>
                  <span className="font-headline-sm text-[16px] text-brand-navy font-extrabold block">
                    Surat, Gujarat, India
                  </span>
                </div>

                <div className="p-5 rounded-xl bg-white border border-stone-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-brand-red/30 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="material-symbols-outlined text-[18px] text-brand-red">verified</span>
                    <span className="font-label-tag text-[11px] text-stone-500 uppercase tracking-wider font-bold">
                      Industry Experience
                    </span>
                  </div>
                  <span className="font-headline-sm text-[16px] text-brand-navy font-extrabold block">
                    14+ Years in Business
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="w-full bg-[#EFE7DA] py-18 sm:py-22 lg:py-26 border-y border-cream-border">
        <div className="site-container">
          {/* Section Heading */}
          <ScrollReveal direction="up" distance={20} className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-md bg-brand-navy/10 font-label-tag text-[12px] uppercase tracking-widest text-brand-navy font-bold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-navy"></span>
              Our Values
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-[34px] text-brand-navy font-extrabold tracking-tight mb-3">
              Committed to Excellence
            </h2>
            <p className="font-body-md text-[16px] text-brand-charcoal-muted leading-relaxed tracking-[0.012em]">
              Driven by values, dedicated to quality, and focused on your success.
            </p>
          </ScrollReveal>

          {/* 4 Value Cards */}
          <StaggerGroup staggerInterval={0.08} baseDelay={0.05} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
            {/* 01 Trust */}
            <StaggerItem index={0}>
              <div className="group relative bg-[#FFFDF9] rounded-xl border border-stone-300/70 card-val-trust p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.06)] hover:-translate-y-1 h-full">
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-stone-200/80 mb-6">
                    <span className="font-label-tag text-[13px] font-bold text-stone-400 num-val-trust transition-colors tracking-widest">
                      01
                    </span>
                    <div className="w-11 h-11 rounded-lg icon-val-trust flex items-center justify-center transition-all duration-300 shadow-xs">
                      <span className="material-symbols-outlined text-[22px]">verified_user</span>
                    </div>
                  </div>
                  <h3 className="font-headline-sm text-xl text-brand-navy font-bold tracking-tight mb-2.5">
                    Trust
                  </h3>
                  <p className="font-body-md text-[15px] text-brand-charcoal-muted leading-relaxed">
                    We keep our promises and deliver every order with care.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-stone-200/60 flex items-center gap-1.5 text-[12px] font-label-tag font-bold uppercase tracking-wider text-brand-navy/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-navy"></span>
                  <span>Dependable Fulfillment</span>
                </div>
              </div>
            </StaggerItem>

            {/* 02 Quality */}
            <StaggerItem index={1}>
              <div className="group relative bg-[#FFFDF9] rounded-xl border border-stone-300/70 card-val-quality p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.06)] hover:-translate-y-1 h-full">
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-stone-200/80 mb-6">
                    <span className="font-label-tag text-[13px] font-bold text-stone-400 num-val-quality transition-colors tracking-widest">
                      02
                    </span>
                    <div className="w-11 h-11 rounded-lg icon-val-quality flex items-center justify-center transition-all duration-300 shadow-xs">
                      <span className="material-symbols-outlined text-[22px]">award_star</span>
                    </div>
                  </div>
                  <h3 className="font-headline-sm text-xl text-brand-navy font-bold tracking-tight mb-2.5">
                    Quality
                  </h3>
                  <p className="font-body-md text-[15px] text-brand-charcoal-muted leading-relaxed">
                    We check every label to keep the print clear and consistent.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-stone-200/60 flex items-center gap-1.5 text-[12px] font-label-tag font-bold uppercase tracking-wider text-brand-red/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
                  <span>Precision Inspection</span>
                </div>
              </div>
            </StaggerItem>

            {/* 03 Relationship */}
            <StaggerItem index={2}>
              <div className="group relative bg-[#FFFDF9] rounded-xl border border-stone-300/70 card-val-relationship p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.06)] hover:-translate-y-1 h-full">
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-stone-200/80 mb-6">
                    <span className="font-label-tag text-[13px] font-bold text-stone-400 num-val-relationship transition-colors tracking-widest">
                      03
                    </span>
                    <div className="w-11 h-11 rounded-lg icon-val-relationship flex items-center justify-center transition-all duration-300 shadow-xs">
                      <span className="material-symbols-outlined text-[22px]">handshake</span>
                    </div>
                  </div>
                  <h3 className="font-headline-sm text-xl text-brand-navy font-bold tracking-tight mb-2.5">
                    Relationship
                  </h3>
                  <p className="font-body-md text-[15px] text-brand-charcoal-muted leading-relaxed">
                    We build long-term relationships with our customers and partners.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-stone-200/60 flex items-center gap-1.5 text-[12px] font-label-tag font-bold uppercase tracking-wider text-brand-green/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span>
                  <span>Long-Term Support</span>
                </div>
              </div>
            </StaggerItem>

            {/* 04 Growth */}
            <StaggerItem index={3}>
              <div className="group relative bg-[#FFFDF9] rounded-xl border border-stone-300/70 card-val-growth p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.06)] hover:-translate-y-1 h-full">
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-stone-200/80 mb-6">
                    <span className="font-label-tag text-[13px] font-bold text-stone-400 num-val-growth transition-colors tracking-widest">
                      04
                    </span>
                    <div className="w-11 h-11 rounded-lg icon-val-growth flex items-center justify-center transition-all duration-300 shadow-xs">
                      <span className="material-symbols-outlined text-[22px]">trending_up</span>
                    </div>
                  </div>
                  <h3 className="font-headline-sm text-xl text-brand-navy font-bold tracking-tight mb-2.5">
                    Growth
                  </h3>
                  <p className="font-body-md text-[15px] text-brand-charcoal-muted leading-relaxed">
                    We keep improving our work, machines, and service.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-stone-200/60 flex items-center gap-1.5 text-[12px] font-label-tag font-bold uppercase tracking-wider text-amber-700/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                  <span>Continuous Innovation</span>
                </div>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* Certifications & Quality Standards */}
      <section className="relative w-full py-18 sm:py-22 lg:py-26 bg-[#FAF6F0] overflow-hidden">
        {/* Subtle engineering dot pattern */}
        <div className="absolute inset-0 bg-dot-pattern opacity-25 pointer-events-none" />

        <div className="relative site-container">
          {/* Section Heading */}
          <ScrollReveal direction="up" distance={20} className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-md bg-brand-green/10 font-label-tag text-[12px] uppercase tracking-widest text-brand-green font-bold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span>
              Quality &amp; Standards
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-[34px] text-brand-navy font-extrabold tracking-tight mb-3">
              Certified Manufacturing Quality
            </h2>
            <p className="font-body-md text-[16px] text-brand-charcoal-muted leading-relaxed tracking-[0.012em]">
              Our production follows verified standards to keep every batch reliable, accurate, and compliant.
            </p>
          </ScrollReveal>

          {/* Balanced Structured Layout: Primary ISO Highlight + 4 Statutory Registrations */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Primary Quality Standard: ISO 9001:2015 */}
            <ScrollReveal direction="up" distance={24} delay={0.1} className="lg:col-span-5 h-full">
              <div className="bg-white rounded-xl border-2 border-brand-green/30 p-7 sm:p-9 flex flex-col justify-between shadow-[0_4px_20px_rgba(35,104,66,0.06)] hover:border-brand-green/60 hover:shadow-[0_8px_28px_rgba(35,104,66,0.12)] transition-all duration-300 h-full">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-brand-green/10 text-brand-green font-label-tag text-[11px] uppercase tracking-wider font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span>
                      Primary Standard
                    </span>
                    <div className="w-11 h-11 rounded-lg bg-brand-green/10 border border-brand-green/20 flex items-center justify-center text-brand-green">
                      <span className="material-symbols-outlined text-[24px]">verified</span>
                    </div>
                  </div>

                  <h3 className="font-headline-sm text-xl sm:text-2xl text-brand-navy font-bold tracking-tight mb-3">
                    ISO 9001:2015 Quality Certified
                  </h3>

                  <p className="font-body-md text-[15px] text-brand-charcoal-muted leading-relaxed mb-6">
                    Our quality management system ensures consistent print sharpness, precise die-cutting, and thorough inspection on every label roll.
                  </p>
                </div>

                <div className="pt-5 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500 font-label-tag">
                  <span className="font-bold text-brand-green uppercase tracking-wider">
                    Quality Management Certified
                  </span>
                  <span className="text-stone-400">Standardized Ops</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Secondary Registrations (4 items in a 2x2 grid) */}
            <StaggerGroup staggerInterval={0.08} baseDelay={0.15} className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {/* IEC Code */}
              <StaggerItem index={0}>
                <div className="bg-white rounded-xl border border-stone-200/80 p-5 sm:p-6 flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-brand-navy/30 hover:shadow-md transition-all duration-300 h-full">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-label-tag text-[11px] font-bold text-stone-400 uppercase tracking-wider">
                      Trade Certification
                    </span>
                    <div className="w-8 h-8 rounded-md bg-brand-navy/5 flex items-center justify-center text-brand-navy">
                      <span className="material-symbols-outlined text-[18px]">public</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-[16px] text-brand-navy font-bold mb-1">
                      IEC Code Certified
                    </h4>
                    <p className="font-body-sm text-[13px] text-brand-charcoal-muted">
                      National &amp; International Import-Export capability
                    </p>
                  </div>
                </div>
              </StaggerItem>

              {/* Company Trademark */}
              <StaggerItem index={1}>
                <div className="bg-white rounded-xl border border-stone-200/80 p-5 sm:p-6 flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-brand-navy/30 hover:shadow-md transition-all duration-300 h-full">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-label-tag text-[11px] font-bold text-stone-400 uppercase tracking-wider">
                      Brand Identity
                    </span>
                    <div className="w-8 h-8 rounded-md bg-brand-navy/5 flex items-center justify-center text-brand-navy">
                      <span className="material-symbols-outlined text-[18px]">branding_watermark</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-[16px] text-brand-navy font-bold mb-1">
                      Registered Trademark
                    </h4>
                    <p className="font-body-sm text-[13px] text-brand-charcoal-muted">
                      Protected brand identity &amp; product standards
                    </p>
                  </div>
                </div>
              </StaggerItem>

              {/* Udyog Aadhar */}
              <StaggerItem index={2}>
                <div className="bg-white rounded-xl border border-stone-200/80 p-5 sm:p-6 flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-amber-600/30 hover:shadow-md transition-all duration-300 h-full">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-label-tag text-[11px] font-bold text-stone-400 uppercase tracking-wider">
                      MSME Recognition
                    </span>
                    <div className="w-8 h-8 rounded-md bg-amber-600/10 flex items-center justify-center text-amber-700">
                      <span className="material-symbols-outlined text-[18px]">domain</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-[16px] text-brand-navy font-bold mb-1">
                      Udyog Aadhar Certified
                    </h4>
                    <p className="font-body-sm text-[13px] text-brand-charcoal-muted">
                      Government Recognized MSME Enterprise
                    </p>
                  </div>
                </div>
              </StaggerItem>

              {/* Quality Testing */}
              <StaggerItem index={3}>
                <div className="bg-white rounded-xl border border-stone-200/80 p-5 sm:p-6 flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-brand-green/30 hover:shadow-md transition-all duration-300 h-full">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-label-tag text-[11px] font-bold text-stone-400 uppercase tracking-wider">
                      Batch Inspection
                    </span>
                    <div className="w-8 h-8 rounded-md bg-brand-green/10 flex items-center justify-center text-brand-green">
                      <span className="material-symbols-outlined text-[18px]">fact_check</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-[16px] text-brand-navy font-bold mb-1">
                      100% Pre-Shipment Tested
                    </h4>
                    <p className="font-body-sm text-[13px] text-brand-charcoal-muted">
                      Adhesion strength, clean edges, and scan testing
                    </p>
                  </div>
                </div>
              </StaggerItem>
            </StaggerGroup>
          </div>

          {/* Direct CTA */}
          <ScrollReveal direction="up" distance={16} delay={0.2} className="mt-14 sm:mt-16 text-center">
            <Link
              href="/contact"
              className="btn-primary px-8 py-3.5 rounded-lg font-label-tag text-[12px] uppercase tracking-wider font-bold"
            >
              <span>Contact Our Team</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
