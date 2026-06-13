"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Monitor, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import { NAV_LINKS, SITE_NAME } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 20);
      setIsHidden(currentY > lastY && currentY > 100);
      setLastY(currentY);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  const themeIcons: Record<string, typeof Sun> = { light: Sun, dark: Moon, system: Monitor };
  const ThemeIcon = themeIcons[theme || "system"] || Monitor;

  const cycleTheme = () => {
    const themes = ["light", "dark", "system"];
    const idx = themes.indexOf(theme || "system");
    setTheme(themes[(idx + 1) % themes.length]);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: isHidden ? -100 : 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-[var(--color-background)]/80 backdrop-blur-xl border-b border-[var(--color-border)] shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="container-wide section-padding">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center">
                <span className="text-white font-bold text-sm">{SITE_NAME.charAt(0)}</span>
              </div>
              <span className={cn(
                "font-bold text-lg tracking-tight transition-colors",
                isScrolled ? "text-[var(--color-foreground)]" : "text-[var(--color-foreground)]"
              )}>
                {SITE_NAME.split(" ")[0]}
                <span className="text-[var(--color-accent)]">Pro</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => link.children && setActiveDropdown(link.href)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                      pathname === link.href
                        ? "text-[var(--color-accent)]"
                        : "text-[var(--color-foreground)]/80 hover:text-[var(--color-foreground)] hover:bg-[var(--color-muted)]"
                    )}
                  >
                    {link.label}
                    {link.children && <ChevronDown className="w-3 h-3 opacity-60" />}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {link.children && activeDropdown === link.href && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl shadow-xl shadow-black/10 overflow-hidden"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-[var(--color-foreground)]/80 hover:text-[var(--color-foreground)] hover:bg-[var(--color-muted)] transition-colors first:pt-3 last:pb-3"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              <button
                onClick={cycleTheme}
                className={cn(
                  "p-2 rounded-lg transition-colors",
                  "text-[var(--color-foreground)]/70 hover:text-[var(--color-foreground)] hover:bg-[var(--color-muted)]"
                )}
                aria-label="Toggle theme"
              >
                <ThemeIcon className="w-4 h-4" />
              </button>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="hidden sm:flex items-center gap-2 px-4 py-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent)]/85 text-[var(--color-accent-foreground)] text-sm font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[var(--color-accent)]/25"
              >
                Get a Quote
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={cn(
                  "lg:hidden p-2 rounded-lg",
                  "text-[var(--color-foreground)]"
                )}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <div className="absolute right-0 top-0 bottom-0 w-72 bg-[var(--color-card)] border-l border-[var(--color-border)] overflow-y-auto">
              <div className="p-6 pt-20 space-y-1">
                {NAV_LINKS.map((link) => (
                  <div key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors",
                        pathname === link.href
                          ? "text-[var(--color-accent)] bg-[var(--color-accent)]/10"
                          : "text-[var(--color-foreground)]/80 hover:text-[var(--color-foreground)] hover:bg-[var(--color-muted)]"
                      )}
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <div className="ml-3 mt-1 space-y-0.5">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-3 py-2 text-xs text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]/80 rounded-lg transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4">
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="block text-center px-4 py-2.5 bg-[var(--color-accent)] text-[var(--color-accent-foreground)] font-semibold text-sm rounded-lg"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}