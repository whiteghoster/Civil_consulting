"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, MapPin, Building2, Search, X, ChevronLeft, ChevronRight } from "lucide-react";
import { StaggerContainer, staggerItem } from "@/components/shared/motion";
import { TiltCard } from "@/components/shared/tilt-card";
import { PROJECTS } from "@/lib/data";

const COLORS = [
  "from-blue-900 to-blue-700",
  "from-indigo-900 to-violet-700",
  "from-stone-800 to-stone-600",
  "from-emerald-900 to-emerald-700",
  "from-amber-800 to-amber-700",
  "from-indigo-900 to-indigo-700",
];

const FILTERS = [
  { label: "All", match: () => true },
  { label: "Residential", match: (p: typeof PROJECTS[number]) => p.tags.some((t) => /residential|housing|affordable/i.test(t)) },
  { label: "Commercial", match: (p: typeof PROJECTS[number]) => p.tags.some((t) => /commercial|it park|corporate/i.test(t)) || p.category.toLowerCase().includes("corporate") },
  { label: "Infrastructure", match: (p: typeof PROJECTS[number]) => p.tags.some((t) => /infrastructure|bridge|government/i.test(t)) },
  { label: "Green", match: (p: typeof PROJECTS[number]) => p.tags.some((t) => /green/i.test(t)) },
  { label: "Sports & Civic", match: (p: typeof PROJECTS[number]) => p.tags.some((t) => /stadium|sports|iconic/i.test(t)) },
];

// Vary card heights for a masonry feel
const HEIGHTS = ["row-span-1", "row-span-1", "row-span-1", "row-span-2", "row-span-1", "row-span-2"];

export function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [query, setQuery] = useState("");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    const filterFn = FILTERS.find((f) => f.label === activeFilter)?.match || (() => true);
    return PROJECTS.filter(filterFn).filter((p) => {
      const q = query.trim().toLowerCase();
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [activeFilter, query]);

  const closeLightbox = () => setLightboxIndex(null);
  const showNext = () => setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length));
  const showPrev = () => setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));

  return (
    <>
      {/* Filters + search */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.label}
              onClick={() => setActiveFilter(f.label)}
              className={`relative px-4 py-1.5 text-sm font-medium rounded-full border transition-all duration-300 ${
                activeFilter === f.label
                  ? "bg-accent text-[var(--color-accent-foreground)] border-accent shadow-lg shadow-accent/20"
                  : "bg-white/8 text-white/60 border-white/8 hover:bg-accent/15 hover:text-accent hover:border-accent/30"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects..."
            className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white/8 border border-white/8 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-accent/40 focus:bg-white/10 transition-all"
            aria-label="Search projects"
          />
        </div>
      </div>

      {/* Masonry grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter + query}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {filtered.length === 0 ? (
            <div className="text-center py-24 text-white/40">
              <p className="text-lg">No projects match your search.</p>
            </div>
          ) : (
            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 [grid-auto-rows:1fr]">
              {filtered.map((project, i) => {
                const colorIdx = PROJECTS.indexOf(project) % COLORS.length;
                const heightClass = HEIGHTS[i % HEIGHTS.length];
                return (
                  <motion.div key={project.id} variants={staggerItem} className={heightClass}>
                    <TiltCard className="h-full rounded-2xl">
                      <div className="card-premium group h-full rounded-2xl overflow-hidden border border-white/8 hover:border-accent/30 bg-white/[0.02]">
                        <button
                          onClick={() => setLightboxIndex(i)}
                          className={`relative w-full h-52 sm:h-60 ${heightClass === "row-span-2" ? "sm:h-80" : ""} bg-gradient-to-br ${COLORS[colorIdx]} overflow-hidden cursor-zoom-in`}
                          aria-label={`Open ${project.title} preview`}
                        >
                          <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
                            <Building2 className="w-16 h-16 text-white/10" />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute top-3 left-3 flex gap-2">
                            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-black/30 text-white/80">{project.category}</span>
                          </div>
                          <div className="absolute top-3 right-3">
                            <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${project.status === "Completed" ? "bg-emerald-500/30 text-emerald-300" : "bg-amber-500/30 text-amber-300"}`}>
                              {project.status}
                            </span>
                          </div>
                          {/* Slide-up details on hover */}
                          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                            <p className="text-white font-semibold">{project.title}</p>
                            <p className="text-white/60 text-xs flex items-center gap-1 mt-1">
                              <MapPin className="w-3 h-3" /> {project.location} · {project.year}
                            </p>
                          </div>
                        </button>

                        <div className="p-5">
                          <h3 className="font-bold text-foreground mb-2">{project.title}</h3>
                          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{project.description}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <MapPin className="w-3 h-3" />
                              {project.location}
                            </div>
                            <Link
                              href={`/projects/${project.slug}`}
                              className="flex items-center gap-1 text-xs font-semibold text-accent hover:gap-2 transition-all"
                            >
                              View <ArrowUpRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </TiltCard>
                  </motion.div>
                );
              })}
            </StaggerContainer>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && filtered[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
            onKeyDown={(e) => {
              if (e.key === "Escape") closeLightbox();
              if (e.key === "ArrowRight") showNext();
              if (e.key === "ArrowLeft") showPrev();
            }}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`rounded-2xl overflow-hidden bg-gradient-to-br ${COLORS[PROJECTS.indexOf(filtered[lightboxIndex]) % COLORS.length]} aspect-video flex items-center justify-center`}>
                <Building2 className="w-24 h-24 text-white/15" />
              </div>
              <div className="mt-4 text-white">
                <h3 className="text-xl font-bold">{filtered[lightboxIndex].title}</h3>
                <p className="text-white/60 text-sm mt-1 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> {filtered[lightboxIndex].location} · {filtered[lightboxIndex].year}
                </p>
                <p className="text-white/50 text-sm mt-2 max-w-xl">{filtered[lightboxIndex].description}</p>
              </div>

              <button onClick={closeLightbox} className="absolute -top-12 right-0 text-white/70 hover:text-white p-2" aria-label="Close">
                <X className="w-6 h-6" />
              </button>
              <button onClick={showPrev} className="absolute left-2 top-1/2 -translate-y-1/2 -translate-x-12 text-white/70 hover:text-white p-2 hidden sm:block" aria-label="Previous">
                <ChevronLeft className="w-7 h-7" />
              </button>
              <button onClick={showNext} className="absolute right-2 top-1/2 -translate-y-1/2 translate-x-12 text-white/70 hover:text-white p-2 hidden sm:block" aria-label="Next">
                <ChevronRight className="w-7 h-7" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
