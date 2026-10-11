import { ShowreelFrame } from "./ShowreelFrame";
import { Reveal } from "@/components/ui/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";
import { Tag } from "@/components/ui/Tag";
import { ArrowDownIcon, ArrowUpRightIcon } from "@/components/ui/icons";
import { profile, stats } from "@/lib/site";

const specs = [
  { k: "Tools", v: "DaVinci Resolve, Photoshop, CapCut, Canva, PicsArt" },
  { k: "Delivery", v: "16:9, 9:16, 1:1 and 4:5 from one master" },
  { k: "Reach us", v: "Instagram, email or a call" },
] as const;

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden px-6 pb-20 pt-16 md:pb-28 md:pt-24"
    >
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <Tag tone="green">{profile.availability}</Tag>
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
              {profile.base}
            </span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1
            id="hero-heading"
            className="mt-8 max-w-4xl font-serif text-5xl leading-[1.05] tracking-[-0.035em] text-ink sm:text-6xl md:text-7xl"
          >
            We cut video that holds the audience all the way through.
          </h1>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <Reveal delay={160} className="lg:col-span-5">
            <p className="max-w-md text-base leading-[1.6] text-graphite">
              {profile.intro}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Magnetic>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-[5px] bg-ink px-5 py-3 text-sm text-white transition-colors duration-200 hover:bg-graphite active:scale-[0.98]"
              >
                See the work
                <ArrowDownIcon className="size-4" />
              </a>
              </Magnetic>
              <Magnetic>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-[5px] border border-rule bg-surface px-5 py-3 text-sm text-ink transition-colors duration-200 hover:bg-bone active:scale-[0.98]"
              >
                Book a call
                <ArrowUpRightIcon className="size-4" />
              </a>
              </Magnetic>
            </div>

            <dl className="mt-10 space-y-3 border-t border-rule pt-6">
              {specs.map((row) => (
                <div key={row.k} className="flex items-baseline gap-4">
                  <dt className="w-28 shrink-0 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                    {row.k}
                  </dt>
                  <dd className="text-sm text-graphite">{row.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={240} className="lg:col-span-7">
            <div className="velocity-drag">
              <ShowreelFrame />
            </div>
          </Reveal>
        </div>

        <dl className="mt-16 grid grid-cols-1 border-t border-rule sm:grid-cols-3">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 80}
              className="border-b border-rule px-1 py-6 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0"
            >
              <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                {stat.label}
              </dt>
              <dd className="mt-2 font-serif text-4xl leading-none tracking-[-0.03em] text-ink">
                {stat.value}
                <span className="pl-2 font-sans text-xs tracking-normal text-muted">
                  {stat.unit}
                </span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
