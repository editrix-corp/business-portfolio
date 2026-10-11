"use client";

import { useEffect, useRef, useState } from "react";
import { navLinks, profile } from "@/lib/site";
import { Magnetic } from "@/components/motion/Magnetic";

export function SiteNav() {
  const sentinel = useRef<HTMLDivElement>(null);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    const el = sentinel.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => setPinned(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinel} aria-hidden className="absolute top-0 h-px w-full" />
      <header
        className={`sticky top-0 z-40 backdrop-blur-md transition-colors duration-300 ${
          pinned
            ? "border-b border-rule bg-canvas/85"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
        >
          <a
            href="#top"
            className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink"
          >
            {profile.brand}
            <span className="pl-2 text-muted">— {profile.role}</span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted transition-colors duration-200 hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <Magnetic strength={0.25}>
          <a
            href="#contact"
            className="rounded-[5px] bg-ink px-4 py-2 font-mono text-[11px] uppercase tracking-[0.1em] text-white transition-colors duration-200 hover:bg-graphite active:scale-[0.98]"
          >
            Start a project
          </a>
          </Magnetic>
        </nav>
      </header>
    </>
  );
}
