"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock, Link2, ExternalLink, Send, CheckCircle2 } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight } from "@/components/shared/motion";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

const schema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone required"),
  company: z.string().optional(),
  city: z.string().optional(),
  service: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, "Please describe your project briefly"),
});

type FormData = z.infer<typeof schema>;

const SOCIAL = [
  { Icon: Link2, href: SOCIAL_LINKS.linkedin, label: "LinkedIn", color: "hover:text-[#0077B5]" },
  { Icon: ExternalLink, href: SOCIAL_LINKS.facebook, label: "Facebook", color: "hover:text-[#1877F2]" },
  { Icon: ExternalLink, href: SOCIAL_LINKS.instagram, label: "Instagram", color: "hover:text-[#E4405F]" },
  { Icon: ExternalLink, href: SOCIAL_LINKS.twitter, label: "Twitter/X", color: "hover:text-white" },
  { Icon: ExternalLink, href: SOCIAL_LINKS.youtube, label: "YouTube", color: "hover:text-[#FF0000]" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      void data;
      setSubmitted(true);
      reset();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full px-4 py-2.5 rounded-xl bg-[var(--color-muted)] border border-[var(--color-border)] text-[var(--color-foreground)] placeholder-[var(--color-muted-foreground)] text-sm outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition-all";

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-secondary)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(232,196,104,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(232,196,104,0.5) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
        <div className="absolute top-24 right-1/4 w-72 h-72 rounded-full bg-accent/5 blur-[90px] animate-blob" />
        <div className="container-wide section-padding relative">
          <FadeUp className="max-w-2xl">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">Contact</span>
            <h1 className="heading-display text-white mb-4">
              Let&apos;s Discuss<br />
              <span className="text-gradient">Your Project</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              Free 30-minute consultation. No commitment required. Our senior engineers will give you honest, independent advice.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 bg-[var(--color-background)]">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info column */}
            <div className="lg:col-span-2 space-y-8">
              <SlideLeft>
                <div className="glass-card dark:glass-card rounded-2xl p-6 space-y-4">
                  <h3 className="font-bold text-[var(--color-foreground)]">Office Information</h3>
                  {[
                    { Icon: MapPin, label: "Address", value: CONTACT_INFO.address },
                    { Icon: Phone, label: "Phone", value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone.replace(/\s/g,"")}` },
                    { Icon: Mail, label: "Email", value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
                    { Icon: Clock, label: "Hours", value: CONTACT_INFO.hours },
                  ].map(({ Icon, label, value, href }) => (
                    <div key={label} className="flex gap-3">
                      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <p className="text-xs text-[var(--color-muted-foreground)] mb-0.5">{label}</p>
                        {href ? (
                          <a href={href} className="text-sm text-[var(--color-muted-foreground)] hover:text-accent transition-colors">{value}</a>
                        ) : (
                          <p className="text-sm text-[var(--color-muted-foreground)]">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </SlideLeft>

              <SlideLeft delay={0.1}>
                <div className="glass-card dark:glass-card rounded-2xl p-6">
                  <h3 className="font-bold text-[var(--color-foreground)] mb-3">Follow Us</h3>
                  <div className="flex gap-3">
                    {SOCIAL.map(({ Icon, href, label, color }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className={`w-9 h-9 rounded-lg bg-[var(--color-muted)] dark:bg-white/5 flex items-center justify-center text-[var(--color-muted-foreground)] dark:text-white/40 ${color} transition-all hover:scale-110`}
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </SlideLeft>

              {/* Map placeholder */}
              <SlideLeft delay={0.15}>
                <div className="glass-card dark:glass-card rounded-2xl overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary)] flex items-center justify-center relative">
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, var(--color-accent) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                    <div className="text-center">
                      <MapPin className="w-8 h-8 text-accent mx-auto mb-2" />
                      <p className="text-white/60 text-sm">Emaar Business Park</p>
                      <p className="text-white/40 text-xs">DLF Cyber City, Gurugram</p>
                    </div>
                  </div>
                  <div className="p-3">
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center text-xs text-accent hover:text-accent font-medium"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </div>
              </SlideLeft>
            </div>

            {/* Form column */}
            <div className="lg:col-span-3">
              <SlideRight>
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-20 glass-card dark:glass-card rounded-2xl"
                    >
                      <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center mb-4">
                        <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-2">Message Received!</h3>
                      <p className="text-[var(--color-muted-foreground)] text-sm max-w-xs mx-auto">
                        One of our senior engineers will contact you within 24 hours to schedule your consultation.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-6 px-5 py-2 text-sm text-accent border border-accent/30 rounded-xl hover:bg-accent/10 transition-colors"
                      >
                        Send Another
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit(onSubmit)}
                      className="glass-card dark:glass-card rounded-2xl p-8 space-y-5"
                    >
                      <div>
                        <h3 className="font-bold text-[var(--color-foreground)] text-lg mb-1">Get In Touch</h3>
                        <p className="text-sm text-[var(--color-muted-foreground)]">Fill in your details and we&apos;ll get back to you within 24 hours.</p>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-[var(--color-muted-foreground)] mb-1.5 uppercase tracking-wide">Full Name *</label>
                          <input {...register("name")} placeholder="Amit Kumar" className={inputClass} />
                          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[var(--color-muted-foreground)] mb-1.5 uppercase tracking-wide">Email *</label>
                          <input {...register("email")} type="email" placeholder="amit@company.com" className={inputClass} />
                          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[var(--color-muted-foreground)] mb-1.5 uppercase tracking-wide">Phone *</label>
                          <input {...register("phone")} placeholder="+91 XXXXX XXXXX" className={inputClass} />
                          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[var(--color-muted-foreground)] mb-1.5 uppercase tracking-wide">Company</label>
                          <input {...register("company")} placeholder="Company name" className={inputClass} />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[var(--color-muted-foreground)] mb-1.5 uppercase tracking-wide">City</label>
                          <input {...register("city")} placeholder="Mumbai" className={inputClass} />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[var(--color-muted-foreground)] mb-1.5 uppercase tracking-wide">Service Interested</label>
                          <select {...register("service")} className={inputClass}>
                            <option value="">Select service</option>
                            <option value="quantity-surveying">Quantity Surveying</option>
                            <option value="project-monitoring">Project Monitoring</option>
                            <option value="due-diligence">Technical Due Diligence</option>
                            <option value="investment-advisory">Investment Advisory</option>
                            <option value="architecture">Architecture Consultancy</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[var(--color-muted-foreground)] mb-1.5 uppercase tracking-wide">Approximate Budget</label>
                        <select {...register("budget")} className={inputClass}>
                          <option value="">Select budget range</option>
                          <option value="under-50L">Under ₹50 Lakhs</option>
                          <option value="50L-1Cr">₹50L – ₹1 Cr</option>
                          <option value="1Cr-5Cr">₹1 Cr – ₹5 Cr</option>
                          <option value="5Cr-25Cr">₹5 Cr – ₹25 Cr</option>
                          <option value="25Cr-100Cr">₹25 Cr – ₹100 Cr</option>
                          <option value="above-100Cr">Above ₹100 Cr</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[var(--color-muted-foreground)] mb-1.5 uppercase tracking-wide">Project Description *</label>
                        <textarea
                          {...register("message")}
                          rows={4}
                          placeholder="Briefly describe your project, its location, current stage, and what you need help with..."
                          className={`${inputClass} resize-none`}
                        />
                        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-accent hover:bg-accent/85 disabled:opacity-60 text-[var(--color-primary)] font-bold rounded-xl transition-all hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-0.5"
                      >
                        {loading ? (
                          <>
                            <span className="w-4 h-4 border-2 border-[var(--color-primary)]/30 border-t-[var(--color-primary)] rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Send Message
                          </>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </SlideRight>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
