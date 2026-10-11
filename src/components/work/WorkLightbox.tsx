"use client";

import { useEffect, useRef } from "react";
import type { Work } from "@/lib/work";
import { Tag } from "@/components/ui/Tag";
import { CloseIcon } from "@/components/ui/icons";

export function WorkLightbox({
  work,
  onClose,
}: {
  work: Work | null;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    if (work && !el.open) el.showModal();
    if (!work && el.open) el.close();
  }, [work]);

  if (!work) return null;

  const wide = work.wide;

  return (
    <dialog
      ref={dialog}
      onClose={() => {
        video.current?.pause();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === dialog.current) dialog.current?.close();
      }}
      className={`m-auto max-h-[94vh] overflow-y-auto rounded-xl border border-rule bg-surface p-0 backdrop:bg-ink/55 ${
        wide ? "w-[min(1080px,94vw)]" : "w-[min(880px,94vw)]"
      }`}
    >
      <div className="flex items-center justify-between border-b border-rule px-5 py-3">
        <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted">
          {work.format} — {work.duration}
        </p>
        <button
          type="button"
          onClick={() => dialog.current?.close()}
          className="flex size-7 items-center justify-center rounded-[4px] text-muted transition-colors duration-200 hover:bg-bone hover:text-ink"
          aria-label="Close"
        >
          <CloseIcon className="size-4" />
        </button>
      </div>

      {/* Landscape plays full width with the notes underneath; vertical sits
          beside its notes so the dialog never becomes a tall ribbon. */}
      <div className={wide ? "" : "flex flex-col md:flex-row"}>
        <div
          className={`flex shrink-0 items-center justify-center bg-ink ${
            wide ? "w-full" : "md:w-auto"
          }`}
        >
          <video
            ref={video}
            key={work.slug}
            className={
              wide
                ? "block aspect-video w-full object-cover"
                : "block max-h-[56vh] w-auto md:max-h-[72vh]"
            }
            src={work.src}
            poster={work.poster}
            controls
            autoPlay
            playsInline
            preload="auto"
          />
        </div>

        <div
          className={`grid gap-6 px-5 py-5 ${
            wide
              ? "border-t border-rule md:grid-cols-12"
              : "content-start border-t border-rule md:min-w-0 md:flex-1 md:border-l md:border-t-0"
          }`}
        >
          <div className={wide ? "md:col-span-7" : ""}>
            <h2 className="font-serif text-3xl leading-tight tracking-[-0.03em] text-ink">
              {work.title}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-[1.6] text-graphite">
              {work.summary}
            </p>
          </div>
          <dl
            className={`grid gap-x-6 gap-y-4 ${
              wide ? "grid-cols-2 md:col-span-5" : "grid-cols-2"
            }`}
          >
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted">
                Role
              </dt>
              <dd className="mt-1 text-sm text-ink">{work.role}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted">
                Runtime
              </dt>
              <dd className="mt-1 text-sm text-ink">{work.duration}</dd>
            </div>
            <div className="col-span-2">
              <dt className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted">
                In the cut
              </dt>
              <dd className="mt-2 flex flex-wrap gap-2">
                {work.techniques.map((technique) => (
                  <Tag key={technique} tone={work.tone}>
                    {technique}
                  </Tag>
                ))}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </dialog>
  );
}
