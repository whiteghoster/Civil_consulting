import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin, BarChart2, Building2, CheckCircle2, ArrowRight } from "lucide-react";
import { FadeUp, StaggerContainer } from "@/components/shared/motion";
import { CTASection } from "@/components/sections/cta";
import { PROJECTS } from "@/lib/data";

const CATEGORY_INFO: Record<string, { title: string; description: string; gradient: string }> = {
  residential: { title: "Residential Apartments", description: "Luxury high-rises, mid-income housing, and affordable development — cost management for the full residential spectrum.", gradient: "from-blue-900 to-blue-700" },
  corporate: { title: "Corporate Offices", description: "Grade A and Grade B+ commercial office developments from concept budget to final account.", gradient: "from-indigo-900 to-violet-700" },
  bridges: { title: "Highway Bridges", description: "Major infrastructure bridges on national and state highways — technical audits and cost monitoring.", gradient: "from-stone-800 to-stone-600" },
  green: { title: "Green Buildings", description: "IGBC and LEED certified developments — cost planning that accounts for sustainable technology premiums.", gradient: "from-emerald-900 to-emerald-700" },
  housing: { title: "Housing Societies", description: "Integrated townships and gated communities — full lifecycle consultancy from planning to delivery.", gradient: "from-amber-800 to-amber-700" },
  stadiums: { title: "Stadiums & Arenas", description: "World-class sports and entertainment venues — specialist cost and monitoring for complex long-span structures.", gradient: "from-indigo-900 to-indigo-700" },
};

type Params = { slug: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const info = CATEGORY_INFO[slug];
  return {
    title: info?.title || "Projects",
    description: info?.description || "Project portfolio",
  };
}

export function generateStaticParams() {
  return Object.keys(CATEGORY_INFO).map((slug) => ({ slug }));
}

export default async function ProjectCategoryPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const info = CATEGORY_INFO[slug];
  if (!info) notFound();

  const projects = PROJECTS.filter((p) => p.slug === slug);

  return (
    <>
      <section className={`pt-32 pb-20 bg-gradient-to-br ${info.gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="container-wide section-padding relative">
          <Link href="/projects" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> All Projects
          </Link>
          <FadeUp>
            <h1 className="heading-display text-white mb-4">{info.title}</h1>
            <p className="text-white/70 text-lg max-w-2xl">{info.description}</p>
          </FadeUp>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-background)]">
        <div className="container-wide section-padding">
          {projects.length > 0 ? (
            <StaggerContainer className="grid sm:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="glass-card dark:glass-card rounded-2xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-[var(--color-foreground)] text-lg mb-1">{project.title}</h3>
                      <div className="flex items-center gap-2 text-xs text-[var(--color-muted-foreground)]">
                        <MapPin className="w-3 h-3" />
                        {project.location}
                      </div>
                    </div>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${project.status === "Completed" ? "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400" : "bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400"}`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--color-muted-foreground)] mb-4">{project.description}</p>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {[
                      { label: "Project Value", value: project.value },
                      { label: "Area", value: project.area },
                      { label: "Year", value: project.year },
                      { label: "Category", value: project.category },
                    ].map(({ label, value }) => (
                      <div key={label}>
                        <p className="text-xs text-[var(--color-muted-foreground)] mb-0.5">{label}</p>
                        <p className="text-sm font-semibold text-[var(--color-foreground)]">{value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </StaggerContainer>
          ) : (
            <div className="text-center py-16">
              <Building2 className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-2">More Coming Soon</h3>
              <p className="text-[var(--color-muted-foreground)] mb-6">We're preparing case studies for this category. Contact us to learn about our work.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-[var(--color-primary)] font-semibold text-sm rounded-xl">
                Get in Touch <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
