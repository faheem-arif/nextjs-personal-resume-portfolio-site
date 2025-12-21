## Example Color Schemes

Copy any `theme` object below into `app/data/content.ts` to swap the entire palette. Everything in `page.tsx` is already wired to these tokens.

### Default Cyan
```ts
export const theme = {
  bg: {
    gradient: "from-slate-950 via-slate-900 to-slate-950",
    sectionAlt: "bg-slate-900/40",
    card: "bg-slate-900/60",
    cardDeep: "bg-slate-950/60",
    nav: "bg-slate-950/90",
    footer: "bg-slate-950",
  },
  border: {
    subtle: "border-slate-800/60",
    strong: "border-cyan-500/30",
    accent: "border-cyan-500/50",
  },
  text: {
    primary: "text-white",
    secondary: "text-slate-200",
    tertiary: "text-slate-400",
    accent: "text-cyan-400",
    muted: "text-slate-500",
  },
  accent: {
    gradient: "from-cyan-500 to-cyan-600",
    gradientHover: "hover:from-cyan-600 hover:to-cyan-700",
    glow: "shadow-cyan-500/25",
    glowStrong: "shadow-cyan-500/40",
    glowSoft: "shadow-cyan-500/10",
    chip: "bg-gradient-to-br from-cyan-500/20 to-cyan-600/20",
    chipSolid: "bg-gradient-to-br from-cyan-500 to-cyan-600",
    overlayRight: "bg-gradient-to-r from-cyan-500/5 to-transparent",
    overlayLeft: "bg-gradient-to-l from-cyan-500/5 to-transparent",
    divider: "bg-gradient-to-b from-cyan-400 to-cyan-600",
    ring: "focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none",
    scrollGradient: "bg-gradient-to-br from-cyan-500 to-cyan-600",
    scrollShadow: "shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40",
  },
  shape: {
    glow: "bg-cyan-500/20",
    dot: "bg-cyan-400",
  },
  grid: {
    color: "rgba(34, 211, 238, 0.25)",
    size: "50px 50px",
  },
}
```

### Green
```ts
export const theme = {
  bg: {
    gradient: "from-slate-950 via-slate-900 to-slate-950",
    sectionAlt: "bg-slate-900/40",
    card: "bg-slate-900/60",
    cardDeep: "bg-slate-950/60",
    nav: "bg-slate-950/90",
    footer: "bg-slate-950",
  },
  border: {
    subtle: "border-slate-800/60",
    strong: "border-green-500/30",
    accent: "border-green-500/50",
  },
  text: {
    primary: "text-white",
    secondary: "text-slate-200",
    tertiary: "text-slate-400",
    accent: "text-green-400",
    muted: "text-slate-500",
  },
  accent: {
    gradient: "from-green-500 to-green-600",
    gradientHover: "hover:from-green-600 hover:to-green-700",
    glow: "shadow-green-500/25",
    glowStrong: "shadow-green-500/40",
    glowSoft: "shadow-green-500/10",
    chip: "bg-gradient-to-br from-green-500/20 to-green-600/20",
    chipSolid: "bg-gradient-to-br from-green-500 to-green-600",
    overlayRight: "bg-gradient-to-r from-green-500/5 to-transparent",
    overlayLeft: "bg-gradient-to-l from-green-500/5 to-transparent",
    divider: "bg-gradient-to-b from-green-400 to-green-600",
    ring: "focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus:outline-none",
    scrollGradient: "bg-gradient-to-br from-green-500 to-green-600",
    scrollShadow: "shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/40",
  },
  shape: {
    glow: "bg-green-500/20",
    dot: "bg-green-400",
  },
  grid: {
    color: "rgba(34, 197, 94, 0.25)",
    size: "50px 50px",
  },
}
```

