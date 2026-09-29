"use client";

import React from "react";
import { getWhatsAppGeneralUrl } from "@/utils/whatsapp";

export default function WhatsAppButton() {
  const whatsappUrl = getWhatsAppGeneralUrl();

  return (
    <aside aria-label="WhatsApp quick contact">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Labelvista on WhatsApp"
        className="group fixed bottom-[18px] right-[18px] sm:bottom-6 sm:right-6 z-50 w-[52px] h-[52px] sm:w-[56px] sm:h-[56px] rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center animate-whatsapp-heartbeat hover:shadow-[0_8px_28px_rgba(37,211,102,0.5)] transition-all duration-300 ease-out hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 select-none"
      >
        {/* Authentic Clean White WhatsApp SVG Icon */}
        <svg
          viewBox="0 0 32 32"
          className="w-7 h-7 sm:w-7.5 sm:h-7.5 fill-current transition-transform duration-300 group-hover:scale-105"
          aria-hidden="true"
        >
          <path d="M16 2C8.28 2 2 8.28 2 16c0 2.72.78 5.26 2.13 7.42L2 30l6.76-2.08C10.84 29.18 13.34 30 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.54c-2.38 0-4.6-.66-6.5-1.82l-.46-.28-4.32 1.33 1.35-4.22-.3-.48C4.5 19.98 3.82 18.04 3.82 16c0-6.72 5.46-12.18 12.18-12.18 6.72 0 12.18 5.46 12.18 12.18 0 6.72-5.46 12.54-12.18 12.54zm6.9-9.15c-.38-.19-2.24-1.1-2.58-1.23-.35-.12-.6-.19-.85.19-.25.38-.98 1.23-1.2 1.48-.22.25-.45.28-.82.1-.38-.19-1.58-.58-3.02-1.86-1.12-.99-1.87-2.22-2.09-2.6-.22-.38-.02-.58.17-.77.17-.17.38-.45.58-.67.19-.22.25-.38.38-.63.12-.25.06-.48-.03-.67-.1-.19-.85-2.05-1.17-2.81-.31-.74-.63-.64-.85-.65h-.73c-.25 0-.67.1-1.02.48-.35.38-1.35 1.32-1.35 3.22s1.38 3.73 1.58 3.99c.19.25 2.72 4.15 6.59 5.82.92.4 1.64.64 2.2.82.93.29 1.77.25 2.44.15.74-.11 2.24-.92 2.56-1.8.31-.89.31-1.65.22-1.8-.09-.15-.34-.24-.72-.43z" />
        </svg>
      </a>
    </aside>
  );
}
