"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Clock, Briefcase, ArrowRight, CheckCircle2, Send, Users, TrendingUp, Heart, Coffee } from "lucide-react";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/shared/motion";
import { CTASection } from "@/components/sections/cta";
import { OPENINGS } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  experience: z.string().min(1, "Please select experience level"),
  position: z.string().min(1, "Please select a position"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const BENEFITS = [
  { Icon: TrendingUp, title: "Career Growth", text: "Structured learning paths and mentorship from India's top civil engineers." },
  { Icon: Users, title: "Collaborative Culture", text: "Flat hierarchy. Your ideas matter from day one." },
  { Icon: Heart, title: "Health & Wellness", text: "Comprehensive medical insurance for you and your family." },
  { Icon: Coffee, title: "Work-Life Balance", text: "Flexible hours, hybrid working, and generous leave policies." },
];

export default function CareerPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedOpening, setSelectedOpening] = useState<string>("");

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      await fetch("/api/career", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
      reset();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-secondary)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(232,196,104,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(232,196,104,0.5) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
        <div className="absolute top-20 left-1/3 w-80 h-80 rounded-full bg-accent/5 blur-[100px] animate-blob" />
        <div className="container-wide section-padding relative">
          <FadeUp className="max-w-3xl">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">Join Our Team</span>
            <h1 className="heading-display text-white mb-5">
              Build Your Career<br />
              <span className="text-gradient">With Purpose</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              We're looking for engineers who want to do the best work of their careers. If you believe infrastructure shapes civilization, you belong here.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-[var(--color-card)]">
        <div className="container-wide section-padding">
          <FadeUp className="text-center mb-12">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-3 block">Why Join StructuraPro</span>
            <h2 className="heading-xl text-[var(--color-foreground)]">
              A Place Where Engineers <span className="text-gradient">Thrive</span>
            </h2>
          </FadeUp>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map(({ Icon, title, text }) => (
              <motion.div
                key={title}
                variants={staggerItem}
                className="glass-card dark:glass-card rounded-2xl p-6 text-center group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-[var(--color-foreground)] mb-2">{title}</h3>
                <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </StaggerContainer>

          <FadeUp delay={0.2} className="mt-10">
            <div className="glass-card dark:glass-card rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="font-bold text-[var(--color-foreground)] mb-4">Work Culture at StructuraPro</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Data-driven decision making",
                  "Zero tolerance for mediocrity",
                  "Recognition for good work",
                  "Pan-India mobility opportunities",
                  "Direct access to senior leadership",
                  "Continuous technical training",
                  "International project exposure",
                  "Competitive CTC + performance bonus",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-[var(--color-muted-foreground)]">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-[var(--color-background)] dark:bg-[var(--color-muted)]">
        <div className="container-wide section-padding">
          <FadeUp className="text-center mb-12">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-3 block">Current Openings</span>
            <h2 className="heading-xl text-[var(--color-foreground)]">Open Positions</h2>
          </FadeUp>

          <StaggerContainer className="space-y-4 max-w-4xl mx-auto">
            {OPENINGS.map((job) => (
              <motion.div
                key={job.id}
                variants={staggerItem}
                className="glass-card dark:glass-card rounded-2xl p-6 group hover:border-accent/30 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="font-bold text-[var(--color-foreground)]">{job.title}</h3>
                      <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${job.type === "Full Time" ? "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400" : "bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400"}`}>
                        {job.type}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--color-muted-foreground)] mb-3">{job.description}</p>
                    <div className="flex flex-wrap gap-3 text-xs text-[var(--color-muted-foreground)]">
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{job.location}</span>
                      <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" />{job.experience}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedOpening(job.title);
                      document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="flex items-center gap-2 px-4 py-2.5 bg-accent/10 hover:bg-accent/20 text-accent text-sm font-semibold rounded-xl transition-colors whitespace-nowrap"
                  >
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply-form" className="py-20 bg-[var(--color-background)]">
        <div className="container-wide section-padding">
          <div className="max-w-2xl mx-auto">
            <FadeUp className="text-center mb-10">
              <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-3 block">Apply Now</span>
              <h2 className="heading-lg text-[var(--color-foreground)] mb-3">Start Your Application</h2>
              <p className="text-[var(--color-muted-foreground)] text-sm">
                Can't find a perfect match? Apply anyway — we always have room for exceptional talent.
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16 glass-card dark:glass-card rounded-2xl"
                  >
                    <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-2">Application Received!</h3>
                    <p className="text-[var(--color-muted-foreground)] text-sm">
                      Our HR team will review your application and reach out within 3 business days.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 px-5 py-2 text-sm text-accent border border-accent/30 rounded-xl hover:bg-accent/10 transition-colors"
                    >
                      Submit Another
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit(onSubmit)}
                    className="glass-card dark:glass-card rounded-2xl p-8 space-y-5"
                  >
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-[var(--color-muted-foreground)] mb-1.5">Full Name *</label>
                        <input
                          {...register("name")}
                          placeholder="Rahul Mehta"
                          className="w-full px-4 py-2.5 rounded-xl bg-[var(--color-muted)] border border-[var(--color-border)] text-[var(--color-foreground)] placeholder-[var(--color-muted-foreground)] text-sm outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition-all"
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[var(--color-muted-foreground)] mb-1.5">Email Address *</label>
                        <input
                          {...register("email")}
                          type="email"
                          placeholder="rahul@email.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-[var(--color-muted)] border border-[var(--color-border)] text-[var(--color-foreground)] placeholder-[var(--color-muted-foreground)] text-sm outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition-all"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-[var(--color-muted-foreground)] mb-1.5">Phone Number *</label>
                        <input
                          {...register("phone")}
                          placeholder="+91 98XXX XXXXX"
                          className="w-full px-4 py-2.5 rounded-xl bg-[var(--color-muted)] border border-[var(--color-border)] text-[var(--color-foreground)] placeholder-[var(--color-muted-foreground)] text-sm outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition-all"
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[var(--color-muted-foreground)] mb-1.5">Experience Level *</label>
                        <select
                          {...register("experience")}
                          className="w-full px-4 py-2.5 rounded-xl bg-[var(--color-muted)] border border-[var(--color-border)] text-[var(--color-foreground)] text-sm outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition-all"
                        >
                          <option value="">Select experience</option>
                          <option value="fresher">Fresher</option>
                          <option value="1-3">1–3 Years</option>
                          <option value="3-5">3–5 Years</option>
                          <option value="5-10">5–10 Years</option>
                          <option value="10+">10+ Years</option>
                        </select>
                        {errors.experience && <p className="text-red-500 text-xs mt-1">{errors.experience.message}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[var(--color-muted-foreground)] mb-1.5">Position Applying For *</label>
                      <select
                        {...register("position")}
                        value={selectedOpening}
                        onChange={(e) => setSelectedOpening(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-[var(--color-muted)] border border-[var(--color-border)] text-[var(--color-foreground)] text-sm outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition-all"
                      >
                        <option value="">Select a position</option>
                        {OPENINGS.map((job) => (
                          <option key={job.id} value={job.title}>{job.title}</option>
                        ))}
                        <option value="other">Other / General Application</option>
                      </select>
                      {errors.position && <p className="text-red-500 text-xs mt-1">{errors.position.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[var(--color-muted-foreground)] mb-1.5">Cover Message (Optional)</label>
                      <textarea
                        {...register("message")}
                        rows={4}
                        placeholder="Tell us about yourself, your key projects, and why you want to join StructuraPro..."
                        className="w-full px-4 py-2.5 rounded-xl bg-[var(--color-muted)] border border-[var(--color-border)] text-[var(--color-foreground)] placeholder-[var(--color-muted-foreground)] text-sm outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition-all resize-none"
                      />
                    </div>

                    <p className="text-xs text-[var(--color-muted-foreground)]">
                      * Please email your resume to{" "}
                      <a href="mailto:careers@structurapro.in" className="text-accent">careers@structurapro.in</a>{" "}
                      along with this form.
                    </p>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-accent hover:bg-accent/85 disabled:opacity-60 text-[var(--color-primary)] font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-accent/25"
                    >
                      {loading ? (
                        <>
                          <span className="w-4 h-4 border-2 border-[var(--color-primary)]/30 border-t-[var(--color-primary)] rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Submit Application
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
