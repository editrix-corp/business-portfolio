import { profile } from "@/lib/site";
import {
  InstagramIcon,
  MailIcon,
  PhoneIcon,
} from "@/components/ui/icons";

export function SiteFooter() {
  return (
    <footer className="border-t border-rule bg-bone">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
          © 2026 {profile.brand} — {profile.lead}
        </p>
        <div className="flex items-center gap-2">
          <a
            href={profile.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label={`Editrix Corp on Instagram, ${profile.instagramHandle}`}
            className="flex size-9 items-center justify-center rounded-[6px] border border-rule bg-surface text-ink transition-colors duration-200 hover:bg-canvas"
          >
            <InstagramIcon className="size-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label={`Email ${profile.email}`}
            className="flex size-9 items-center justify-center rounded-[6px] border border-rule bg-surface text-ink transition-colors duration-200 hover:bg-canvas"
          >
            <MailIcon className="size-4" />
          </a>
          <a
            href={profile.phoneHref}
            aria-label={`Call ${profile.phone}`}
            className="flex size-9 items-center justify-center rounded-[6px] border border-rule bg-surface text-ink transition-colors duration-200 hover:bg-canvas"
          >
            <PhoneIcon className="size-4" />
          </a>
          <a
            href="#top"
            className="ml-3 font-mono text-[11px] uppercase tracking-[0.12em] text-muted transition-colors duration-200 hover:text-ink"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
