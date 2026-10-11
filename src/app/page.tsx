import { Atmosphere } from "@/components/site/Atmosphere";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Hero } from "@/components/hero/Hero";
import { WorkSection } from "@/components/work/WorkSection";
import { ClientStrip } from "@/components/sections/ClientStrip";
import { Capabilities } from "@/components/sections/Capabilities";
import { Process } from "@/components/sections/Process";
import { Testimonial } from "@/components/sections/Testimonial";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";

export default function Page() {
  return (
    <>
      <Atmosphere />
      <div className="relative z-10 flex min-h-full flex-col">
        <SiteNav />
        <main className="flex-1">
          <Hero />
          <ClientStrip />
          <WorkSection />
          <Capabilities />
          <Process />
          <Testimonial />
          <Faq />
          <Contact />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
