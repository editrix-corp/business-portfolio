import { process, shortcuts } from "@/lib/site";
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
          note="Fixed price agreed before I open the project. Two revision rounds included on everything."
        />
        <h2 id="process-heading" className="sr-only">
          Process
        </h2>

        <div className="mt-10 grid gap-5 lg:grid-cols-12">
          <ol className="grid gap-5 lg:col-span-8 lg:grid-cols-3">
            {process.map((item, index) => (
              <Reveal key={item.step} delay={index * 90} className="h-full">
                <li className="lift flex h-full flex-col rounded-xl border border-rule bg-surface p-7 list-none">
                  <span className="font-mono text-[11px] tracking-[0.12em] text-muted">
                    {item.step}
                  </span>
                  <h3 className="mt-4 font-serif text-xl leading-tight tracking-[-0.02em] text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.6] text-graphite">
                    {item.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={120} className="h-full lg:col-span-4">
            <div className="h-full rounded-xl border border-rule bg-surface p-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                On the keyboard
              </p>
              <h3 className="mt-4 font-serif text-xl leading-tight tracking-[-0.02em] text-ink">
                Speed comes from muscle memory.
              </h3>
              <dl className="mt-6 space-y-4">
                {shortcuts.map((shortcut) => (
                  <div
                    key={shortcut.label}
                    className="flex items-center justify-between gap-4 border-b border-rule pb-4 last:border-b-0 last:pb-0"
                  >
                    <dt className="flex gap-1.5">
                      {shortcut.keys.map((key) => (
                        <kbd
                          key={key}
                          className="min-w-7 rounded-[4px] border border-rule bg-bone px-2 py-1 text-center font-mono text-[11px] text-ink"
                        >
                          {key}
                        </kbd>
                      ))}
                    </dt>
                    <dd className="text-right text-xs leading-[1.5] text-muted">
                      {shortcut.label}
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
