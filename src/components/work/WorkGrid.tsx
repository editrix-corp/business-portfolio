"use client";

import { useState } from "react";
import { works, type Work } from "@/lib/work";
import { Reveal } from "@/components/ui/Reveal";
import { WorkCard } from "./WorkCard";
import { WorkLightbox } from "./WorkLightbox";

export function WorkGrid() {
  const [active, setActive] = useState<Work | null>(null);

  return (
    <>
      <div className="velocity-skew mt-10 grid grid-cols-1 gap-5 lg:auto-rows-[88px] lg:grid-cols-12">
        {works.map((work, index) => (
          <Reveal
            key={work.slug}
            delay={(index % 3) * 90}
            className={`h-full ${work.span}`}
          >
            <WorkCard work={{ ...work, span: "" }} onOpen={setActive} />
          </Reveal>
        ))}
      </div>
      <WorkLightbox work={active} onClose={() => setActive(null)} />
    </>
  );
}
