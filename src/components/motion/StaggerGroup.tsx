"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  ReactNode,
  CSSProperties,
  ElementType,
} from "react";

interface StaggerContextType {
  isGroupVisible: boolean;
  hasReducedMotion: boolean;
  staggerInterval: number;
  baseDelay: number;
}

const StaggerContext = createContext<StaggerContextType>({
  isGroupVisible: false,
  hasReducedMotion: false,
  staggerInterval: 0.1,
  baseDelay: 0,
});

interface StaggerGroupProps {
  children: ReactNode;
  staggerInterval?: number;
  baseDelay?: number;
  threshold?: number;
  rootMargin?: string;
  className?: string;
  style?: CSSProperties;
  as?: ElementType;
}

export function StaggerGroup({
  children,
  staggerInterval = 0.09,
  baseDelay = 0,
  threshold = 0.1,
  rootMargin = "0px 0px -40px 0px",
  className = "",
  style = {},
  as: Component = "div",
}: StaggerGroupProps) {
  const [isGroupVisible, setIsGroupVisible] = useState(false);
  const [hasReducedMotion, setHasReducedMotion] = useState(false);
  const groupRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (mediaQuery.matches) {
        setHasReducedMotion(true);
        setIsGroupVisible(true);
        return;
      }
    }

    const element = groupRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsGroupVisible(true);
            observer.unobserve(entry.target);
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
  }, [threshold, rootMargin]);

  const Tag = Component as any;

  return (
    <StaggerContext.Provider
      value={{
        isGroupVisible,
        hasReducedMotion,
        staggerInterval,
        baseDelay,
      }}
    >
      <Tag ref={groupRef} className={className} style={style}>
        {children}
      </Tag>
    </StaggerContext.Provider>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  index: number;
  direction?: "up" | "down" | "left" | "right" | "scale" | "none";
  distance?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
  as?: ElementType;
}

export function StaggerItem({
  children,
  index,
  direction = "up",
  distance = 24,
  duration = 0.8,
  className = "",
  style = {},
  as: Component = "div",
}: StaggerItemProps) {
  const { isGroupVisible, hasReducedMotion, staggerInterval, baseDelay } =
    useContext(StaggerContext);

  const delay = baseDelay + index * staggerInterval;

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
        return "scale(0.97)";
      case "none":
      default:
        return "none";
    }
  };

  const dynamicStyles: CSSProperties = {
    ...style,
    opacity: hasReducedMotion ? 1 : isGroupVisible ? 1 : 0,
    transform: hasReducedMotion
      ? "none"
      : isGroupVisible
      ? "translate3d(0, 0, 0) scale(1)"
      : getInitialTransform(),
    transition: hasReducedMotion
      ? "none"
      : `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
    willChange: isGroupVisible ? "auto" : "opacity, transform",
  };

  const Tag = Component as any;

  return (
    <Tag className={className} style={dynamicStyles}>
      {children}
    </Tag>
  );
}
