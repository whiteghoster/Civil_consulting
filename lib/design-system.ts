export const ui = {
  layout: {
    container: "container-wide section-padding",
    sectionLight: "bg-white py-20 sm:py-24",
    sectionMuted: "bg-[#F8FAFC] py-20 sm:py-24",
    sectionDark: "dark-panel border-y border-[#0B1721] py-20 sm:py-24",
  },
  text: {
    eyebrow: "eyebrow",
    sectionTitle: "section-title text-4xl leading-tight sm:text-5xl",
    heroTitle: "section-title text-[2.65rem] leading-[1.04] sm:text-[4.1rem] lg:text-[5.1rem]",
    body: "body-copy text-lg leading-8",
    bodySmall: "body-copy text-sm leading-6",
    onDark: "text-white/74",
  },
  button: {
    primary:
      "inline-flex items-center justify-center gap-2 rounded-md bg-[#102A43] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0B2136]",
    secondary:
      "inline-flex items-center justify-center gap-2 rounded-md border border-[#B9C7D4] bg-white px-6 py-3.5 text-sm font-semibold text-[#102033] transition hover:border-[#102A43]/45 hover:bg-[#EDF3F8]",
    inverse:
      "inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3.5 text-sm font-semibold text-[#102A43] transition hover:bg-[#EDF3F8]",
    inverseOutline:
      "inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/15",
    compactPrimary:
      "inline-flex items-center gap-2 rounded-md bg-[#102A43] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0B2136]",
    compactSecondary:
      "inline-flex items-center gap-2 rounded-md border border-[#B9C7D4] bg-white px-4 py-2.5 text-sm font-semibold text-[#102033] transition hover:border-[#102A43]/45 hover:bg-[#EDF3F8]",
  },
  card: {
    base: "surface-card rounded-lg",
    interactive:
      "surface-card group rounded-lg transition hover:-translate-y-0.5 hover:border-[#102A43]/35 hover:shadow-[0_24px_60px_rgba(16,42,67,0.12)]",
    gridWrapper: "overflow-hidden rounded-lg border border-[#C9D5E1] bg-[#C9D5E1]",
    darkGridWrapper: "overflow-hidden rounded-lg border border-white/15 bg-white/15",
  },
  icon: {
    mark: "flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#102A43] text-white shadow-sm",
    service: "flex h-12 w-12 items-center justify-center rounded-md bg-[#EDF3F8] text-[#102A43]",
  },
  shell: {
    topBar: "hidden border-b border-[#D7E0E8] bg-[#102A43] text-white lg:block",
    topBarItem: "inline-flex items-center gap-2 transition hover:text-[#F0B45B]",
    navLink:
      "flex h-10 items-center gap-1 rounded-md px-3.5 text-sm font-semibold transition-all duration-200",
    navLinkActive: "bg-[#FFF4E4] text-[#9A5D0F]",
    navLinkIdle: "text-[#33465A] hover:bg-[#EDF3F8] hover:text-[#102033]",
    mobileLink: "block rounded-md px-3 py-2.5 text-sm font-semibold transition-colors",
  },
} as const;
