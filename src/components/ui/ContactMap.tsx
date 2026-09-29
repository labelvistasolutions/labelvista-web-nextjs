"use client";

import React, { useState } from "react";
import ScrollReveal from "@/components/motion/ScrollReveal";

const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/3AjZL6JWQmcuDS8B8?g_st=aw";
const LATITUDE = 21.325342;
const LONGITUDE = 72.980889;

// Support clean integration point for optional Google Maps Embed API key
const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

export default function ContactMap() {
  const [showInfoCard, setShowInfoCard] = useState(true);

  // Use API key if provided, else use the robust direct Google Maps embed URL with Satellite imagery default (t=k)
  const embedUrl = GOOGLE_MAPS_API_KEY
    ? `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${LATITUDE},${LONGITUDE}&zoom=17&maptype=satellite`
    : `https://maps.google.com/maps?q=${LATITUDE},${LONGITUDE}&hl=en&z=17&t=k&ie=UTF8&iwloc=&output=embed`;

  return (
    <section className="w-full pb-20 sm:pb-24 lg:pb-28">
      <div className="site-container">
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20} className="flex flex-col items-start gap-3 mb-8 max-w-2xl">
          <span className="font-label-tag text-label-tag uppercase tracking-widest text-brand-red font-bold">
            Visit Our Factory
          </span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-brand-navy font-extrabold tracking-tight">
            Find Us on the Map
          </h2>
        </ScrollReveal>

        {/* Map Container */}
        <ScrollReveal
          direction="up"
          distance={24}
          delay={0.15}
          className="relative w-full rounded-2xl sm:rounded-3xl border border-cream-border bg-white shadow-lg overflow-hidden"
        >
          {/* Top-Left 'Open in Maps' Floating Button (Matches Reference Design) */}
          <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20 flex items-center gap-2">
            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-lg sm:rounded-xl bg-white/95 backdrop-blur-md text-brand-navy border border-black/10 shadow-md hover:bg-white hover:shadow-lg hover:text-brand-red transition-all duration-200 text-xs sm:text-sm font-bold select-none group cursor-pointer"
            >
              <span>Open in Maps</span>
              <svg
                viewBox="0 0 24 24"
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-none stroke-current stroke-2 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>

            {/* Toggle Card Button on Mobile */}
            <button
              type="button"
              onClick={() => setShowInfoCard(!showInfoCard)}
              aria-label={showInfoCard ? "Hide factory address card" : "Show factory address card"}
              className="sm:hidden inline-flex items-center justify-center w-8 h-8 rounded-lg bg-white/95 backdrop-blur-md text-brand-navy border border-black/10 shadow-md"
            >
              <span className="material-symbols-outlined text-[18px]">
                {showInfoCard ? "visibility_off" : "info"}
              </span>
            </button>
          </div>

          {/* Floating Location Card Overlay (Positioned at Top-Right Corner) */}
          {showInfoCard && (
            <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20 max-w-[calc(100%-24px)] sm:max-w-sm rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md border border-cream-border p-4 sm:p-5 shadow-xl transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand-red text-white flex items-center justify-center shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-[20px] sm:text-[22px]">location_on</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-headline-sm text-sm sm:text-base font-extrabold text-brand-navy truncate">
                      Labelvista Solutions
                    </span>
                    <button
                      type="button"
                      onClick={() => setShowInfoCard(false)}
                      className="text-stone-400 hover:text-brand-navy transition-colors text-xs shrink-0"
                      aria-label="Dismiss address card"
                    >
                      <span className="material-symbols-outlined text-[16px]">close</span>
                    </button>
                  </div>
                  <span className="font-label-tag text-[10px] sm:text-[11px] text-brand-red uppercase tracking-wider font-bold block mt-0.5">
                    Manufacturing Hub &amp; Office
                  </span>
                  <p className="font-body-sm text-xs text-brand-charcoal leading-relaxed mt-1.5 line-clamp-2 sm:line-clamp-3">
                    1st Floor, Plot No 40 to 41, Shivdhara Raschel Park, Nr. Torrent Power Gaypagla, Dhoranpardi, Kamrej, Surat, Gujarat – 394155
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <a
                      href={GOOGLE_MAPS_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy hover:text-brand-red transition-colors font-label-tag uppercase tracking-wider"
                    >
                      <span>Get Directions</span>
                      <span className="material-symbols-outlined text-[14px]">directions</span>
                    </a>
                    <span className="text-stone-300">|</span>
                    <a
                      href="tel:+919898706129"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-brand-charcoal hover:text-brand-navy transition-colors"
                    >
                      <span className="material-symbols-outlined text-[13px] text-brand-green">call</span>
                      <span>+91 98987 06129</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Interactive Google Map iFrame */}
          <div className="w-full h-[360px] sm:h-[480px] lg:h-[560px]">
            <iframe
              title="Labelvista Manufacturing Hub & Office Location Map"
              src={embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
