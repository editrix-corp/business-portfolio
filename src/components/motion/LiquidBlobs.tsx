"use client";

import { useEffect, useRef } from "react";

/**
 * Blobs that merge as they drift. Two things keep this cheap: the blur runs on
 * a quarter-size layer that is scaled back up (a sixteenth of the pixels), and
 * the whole stage stops painting once the hero is off screen.
 */
export function LiquidBlobs() {
  const stage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = stage.current;
    const hero = document.getElementById("top");
    if (!el || !hero || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => el.setAttribute("data-off", String(!entry.isIntersecting)),
      { threshold: 0 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={stage} aria-hidden className="goo-stage" data-off="false">
      <span className="blob blob-a" />
      <span className="blob blob-b" />
      <span className="blob blob-c" />
    </div>
  );
}
