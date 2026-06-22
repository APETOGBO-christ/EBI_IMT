# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Dev server on http://localhost:3000
npm run build    # Production build
npm run lint     # ESLint check
```

## Architecture

**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion · Lucide React · Plus Jakarta Sans (Google Font)

**Working directory:** `ebi-imt-site/` — all commands run from here.

### Pages (`src/app/`)
| Route | File | Description |
|---|---|---|
| `/` | `page.tsx` | Homepage — hero, services grid, why us, partners, CTA |
| `/services` | `services/page.tsx` | 6 service categories with detailed cards |
| `/produits` | `produits/page.tsx` | Product catalogue (Fujitsu, Synology, MOBOTIX, etc.) |
| `/solutions` | `solutions/page.tsx` | Solutions by sector (PME, health, education, etc.) |
| `/stages` | `stages/page.tsx` | Internship page with Stage.jpg hero image |
| `/contact` | `contact/page.tsx` | Contact form + info cards + zones |

### Shared components (`src/components/`)
- **`Navbar.tsx`** — sticky glassmorphism navbar, scroll-aware, mobile hamburger
- **`Footer.tsx`** — 4-column footer with links, contact info, social SVG icons
- **`AnimatedSection.tsx`** — Framer Motion scroll-triggered fade-in wrapper (`direction: up|left|right|none`, `delay`)
- **`CountUp.tsx`** — animated number counter using Framer Motion `useInView`

### Design system (`src/app/globals.css`)
All design tokens are CSS custom properties on `:root`. Key utility classes:
- `.glass` / `.glass-strong` — frosted glass cards (`backdrop-filter: blur`)
- `.gradient-text` / `.gradient-text-blue` — blue→orange or blue→indigo gradient text
- `.btn-primary` / `.btn-secondary` — pill CTA buttons
- `.glow-border` — animated gradient border on hover (via `::before` pseudo)
- `.service-card` — hover lift + glow effect
- `.orb .orb-blue .orb-orange .orb-indigo` — animated gradient background spheres
- `.grid-noise` — subtle grid texture overlay
- `.tag-pill` — blue-tinted label pill
- `.input-field` — dark input/select/textarea style

**Color palette:**
- Background: `#03060f` (near-black blue)
- Blue accent: `#3b82f6` / `#60a5fa`
- Orange accent: `#f97316` / `#fb923c`
- Text: `#f0f4ff` primary · `#94a3b8` secondary

### Assets
- `public/Stage.jpg` — team photo for the Stages page hero (copied from `assets/Stage.jpg`)
- Social icons in Footer are inline SVG (LinkedIn, Facebook) — lucide-react doesn't export these

### Key patterns
- All pages are `"use client"` (Framer Motion requires it)
- Use `<AnimatedSection delay={i * 0.08}>` to stagger grid items
- Orbs go inside `relative overflow-hidden` sections — position with `absolute` and tailwind sizing
- The navbar becomes `navbar-blur` (glassy) only after 20px scroll
