"use client";

import { useEffect, useRef } from "react";
import type { Work } from "@/lib/work";
import { Tag } from "@/components/ui/Tag";
import { PlayIcon } from "@/components/ui/icons";

/** Pointer devices preview on hover; touch devices preview while the card is on screen. */
function useAutoPreview(video: React.RefObject<HTMLVideoElement | null>) {
  useEffect(() => {
    const el = video.current;
    if (!el) return;
    if (!window.matchMedia("(hover: none)").matches) return;
    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) void el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.6 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [video]);
}

export function WorkCard({
  work,
  onOpen,
}: {
  work: Work;
  onOpen: (work: Work) => void;
}) {
  const video = useRef<HTMLVideoElement>(null);
  useAutoPreview(video);

  const preview = () => void video.current?.play().catch(() => {});
  const reset = () => {
    const el = video.current;
    if (!el) return;
    el.pause();
    el.currentTime = 0;
  };

  return (
    <article
      className={`lift group flex h-full flex-col overflow-hidden rounded-xl border border-rule bg-surface ${work.span}`}
      onMouseEnter={preview}
      onMouseLeave={reset}
    >
      <button
        type="button"
        onClick={() => onOpen(work)}
        className="flex h-full cursor-pointer flex-col text-left"
        aria-label={`Open ${work.title} for ${work.client}`}
      >
        <div
          className={`relative w-full overflow-hidden bg-bone ${work.aspect} lg:aspect-auto lg:min-h-0 lg:flex-1`}
        >
          <video
            ref={video}
            className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
            src={work.src}
            poster={work.poster}
            muted
            loop
            playsInline
            preload="none"
          />
          <span className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-white/90 text-ink opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            <PlayIcon className="size-3.5 translate-x-px" />
          </span>
        </div>

        <div className="flex items-start justify-between gap-4 border-t border-rule px-5 py-4">
          <div>
            <h3 className="font-serif text-xl leading-tight tracking-[-0.02em] text-ink">
              {work.title}
            </h3>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted">
              {work.client}
            </p>
          </div>
          <div className="flex shrink-0 flex-col items-end gap-2">
            <Tag tone={work.tone}>{work.category}</Tag>
            <span className="font-mono text-[10px] tracking-[0.1em] text-muted">
              {work.duration} — {work.year}
            </span>
          </div>
        </div>
      </button>
    </article>
  );
}
