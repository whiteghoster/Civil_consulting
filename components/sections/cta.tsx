import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { CONTACT_INFO } from "@/lib/data";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[var(--color-background)]">
      {/* Distinct Background Layer */}
      <div className="absolute inset-0">
        {/* Construction Image */}
        <Image
          src="https://images.unsplash.com/photo-1590846083693-f23dedc80468?q=80&w=2400&auto=format&fit=crop"
          alt="Engineering team at construction site"
          fill
          className="object-cover opacity-15 scale-110"
          sizes="100vw"
        />
        
        {/* Solid overlay for consistency */}
        <div className="absolute inset-0 bg-[var(--color-background)]/90" />
        
        {/* Distinct gradient - Using accent direction */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-secondary)]/20 via-transparent to-transparent" />
        
        {/* Side accent lines */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-primary)] to-[var(--color-secondary)]" />
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--color-secondary)] via-[var(--color-primary)] to-[var(--color-accent)]" />
      </div>

      {/* Distinct Ambient Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--color-accent)]/5 blur-[150px]" />
        <div className="absolute top-0 right-1/4 w-48 h-48 rounded-full bg-[var(--color-primary)]/10 blur-[80px] animate-pulse-slow" />
        <div className="absolute bottom-0 left-1/4 w-32 h-32 rounded-full bg-[var(--color-secondary)]/10 blur-[60px] animate-pulse-slow" />
      </div>

      {/* Diagonal Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(45deg, var(--color-border) 25%, transparent 25%), linear-gradient(-45deg, var(--color-border) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, var(--color-border) 75%), linear-gradient(-45deg, transparent 75%, var(--color-border) 75%)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container-wide section-padding relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div>
            {/* Badge - Different style from hero */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/30 text-[var(--color-primary)] text-sm font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
              Start Your Journey
            </span>
            
            {/* Heading - Uses foreground color */}
            <h2 className="heading-xl text-[var(--color-foreground)] mb-5">
              Ready to Build<br />
              <span className="text-gradient">Your Vision?</span>
            </h2>
            
            {/* Subtitle - Uses muted foreground */}
            <p className="text-[var(--color-muted-foreground)] text-lg leading-relaxed mb-10">
              Get in touch with our expert team for a free consultation. 
              Let&apos;s discuss how we can bring your project to life.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-accent)] hover:bg-[var(--color-accent)]/85 text-[var(--color-accent-foreground)] font-semibold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-[var(--color-accent)]/25 hover:-translate-y-0.5"
            >
              Schedule a Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[var(--color-card)] border border-[var(--color-border)] text-[var(--color-foreground)] font-semibold rounded-xl hover:border-[var(--color-accent)]/40 transition-colors backdrop-blur-sm"
            >
              <Phone className="w-4 h-4 text-[var(--color-accent)]" />
              {CONTACT_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
