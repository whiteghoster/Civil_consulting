"use client";

import * as React from "react";
import { THEME_PRESETS, DEFAULT_THEME_ID, getPreset, type PaletteColors } from "@/components/shared/theme-presets";

const STORAGE_KEY = "palette-theme";
const CUSTOM_KEY = "palette-custom";

type CustomOverrides = Partial<Pick<PaletteColors, "primary" | "secondary" | "accent" | "background" | "card" | "border">>;

interface PaletteContextValue {
  themeId: string;
  setThemeId: (id: string) => void;
  custom: CustomOverrides;
  setCustomColor: (key: keyof CustomOverrides, value: string) => void;
  resetCustom: () => void;
  presets: typeof THEME_PRESETS;
}

const PaletteContext = React.createContext<PaletteContextValue | undefined>(undefined);

function hexToRgb(hex: string) {
  const h = hex.replace("#", "");
  const bigint = parseInt(h.length === 3 ? h.split("").map((c) => c + c).join("") : h, 16);
  return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 };
}

function rgbToHex(r: number, g: number, b: number) {
  return (
    "#" +
    [r, g, b]
      .map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0"))
      .join("")
  );
}

// Generate a harmonious shade by mixing toward white or black
function shade(hex: string, amount: number) {
  const { r, g, b } = hexToRgb(hex);
  const mix = amount > 0 ? 255 : 0;
  const t = Math.abs(amount);
  return rgbToHex(r + (mix - r) * t, g + (mix - g) * t, b + (mix - b) * t);
}

function applyPalette(themeId: string, custom: CustomOverrides) {
  const root = document.documentElement;
  const preset = getPreset(themeId);

  const buildVars = (palette: PaletteColors) => {
    const merged: PaletteColors = { ...palette, ...custom };
    return {
      "--color-background": merged.background,
      "--color-foreground": palette.foreground,
      "--color-card": custom.card || palette.card,
      "--color-card-foreground": palette.cardForeground,
      "--color-primary": merged.primary,
      "--color-primary-foreground": palette.primaryForeground,
      "--color-secondary": merged.secondary,
      "--color-secondary-foreground": palette.secondaryForeground,
      "--color-accent": merged.accent,
      "--color-accent-foreground": palette.accentForeground,
      "--color-border": custom.border || palette.border,
      "--color-muted": palette.muted,
      "--color-muted-foreground": palette.mutedForeground,
      "--color-ring": palette.ring,
      "--color-gradient-from": merged.primary,
      "--color-gradient-to": merged.accent,
      "--color-input": custom.border || palette.border,
    };
  };

  const lightVars = buildVars(preset.light);
  const darkVars = buildVars(preset.dark);

  // Apply light vars on :root (used by default / .light)
  Object.entries(lightVars).forEach(([k, v]) => root.style.setProperty(k, v as string));

  // Inject dark overrides scoped to .dark
  let styleEl = document.getElementById("palette-dark-override") as HTMLStyleElement | null;
  if (!styleEl) {
    styleEl = document.createElement("style");
    styleEl.id = "palette-dark-override";
    document.head.appendChild(styleEl);
  }
  const darkCss = Object.entries(darkVars)
    .map(([k, v]) => `${k}: ${v};`)
    .join(" ");
  styleEl.textContent = `.dark { ${darkCss} }`;

  root.setAttribute("data-palette", themeId);
}

export function PaletteProvider({ children }: { children: React.ReactNode }) {
  const [themeId, setThemeIdState] = React.useState(() => {
    if (typeof window === "undefined") return DEFAULT_THEME_ID;
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_THEME_ID;
  });
  const [custom, setCustomState] = React.useState<CustomOverrides>(() => {
    if (typeof window === "undefined") return {};
    try {
      return JSON.parse(localStorage.getItem(CUSTOM_KEY) || "{}");
    } catch {
      return {};
    }
  });

  React.useEffect(() => {
    applyPalette(themeId, custom);
  }, [themeId, custom]);

  const setThemeId = React.useCallback((id: string) => {
    setThemeIdState(id);
    localStorage.setItem(STORAGE_KEY, id);
  }, []);

  const setCustomColor = React.useCallback((key: keyof CustomOverrides, value: string) => {
    setCustomState((prev) => {
      const next = { ...prev, [key]: value };
      localStorage.setItem(CUSTOM_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const resetCustom = React.useCallback(() => {
    setCustomState({});
    localStorage.removeItem(CUSTOM_KEY);
  }, []);

  return (
    <PaletteContext.Provider value={{ themeId, setThemeId, custom, setCustomColor, resetCustom, presets: THEME_PRESETS }}>
      {children}
    </PaletteContext.Provider>
  );
}

export function usePalette() {
  const ctx = React.useContext(PaletteContext);
  if (!ctx) throw new Error("usePalette must be used within PaletteProvider");
  return ctx;
}

export { shade };
