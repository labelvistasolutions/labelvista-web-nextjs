"use client";

import React, { useEffect, useRef, useState, ReactNode, CSSProperties } from "react";

interface ImageRevealProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
  threshold?: number;
  className?: string;
  containerClassName?: string;
  style?: CSSProperties;
  zoomScale?: number;
}

export default function ImageReveal({
  children,
  duration = 1.1,
  delay = 0,
  threshold = 0.15,
  className = "",
  containerClassName = "",
  style = {},
  zoomScale = 1.06,
}: ImageRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasReducedMotion, setHasReducedMotion] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (mediaQuery.matches) {
        setHasReducedMotion(true);
        setIsVisible(true);
        return;
      }
    }

    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const innerStyle: CSSProperties = {
    opacity: hasReducedMotion ? 1 : isVisible ? 1 : 0,
    transform: hasReducedMotion
      ? "none"
      : isVisible
      ? "scale(1) translate3d(0, 0, 0)"
      : `scale(${zoomScale}) translate3d(0, 16px, 0)`,
    transition: hasReducedMotion
      ? "none"
      : `opacity ${duration * 0.85}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
    willChange: isVisible ? "auto" : "opacity, transform",
  };

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden relative ${containerClassName}`}
      style={style}
    >
      <div className={`w-full h-full ${className}`} style={innerStyle}>
        {children}
      </div>
    </div>
  );
}
