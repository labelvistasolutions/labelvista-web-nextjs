"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { testimonialsData } from "@/data/testimonials";
import ScrollReveal from "@/components/motion/ScrollReveal";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Determine items per page based on viewport (desktop: 3, tablet: 2, mobile: 1)
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonialsData.length - visibleCount);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrev();
    }
  };

  // Auto slide automatically every 3.8 seconds
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3800);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, maxIndex]);

  return (
    <section
      id="testimonials"
      className="w-full bg-[#F2ECE1] py-16 sm:py-20 lg:py-24 border-t border-b border-cream-border relative overflow-hidden"
      aria-label="Customer Testimonials"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Background Accent Lines */}
      <div className="absolute inset-0 bg-grid-light opacity-25 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-brand-red/[0.02] blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        {/* Section Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <ScrollReveal direction="up" distance={18} className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-red/10 text-brand-red font-label-tag text-[11px] uppercase tracking-widest font-bold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
              <span>TESTIMONIALS</span>
            </div>
            <h2 className="font-headline-lg text-3xl sm:text-4xl text-brand-navy tracking-tight font-extrabold mb-2 leading-tight">
              Trusted by Leading Manufacturers &amp; Brands
            </h2>
            <p className="font-body-md text-[15px] sm:text-[16px] text-brand-charcoal-muted max-w-none">
              Authentic feedback from packaging managers, plant operations heads, and brand teams across India.
            </p>
          </ScrollReveal>

          {/* Top-Right Prev/Next Buttons & Pagination Counter */}
          <ScrollReveal direction="up" distance={18} delay={0.1} className="hidden sm:flex items-center gap-3 shrink-0">
            <span className="font-label-mono text-xs text-brand-charcoal-muted font-bold tracking-wider mr-1">
              {String(currentIndex + 1).padStart(2, "0")} / {String(maxIndex + 1).padStart(2, "0")}
            </span>
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-xl bg-white border border-cream-border text-brand-navy hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-all duration-200 flex items-center justify-center shadow-xs active:scale-95 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">chevron_left</span>
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-xl bg-brand-navy text-white hover:bg-brand-red transition-all duration-200 flex items-center justify-center shadow-xs active:scale-95 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">chevron_right</span>
            </button>
          </ScrollReveal>
        </div>

        {/* Testimonials Sliding Track with smooth mathematical glide */}
        <div
          className="relative overflow-hidden -mx-2 sm:-mx-3"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            }}
          >
            {testimonialsData.map((item) => (
              <div
                key={item.id}
                className="shrink-0 px-2 sm:px-3 flex flex-col"
                style={{
                  width: `${100 / visibleCount}%`,
                }}
              >
                <div className="h-full flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-cream-border hover:border-brand-navy/35 hover:shadow-lg transition-all duration-300 group relative gap-5">
                  {/* Subtle Brand Red Top Border Highlight on Hover */}
                  <div className="absolute top-0 left-6 right-6 h-[2px] bg-brand-red scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />

                  {/* Card Top: Rating */}
                  <div className="flex items-center gap-0.5 text-amber-500" aria-label="5 stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-[16px] font-variation-fill">
                        star
                      </span>
                    ))}
                  </div>

                  {/* Middle: Short, Punchy Testimonial Text */}
                  <div className="flex-1 flex flex-col justify-center my-1">
                    <p className="font-body-md text-[14.5px] sm:text-[15.5px] text-brand-navy/90 leading-[1.6] tracking-[-0.01em] italic">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  {/* Card Bottom: Customer Profile */}
                  <div className="flex items-center justify-between gap-3 pt-1">
                    <div className="flex items-center gap-3 min-w-0">
                      {/* Headshot Photo */}
                      <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-cream-surface border border-cream-border shrink-0 shadow-2xs">
                        <img
                          src={item.image}
                          alt={item.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>

                      {/* Name & Company */}
                      <div className="flex flex-col min-w-0">
                        <span className="font-headline-sm text-[14.5px] text-brand-navy font-bold tracking-tight truncate group-hover:text-brand-red transition-colors">
                          {item.name}
                        </span>
                        <span className="font-label-mono text-[11px] text-brand-charcoal-muted font-medium truncate mt-0.5">
                          {item.company} &bull; {item.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Pagination Dots & Mobile Prev/Next */}
        <div className="flex items-center justify-between sm:justify-center gap-4 mt-8 pt-2">
          {/* Pagination Indicators */}
          <div className="flex items-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentIndex
                    ? "w-8 bg-brand-red"
                    : "w-2 bg-cream-border hover:bg-brand-navy/40"
                }`}
              />
            ))}
          </div>

          {/* Mobile Only Arrows */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-9 h-9 rounded-lg bg-white border border-cream-border text-brand-navy flex items-center justify-center shadow-xs"
            >
              <span className="material-symbols-outlined text-[18px]">chevron_left</span>
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-9 h-9 rounded-lg bg-brand-navy text-white flex items-center justify-center shadow-xs"
            >
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
