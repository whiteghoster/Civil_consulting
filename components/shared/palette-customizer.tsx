"use client";

import { useState, useRef, useEffect } from "react";
import { Palette, Check, RotateCcw, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { usePalette } from "@/components/shared/palette-provider";
import { cn } from "@/lib/utils";

const CUSTOM_FIELDS: { key: "primary" | "secondary" | "accent" | "background" | "card" | "border"; label: string }[] = [
  { key: "primary", label: "Primary" },
  { key: "secondary", label: "Secondary" },
  { key: "accent", label: "Accent" },
  { key: "background", label: "Background" },
  { key: "card", label: "Card" },
  { key: "border", label: "Border" },
];

export function PaletteCustomizer({ light }: { light?: boolean }) {
  const { themeId, setThemeId, custom, setCustomColor, resetCustom, presets } = usePalette();
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<"themes" | "custom">("themes");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const activePreset = presets.find((p) => p.id === themeId) || presets[0];

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "p-2 rounded-lg transition-colors magnetic",
          light ? "text-white/70 hover:text-white hover:bg-white/8" : "text-white/70 hover:text-white hover:bg-white/8"
        )}
        aria-label="Customize theme"
        aria-expanded={open}
      >
        <Palette className="w-4 h-4" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full right-0 mt-2 p-4 w-72 glass-dark rounded-2xl border border-white/10 shadow-2xl shadow-black/30 z-50"
          >
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-semibold text-white/50 uppercase tracking-widest px-1">
                Appearance
              </p>
              <button onClick={() => setOpen(false)} className="text-white/40 hover:text-white p-1 rounded">
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 mb-3 p-1 rounded-lg bg-white/5">
              {(["themes", "custom"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={cn(
                    "flex-1 text-xs font-medium py-1.5 rounded-md transition-all duration-200 capitalize",
                    tab === t ? "bg-white/12 text-white" : "text-white/50 hover:text-white/80"
                  )}
                >
                  {t}
                </button>
              ))}
            </div>

            {tab === "themes" ? (
              <div className="grid grid-cols-2 gap-2">
                {presets.map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => setThemeId(preset.id)}
                    className={cn(
                      "relative flex items-center gap-2 p-2.5 rounded-xl border text-left transition-all duration-200 hover:-translate-y-0.5",
                      themeId === preset.id
                        ? "border-white/30 bg-white/10"
                        : "border-white/8 hover:border-white/20 hover:bg-white/5"
                    )}
                  >
                    <span
                      className="w-6 h-6 rounded-full flex-shrink-0 ring-1 ring-white/20"
                      style={{
                        background: `linear-gradient(135deg, ${preset.light.primary}, ${preset.swatch})`,
                      }}
                    />
                    <span className="flex flex-col min-w-0">
                      <span className="text-xs font-semibold text-white truncate">{preset.name}</span>
                      <span className="text-[10px] text-white/40">{preset.description}</span>
                    </span>
                    {themeId === preset.id && (
                      <Check className="w-3.5 h-3.5 text-white absolute top-1.5 right-1.5" />
                    )}
                  </button>
                ))}
              </div>
            ) : (
              <div className="space-y-2.5">
                {CUSTOM_FIELDS.map(({ key, label }) => {
  const currentValue =
    custom[key as keyof typeof custom] ??
    activePreset.light[key as keyof typeof activePreset.light] ??
    "#000000";

                  return (
                    <div key={key} className="flex items-center justify-between gap-2">
                      <label className="text-xs text-white/60 flex items-center gap-2">
                        <span
                          className="w-4 h-4 rounded-full ring-1 ring-white/15 inline-block"
                          style={{ background: currentValue }}
                        />
                        {label}
                      </label>
                      <input
                        type="color"
                        value={currentValue}
                        onChange={(e) => setCustomColor(key, e.target.value)}
                        className="w-8 h-6 rounded cursor-pointer bg-transparent border border-white/15"
                        aria-label={`${label} color`}
                      />
                    </div>
                  );
                })}
                <button
                  onClick={resetCustom}
                  className="w-full mt-2 flex items-center justify-center gap-1.5 text-xs font-medium text-white/50 hover:text-white py-2 rounded-lg border border-white/8 hover:border-white/20 transition-colors"
                >
                  <RotateCcw className="w-3 h-3" />
                  Reset to preset
                </button>
              </div>
            )}

            <p className="text-xs text-white/40 mt-3 px-1">
              {activePreset.name} · {activePreset.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
