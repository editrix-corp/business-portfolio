"use client";

import { useRef, useState } from "react";
import { PlayIcon, SoundOffIcon, SoundOnIcon } from "@/components/ui/icons";

const CHROME_DOTS = ["dot-1", "dot-2", "dot-3"];

export function ShowreelFrame() {
  const video = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    const el = video.current;
    if (!el) return;
    if (el.paused) {
      void el.play();
      setPlaying(true);
      return;
    }
    el.pause();
    setPlaying(false);
  };

  const toggleSound = () => {
    const el = video.current;
    if (!el) return;
    el.muted = !el.muted;
    setMuted(el.muted);
    if (!el.muted && el.paused) {
      void el.play();
      setPlaying(true);
    }
  };

  return (
    <figure className="overflow-hidden rounded-xl border border-rule bg-surface">
      <div className="flex items-center gap-3 border-b border-rule bg-surface px-4 py-2.5">
        <div className="flex gap-1.5">
          {CHROME_DOTS.map((dot) => (
            <span key={dot} className="size-2.5 rounded-full bg-[#E3E3E1]" />
          ))}
        </div>
        <p className="flex-1 text-center font-mono text-[10px] uppercase tracking-[0.1em] text-muted">
          showreel_2026.mp4 — 1280×720 — H.264
        </p>
        <span className="hidden w-14 sm:block" />
      </div>

      <div className="group relative bg-ink">
        <video
          ref={video}
          className="block aspect-video w-full object-cover"
          src="/reel/showreel.mp4"
          poster="/reel/showreel.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onTimeUpdate={(event) => {
            const el = event.currentTarget;
            if (!el.duration) return;
            setProgress(el.currentTime / el.duration);
          }}
        />

        <button
          type="button"
          onClick={togglePlay}
          className="absolute inset-0 cursor-pointer"
          aria-label={playing ? "Pause showreel" : "Play showreel"}
        >
          <span
            className={`absolute left-1/2 top-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink transition-opacity duration-200 ${
              playing ? "opacity-0" : "opacity-100"
            }`}
          >
            <PlayIcon className="size-5 translate-x-px" />
          </span>
        </button>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center gap-3 px-4 pb-4">
          <div className="h-px flex-1 bg-white/25">
            <div
              className="h-px origin-left bg-white"
              style={{ transform: `scaleX(${progress})` }}
            />
          </div>
          <button
            type="button"
            onClick={toggleSound}
            className="pointer-events-auto flex items-center gap-2 rounded-[5px] border border-white/25 bg-black/35 px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-white transition-colors duration-200 hover:bg-black/55 active:scale-[0.98]"
          >
            {muted ? (
              <SoundOffIcon className="size-3.5" />
            ) : (
              <SoundOnIcon className="size-3.5" />
            )}
            {muted ? "Sound off" : "Sound on"}
          </button>
        </div>
      </div>

      <figcaption className="flex flex-wrap items-center justify-between gap-2 border-t border-rule px-4 py-3 font-mono text-[10px] uppercase tracking-[0.1em] text-muted">
        <span>Showreel — selected work 2024 to 2026</span>
        <span>Edited and graded by Editrix Corp</span>
      </figcaption>
    </figure>
  );
}
