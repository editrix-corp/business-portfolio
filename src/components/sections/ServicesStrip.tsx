import { services } from "@/lib/site";
import { LiquidMarquee } from "@/components/motion/LiquidMarquee";

export function ServicesStrip() {
  return (
    <section
      aria-label="Services"
      className="overflow-hidden border-y border-rule bg-bone py-5"
    >
      <LiquidMarquee items={services} />
    </section>
  );
}
