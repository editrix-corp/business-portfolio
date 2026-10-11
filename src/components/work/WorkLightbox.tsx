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
      className="m-auto w-[min(1060px,92vw)] rounded-xl border border-rule bg-surface p-0 backdrop:bg-ink/55"
    >
      <div className="flex items-center justify-between border-b border-rule px-5 py-3">
        <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted">
          {work.format} — {work.year}
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

      <video
        ref={video}
        key={work.slug}
        className="block max-h-[62vh] w-full bg-ink object-contain"
        src={work.src}
        poster={work.poster}
        controls
        autoPlay
        loop
        playsInline
      />

      <div className="grid gap-6 border-t border-rule px-5 py-5 md:grid-cols-12">
        <div className="md:col-span-7">
          <h2 className="font-serif text-3xl leading-tight tracking-[-0.03em] text-ink">
            {work.title}
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-[1.6] text-graphite">
            {work.summary}
          </p>
        </div>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-4 md:col-span-5">
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
              Toolchain
            </dt>
            <dd className="mt-2 flex flex-wrap gap-2">
              {work.tools.map((tool) => (
                <Tag key={tool} tone={work.tone}>
                  {tool}
                </Tag>
              ))}
            </dd>
          </div>
        </dl>
      </div>
    </dialog>
  );
}
