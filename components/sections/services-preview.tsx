"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calculator, BarChart3, Search, TrendingUp, ArrowUpRight } from "lucide-react";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/shared/motion";
import { SERVICES } from "@/lib/data";

const ICONS = { Calculator, BarChart3, Search, TrendingUp };

export function ServicesSection() {
  return (
    <section className="py-24 bg-[var(--color-card)]">
      <div className="container-wide section-padding">
        <FadeUp className="max-w-2xl mb-16">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-3 block">What We Do</span>
          <h2 className="heading-xl text-[var(--color-foreground)] mb-4">
            Four Pillars of{" "}
            <span className="text-gradient">Engineering Excellence</span>
          </h2>
          <p className="text-[var(--color-muted-foreground)] text-lg leading-relaxed">
            Comprehensive civil consultancy services trusted by India's leading developers, government bodies, and investors.
          </p>
        </FadeUp>

        <StaggerContainer className="grid md:grid-cols-2 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon as keyof typeof ICONS] || Calculator;
            return (
              <motion.div
                key={service.id}
                variants={staggerItem}
                className="group glass-card dark:glass-card rounded-2xl p-8 cursor-pointer hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-[var(--color-foreground)]" />
                  </div>
                  <Link
                    href={service.href}
                    className="w-8 h-8 rounded-lg bg-[var(--color-primary)]/5 dark:bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-accent/20"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>

                <h3 className="text-lg font-bold text-[var(--color-foreground)] mb-2">{service.title}</h3>
                <p className="text-[var(--color-muted-foreground)] text-sm leading-relaxed mb-5">{service.description}</p>

                <ul className="grid grid-cols-2 gap-1.5">
                  {service.features.slice(0, 4).map((feat) => (
                    <li key={feat} className="flex items-center gap-1.5 text-xs text-[var(--color-secondary)] dark:text-white/60">
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </StaggerContainer>

        <FadeUp className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 border border-accent/30 text-accent text-sm font-semibold rounded-xl hover:bg-accent/10 transition-colors"
          >
            View All Services
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
