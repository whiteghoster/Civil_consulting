import type { Metadata } from "next";
import { Calculator, BarChart3, Search, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { FadeUp, SlideLeft, SlideRight } from "@/components/shared/motion";
import { CTASection } from "@/components/sections/cta";
import { SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description: "Comprehensive civil engineering consultancy: Quantity Surveying, Project Monitoring, Technical Due Diligence, and Investment Advisory.",
};

const ICONS = { Calculator, BarChart3, Search, TrendingUp };

const DETAILED = [
  {
    id: "quantity-surveying",
    icon: "Calculator",
    title: "Quantity Surveying & Cost Estimation",
    subtitle: "Precision from First Brick to Final Handover",
    description: "Our quantity surveying practice is the foundation of sound project economics. We combine deep technical knowledge with India-specific market intelligence to deliver estimates and cost plans you can bet your project on.",
    details: [
      { heading: "Bill of Quantities (BOQ)", text: "Exhaustive, trade-by-trade itemisation covering every material and labour component." },
      { heading: "Cost Planning", text: "Early-stage budget models that hold through design development — no shock revisions." },
      { heading: "Tender Analysis", text: "Objective bid evaluation to surface the best value, not just the lowest price." },
      { heading: "Value Engineering", text: "Design-stage optimisation that reduces cost without compromising quality." },
      { heading: "Cost Control", text: "Monthly CVR reports and EAC updates to keep stakeholders ahead of variance." },
      { heading: "Post-Contract Management", text: "Final account settlement, variation management, and claims resolution." },
    ],
    gradient: "from-blue-600/20 to-indigo-600/20",
    image: "QS",
  },
  {
    id: "project-monitoring",
    icon: "BarChart3",
    title: "Project Monitoring & Audit",
    subtitle: "Eyes on the Ground, Intelligence in the Cloud",
    description: "Banks, private equity funds, and developers trust our monitoring team because we call issues before they become cost overruns. Our structured weekly site visits and digital dashboards keep every stakeholder informed.",
    details: [
      { heading: "Progress Tracking", text: "Milestone-linked S-curves and earned value analysis updated weekly." },
      { heading: "Site Monitoring", text: "Trained site engineers conducting structured inspections with photographic evidence." },
      { heading: "Quality Audits", text: "IS/NBC code compliance checks for structural, civil, and finishing works." },
      { heading: "Regulatory Compliance", text: "RERA, BIS, and local authority compliance verified at every stage." },
      { heading: "Risk Identification", text: "Early warning register with owner-assigned mitigation actions." },
      { heading: "Reporting", text: "Lender-grade MIS reports tailored to each stakeholder's decision needs." },
    ],
    gradient: "from-emerald-600/20 to-teal-600/20",
    image: "PM",
  },
  {
    id: "technical-due-diligence",
    icon: "Search",
    title: "Technical Due Diligence",
    subtitle: "Know What You're Buying Before You Sign",
    description: "Before you commit ₹100 Cr or ₹1000 Cr, our due diligence team gives you the complete technical picture — construction quality, structural integrity, encroachments, regulatory status, and residual risk.",
    details: [
      { heading: "Structural Analysis", text: "Visual and non-destructive examination of structural members, foundations, and systems." },
      { heading: "Site Review", text: "Boundary verification, soil condition assessment, and environmental screening." },
      { heading: "Feasibility Studies", text: "Technical feasibility for development proposals including infrastructure adequacy." },
      { heading: "Risk Assessment", text: "Quantified risk register with cost estimates for identified remediation works." },
      { heading: "Technical Reports", text: "Bankable TDD reports accepted by major Indian and international lenders." },
      { heading: "Compliance Verification", text: "Building permit, occupancy certificate, and NOC verification." },
    ],
    gradient: "from-purple-600/20 to-violet-600/20",
    image: "TDD",
  },
  {
    id: "investment-advisory",
    icon: "TrendingUp",
    title: "Investment Advisory",
    subtitle: "Where Engineering Meets Financial Intelligence",
    description: "Our investment advisory practice bridges technical reality and financial modelling. We give family offices, REITs, and institutional investors the technical edge to identify, price, and execute superior real estate investments.",
    details: [
      { heading: "Investment Analysis", text: "Technical-financial integrated analysis of target assets and development projects." },
      { heading: "ROI Projections", text: "Bottom-up cash flow models anchored to real construction cost data." },
      { heading: "Financial Feasibility", text: "Development feasibility studies covering land cost, construction, and exit assumptions." },
      { heading: "Market Research", text: "Construction cost benchmarking, supply pipeline analysis, and comparable project data." },
      { heading: "Portfolio Optimization", text: "Technical risk scoring of existing portfolios with reposition opportunity mapping." },
      { heading: "Strategic Recommendations", text: "Board-ready recommendation decks with full technical underpinning." },
    ],
    gradient: "from-amber-600/20 to-orange-600/20",
    image: "IA",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-secondary)] overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(232,196,104,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(232,196,104,0.5) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
        <div className="container-wide section-padding relative">
          <FadeUp className="max-w-3xl">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">Services</span>
            <h1 className="heading-display text-white mb-5">
              Civil Consultancy<br />
              <span className="text-gradient">Built on Evidence</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              Four integrated service lines covering the full lifecycle of civil infrastructure — from concept to completion to investment.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Quick nav */}
      <section className="sticky top-16 z-30 bg-white/95 dark:bg-[var(--color-card)]/95 backdrop-blur-md border-b border-[var(--color-border)]">
        <div className="container-wide section-padding">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {DETAILED.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex-shrink-0 px-4 py-1.5 text-xs font-semibold rounded-lg text-[var(--color-muted-foreground)] hover:text-accent hover:bg-accent/10 transition-colors"
              >
                {s.title.split(" ").slice(0, 2).join(" ")}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service sections */}
      {DETAILED.map((service, i) => {
        const Icon = ICONS[service.icon as keyof typeof ICONS] || Calculator;
        const isEven = i % 2 === 0;

        return (
          <section
            key={service.id}
            id={service.id}
            className={`py-24 ${i % 2 === 0 ? "bg-[var(--color-card)]" : "bg-[var(--color-background)] dark:bg-[var(--color-muted)]"}`}
          >
            <div className="container-wide section-padding">
              <div className={`grid lg:grid-cols-2 gap-14 items-start ${!isEven && "lg:flex-row-reverse"}`}>
                {/* Text side */}
                <div className={!isEven ? "lg:order-2" : ""}>
                  <FadeUp>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5`}>
                      <Icon className="w-6 h-6 text-[var(--color-foreground)]" />
                    </div>
                    <span className="text-accent text-xs font-semibold tracking-widest uppercase mb-2 block">
                      {service.subtitle}
                    </span>
                    <h2 className="heading-lg text-[var(--color-foreground)] mb-4">{service.title}</h2>
                    <p className="text-[var(--color-muted-foreground)] leading-relaxed mb-8">{service.description}</p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {service.details.map(({ heading, text }) => (
                        <div key={heading} className="flex gap-3">
                          <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-semibold text-[var(--color-foreground)]">{heading}</p>
                            <p className="text-xs text-[var(--color-muted-foreground)] dark:text-white/40 mt-0.5 leading-relaxed">{text}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 mt-8 px-5 py-2.5 bg-accent hover:bg-accent/85 text-[var(--color-primary)] font-semibold text-sm rounded-xl transition-colors"
                    >
                      Enquire About This Service
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </FadeUp>
                </div>

                {/* Visual side */}
                <div className={!isEven ? "lg:order-1" : ""}>
                  <FadeUp delay={0.15}>
                    <div className={`rounded-2xl bg-gradient-to-br ${service.gradient} h-80 flex items-center justify-center relative overflow-hidden border border-[var(--color-border)]`}>
                      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
                      <span className="text-8xl font-black text-white/10 select-none">{service.image}</span>
                    </div>
                  </FadeUp>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <CTASection />
    </>
  );
}
