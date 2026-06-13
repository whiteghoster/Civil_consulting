"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { FadeUp } from "@/components/shared/motion";
import { TESTIMONIALS } from "@/lib/data";

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    timerRef.current = setInterval(next, 5000);
    return () => clearInterval(timerRef.current);
  }, []);

  const t = TESTIMONIALS[current];

  return (
    <section className="py-24 bg-[var(--color-background)] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[var(--color-primary)] blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[var(--color-accent)] blur-[120px]" />
      </div>

      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container-wide section-padding relative">
        <FadeUp className="text-center mb-16">
          <span className="text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-3 block">Testimonials</span>
          <h2 className="heading-xl text-[var(--color-foreground)]">What Our <span className="text-gradient">Clients Say</span></h2>
        </FadeUp>

        <div className="max-w-3xl mx-auto">
          <div className="relative min-h-[220px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-8 md:p-10"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[var(--color-accent)] fill-[var(--color-accent)]" />
                  ))}
                </div>

                <p className="text-[var(--color-foreground)]/80 text-lg leading-relaxed mb-6 italic">
                  "{t.content}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{t.name[0]}</span>
                  </div>
                  <div>
                    <div className="text-[var(--color-foreground)] font-semibold text-sm">{t.name}</div>
                    <div className="text-[var(--color-muted-foreground)] text-xs">{t.designation}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`h-1 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-[var(--color-accent)]" : "w-3 bg-[var(--color-border)] hover:bg-[var(--color-accent)]/40"}`}
                />
              ))}
            </div>
            
            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-9 h-9 rounded-xl bg-[var(--color-muted)] hover:bg-[var(--color-border)] flex items-center justify-center text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                className="w-9 h-9 rounded-xl bg-[var(--color-accent)]/20 hover:bg-[var(--color-accent)]/30 flex items-center justify-center text-[var(--color-accent)] transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}