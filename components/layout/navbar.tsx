"use client";

import Link from "next/link";
import {
  Building2,
  ChevronDown,
  Clock,
  Mail,
  MapPin,
  Menu,
  Phone,
  Ruler,
  X,
} from "lucide-react";
import { NAV_LINKS } from "@/lib/data";
import { ui } from "@/lib/design-system";
import { brand } from "@/lib/site-content";
import { useNavbarState } from "@/hooks/use-navbar-state";
import { useSiteContact } from "@/hooks/use-site-contact";
import { cn } from "@/lib/utils";

export function Navbar() {
  const contact = useSiteContact();
  const {
    activeDropdown,
    closeMobileMenu,
    isHidden,
    isScrolled,
    mobileOpen,
    pathname,
    setActiveDropdown,
    setMobileOpen,
  } = useNavbarState();

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-50 border-b border-[#C9D5E1] bg-white transition-all duration-300 will-change-transform",
          isHidden ? "-translate-y-full" : "translate-y-0",
          isScrolled && "shadow-[0_12px_36px_rgba(16,42,67,0.08)]"
        )}
      >
        <div className={ui.shell.topBar}>
          <div className={`${ui.layout.container} flex h-10 items-center justify-between text-xs font-medium`}>
            <div className="flex min-w-0 items-center gap-6">
              <a
                href={contact.phoneHref}
                className={ui.shell.topBarItem}
              >
                <Phone className="h-3.5 w-3.5 text-[#F0B45B]" />
                {contact.phone}
              </a>
              <a
                href={contact.emailHref}
                className={`${ui.shell.topBarItem} min-w-0`}
              >
                <Mail className="h-3.5 w-3.5 text-[#F0B45B]" />
                <span className="truncate">{contact.email}</span>
              </a>
              <span className="inline-flex items-center gap-2 text-white/82">
                <Clock className="h-3.5 w-3.5 text-[#F0B45B]" />
                {contact.hours}
              </span>
            </div>
            <div className="flex items-center gap-5">
              <span className="inline-flex items-center gap-2 text-white/82">
                <MapPin className="h-3.5 w-3.5 text-[#F0B45B]" />
                {contact.shortLocation}
              </span>
              <Link
                href="/contact"
                className="inline-flex h-10 items-center bg-[#B66F12] px-4 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#9A5D0F]"
              >
                Request Civil Review
              </Link>
            </div>
          </div>
        </div>

        <div className={ui.layout.container}>
          <div className="flex h-[72px] items-center justify-between gap-6">
            <Link href="/" className="group flex min-w-0 items-center gap-3">
              <span className={ui.icon.mark}>
                <Building2 className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-lg font-extrabold leading-tight text-[#102033]">
                  {brand.shortName}
                </span>
                <span className="hidden text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#6A7A89] sm:block">
                  {brand.descriptor}
                </span>
              </span>
            </Link>

            <nav className="hidden items-center gap-1 xl:flex">
              {NAV_LINKS.map((link) => {
                const childLinks = "children" in link ? link.children : undefined;

                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => childLinks && setActiveDropdown(link.href)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        ui.shell.navLink,
                        pathname === link.href ? ui.shell.navLinkActive : ui.shell.navLinkIdle
                      )}
                    >
                      {link.label}
                      {childLinks && <ChevronDown className="h-3.5 w-3.5 opacity-65" />}
                    </Link>

                    {childLinks && activeDropdown === link.href && (
                      <div className="absolute left-0 top-full w-64 pt-3">
                        <div className="overflow-hidden rounded-md border border-[#C9D5E1] bg-white shadow-[0_22px_60px_rgba(16,42,67,0.14)]">
                          {childLinks.map((child) => (
                            <Link
                              key={`${child.href}-${child.label}`}
                              href={child.href}
                              className="block border-b border-[#EDF3F8] px-4 py-3 text-sm font-medium text-[#33465A] transition-colors last:border-b-0 hover:bg-[#F8FAFC] hover:text-[#102033]"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <Link
                href="/services"
                className={`${ui.button.compactSecondary} hidden md:inline-flex`}
              >
                <Ruler className="h-4 w-4 text-[#B66F12]" />
                Services
              </Link>
              <Link
                href="/contact"
                className={`${ui.button.compactPrimary} hidden sm:inline-flex`}
              >
                Get a Quote
              </Link>
              <button
                onClick={() => setMobileOpen((open) => !open)}
                className="rounded-md p-2 text-[#102033] transition hover:bg-[#EDF3F8] xl:hidden"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 xl:hidden">
          <button
            className="absolute inset-0 bg-[#102033]/45"
            aria-label="Close navigation menu"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute bottom-0 right-0 top-0 w-full max-w-sm overflow-y-auto border-l border-[#C9D5E1] bg-white shadow-2xl">
            <div className="border-b border-[#C9D5E1] bg-[#102A43] p-5 pt-24 text-white">
              <p className="text-sm font-semibold">Civil review desk</p>
              <a
                href={contact.phoneHref}
                className="mt-3 flex items-center gap-2 text-sm text-white/86"
              >
                <Phone className="h-4 w-4 text-[#F0B45B]" />
                {contact.phone}
              </a>
              <a
                href={contact.emailHref}
                className="mt-2 flex items-center gap-2 text-sm text-white/86"
              >
                <Mail className="h-4 w-4 text-[#F0B45B]" />
                {contact.email}
              </a>
            </div>

            <div className="space-y-1 p-5">
              {NAV_LINKS.map((link) => {
                const childLinks = "children" in link ? link.children : undefined;

                return (
                  <div key={link.href}>
                    <Link
                      href={link.href}
                      onClick={closeMobileMenu}
                      className={cn(
                        ui.shell.mobileLink,
                        pathname === link.href
                          ? "bg-[#FFF4E4] text-[#9A5D0F]"
                          : "text-[#33465A] hover:bg-[#EDF3F8] hover:text-[#102033]"
                      )}
                    >
                      {link.label}
                    </Link>
                    {childLinks && (
                      <div className="ml-3 border-l border-[#D7E0E8] pl-3">
                        {childLinks.map((child) => (
                          <Link
                            key={`${child.href}-${child.label}`}
                            href={child.href}
                            onClick={closeMobileMenu}
                            className="block rounded-md px-3 py-2 text-xs font-medium text-[#5F7080] transition-colors hover:bg-[#F8FAFC] hover:text-[#102033]"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="mt-5 block rounded-md bg-[#102A43] px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Request Civil Review
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
