"use client";

import Link from "next/link";
import { useState } from "react";
import { Link2, Mail, Phone, MapPin, Clock, ArrowRight, Send, ExternalLink } from "lucide-react";
import { SITE_NAME, CONTACT_INFO, SOCIAL_LINKS } from "@/lib/data";

const FOOTER_LINKS = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Mission", href: "/about#mission" },
    { label: "Leadership", href: "/about#team" },
    { label: "Careers", href: "/career" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Quantity Surveying", href: "/services#quantity-surveying" },
    { label: "Project Monitoring", href: "/services#project-monitoring" },
    { label: "Technical Due Diligence", href: "/services#technical-due-diligence" },
    { label: "Investment Advisory", href: "/services#investment-advisory" },
    { label: "Architecture", href: "/architecture" },
  ],
  projects: [
    { label: "Residential", href: "/projects/residential" },
    { label: "Corporate Offices", href: "/projects/corporate" },
    { label: "Highway Bridges", href: "/projects/bridges" },
    { label: "Green Buildings", href: "/projects/green" },
    { label: "Stadiums", href: "/projects/stadiums" },
  ],
};

const SOCIAL_ICONS = [
  { Icon: Link2, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
  { Icon: ExternalLink, href: SOCIAL_LINKS.facebook, label: "Facebook" },
  { Icon: ExternalLink, href: SOCIAL_LINKS.instagram, label: "Instagram" },
  { Icon: ExternalLink, href: SOCIAL_LINKS.twitter, label: "X / Twitter" },
  { Icon: ExternalLink, href: SOCIAL_LINKS.youtube, label: "YouTube" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // Simulate API call - replace with actual endpoint
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-[var(--color-card)] dark:bg-[var(--color-background)] border-t border-[var(--color-border)]">
      <div className="container-wide section-padding pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center">
                <span className="text-white font-bold text-sm">{SITE_NAME.charAt(0)}</span>
              </div>
              <span className="font-bold text-lg text-[var(--color-foreground)]">
                {SITE_NAME.split(" ")[0]}
                <span className="text-[var(--color-accent)]">Pro</span>
              </span>
            </Link>
            <p className="text-[var(--color-muted-foreground)] text-sm leading-relaxed mb-6 max-w-xs">
              India's most trusted civil engineering consultancy. Delivering precision, integrity, and excellence since 2009.
            </p>

            {/* Contact info */}
            <div className="space-y-2.5">
              {[
                { Icon: MapPin, text: CONTACT_INFO.address },
                { Icon: Phone, text: CONTACT_INFO.phone },
                { Icon: Mail, text: CONTACT_INFO.email },
                { Icon: Clock, text: CONTACT_INFO.hours },
              ].map(({ Icon, text }) => (
                <div key={text} className="flex items-start gap-2.5 text-xs text-[var(--color-muted-foreground)]">
                  <Icon className="w-3.5 h-3.5 mt-0.5 text-[var(--color-accent)] shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="flex items-center gap-2 mt-5">
              {SOCIAL_ICONS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-[var(--color-muted)] hover:bg-[var(--color-accent)]/20 hover:text-[var(--color-accent)] text-[var(--color-muted-foreground)] transition-colors"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            { title: "Company", links: FOOTER_LINKS.company },
            { title: "Services", links: FOOTER_LINKS.services },
            { title: "Projects", links: FOOTER_LINKS.projects },
          ].map(({ title, links }) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-[var(--color-foreground)] mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-accent)] transition-colors flex items-center gap-1.5 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border border-[var(--color-border)] rounded-xl p-6 mb-8 bg-[var(--color-muted)]/30">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div>
              <h4 className="text-sm font-semibold text-[var(--color-foreground)] mb-1">Stay Updated</h4>
              <p className="text-xs text-[var(--color-muted-foreground)]">Industry insights and project updates in your inbox.</p>
            </div>
            {subscribed ? (
              <p className="text-sm text-[var(--color-accent)] font-medium">✓ You're subscribed!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 min-w-0 sm:min-w-[300px] w-full sm:w-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 bg-[var(--color-card)] border border-[var(--color-border)] text-[var(--color-foreground)] placeholder-[var(--color-muted-foreground)] text-sm rounded-lg px-3 py-2 outline-none focus:border-[var(--color-accent)]/50 transition-colors"
                />
                <button
                  type="submit"
                  className="flex items-center gap-1.5 px-4 py-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent)]/85 text-[var(--color-accent-foreground)] text-sm font-semibold rounded-lg transition-colors whitespace-nowrap"
                >
                  <Send className="w-3.5 h-3.5" />
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--color-border)] pt-6 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <p className="text-xs text-[var(--color-muted-foreground)]">
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
              { label: "Cookie Policy", href: "/cookies" },
            ].map(({ label, href }) => (
              <Link key={href} href={href} className="text-xs text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}