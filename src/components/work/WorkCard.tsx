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
        aria-label={`Open ${work.title} for ${work.format}`}
      >
        <div
          className={`reveal-wipe relative w-full overflow-hidden bg-bone ${
            work.wide ? "aspect-[16/9]" : "aspect-[9/16]"
          } lg:aspect-auto lg:min-h-0 lg:flex-1`}
        >
          <video
            ref={video}
            className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
            src={work.loop}
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

        <div className="flex items-start justify-between gap-4 border-t border-rule px-4 py-3.5 sm:px-5 sm:py-4">
          <div className="min-w-0">
            <h3 className="truncate font-serif text-lg leading-tight tracking-[-0.02em] text-ink sm:text-xl">
              {work.title}
            </h3>
            {/* The format line already names the category, so the tag can go
                when there is no room for it. */}
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted">
              {work.format}
              <span className="sm:hidden"> — {work.duration}</span>
            </p>
          </div>
          <div className="hidden shrink-0 flex-col items-end gap-2 sm:flex">
            <Tag tone={work.tone}>{work.category}</Tag>
            <span className="font-mono text-[10px] tracking-[0.1em] text-muted">
              {work.duration}
            </span>
          </div>
        </div>
      </button>
    </article>
  );
}
