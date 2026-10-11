import { capabilities } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";
import type { Tone } from "@/lib/work";

export function Capabilities() {
  return (
    <section
      id="craft"
      aria-labelledby="craft-heading"
      className="mx-auto max-w-6xl px-6 py-24 md:py-32"
    >
      <SectionHeader
        index="02"
        eyebrow="What I handle"
        title="One person from rushes to masters."
        note="No handoffs between an editor, a colorist and a mixer who have never spoken. The film stays in one head."
      />
      <h2 id="craft-heading" className="sr-only">
        Capabilities
      </h2>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {capabilities.map((item, index) => (
          <Reveal key={item.title} delay={(index % 2) * 90}>
            <div className="lift flex h-full flex-col rounded-xl border border-rule bg-surface p-7 md:p-9">
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-serif text-2xl leading-tight tracking-[-0.02em] text-ink">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-[1.6] text-graphite">
                {item.body}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.tools.map((tool) => (
                  <Tag key={tool} tone={item.tone as Tone}>
                    {tool}
                  </Tag>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
