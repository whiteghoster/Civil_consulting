import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Layers, Pencil, Building, Eye, Hammer, TreePine } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight, StaggerContainer, staggerItem } from "@/components/shared/motion";
import { CTASection } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Architecture Consultancy",
  description: "Strategic architecture consulting — planning, design support, structural planning, and construction strategy for landmark developments.",
};

const SERVICES = [
  { Icon: Pencil, title: "Design Support", text: "We work alongside architects to optimise designs for constructability and cost efficiency without compromising vision." },
  { Icon: Layers, title: "Structural Planning", text: "Structural strategy advice at concept stage — helping teams choose the most efficient structural system for their project type." },
  { Icon: Eye, title: "Design Visualisation", text: "3D walkthroughs and site-level spatial analysis to test design performance before construction begins." },
  { Icon: Building, title: "Planning Approvals", text: "Navigation of local authority planning processes, with technical input to strengthen approval applications." },
  { Icon: Hammer, title: "Construction Strategy", text: "Phasing plans, sequence advice, and buildability reviews to reduce programme risk." },
  { Icon: TreePine, title: "Sustainable Design", text: "IGBC and LEED integration support from early design through to certification." },
];

const PROCESS = [
  { step: "01", title: "Discovery", text: "We understand your site, brief, and aspirations before suggesting any direction." },
  { step: "02", title: "Strategy", text: "We develop an architectural strategy aligned to your budget, programme, and planning context." },
  { step: "03", title: "Design Support", text: "We integrate with your design team — adding technical depth and cost intelligence at each stage." },
  { step: "04", title: "Delivery", text: "Construction-phase advisory to ensure design intent is realised on site and on budget." },
];

export default function ArchitecturePage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-secondary)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(232,196,104,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(232,196,104,0.5) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-accent/5 blur-[80px] animate-blob" />
        <div className="container-wide section-padding relative">
          <FadeUp className="max-w-3xl">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">Architecture Consultancy</span>
            <h1 className="heading-display text-white mb-5">
              Where Engineering<br />
              <span className="text-gradient">Meets Design</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-xl">
              Architecture is not just aesthetics. Our architecture consultancy practice brings engineering rigour to the design process — making buildings that look exceptional and perform flawlessly.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 mt-8 px-6 py-3.5 bg-accent hover:bg-accent/85 text-[var(--color-primary)] font-semibold rounded-xl transition-all hover:shadow-xl hover:shadow-accent/25">
              Start a Project <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-[var(--color-card)]">
        <div className="container-wide section-padding">
          <FadeUp className="text-center mb-14">
            <h2 className="heading-xl text-[var(--color-foreground)]">
              What We <span className="text-gradient">Offer</span>
            </h2>
          </FadeUp>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(({ Icon, title, text }) => (
              <div
                key={title}
                className="glass-card dark:glass-card rounded-2xl p-6 group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-bold text-[var(--color-foreground)] mb-2">{title}</h3>
                <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed">{text}</p>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-[var(--color-background)] dark:bg-[var(--color-muted)]">
        <div className="container-wide section-padding">
          <FadeUp className="text-center mb-14">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-3 block">Our Process</span>
            <h2 className="heading-xl text-[var(--color-foreground)]">How We Work</h2>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {PROCESS.map(({ step, title, text }, i) => (
              <FadeUp key={step} delay={i * 0.08}>
                <div className="relative">
                  {i < PROCESS.length - 1 && (
                    <div className="hidden lg:block absolute top-5 left-[calc(100%+0px)] w-full h-px bg-[var(--color-border)] dark:bg-white/8 -translate-x-4" />
                  )}
                  <span className="text-4xl font-black text-accent/20 font-mono">{step}</span>
                  <h3 className="font-bold text-[var(--color-foreground)] mt-2 mb-2">{title}</h3>
                  <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed">{text}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Visual gallery placeholder */}
      <section className="py-24 bg-[var(--color-background)]">
        <div className="container-wide section-padding">
          <FadeUp className="text-center mb-10">
            <h2 className="heading-xl text-[var(--color-foreground)]">Architecture in Action</h2>
          </FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {["Corporate", "Residential", "Mixed Use", "Public", "Hospitality", "Industrial", "Infrastructure", "Green"].map((type, i) => (
              <FadeUp key={type} delay={i * 0.04}>
                <div className={`rounded-xl overflow-hidden ${i === 0 || i === 6 ? "md:col-span-2 h-48" : "h-36"} bg-gradient-to-br ${["from-blue-900/80","from-indigo-900/80","from-stone-800/80","from-emerald-900/80","from-purple-900/80","from-amber-800/80","from-indigo-900/80","from-teal-900/80"][i]} flex items-center justify-center`}>
                  <span className="text-white/20 font-bold text-sm">{type}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
