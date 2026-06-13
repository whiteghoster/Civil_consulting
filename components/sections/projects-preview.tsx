"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, DollarSign, ImagePlus } from "lucide-react";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/shared/motion";
import { PROJECTS } from "@/lib/data";

const COLORS = [
  "from-blue-900 to-blue-700",
  "from-indigo-900 to-violet-700",
  "from-stone-800 to-stone-600",
  "from-emerald-900 to-emerald-700",
  "from-amber-800 to-amber-700",
  "from-indigo-900 to-indigo-700",
];

// Real photos for featured projects. Slugs not listed here use a
// placeholder slot — drop your own project photo into /public/images/
// and reference it via the `image` field in lib/data.ts.
const PROJECT_PHOTOS: Record<string, string> = {
  residential: "https://images.unsplash.com/photo-1637701323782-10ebeae22093?q=80&w=1200&auto=format&fit=crop",
  corporate: "https://images.unsplash.com/photo-1745015446589-7ee6f702d8c1?q=80&w=1200&auto=format&fit=crop",
  bridges: "https://images.unsplash.com/photo-1609867271967-a82f85c48531?q=80&w=1200&auto=format&fit=crop",
};

export function ProjectsSection() {
  return (
    <section className="py-24 bg-[var(--color-background)]">
      <div className="container-wide section-padding">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <FadeUp>
            <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-3 block">Portfolio</span>
            <h2 className="heading-xl text-[var(--color-foreground)]">
              Landmark <span className="text-gradient">Projects</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent transition-colors"
            >
              View all projects <ArrowUpRight className="w-4 h-4" />
            </Link>
          </FadeUp>
        </div>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              variants={staggerItem}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Project image: real photo if available, otherwise a placeholder slot */}
              <div className={`h-56 bg-gradient-to-br ${COLORS[i]} relative overflow-hidden`}>
                {PROJECT_PHOTOS[project.slug] ? (
                  <Image
                    src={PROJECT_PHOTOS[project.slug]}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                      <ImagePlus className="w-6 h-6 text-white/25" />
                      <span className="text-white/20 text-6xl font-black tracking-tight">
                        {project.title.split(" ")[0][0]}
                        {project.title.split(" ")[1]?.[0]}
                      </span>
                      <span className="text-white/20 text-[10px] uppercase tracking-widest">Image slot</span>
                    </div>
                  </>
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex items-center gap-2 px-4 py-2.5 bg-accent text-[var(--color-primary)] font-semibold text-sm rounded-xl"
                  >
                    View Project <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
                {/* Status badge */}
                <div className="absolute top-3 right-3">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${project.status === "Completed" ? "bg-emerald-500/20 text-emerald-300" : "bg-amber-500/20 text-amber-300"}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 bg-[var(--color-background)] dark:bg-[var(--color-muted)] border border-[var(--color-border)] rounded-b-2xl -mt-0">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-[var(--color-foreground)] text-sm leading-tight">{project.title}</h3>
                  <ArrowUpRight className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5" />
                </div>
                <div className="flex items-center gap-3 text-xs text-[var(--color-muted-foreground)] dark:text-white/40 mb-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <DollarSign className="w-3 h-3" />
                    {project.value}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
