import { profile } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";
import { ArrowUpRightIcon } from "@/components/ui/icons";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-rule bg-bone"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal>
          <Tag tone="green">{profile.availability}</Tag>
          <h2
            id="contact-heading"
            className="mt-6 max-w-3xl font-serif text-4xl leading-[1.08] tracking-[-0.035em] text-ink md:text-6xl"
          >
            Send me the footage and the deadline.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-[1.6] text-graphite">
            Tell me what the film is for, how much footage exists and when it
            has to be live. You get a fixed quote and a start date back within a
            working day.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}?subject=Edit%20project%20enquiry`}
              className="inline-flex items-center gap-2 rounded-[5px] bg-ink px-5 py-3 text-sm text-white transition-colors duration-200 hover:bg-graphite active:scale-[0.98]"
            >
              {profile.email}
              <ArrowUpRightIcon className="size-4" />
            </a>
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
              Replies within one working day
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
