"use client";

import { FadeUp } from "@/components/shared/motion";
import { CLIENTS } from "@/lib/data";

export function ClientsSection() {
  const doubled = [...CLIENTS, ...CLIENTS];

  return (
    <section className="py-16 bg-[var(--color-background)] border-y border-[var(--color-border)] dark:border-white/5 overflow-hidden">
      <div className="container-wide section-padding mb-8">
        <FadeUp className="text-center">
          <span className="text-[var(--color-muted-foreground)] text-xs font-semibold tracking-widest uppercase">
            Trusted by India's Leading Developers & Institutions
          </span>
        </FadeUp>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-white dark:from-[var(--color-background)] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-white dark:from-[var(--color-background)] to-transparent pointer-events-none" />

        <div className="flex animate-marquee">
          {doubled.map((client, i) => (
            <div
              key={`${client}-${i}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
            >
              <span className="text-sm font-bold text-[var(--color-muted-foreground)] dark:text-white/25 hover:text-accent dark:hover:text-accent transition-colors whitespace-nowrap tracking-wide uppercase">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
