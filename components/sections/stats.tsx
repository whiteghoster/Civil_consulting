"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const STATS = [
  { 
    value: 250, 
    suffix: "+", 
    label: "Projects Delivered", 
    description: "Across India's top metros" 
  },
  { 
    value: 15, 
    suffix: "+", 
    label: "Years of Excellence", 
    description: "Since our founding in 2009" 
  },
  { 
    value: 98, 
    suffix: "%", 
    label: "Client Satisfaction", 
    description: "Measured every engagement" 
  },
  { 
    value: 500, 
    prefix: "₹", 
    suffix: "Cr+", 
    label: "Project Value", 
    description: "Under advisory & monitoring" 
  },
];

export function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="py-20 bg-[var(--color-background)] relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[var(--color-primary)] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[var(--color-accent)] rounded-full blur-[120px]" />
      </div>

      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container-wide section-padding relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-3 block">By the Numbers</span>
          <h2 className="heading-xl text-[var(--color-foreground)]">Measurable Impact, <span className="text-gradient">Every Time</span></h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-border)] rounded-2xl overflow-hidden">
          {STATS.map(({ value, prefix, suffix, label, description }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[var(--color-card)] p-8 lg:p-10 flex flex-col items-center text-center group hover:bg-[var(--color-muted)] transition-colors"
            >
              <div className="text-4xl lg:text-5xl font-bold text-[var(--color-foreground)] mb-2 font-mono">
                {prefix && <span className="text-[var(--color-accent)]">{prefix}</span>}
                {inView ? (
                  <CountUp end={value} duration={2.5} separator="," />
                ) : (
                  <span>0</span>
                )}
                {suffix && <span className="text-[var(--color-primary)]">{suffix}</span>}
              </div>
              <div className="text-sm font-semibold text-[var(--color-foreground)]/80 mb-1">{label}</div>
              <div className="text-xs text-[var(--color-muted-foreground)]">{description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}