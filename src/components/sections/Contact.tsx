import { profile } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";
import {
  ArrowUpRightIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
} from "@/components/ui/icons";

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
            Send us the footage and the deadline.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-[1.6] text-graphite">
            Tell us what you are making, roughly how much footage there is and
            when it has to be live. You get a quote and a start date back before
            anything begins.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}?subject=Project%20enquiry`}
              className="inline-flex items-center gap-2 rounded-[5px] bg-ink px-5 py-3 text-sm text-white transition-colors duration-200 hover:bg-graphite active:scale-[0.98]"
            >
              <MailIcon className="size-4" />
              {profile.email}
            </a>
            <a
              href={profile.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-[5px] border border-rule bg-surface px-5 py-3 text-sm text-ink transition-colors duration-200 hover:bg-canvas active:scale-[0.98]"
            >
              <InstagramIcon className="size-4" />
              {profile.instagramHandle}
              <ArrowUpRightIcon className="size-3.5 text-muted" />
            </a>
            <a
              href={profile.phoneHref}
              className="inline-flex items-center gap-2 rounded-[5px] border border-rule bg-surface px-5 py-3 text-sm text-ink transition-colors duration-200 hover:bg-canvas active:scale-[0.98]"
            >
              <PhoneIcon className="size-4" />
              {profile.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
