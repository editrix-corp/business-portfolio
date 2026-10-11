import { Atmosphere } from "@/components/site/Atmosphere";
import { StructuredData } from "@/components/site/StructuredData";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { LiquidCursor } from "@/components/motion/LiquidCursor";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Hero } from "@/components/hero/Hero";
import { WorkSection } from "@/components/work/WorkSection";
import { ServicesStrip } from "@/components/sections/ServicesStrip";
import { Capabilities } from "@/components/sections/Capabilities";
import { Process } from "@/components/sections/Process";
import { StudioNote } from "@/components/sections/StudioNote";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function Page() {
  return (
    <>
      <StructuredData siteUrl={siteUrl} />
      <SmoothScroll />
      <LiquidCursor />
      <Atmosphere />
      <div className="relative z-10 flex min-h-full flex-col">
        <SiteNav />
        <main className="flex-1">
          <Hero />
          <ServicesStrip />
          <WorkSection />
          <Capabilities />
          <Process />
          <StudioNote />
          <Faq />
          <Contact />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
