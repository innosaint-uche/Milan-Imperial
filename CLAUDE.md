# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Multi-page marketing site for **Milan Imperial Limited** — a West-Africa diversified enterprise with four divisions (Agro-Business, Business Consulting, General Contracting, Private Charter). Built with React 18 + Vite, faithfully mirroring the live site at milanimperial.com.

## Commands

```bash
npm run dev      # Start Vite dev server with HMR
npm run build    # Production build to dist/
npm run preview  # Serve the production build locally
npm run lint     # ESLint over the whole project
```

There is no test setup in this repo.

## Architecture

- **Entry:** `index.html` → `src/main.jsx` (React root + `<BrowserRouter>`) → `src/App.jsx`.
- **Routing (`react-router-dom`):** `App.jsx` holds the `<Routes>` and the persistent `Navbar`/`Footer` layout. Routes: `/` (Home), `/about`, `/agro`, `/consulting`, `/contracting`, `/charter`, `/contact`; unknown paths fall back to Home. `App.jsx` also sets per-route `document.title` (see the `TITLES` map) and the meta description via `useEffect`. `components/ScrollToTop.jsx` resets scroll on navigation.
- **Pages** live in `src/pages/`. The four division pages (`Agro`, `Consulting`, `Contracting`, `Charter`) are thin wrappers around `components/DivisionPage.jsx`, which renders a full detail page from a division's data by `slug`. `About` reuses the home `CoreValues` and `OKRs` sections.
- **Content is centralized in `src/data/site.js`** — nav links, hero slides, stats, the four `divisions` (each with `services` + `keywords`), `coreValues`, `okrs`, footer, and company details. Edit copy/images there, not in the components. `divisions[].slug` drives both the routes and `DivisionPage`.
- **Home sections** are in `src/components/home/` (`Hero` carousel, `Stats` count-up, `Story`, `Divisions`, `CoreValues`, `OKRs`, `ContactCTA`), composed by `pages/Home.jsx`.
- **Shared UI:** `components/PageHero.jsx` (inner-page hero), `components/Reveal.jsx` (the standard framer-motion scroll-in wrapper — use it instead of hand-writing `whileInView`), `components/Navbar.jsx`, `components/Footer.jsx`.
- **Dark mode:** `hooks/useDarkMode.js` toggles the `dark` class on `<html>` and persists to `localStorage`; Tailwind is configured with `darkMode: 'class'`. Style dark variants with `dark:` utilities.
- **Images** are remote (Unsplash + Cloudinary) referenced directly in `site.js`. The logo is the local `public/milanlogo.svg`.
- **Animation:** `framer-motion`; the `Reveal` component is the standard scroll-in animation.

## Styling — Tailwind CSS

Styling is **Tailwind CSS v3** (config in `tailwind.config.js`, wired through `postcss.config.js`). `src/index.css` holds the `@tailwind` directives, the Google Fonts import, and a small set of reusable classes defined with `@apply` under `@layer`.

- **Brand theme** lives in `tailwind.config.js` under `theme.extend`, matching the live site's tokens: `teal`/`primary` (#195764, `.light`/`.muted` #3390a1), `gold` (#c5a059), `bronze` (#a37c58), `leaf` (#8dc047), `sand` (#fdfbf7, `.2` #f0ebe1, `.3` #e6dfd1), `ink` (#0f363e, dark surface). Fonts: `font-display` = **Playfair Display** (serif, headings), `font-sans` = **Inter** (body). Use these tokens, not raw hex.
- **Reusable component classes** in `src/index.css` `@layer components`: `.container-x` (page gutter), `.section` (vertical padding), `.overline` (gold rule + tracked label), the display scale (`.display-xl/lg/md`, `.lead`), buttons (`.btn` + `.btn-gold`/`.btn-outline`), `.link-arrow`, `.card`. Headings default to Playfair; use `.display-*` for the large serif type. Everything else is inline Tailwind.
- **Responsive approach:** mobile-first. Layouts stack on mobile and expand at `md:`/`lg:` (`grid-cols-1 lg:grid-cols-2`, `flex-col lg:flex-row`); the Navbar shows a hamburger below `lg` and the full menu at `lg:`, and floats transparent over the home hero (solid/blurred once scrolled or on any other route).
- `src/App.css` and the old single-page section components were removed in the multi-page rebuild — don't look for them.

## Assets

Static assets in `public/` are served from the site root (e.g. `/Milan-imperial.jpeg`). `src/assets/` holds imported assets bundled by Vite.
