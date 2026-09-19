"use client";

import React, { useEffect, useRef, ReactNode, CSSProperties } from "react";

interface ParallaxWrapperProps {
  children: ReactNode;
  speed?: number; // e.g. 0.05 to 0.15 (positive moves slower than scroll, negative moves faster)
  className?: string;
  style?: CSSProperties;
}

export default function ParallaxWrapper({
  children,
  speed = 0.05,
  className = "",
  style = {},
}: ParallaxWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable on mobile or reduced motion for performance
    if (typeof window === "undefined") return;
    if (window.innerWidth < 768) return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    let rafId: number;

    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Only calculate if element is anywhere near viewport
      if (rect.top < windowHeight + 100 && rect.bottom > -100) {
        const offset = (rect.top - windowHeight / 2) * speed;
        ref.current.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
    };
  }, [speed]);

  return (
    <div
      ref={ref}
      className={`will-change-transform ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
