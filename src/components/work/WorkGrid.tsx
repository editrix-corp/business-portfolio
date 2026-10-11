"use client";

import { useState } from "react";
import { works, type Work } from "@/lib/work";
import { profile } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import { WorkCard } from "./WorkCard";
import { WorkLightbox } from "./WorkLightbox";

export function WorkGrid() {
  const [active, setActive] = useState<Work | null>(null);

  return (
    <>
      <div className="velocity-skew mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:auto-rows-[88px] lg:grid-cols-12">
        {works.map((work, index) => (
          <Reveal
            key={work.slug}
            delay={(index % 3) * 90}
            className={`h-full lg:order-none ${work.order} ${
              work.wide ? "col-span-2" : "col-span-1"
            } ${work.span}`}
          >
            <WorkCard work={{ ...work, span: "" }} onOpen={setActive} />
          </Reveal>
        ))}

        <Reveal delay={90} className="order-8 col-span-1 h-full lg:order-none lg:col-span-7 lg:row-span-3">
          <a
            href="#contact"
            className="lift flex h-full flex-col justify-between rounded-xl border border-rule bg-bone p-5 sm:p-7 md:p-9"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
              {profile.availability}
            </p>
            <span className="mt-6 flex items-end justify-between gap-6">
              <span className="max-w-sm font-serif text-base leading-snug tracking-[-0.02em] text-ink sm:text-2xl sm:leading-tight">
                Your footage could be the next cut here.
              </span>
              <ArrowUpRightIcon className="size-5 shrink-0 text-ink sm:size-6" />
            </span>
          </a>
        </Reveal>
      </div>
      <WorkLightbox work={active} onClose={() => setActive(null)} />
    </>
  );
}
