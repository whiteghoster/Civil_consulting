"use client";

import { Shield, Award, Users, Handshake, CheckCircle2 } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight, StaggerContainer, staggerItem } from "@/components/shared/motion";
import { motion } from "framer-motion";
import { VALUES } from "@/lib/data";

const ICONS = { Shield, Award, Users, Handshake };

const WHY_LIST = [
  "RICS accredited professionals",
  "Proprietary cost-tracking software",
  "24/7 project monitoring dashboard",
  "Transparent fixed-fee pricing",
  "NDA-protected engagements",
  "Pan-India presence in 8 cities",
];

export function WhyUsSection() {
  return (
    <section className="py-24 bg-[var(--color-background)] dark:bg-[var(--color-muted)]">
      <div className="container-wide section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <SlideLeft>
            <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-3 block">Why Choose Us</span>
            <h2 className="heading-xl text-[var(--color-foreground)] mb-6">
              The Standard Others<br />
              <span className="text-gradient">Measure Against</span>
            </h2>
            <p className="text-[var(--color-muted-foreground)] text-base leading-relaxed mb-8">
              Since 2009, we've redefined what civil consultancy means in India. Our combination of technical depth, cutting-edge tools, and unwavering integrity has made us the go-to partner for India's biggest developers.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {WHY_LIST.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-[var(--color-muted-foreground)]">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </SlideLeft>

          <SlideRight>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/10 to-transparent rounded-3xl blur-2xl" />
              <div className="relative grid grid-cols-2 gap-4">
                {[
                  { num: "01", text: "Discover your project's true scope through our no-obligation feasibility call." },
                  { num: "02", text: "Receive a precision cost estimate with detailed BOQ within 72 hours." },
                  { num: "03", text: "Our team deploys on-site, tracking every milestone against budget." },
                  { num: "04", text: "Monthly reports and a dedicated PM ensure zero surprises at handover." },
                ].map(({ num, text }) => (
                  <div key={num} className="glass-card dark:glass-card rounded-xl p-5">
                    <span className="text-2xl font-bold text-accent opacity-40 font-mono">{num}</span>
                    <p className="text-xs text-[var(--color-muted-foreground)] mt-2 leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </SlideRight>
        </div>

        {/* Values cards */}
        <FadeUp className="text-center mb-10">
          <h3 className="heading-lg text-[var(--color-foreground)]">Our Core Values</h3>
        </FadeUp>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((val) => {
            const Icon = ICONS[val.icon as keyof typeof ICONS] || Shield;
            return (
              <motion.div
                key={val.title}
                variants={staggerItem}
                className="glass-card dark:glass-card rounded-2xl p-6 text-center group hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/8 transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-bold text-[var(--color-foreground)] mb-2">{val.title}</h4>
                <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed">{val.description}</p>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