### Red
```ts
export const theme = {
  bg: {
    gradient: "from-slate-950 via-slate-900 to-slate-950",
    sectionAlt: "bg-slate-900/40",
    card: "bg-slate-900/60",
    cardDeep: "bg-slate-950/60",
    nav: "bg-slate-950/90",
    footer: "bg-slate-950",
  },
  border: {
    subtle: "border-slate-800/60",
    strong: "border-red-500/30",
    accent: "border-red-500/50",
  },
  text: {
    primary: "text-white",
    secondary: "text-slate-200",
    tertiary: "text-slate-400",
    accent: "text-red-400",
    muted: "text-slate-500",
  },
  accent: {
    gradient: "from-red-500 to-red-600",
    gradientHover: "hover:from-red-600 hover:to-red-700",
    glow: "shadow-red-500/25",
    glowStrong: "shadow-red-500/40",
    glowSoft: "shadow-red-500/10",
    chip: "bg-gradient-to-br from-red-500/20 to-red-600/20",
    chipSolid: "bg-gradient-to-br from-red-500 to-red-600",
    overlayRight: "bg-gradient-to-r from-red-500/5 to-transparent",
    overlayLeft: "bg-gradient-to-l from-red-500/5 to-transparent",
    divider: "bg-gradient-to-b from-red-400 to-red-600",
    ring: "focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none",
    scrollGradient: "bg-gradient-to-br from-red-500 to-red-600",
    scrollShadow: "shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/40",
  },
  shape: {
    glow: "bg-red-500/20",
    dot: "bg-red-400",
  },
  grid: {
    color: "rgba(239, 68, 68, 0.25)",
    size: "50px 50px",
  },
}
```

### Amber/Gold
```ts
export const theme = {
  bg: {
    gradient: "from-stone-950 via-stone-900 to-stone-950",
    sectionAlt: "bg-stone-900/40",
    card: "bg-stone-900/60",
    cardDeep: "bg-stone-950/60",
    nav: "bg-stone-950/85",
    footer: "bg-stone-950/90",
  },
  border: {
    subtle: "border-stone-800/50",
    strong: "border-amber-500/25",
    accent: "border-amber-500/40",
  },
  text: {
    primary: "text-white",
    secondary: "text-stone-200",
    tertiary: "text-stone-400",
    accent: "text-amber-400",
    muted: "text-stone-500",
  },
  accent: {
    gradient: "from-amber-500 to-amber-600",
    gradientHover: "hover:from-amber-600 hover:to-amber-700",
    glow: "shadow-amber-500/25",
    glowStrong: "shadow-amber-500/40",
    glowSoft: "shadow-amber-500/10",
    chip: "bg-gradient-to-br from-amber-500/20 to-amber-600/20",
    chipSolid: "bg-gradient-to-br from-amber-500 to-amber-600",
    overlayRight: "bg-gradient-to-r from-amber-500/5 to-transparent",
    overlayLeft: "bg-gradient-to-l from-amber-500/5 to-transparent",
    divider: "bg-gradient-to-b from-amber-400 to-amber-600",
    ring: "focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none",
    scrollGradient: "bg-gradient-to-br from-amber-500 to-amber-600",
    scrollShadow: "shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/40",
  },
  shape: {
    glow: "bg-amber-500/20",
    dot: "bg-amber-400",
  },
  grid: {
    color: "rgba(245, 158, 11, 0.22)",
    size: "50px 50px",
  },
}
```

### Purple
```ts
export const theme = {
  bg: {
    gradient: "from-slate-950 via-slate-900 to-slate-950",
    sectionAlt: "bg-slate-900/40",
    card: "bg-slate-900/60",
    cardDeep: "bg-slate-950/60",
    nav: "bg-slate-950/90",
    footer: "bg-slate-950",
  },
  border: {
    subtle: "border-slate-800/60",
    strong: "border-purple-500/30",
    accent: "border-purple-500/50",
  },
  text: {
    primary: "text-white",
    secondary: "text-slate-200",
    tertiary: "text-slate-400",
    accent: "text-purple-400",
    muted: "text-slate-500",
  },
  accent: {
    gradient: "from-purple-500 to-purple-600",
    gradientHover: "hover:from-purple-600 hover:to-purple-700",
    glow: "shadow-purple-500/25",
    glowStrong: "shadow-purple-500/40",
    glowSoft: "shadow-purple-500/10",
    chip: "bg-gradient-to-br from-purple-500/20 to-purple-600/20",
    chipSolid: "bg-gradient-to-br from-purple-500 to-purple-600",
    overlayRight: "bg-gradient-to-r from-purple-500/5 to-transparent",
    overlayLeft: "bg-gradient-to-l from-purple-500/5 to-transparent",
    divider: "bg-gradient-to-b from-purple-400 to-purple-600",
    ring: "focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none",
    scrollGradient: "bg-gradient-to-br from-purple-500 to-purple-600",
    scrollShadow: "shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40",
  },
  shape: {
    glow: "bg-purple-500/20",
    dot: "bg-purple-400",
  },
  grid: {
    color: "rgba(168, 85, 247, 0.25)",
    size: "50px 50px",
  },
}
```

