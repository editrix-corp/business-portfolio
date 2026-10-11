"use client";

import { useState } from "react";
import { faqs } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MinusIcon, PlusIcon } from "@/components/ui/icons";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="mx-auto max-w-4xl px-6 py-24 md:py-32"
    >
      <SectionHeader
        index="04"
        eyebrow="Before you write"
        title="The questions that come up every time."
      />
      <h2 id="faq-heading" className="sr-only">
        Frequently asked questions
      </h2>

      <div className="mt-6">
        {faqs.map((faq, index) => {
          const isOpen = open === index;
          return (
            <Reveal key={faq.q} delay={index * 60}>
              <div className="border-b border-rule">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    className="flex w-full cursor-pointer items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="text-base text-ink">{faq.q}</span>
                    <span className="shrink-0 text-muted">
                      {isOpen ? <MinusIcon /> : <PlusIcon />}
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${index}`}
                  hidden={!isOpen}
                  className="pb-6 pr-10 text-sm leading-[1.6] text-graphite"
                >
                  {faq.a}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
