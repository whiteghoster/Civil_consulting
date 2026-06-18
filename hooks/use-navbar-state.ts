"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export function useNavbarState() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const lastY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 20);
      setIsHidden(currentY > lastY.current && currentY > 140);
      lastY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return {
    activeDropdown,
    closeMobileMenu: () => setMobileOpen(false),
    isHidden,
    isScrolled,
    mobileOpen,
    pathname,
    setActiveDropdown,
    setMobileOpen,
  };
}
