import { clients } from "@/lib/site";

export function ClientStrip() {
  const loop = [...clients, ...clients];

  return (
    <section
      aria-label="Selected clients"
      className="overflow-hidden border-y border-rule bg-bone py-5"
    >
      <div className="marquee-track flex w-max gap-12 pl-12">
        {loop.map((client, index) => (
          <span
            key={`${client}-${index}`}
            className="whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.14em] text-muted"
          >
            {client}
            <span className="pl-12 text-rule">/</span>
          </span>
        ))}
      </div>
    </section>
  );
}
