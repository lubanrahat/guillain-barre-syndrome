# GBS Medical Awareness Website — সচেতনতা ও পুনরুদ্ধার গাইড

A premium, highly interactive, and responsive medical awareness platform focused on **Guillain-Barré Syndrome (GBS)**, designed primarily for mobile-first user experiences with robust support for all modern desktop viewports. 

This platform bridges critical public health gaps by providing authoritative, clean, and emotionally comforting information in native Bengali (বাংলা) regarding GBS pathology, symptoms, immediate emergency protocols, clinical therapy phases, and physical rehabilitation steps.

---

## 🌟 Key Features & Visual UX Systems

### 1. Advanced Responsive & Mobile-First Design
* **Responsive Reflowing Grids**: Adaptive structures utilizing Flexbox and CSS Grid. High-density components wrap seamlessly across all screen sizes (small smartphones, iPads, ultra-wide monitors).
* **Zero Horizontal Clipping**: Wide clinical dataset grids (such as pathogen triggers and treatment comparisons) smoothly transition into high-readability vertical card lists on mobile screens (`max-sm`) to avoid horizontal scrollbars.
* **Touch-Friendly Interactivity**: Large tap targets (min 48px), responsive margins, and customized container paddings for a highly polished finger-navigable experience.

### 2. Premium Theming & Dark Mode Baseline
* **Dynamic Dark/Light Modes**: Defaulting to a modern, medical-themed Dark Mode with soft-contrast oklch custom palettes.
* **Seamless Transition Switch**: Built with an animated [ThemeToggle](src/components/theme-toggle.tsx) using Framer Motion that performs morphing transitions between `Sun` and `Moon` vector icons.
* **Persistent Preferences**: Integrates `next-themes` client provider safe from hydration flicker, automatically caching user preference to `localStorage`.

### 3. Smooth Orchestrated Motion & Decorative Layers
* **Page Hydration Welcomer**: An animated full-screen heartbeat [PageLoader](src/components/page-loader.tsx) mask that coordinates a medical pulse emblem (`Activity`) with ripple glow circles on initial window mount.
* **Parallax Fluid Orbs**: Hardware-accelerated CSS keyframe glowing ambient grids ([ParticleBackground](src/components/particle-background.tsx)) that gracefully dim or disable on mobile to preserve GPU threads and hardware batteries.
* **Accessibility-Conscious Parallax**: Low-opacity floating symbols ([FloatingElements](src/components/floating-elements.tsx)) that track coordinate paths but instantly disable when browser `prefers-reduced-motion` flags are active.
* **Scroll-Interactive Progress Indicator**: A fluid gradient loader bar spanning the top browser edge, updating width proportionally to scroll percentage coordinates.
* **Scroll to Top Helper**: A floating [BackToTop](src/components/back-to-top.tsx) button that fades and slides into view after passing a vertical height of 400px.

### 4. Patient-First Interactive Steppers & Stats
* **Stepper Phase Journey**: The static recovery timeline has been converted into a state-driven **Interactive Recovery Stepper** ([Timeline](src/components/sections/recovery-journey-section.tsx)) where users can toggle through recovery phases (Phase 1-4) to read specialized action checklists, duration estimates, and guidelines.
* **Native Bengali Numerical Spinner**: Incorporates a mathematics-backed [AnimatedCounter](src/components/animated-counter.tsx) that triggers on scroll visibility. All statistics count up natively using native **Bengali numerals (`০` to `৯`)** via standard string parsers.

---

## 🛠️ Technology Stack

* **Core Framework**: [Next.js 16.2.6 (App Router)](https://nextjs.org/) utilizing [React 19.2.4](https://react.dev/)
* **Type System**: [TypeScript](https://www.typescriptlang.org/)
* **Style Engine**: [Tailwind CSS v4.3.0](https://tailwindcss.com/) (CSS-first configuration approach)
* **Modular Base UI**: [shadcn/ui v4.8.2](https://ui.shadcn.com/) (built using `radix-nova` presets)
* **Animation Suite**: [Framer Motion 12.40.0](https://www.framer.com/motion/)
* **Asset/Icon Library**: [Lucide React](https://lucide.dev/)

---

## 📂 Core Architecture

```bash
guillain-barre-syndrome/
├── src/
│   ├── app/
│   │   ├── globals.css         # Tailwind v4 configuration, oklch colors & keyframes
│   │   ├── layout.tsx          # HTML wrapper, ThemeProvider & Google font hooks
│   │   └── page.tsx            # Main page composer (Loader, Progress, Backgrounds)
│   │
│   ├── components/
│   │   ├── ui/                 # 55+ reusable shadcn modular widgets
│   │   ├── sections/           # 12 detailed GBS awareness sections
│   │   │   ├── hero-section.tsx
│   │   │   ├── what-is-gbs.tsx # Mobile reflowing intro timeline & pathogen triggers
│   │   │   ├── symptoms-section.tsx
│   │   │   ├── emergency-section.tsx
│   │   │   ├── treatment-section.tsx
│   │   │   ├── physiotherapy-section.tsx
│   │   │   ├── recovery-journey-section.tsx # Stepper timeline & stats spinners
│   │   │   └── faq-section.tsx
│   │   │
│   │   ├── theme-provider.tsx  # next-themes wrapper with script warning suppression
│   │   ├── theme-toggle.tsx    # Animated light/dark mode switch
│   │   ├── scroll-progress.tsx # Top scrolling indicator line
│   │   ├── page-loader.tsx     # Startup heartbeat welcomed screen
│   │   ├── particle-background.tsx # CSS-based hardware orbs
│   │   ├── floating-elements.tsx   # Parallax floating medical icons
│   │   └── back-to-top.tsx     # Animated smooth scroll-up widget
│   │
│   ├── hooks/
│   │   ├── use-active-section.ts  # IntersectionObserver section tracker
│   │   ├── use-scroll-position.ts # RAF-throttled scroll manager
│   │   ├── use-reduced-motion.ts  # Accessibility layout validator
│   │   └── use-mobile.ts          # Media query screen size helper
│   │
│   └── lib/
│       └── utils.ts            # standard cn class merger & English-to-Bengali map
```

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have [Node.js (v18+)](https://nodejs.org/) installed on your machine. You can use either `npm` or `bun`.

### 2. Installation
Clone the repository and install dependencies:
```bash
npm install
# or
bun install
```

### 3. Run Development Server
Start the local server using:
```bash
npm run dev
# or
bun dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to experience the website.

### 4. Build Production Assets
To verify static page optimizations, run a full production compilation:
```bash
npm run build
```

---

## 🎨 Creative Theme Tokens (`globals.css`)

All color custom tokens are defined in **oklch color spaces** inside `@theme inline` in `src/app/globals.css`:
* **Teal Primary**: Deep, medical-themed primary colors (`oklch(0.55 0.16 230)`)
* **Warm Accents**: Soft contrast indicators for badges (`oklch(0.94 0.04 220)`)
* **Interactive Glass Cards**: Overlaid surfaces (`.glass` and `.glass-card`) combining high backdrop blurs (`backdrop-blur(16px)`) with micro-thin border dividers (`border-white/10` / `border-white/20`) that react instantly to theme toggling.

---

## 👥 Authors & Credits
* **Medical Awareness Initiative**: Created to empower patients, caregivers, and medical practitioners with pristine, accessible, and structured Snayurog (Neurological) awareness resources.
