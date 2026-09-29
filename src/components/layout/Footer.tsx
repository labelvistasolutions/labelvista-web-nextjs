import React from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-navy-red text-[#FAF6F0] pt-12 sm:pt-14 lg:pt-16 border-t border-white/10 relative overflow-hidden">
      {/* Subtle Engineering Grid Background */}
      <div className="absolute inset-0 bg-grid-dark opacity-10 pointer-events-none"></div>

      <div className="site-container relative z-10">
        <StaggerGroup
          staggerInterval={0.07}
          baseDelay={0.05}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 sm:pb-12"
        >
          {/* Column 1: Company & Logo */}
          <StaggerItem index={0} className="lg:col-span-4 flex flex-col items-start gap-3.5">
            <Link href="/" className="inline-block">
              <div className="bg-white px-3.5 py-2 rounded-lg inline-flex items-center shadow-xs hover:opacity-95 transition-opacity border border-white/10">
                <Image
                  src="/brand/labelvista-logo-horizontal.png"
                  alt="Labelvista Solutions Logo"
                  width={220}
                  height={55}
                  className="h-10 sm:h-11 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="font-body-md text-[14px] sm:text-[14.5px] text-slate-300 max-w-sm leading-relaxed">
              We manufacture precision self-adhesive labels and thermal paper rolls for businesses across India. Factory in Surat, Gujarat.
            </p>

            <div className="inline-flex items-center gap-2 text-slate-400 font-label-mono text-[11px] tracking-wider uppercase font-medium pt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green shrink-0"></span>
              <span>Facility Spec • 21 CFR Compliant</span>
            </div>
          </StaggerItem>

          {/* Column 2: Quick Links */}
          <StaggerItem index={1} className="lg:col-span-2 flex flex-col items-start gap-3">
            <h3 className="font-label-tag text-[11px] uppercase tracking-[0.18em] text-white font-bold mb-0.5">
              Quick Links
            </h3>
            <div className="flex flex-col gap-2.5">
              <Link
                href="/products"
                className="font-body-md text-[14px] text-slate-300 hover:text-white hover:translate-x-1.5 transition-all duration-200 inline-block w-fit"
              >
                Our Products
              </Link>
              <Link
                href="/printing-work"
                className="font-body-md text-[14px] text-slate-300 hover:text-white hover:translate-x-1.5 transition-all duration-200 inline-block w-fit"
              >
                Printing Work
              </Link>
              <Link
                href="/about"
                className="font-body-md text-[14px] text-slate-300 hover:text-white hover:translate-x-1.5 transition-all duration-200 inline-block w-fit"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="font-body-md text-[14px] text-slate-300 hover:text-white hover:translate-x-1.5 transition-all duration-200 inline-block w-fit"
              >
                Contact &amp; Quote
              </Link>
            </div>
          </StaggerItem>

          {/* Column 3: Capabilities */}
          <StaggerItem index={2} className="lg:col-span-3 flex flex-col items-start gap-3">
            <h3 className="font-label-tag text-[11px] uppercase tracking-[0.18em] text-white font-bold mb-0.5">
              Capabilities
            </h3>
            <div className="flex flex-col gap-2.5">
              <Link
                href="/printing-work"
                className="font-body-md text-[14px] text-slate-300 hover:text-white hover:translate-x-1.5 transition-all duration-200 inline-block w-fit"
              >
                Flexo UV Printing
              </Link>
              <Link
                href="/printing-work"
                className="font-body-md text-[14px] text-slate-300 hover:text-white hover:translate-x-1.5 transition-all duration-200 inline-block w-fit"
              >
                Flat Belt Printing
              </Link>
              <Link
                href="/products/hologram-security-labels"
                className="font-body-md text-[14px] text-slate-300 hover:text-white hover:translate-x-1.5 transition-all duration-200 inline-block w-fit"
              >
                Security Holograms
              </Link>
              <Link
                href="/products/a4-sheet-labels"
                className="font-body-md text-[14px] text-slate-300 hover:text-white hover:translate-x-1.5 transition-all duration-200 inline-block w-fit"
              >
                A4 Label Sheets
              </Link>
              <Link
                href="/products/jewellery-tag-labels"
                className="font-body-md text-[14px] text-slate-300 hover:text-white hover:translate-x-1.5 transition-all duration-200 inline-block w-fit"
              >
                Jewellery &amp; Product Tags
              </Link>
            </div>
          </StaggerItem>

          {/* Column 4: Factory & Office */}
          <StaggerItem index={3} className="lg:col-span-3 flex flex-col items-start gap-3">
            <h3 className="font-label-tag text-[11px] uppercase tracking-[0.18em] text-white font-bold mb-0.5">
              Factory &amp; Office
            </h3>

            <div className="flex flex-col gap-0.5 text-slate-300 font-body-md text-[13px] sm:text-[13.5px] leading-relaxed">
              <span className="text-white font-bold text-[14px]">Labelvista Solutions</span>
              <span>1st Floor, Plot No. 40 to 41,</span>
              <span>Shivdhara Raschel Park,</span>
              <span>Nr. Torrent Power Gaypagla, Dhoranpardi,</span>
              <span>Kamrej, Surat, Gujarat – 394155</span>
            </div>

            <div className="flex flex-col gap-1.5 pt-1.5">
              <a
                href="mailto:labelvistasolutions@gmail.com"
                className="inline-flex items-center font-label-tag text-[12px] text-brand-red hover:text-brand-red-hover hover:translate-x-1 font-bold tracking-wide transition-all duration-200 break-all w-fit"
              >
                labelvistasolutions@gmail.com
              </a>

              <div className="flex flex-col gap-0.5 text-slate-400 font-label-mono text-[11.5px] tracking-wide">
                <a href="tel:+919898706129" className="hover:text-slate-200 transition-colors">
                  +91 98987 06129
                </a>
                <a href="tel:+919924592000" className="hover:text-slate-200 transition-colors">
                  +91 99245 92000
                </a>
              </div>
            </div>
          </StaggerItem>
        </StaggerGroup>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 relative z-10 bg-black/25">
        <div className="site-container py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 font-label-mono text-[11px] tracking-wider uppercase">
          <div>
            Copyright © {new Date().getFullYear()} Labelvista Solutions. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 sm:gap-3 text-slate-400 text-center sm:text-right">
            <span>GST: 24AANFL3887H1ZV</span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span>PAN: AANFL3887H</span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span>ISO 9001:2015</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
