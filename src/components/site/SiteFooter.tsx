import { profile } from "@/lib/site";
import { ArrowUpRightIcon } from "@/components/ui/icons";

export function SiteFooter() {
  return (
    <footer className="border-t border-rule bg-bone">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
          © 2026 {profile.brand} — {profile.lead}
        </p>
        <div className="flex items-center gap-6">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.12em] text-ink transition-opacity duration-200 hover:opacity-60"
          >
            {profile.email}
            <ArrowUpRightIcon className="size-3.5" />
          </a>
          <a
            href="#top"
            className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted transition-colors duration-200 hover:text-ink"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
