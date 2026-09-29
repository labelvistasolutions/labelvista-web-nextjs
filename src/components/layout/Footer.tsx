import React from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-navy-red text-[#FAF6F0] relative overflow-hidden">
      {/* Dynamic Multi-Layered SVG Wave Divider at Top Edge */}
      <div className="w-full overflow-hidden leading-none pointer-events-none relative z-20">
        <svg
          viewBox="0 0 1440 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-12 md:h-16 lg:h-20 block"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Subtle translucent wave depth layers */}
          <path
            d="M0,0 L1440,0 L1440,24 C1260,54 1080,12 840,40 C600,68 340,16 0,38 Z"
            className="fill-[#FAF6F0]/25"
          />
          <path
            d="M0,0 L1440,0 L1440,32 C1220,62 1020,16 760,46 C500,76 280,22 0,44 Z"
            className="fill-[#FAF6F0]/45"
          />
          {/* Primary Seamless Wave matching page background */}
          <path
            d="M0,0 L1440,0 L1440,42 C1200,74 980,22 720,54 C460,86 240,28 0,52 Z"
            className="fill-[#FAF6F0]"
          />
        </svg>
      </div>

      {/* Subtle Engineering Grid Background */}
      <div className="absolute inset-0 bg-grid-dark opacity-10 pointer-events-none"></div>

      <div className="site-container relative z-10 pt-8 sm:pt-10 lg:pt-12">
        <StaggerGroup
          staggerInterval={0.07}
          baseDelay={0.05}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 sm:pb-12"
        >
          {/* Column 1: Company & Logo */}
          <StaggerItem index={0} className="lg:col-span-4 flex flex-col items-start gap-4">
            <Link href="/" className="inline-block">
              <div className="bg-white px-4 sm:px-5 py-3 rounded-xl inline-flex items-center shadow-xs hover:opacity-95 transition-opacity border border-white/10">
                <Image
                  src="/brand/labelvista-logo-horizontal.png"
                  alt="Labelvista Solutions Logo"
                  width={320}
                  height={80}
                  className="h-12 sm:h-14 lg:h-16 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="font-body text-[14px] sm:text-[14.5px] text-slate-300 max-w-sm leading-relaxed">
              We manufacture precision self-adhesive labels and thermal paper rolls for businesses across India. Factory in Surat, Gujarat.
            </p>

            <div className="inline-flex items-center gap-2 text-slate-400 font-heading text-[11px] tracking-wider uppercase font-semibold pt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green shrink-0"></span>
              <span>Facility Spec • 21 CFR Compliant</span>
            </div>
          </StaggerItem>

          {/* Column 2: Quick Links */}
          <StaggerItem index={1} className="lg:col-span-2 flex flex-col items-start gap-3.5">
            <h3 className="font-heading text-[13px] sm:text-[14px] uppercase tracking-[0.14em] text-white font-extrabold mb-0.5">
              Quick Links
            </h3>
            <div className="flex flex-col gap-3">
              <Link
                href="/products"
                className="relative group font-body text-[14px] sm:text-[14.5px] text-slate-300 hover:text-white transition-colors duration-200 inline-block w-fit leading-relaxed py-0.5"
              >
                <span>Our Products</span>
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-brand-red rounded-full transition-transform duration-300 ease-out origin-left scale-x-0 group-hover:scale-x-100" />
              </Link>
              <Link
                href="/printing-work"
                className="relative group font-body text-[14px] sm:text-[14.5px] text-slate-300 hover:text-white transition-colors duration-200 inline-block w-fit leading-relaxed py-0.5"
              >
                <span>Printing Work</span>
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-brand-red rounded-full transition-transform duration-300 ease-out origin-left scale-x-0 group-hover:scale-x-100" />
              </Link>
              <Link
                href="/about"
                className="relative group font-body text-[14px] sm:text-[14.5px] text-slate-300 hover:text-white transition-colors duration-200 inline-block w-fit leading-relaxed py-0.5"
              >
                <span>About Us</span>
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-brand-red rounded-full transition-transform duration-300 ease-out origin-left scale-x-0 group-hover:scale-x-100" />
              </Link>
              <Link
                href="/contact"
                className="relative group font-body text-[14px] sm:text-[14.5px] text-slate-300 hover:text-white transition-colors duration-200 inline-block w-fit leading-relaxed py-0.5"
              >
                <span>Contact &amp; Quote</span>
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-brand-red rounded-full transition-transform duration-300 ease-out origin-left scale-x-0 group-hover:scale-x-100" />
              </Link>
            </div>
          </StaggerItem>

          {/* Column 3: Capabilities (Matching Printing Work Page) */}
          <StaggerItem index={2} className="lg:col-span-2 flex flex-col items-start gap-3.5">
            <h3 className="font-heading text-[13px] sm:text-[14px] uppercase tracking-[0.14em] text-white font-extrabold mb-0.5">
              Capabilities
            </h3>
            <div className="flex flex-col gap-3">
              <Link
                href="/printing-work#flexo-uv"
                className="relative group font-body text-[14px] sm:text-[14.5px] text-slate-300 hover:text-white transition-colors duration-200 inline-block w-fit leading-relaxed py-0.5"
              >
                <span>6-Color Flexo UV</span>
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-brand-red rounded-full transition-transform duration-300 ease-out origin-left scale-x-0 group-hover:scale-x-100" />
              </Link>
              <Link
                href="/printing-work#flat-belt"
                className="relative group font-body text-[14px] sm:text-[14.5px] text-slate-300 hover:text-white transition-colors duration-200 inline-block w-fit leading-relaxed py-0.5"
              >
                <span>Flat Belt Printing</span>
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-brand-red rounded-full transition-transform duration-300 ease-out origin-left scale-x-0 group-hover:scale-x-100" />
              </Link>
              <Link
                href="/printing-work#textile-printing"
                className="relative group font-body text-[14px] sm:text-[14.5px] text-slate-300 hover:text-white transition-colors duration-200 inline-block w-fit leading-relaxed py-0.5"
              >
                <span>Textile &amp; Garment Tags</span>
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-brand-red rounded-full transition-transform duration-300 ease-out origin-left scale-x-0 group-hover:scale-x-100" />
              </Link>
              <Link
                href="/printing-work#security-hologram"
                className="relative group font-body text-[14px] sm:text-[14.5px] text-slate-300 hover:text-white transition-colors duration-200 inline-block w-fit leading-relaxed py-0.5"
              >
                <span>Hologram &amp; Security Foils</span>
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-brand-red rounded-full transition-transform duration-300 ease-out origin-left scale-x-0 group-hover:scale-x-100" />
              </Link>
            </div>
          </StaggerItem>

          {/* Column 4: Factory & Office (Generous 4-Column Horizontal Space) */}
          <StaggerItem index={3} className="lg:col-span-4 flex flex-col items-start gap-3.5">
            <h3 className="font-heading text-[13px] sm:text-[14px] uppercase tracking-[0.14em] text-white font-extrabold mb-0.5">
              Factory &amp; Office
            </h3>

            {/* Address with icon - continuous horizontal layout */}
            <div className="flex items-start gap-2.5 text-slate-300 font-body text-[13.5px] sm:text-[14px] leading-relaxed max-w-md">
              <span className="material-symbols-outlined text-[20px] text-red-400 shrink-0 mt-0.5" aria-hidden="true">
                location_on
              </span>
              <p className="leading-relaxed text-slate-200">
                1st Floor, Plot No. 40 to 41, Shivdhara Raschel Park, <br />Nr. Torrent Power Gaypagla, Dhoranpardi, Kamrej, <br />Surat, Gujarat – 394155
              </p>
            </div>

            {/* Email & Phone with icons */}
            <div className="flex flex-col gap-2.5 pt-2 border-t border-white/10 w-full max-w-md">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-red-400 shrink-0" aria-hidden="true">
                  mail
                </span>
                <a
                  href="mailto:labelvistasolutions@gmail.com"
                  className="relative group font-heading text-[13.5px] sm:text-[14px] text-red-400 hover:text-red-300 font-semibold tracking-wide transition-colors duration-200 break-all leading-normal inline-block w-fit py-0.5"
                >
                  <span>labelvistasolutions@gmail.com</span>
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-red-400 rounded-full transition-transform duration-300 ease-out origin-left scale-x-0 group-hover:scale-x-100" />
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-slate-400 shrink-0 mt-0.5" aria-hidden="true">
                  call
                </span>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-slate-200 font-heading text-[13px] sm:text-[13.5px] tracking-wide">
                  <a
                    href="tel:+919898706129"
                    className="relative group hover:text-white transition-colors leading-tight inline-block py-0.5"
                  >
                    <span>+91 98987 06129</span>
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-brand-red rounded-full transition-transform duration-300 ease-out origin-left scale-x-0 group-hover:scale-x-100" />
                  </a>
                  <span className="text-slate-600 hidden sm:inline">•</span>
                  <a
                    href="tel:+919924592000"
                    className="relative group hover:text-white transition-colors leading-tight inline-block py-0.5"
                  >
                    <span>+91 99245 92000</span>
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-brand-red rounded-full transition-transform duration-300 ease-out origin-left scale-x-0 group-hover:scale-x-100" />
                  </a>
                </div>
              </div>
            </div>
          </StaggerItem>
        </StaggerGroup>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 relative z-10 bg-black/30">
        <div className="site-container py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 font-heading text-[11px] sm:text-[11.5px] tracking-wider uppercase leading-normal">
          <div className="text-center sm:text-left">
            Copyright © {new Date().getFullYear()} Labelvista Solutions. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 sm:gap-3 text-slate-400 text-center sm:text-right">
            <span>Surat, Gujarat, India</span>
            <span className="text-slate-600 hidden sm:inline" aria-hidden="true">•</span>
            <span>ISO 9001:2015 Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
