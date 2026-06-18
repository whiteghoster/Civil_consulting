import {
  BarChart3,
  Building2,
  Calculator,
  CheckCircle2,
  ClipboardCheck,
  FileSearch,
  Layers,
  Ruler,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

export const iconMap = {
  BarChart3,
  Building2,
  Calculator,
  CheckCircle2,
  ClipboardCheck,
  FileSearch,
  Layers,
  Ruler,
  ShieldCheck,
  TrendingUp,
} as const;

export type IconName = keyof typeof iconMap;
