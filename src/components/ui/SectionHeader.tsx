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
          <p className="flex items-baseline gap-3 font-mono uppercase tracking-[0.12em] text-muted">
            <span className="text-2xl text-ink sm:text-3xl">{index}</span>
            <span className="text-xl text-rule sm:text-2xl">/</span>
            <span className="text-sm sm:text-base">{eyebrow}</span>
          </p>
          <h2 className="mt-5 font-serif text-[2.6rem] leading-[1.05] tracking-[-0.035em] text-ink sm:text-5xl md:text-6xl">
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
