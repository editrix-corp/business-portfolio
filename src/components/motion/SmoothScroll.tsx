"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Liquid scroll: inertial scrolling plus a `--velocity` custom property other
 * components lean on for skew, drag and marquee drift. Disabled outright for
 * reduced-motion so anchors and keyboard paging stay native.
 */
export function SmoothScroll() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      wheelMultiplier: 0.9,
      touchMultiplier: 1.6,
      syncTouch: true,
    });

    const root = document.documentElement;
    let frame = 0;
    let smoothed = 0;

    lenis.on("scroll", ({ velocity }: { velocity: number }) => {
      // Clamp hard: liquid should read as drag, never as a wobble.
      smoothed += (Math.max(-3, Math.min(3, velocity)) - smoothed) * 0.18;
      root.style.setProperty("--velocity", smoothed.toFixed(3));
    });

    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    // Keep in-page anchors working through Lenis rather than fighting it.
    const onClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement).closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      if (!link) return;
      const id = link.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      event.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -72, duration: 1.4 });
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(frame);
      lenis.destroy();
      root.style.setProperty("--velocity", "0");
    };
  }, []);

  return null;
}
