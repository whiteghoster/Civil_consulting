import type { Metadata } from "next";
import { FadeUp } from "@/components/shared/motion";
import { CTASection } from "@/components/sections/cta";
import { ProjectGallery } from "@/components/sections/project-gallery";
import { AuroraBackground } from "@/components/shared/aurora-background";

export const metadata: Metadata = {
  title: "Project Gallery",
  description: "Explore Saranya Civil Consulting project examples across residential, commercial, infrastructure, and green buildings.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-secondary)] relative overflow-hidden">
        <AuroraBackground />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(232,196,104,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(232,196,104,0.5) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
        <div className="container-wide section-padding relative">
          <FadeUp className="max-w-3xl">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">Project Gallery</span>
            <h1 className="heading-display text-white mb-5">Showcasing Our Finest <span className="text-gradient">Engineering &amp; Architectural Achievements</span></h1>
            <p className="text-white/60 text-lg leading-relaxed">
              From ₹10 Cr housing societies to ₹2,000 Cr mega-stadiums — every project in our portfolio reflects the same standard of precision.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-background)]">
        <div className="container-wide section-padding">
          <ProjectGallery />
        </div>
      </section>

      <CTASection />
    </>
  );
}
