"use client";

import { useEffect, useRef } from "react";

/** Marquee driven by rAF so scroll velocity can drag it faster or reverse it. */
export function LiquidMarquee({
  items,
  speed = 42,
}: {
  items: readonly string[];
  speed?: number;
}) {
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = track.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const root = document.documentElement;
    let offset = 0;
    let last = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const dt = Math.min(64, now - last) / 1000;
      last = now;
      const velocity = Number(root.style.getPropertyValue("--velocity") || 0);
      offset -= (speed + velocity * 140) * dt;
      const span = el.scrollWidth / 2;
      if (span > 0) offset = ((offset % span) + span) % span;
      el.style.transform = `translate3d(${-offset}px, 0, 0)`;
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [speed]);

  const loop = [...items, ...items];

  return (
    <div ref={track} className="flex w-max gap-12 pl-12 will-change-transform">
      {loop.map((item, index) => (
        <span
          key={`${item}-${index}`}
          className="whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.14em] text-muted"
        >
          {item}
          <span className="pl-12 text-rule">/</span>
        </span>
      ))}
    </div>
  );
}
