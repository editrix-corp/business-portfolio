"use client";

import { useRef } from "react";

/**
 * Pulls its child toward the cursor and releases it on a spring — the liquid
 * "pull" on buttons. Transform only, and inert on touch or reduced motion.
 */
export function Magnetic({
  children,
  strength = 0.35,
  className = "",
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const wrap = useRef<HTMLSpanElement>(null);

  const move = (event: React.MouseEvent<HTMLSpanElement>) => {
    const el = wrap.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none)").matches) return;
    const box = el.getBoundingClientRect();
    const x = (event.clientX - (box.left + box.width / 2)) * strength;
    const y = (event.clientY - (box.top + box.height / 2)) * strength;
    el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  };

  const reset = () => {
    const el = wrap.current;
    if (el) el.style.transform = "translate3d(0, 0, 0)";
  };

  return (
    <span
      ref={wrap}
      onMouseMove={move}
      onMouseLeave={reset}
      className={`magnetic inline-flex ${className}`}
    >
      {children}
    </span>
  );
}
