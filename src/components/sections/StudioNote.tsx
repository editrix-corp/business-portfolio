import { studioNote } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";

export function StudioNote() {
  return (
    <section
      aria-label="Studio note"
      className="mx-auto max-w-4xl px-6 py-24 md:py-32"
    >
      <Reveal>
        <figure className="border-l border-ink pl-8">
          <blockquote className="font-serif text-2xl leading-[1.3] tracking-[-0.02em] text-ink md:text-3xl">
            “{studioNote.quote}”
          </blockquote>
          <figcaption className="mt-6 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
            {studioNote.source}
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
