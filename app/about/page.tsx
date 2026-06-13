import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, CheckCircle2, Link2, Users, Target, Eye, Lightbulb } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight, StaggerContainer, staggerItem } from "@/components/shared/motion";
import { CTASection } from "@/components/sections/cta";
import { TEAM, TIMELINE, VALUES, CLIENTS, SITE_NAME } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${SITE_NAME}'s 15-year legacy of engineering excellence in India.`,
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-secondary)] relative overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ 
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", 
          backgroundSize: "80px 80px" 
        }} />
        <div className="container-wide section-padding relative z-10">
          <FadeUp className="max-w-3xl">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
              Our Story
            </span>
            <h1 className="heading-display text-white mb-5">
              Fifteen Years of<br />
              <span className="text-gradient">Engineering Trust</span>
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              From a two-room office in Gurugram to India's most respected civil consultancy. 
              Our journey is built on one principle: put the client's interest above everything else.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="mission" className="py-20 bg-[var(--color-card)]">
        <div className="container-wide section-padding">
          {/* Featured Image */}
          <FadeUp className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-12">
            <Image
              src="https://images.unsplash.com/photo-1635249578213-68b0aa67fdf7?q=80&w=2000&auto=format&fit=crop"
              alt="Engineer reviewing plans on a construction site"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-foreground)]/80 via-transparent to-transparent" />
          </FadeUp>

          {/* Mission & Vision Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Target,
                label: "Mission",
                title: "Deliver Precision, Build Confidence",
                text: "To provide India's real estate and infrastructure sector with the most accurate, transparent, and technology-backed civil consultancy services — enabling developers, investors, and government bodies to make decisions with complete confidence.",
              },
              {
                icon: Eye,
                label: "Vision",
                title: "The Name Synonymous with Civil Excellence",
                text: "To become the undisputed benchmark for civil engineering consultancy across South Asia by 2030, recognized for our integrity, innovation, and the measurable value we create for every stakeholder we serve.",
              },
            ].map(({ icon: Icon, label, title, text }) => (
              <FadeUp key={label} className="glass-card dark:glass-card rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-accent text-xs font-semibold tracking-widest uppercase">{label}</span>
                </div>
                <h3 className="text-xl font-bold text-[var(--color-card-foreground)] mb-4">{title}</h3>
                <p className="text-[var(--color-muted-foreground)] leading-relaxed text-sm">{text}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[var(--color-background)]">
        <div className="container-wide section-padding">
          <FadeUp className="text-center mb-12">
            <h2 className="heading-xl text-[var(--color-foreground)]">
              Values We Live By
            </h2>
          </FadeUp>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((val, i) => (
              <FadeUp key={val.title} delay={i * 0.08}>
                <div className="h-full glass-card dark:glass-card rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="font-bold text-[var(--color-foreground)] text-lg mb-2">{val.title}</h4>
                  <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed">{val.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-[var(--color-muted)]">
        <div className="container-wide section-padding">
          <FadeUp className="text-center mb-12">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-3 block">
              Our Journey
            </span>
            <h2 className="heading-xl text-[var(--color-foreground)]">A Legacy in the Making</h2>
          </FadeUp>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-[19px] top-0 bottom-0 w-px bg-[var(--color-border)]" />
              
              <div className="space-y-8">
                {TIMELINE.map(({ year, event }, i) => (
                  <FadeUp key={year} delay={i * 0.06}>
                    <div className="flex gap-6 items-start">
                      {/* Timeline Dot */}
                      <div className="relative z-10 w-10 h-10 rounded-full bg-[var(--color-card)] border-2 border-accent flex items-center justify-center shrink-0">
                        <span className="w-2 h-2 rounded-full bg-accent" />
                      </div>
                      <div className="pb-2 pt-1">
                        <span className="text-accent font-bold text-sm font-mono">{year}</span>
                        <p className="text-[var(--color-muted-foreground)] text-sm mt-0.5">{event}</p>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-[var(--color-background)]">
        <div className="container-wide section-padding">
          <FadeUp className="text-center mb-12">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-3 block">
              Leadership
            </span>
            <h2 className="heading-xl text-[var(--color-foreground)]">The Minds Behind the Mission</h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {TEAM.map((member, i) => (
              <FadeUp key={member.name} delay={i * 0.1}>
                <div className="glass-card dark:glass-card rounded-2xl p-8 hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    {/* Avatar */}
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center shrink-0">
                      <span className="text-white font-black text-xl">{member.name[0]}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-[var(--color-foreground)]">{member.name}</h3>
                      <p className="text-accent text-sm font-medium">{member.role}</p>
                      <p className="text-[var(--color-muted-foreground)] text-xs mt-0.5">{member.experience} Experience</p>
                    </div>
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="w-8 h-8 flex items-center justify-center rounded-lg bg-[var(--color-muted)] hover:bg-[var(--color-accent)] hover:text-[var(--color-accent-foreground)] text-[var(--color-muted-foreground)] transition-colors"
                    >
                      <Link2 className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {member.achievements.map((a) => (
                      <span key={a} className="flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-[var(--color-muted)] text-accent">
                        <Award className="w-3 h-3" />{a}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-[var(--color-card)] border-t border-[var(--color-border)]">
        <div className="container-wide section-padding">
          <FadeUp className="text-center mb-8">
            <h2 className="heading-lg text-[var(--color-foreground)]">Our Clients</h2>
          </FadeUp>
          <div className="flex flex-wrap gap-3 justify-center">
            {CLIENTS.map((client) => (
              <span 
                key={client} 
                className="px-4 py-2 rounded-xl border border-[var(--color-border)] text-sm font-semibold text-[var(--color-muted-foreground)] hover:border-accent/40 hover:text-accent transition-colors cursor-default"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}