"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { Magnetic } from "@/components/shared/magnetic";
import { RippleButton } from "@/components/shared/ripple-button";

export function HeroSection() {
  const blobsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = blobsRef.current;
    if (!el) return;

    const move = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      el.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--color-background)]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2400&auto=format&fit=crop"
          alt="Construction site with steel beams and tower crane"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-background)]/95 via-[var(--color-background)]/85 to-[var(--color-background)]" />
        {/* Subtle color tint */}
        <div className="absolute inset-0 bg-[var(--color-primary)]/10 mix-blend-overlay" />
      </div>

      {/* Animated Blobs */}
      <motion.div 
        ref={blobsRef} 
        className="absolute inset-0 transition-transform duration-700 ease-out pointer-events-none"
        style={{ y: y1 }}
      >
        <div className="absolute top-[10%] left-[15%] w-72 h-72 rounded-full bg-[var(--color-primary)]/20 blur-[80px] animate-blob" />
        <div className="absolute top-[40%] right-[10%] w-96 h-96 rounded-full bg-[var(--color-secondary)]/15 blur-[100px] animate-blob-delayed" />
        <div className="absolute bottom-[20%] left-[35%] w-80 h-80 rounded-full bg-[var(--color-accent)]/15 blur-[90px] animate-blob-delayed-2" />
      </motion.div>

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main Content */}
      <div className="container-wide section-padding relative z-10 pt-24 pb-20">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 text-[var(--color-accent)] text-sm font-medium mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
            India's Premier Civil Consultancy · Since 2020
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="heading-display text-[var(--color-foreground)] mb-6 max-w-4xl"
          >
            Building India's{" "}
            <span className="relative">
              <span className="text-gradient">Future</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-[var(--color-accent)] to-transparent origin-left"
              />
            </span>{" "}
            With Engineering Precision
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-[var(--color-muted-foreground)] text-lg md:text-xl leading-relaxed mb-10 max-w-2xl"
          >
            From quantity surveying to investment advisory — we deliver end-to-end civil engineering
            consultancy that turns your vision into a landmark.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Magnetic strength={0.25}>
              <RippleButton className="group inline-flex items-center gap-2 px-6 py-3.5 bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/85 text-[var(--color-primary-foreground)] font-semibold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-[var(--color-primary)]/30 hover:-translate-y-0.5">
                <Link href="/services" className="flex items-center gap-2">
                  Explore Services
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </RippleButton>
            </Magnetic>
            <Magnetic strength={0.25}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[var(--color-card)] text-[var(--color-card-foreground)] font-semibold rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent)]/30 transition-all duration-200"
              >
                Contact Us
              </Link>
            </Magnetic>
            <Link
              href="#reel"
              className="inline-flex items-center gap-2 px-4 py-3.5 text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] font-medium transition-colors"
            >
              <span className="w-9 h-9 flex items-center justify-center rounded-full bg-[var(--color-muted)]">
                <Play className="w-3.5 h-3.5 ml-0.5" />
              </span>
              Watch Reel
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap gap-8"
          >
            {[
              { value: "250+", label: "Projects" },
              { value: "15+", label: "Years" },
              { value: "98%", label: "Satisfaction" },
              { value: "₹500Cr+", label: "Value Managed" },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col">
                <span className="text-2xl font-bold text-[var(--color-accent)]">{value}</span>
                <span className="text-sm text-[var(--color-muted-foreground)]">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[var(--color-muted-foreground)]"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}