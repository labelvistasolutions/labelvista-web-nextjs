"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Printing Work", href: "/printing-work" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200/80 transition-shadow ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="h-20 site-container flex items-center justify-between gap-6">
        {/* Brand Logo */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center group">
            <Image
              src="/brand/labelvista-logo-horizontal.png"
              alt="Labelvista Solutions Logo"
              width={220}
              height={56}
              className="h-12 sm:h-13 lg:h-14 w-auto object-contain transition-opacity group-hover:opacity-90"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1 text-[15px] transition-colors duration-200 group ${
                  active
                    ? "text-brand-red font-semibold"
                    : "text-brand-charcoal-muted hover:text-brand-navy font-medium"
                }`}
              >
                <span>{item.label}</span>
                <span
                  className={`absolute -bottom-0.5 left-0 right-0 h-[2px] bg-brand-red rounded-full transition-transform duration-300 ease-out origin-left ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="btn-primary px-5 sm:px-6 py-2.5 rounded-lg font-label-tag text-[12px] uppercase tracking-wider font-bold gap-1.5"
          >
            <span>Get Quote</span>
            <span className="material-symbols-outlined text-[15px] leading-none">send</span>
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-brand-navy rounded-lg hover:bg-stone-100 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF6F0] border-b border-cream-border px-6 py-5 shadow-xl animate-fadeIn">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2.5 rounded-lg text-[15px] font-medium transition-all ${
                    active
                      ? "bg-brand-red/10 text-brand-red font-bold"
                      : "text-brand-charcoal hover:bg-cream-surface"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-cream-border flex flex-col gap-2">
              <Link
                href="/contact"
                className="btn-primary w-full text-center py-3 rounded-lg font-label-tag text-label-tag uppercase tracking-wider font-semibold"
              >
                Get Quote
              </Link>
              <div className="flex items-center justify-between text-xs text-brand-charcoal-muted pt-2">
                <span>ISO 9001:2015 Quality</span>
                <span>Surat, Gujarat, India</span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