### Teal
```ts
export const theme = {
  bg: {
    gradient: "from-slate-950 via-slate-900 to-slate-950",
    sectionAlt: "bg-slate-900/35",
    card: "bg-slate-900/55",
    cardDeep: "bg-slate-950/55",
    nav: "bg-slate-950/85",
    footer: "bg-slate-950",
  },
  border: {
    subtle: "border-slate-800/50",
    strong: "border-teal-500/30",
    accent: "border-teal-500/50",
  },
  text: {
    primary: "text-white",
    secondary: "text-slate-200",
    tertiary: "text-slate-400",
    accent: "text-teal-300",
    muted: "text-slate-500",
  },
  accent: {
    gradient: "from-teal-500 to-teal-600",
    gradientHover: "hover:from-teal-600 hover:to-teal-700",
    glow: "shadow-teal-500/25",
    glowStrong: "shadow-teal-500/40",
    glowSoft: "shadow-teal-500/10",
    chip: "bg-gradient-to-br from-teal-500/20 to-teal-600/20",
    chipSolid: "bg-gradient-to-br from-teal-500 to-teal-600",
    overlayRight: "bg-gradient-to-r from-teal-500/5 to-transparent",
    overlayLeft: "bg-gradient-to-l from-teal-500/5 to-transparent",
    divider: "bg-gradient-to-b from-teal-400 to-teal-600",
    ring: "focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none",
    scrollGradient: "bg-gradient-to-br from-teal-500 to-teal-600",
    scrollShadow: "shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/40",
  },
  shape: {
    glow: "bg-teal-500/20",
    dot: "bg-teal-400",
  },
  grid: {
    color: "rgba(20, 184, 166, 0.24)",
    size: "50px 50px",
  },
}
```

### Blue Gray
```ts
export const theme = {
  bg: {
    gradient: "from-slate-900 via-slate-850 to-slate-900",
    sectionAlt: "bg-slate-900/30",
    card: "bg-slate-900/50",
    cardDeep: "bg-slate-950/50",
    nav: "bg-slate-950/85",
    footer: "bg-slate-950",
  },
  border: {
    subtle: "border-slate-800/50",
    strong: "border-sky-500/25",
    accent: "border-sky-500/40",
  },
  text: {
    primary: "text-white",
    secondary: "text-slate-200",
    tertiary: "text-slate-400",
    accent: "text-sky-300",
    muted: "text-slate-500",
  },
  accent: {
    gradient: "from-sky-500 to-sky-600",
    gradientHover: "hover:from-sky-600 hover:to-sky-700",
    glow: "shadow-sky-500/25",
    glowStrong: "shadow-sky-500/40",
    glowSoft: "shadow-sky-500/10",
    chip: "bg-gradient-to-br from-sky-500/20 to-sky-600/20",
    chipSolid: "bg-gradient-to-br from-sky-500 to-sky-600",
    overlayRight: "bg-gradient-to-r from-sky-500/5 to-transparent",
    overlayLeft: "bg-gradient-to-l from-sky-500/5 to-transparent",
    divider: "bg-gradient-to-b from-sky-400 to-sky-600",
    ring: "focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 focus:outline-none",
    scrollGradient: "bg-gradient-to-br from-sky-500 to-sky-600",
    scrollShadow: "shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/40",
  },
  shape: {
    glow: "bg-sky-500/20",
    dot: "bg-sky-400",
  },
  grid: {
    color: "rgba(56, 189, 248, 0.22)",
    size: "50px 50px",
  },
}
```
