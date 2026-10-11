import { process, toolkit } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="border-y border-rule bg-bone"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeader
          index="03"
          eyebrow="How it runs"
          title="Three steps, no surprise invoices."
          note="Scope and price agreed before the project opens, so nothing on the invoice is a surprise."
        />
        <h2 id="process-heading" className="sr-only">
          Process
        </h2>

        <div className="mt-10 grid gap-5 lg:grid-cols-12">
          <ol className="grid gap-5 lg:col-span-8 lg:grid-cols-3">
            {process.map((item, index) => (
              <li key={item.step} className="h-full list-none">
                <Reveal delay={index * 90} className="lift flex h-full flex-col rounded-xl border border-rule bg-surface p-7">
                  <span className="font-mono text-[11px] tracking-[0.12em] text-muted">
                    {item.step}
                  </span>
                  <h3 className="mt-4 font-serif text-xl leading-tight tracking-[-0.02em] text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.6] text-graphite">
                    {item.body}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>

          <Reveal delay={120} className="h-full lg:col-span-4">
            <div className="h-full rounded-xl border border-rule bg-surface p-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                What we work in
              </p>
              <h3 className="mt-4 font-serif text-xl leading-tight tracking-[-0.02em] text-ink">
                Five tools, used properly.
              </h3>
              <dl className="mt-6 space-y-4">
                {toolkit.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-baseline justify-between gap-4 border-b border-rule pb-4 last:border-b-0 last:pb-0"
                  >
                    <dt className="text-sm text-ink">{tool.name}</dt>
                    <dd className="text-right font-mono text-[10px] uppercase tracking-[0.1em] text-muted">
                      {tool.use}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
