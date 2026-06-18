"use client";

import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { SITE_NAME } from "@/lib/data";
import { ui } from "@/lib/design-system";
import { useSiteContact } from "@/hooks/use-site-contact";
import { brand, footerColumns, socialLinkItems } from "@/lib/site-content";

export function Footer() {
  const contact = useSiteContact();

  return (
    <footer className="border-t border-[#C9D5E1] bg-white">
      <div className="border-b border-[#C9D5E1] bg-[#F8FAFC]">
        <div className={`${ui.layout.container} grid gap-6 py-8 lg:grid-cols-[0.72fr_0.28fr] lg:items-center`}>
          <div>
            <p className={ui.text.eyebrow}>Civil review desk</p>
            <h2 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight text-[#102033] sm:text-4xl">
              Need a BOQ, estimate, drawing, or site progress review?
            </h2>
          </div>
          <Link
            href="/contact"
            className={`${ui.button.primary} lg:justify-self-end`}
          >
            Request Civil Review
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className={`${ui.layout.container} py-12`}>
        <div className="grid gap-10 lg:grid-cols-[0.36fr_0.64fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className={ui.icon.mark}>
                <Building2 className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-lg font-extrabold text-[#102033]">{brand.shortName}</span>
                <span className="block text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#6A7A89]">
                  {brand.descriptor}
                </span>
              </span>
            </Link>
            <p className="body-copy mt-5 max-w-md text-sm leading-7">
              Independent civil consulting for owners who need cost clarity, drawing checks,
              site visibility, and technical confidence before committing money or scope.
            </p>

            <div className="mt-6 space-y-3">
              {[
                { Icon: MapPin, text: contact.address },
                { Icon: Phone, text: contact.phone, href: contact.phoneHref },
                { Icon: Mail, text: contact.email, href: contact.emailHref },
                { Icon: Clock, text: contact.hours },
              ].map(({ Icon, text, href }) => {
                const content = (
                  <>
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[#B66F12]" />
                    <span>{text}</span>
                  </>
                );

                return href ? (
                  <a
                    key={text}
                    href={href}
                    className="flex items-start gap-3 text-sm text-[#4E5F70] transition hover:text-[#102033]"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={text} className="flex items-start gap-3 text-sm text-[#4E5F70]">
                    {content}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-[#102033]">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center gap-2 text-sm font-medium text-[#4E5F70] transition hover:text-[#9A5D0F]"
                      >
                        <ArrowRight className="h-3 w-3 opacity-0 transition group-hover:opacity-100" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-5 border-t border-[#C9D5E1] pt-6 md:flex-row md:items-center">
          <p className="text-xs text-[#5F7080]">
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {socialLinkItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-[#C9D5E1] bg-white px-3 py-2 text-xs font-semibold text-[#4E5F70] transition hover:border-[#B66F12]/40 hover:bg-[#FFF4E4] hover:text-[#9A5D0F]"
              >
                {item.label}
                <ExternalLink className="h-3 w-3" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
