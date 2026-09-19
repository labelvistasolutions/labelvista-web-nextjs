"use client";

import React, { useEffect, useRef, useState, ReactNode, CSSProperties, ElementType } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "scale" | "none";
  distance?: number;
  duration?: number;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
  className?: string;
  style?: CSSProperties;
  as?: ElementType;
  triggerOnce?: boolean;
}

export default function ScrollReveal({
  children,
  direction = "up",
  distance = 28,
  duration = 0.85,
  delay = 0,
  threshold = 0.12,
  rootMargin = "0px 0px -40px 0px",
  className = "",
  style = {},
  as: Component = "div",
  triggerOnce = true,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasReducedMotion, setHasReducedMotion] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (mediaQuery.matches) {
        setHasReducedMotion(true);
        setIsVisible(true);
        return;
      }
    }

    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  // Transform offset calculation based on direction
  const getInitialTransform = () => {
    if (hasReducedMotion) return "none";
    switch (direction) {
      case "up":
        return `translate3d(0, ${distance}px, 0)`;
      case "down":
        return `translate3d(0, -${distance}px, 0)`;
      case "left":
        return `translate3d(${distance}px, 0, 0)`;
      case "right":
        return `translate3d(-${distance}px, 0, 0)`;
      case "scale":
        return "scale(0.96)";
      case "none":
      default:
        return "none";
    }
  };

  const dynamicStyles: CSSProperties = {
    ...style,
    opacity: hasReducedMotion ? 1 : isVisible ? 1 : 0,
    transform: hasReducedMotion ? "none" : isVisible ? "translate3d(0, 0, 0) scale(1)" : getInitialTransform(),
    transition: hasReducedMotion
      ? "none"
      : `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
    willChange: isVisible ? "auto" : "opacity, transform",
  };

  const Tag = Component as any;

  return (
    <Tag
      ref={elementRef}
      className={className}
      style={dynamicStyles}
    >
      {children}
    </Tag>
  );
}
