import { Reveal } from "./Reveal";

export function SectionHeader({
  index,
  eyebrow,
  title,
  note,
}: {
  index: string;
  eyebrow: string;
  title: string;
  note?: string;
}) {
  return (
    <Reveal>
      <div className="flex flex-col gap-6 border-b border-rule pb-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
            <span className="text-ink">{index}</span>
            <span className="px-2 text-rule">/</span>
            {eyebrow}
          </p>
          <h2 className="mt-4 font-serif text-[2.6rem] leading-[1.05] tracking-[-0.035em] text-ink sm:text-5xl md:text-6xl">
            {title}
          </h2>
        </div>
        {note ? (
          <p className="max-w-xs text-sm leading-[1.6] text-muted">{note}</p>
        ) : null}
      </div>
    </Reveal>
  );
}
