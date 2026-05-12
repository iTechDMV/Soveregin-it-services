# Sovereign IT Services Design System

This folder contains the visual system for the Sovereign IT Services site and Tribal Operations Cloud UI.

## Structure

- `icons/` — SVG icons (shield, cloud, camera, network, etc.)
- `hero/` — SVG hero illustrations for landing pages
- `sections/` — SVG illustrations for service sections
- `patterns/` — Background grids, gradients, and animated mesh
- `branding/` — Color tokens, typography, buttons, cards, UI tokens, logo
- `system-map.svg` — Reference architecture diagram

## Core Principles

- **Tribal‑Cyber:** Tribal geometric patterns blended with cyber mesh and neon accents.
- **Dark‑First:** Designed for dark backgrounds with high‑contrast text.
- **Resilience‑Focused:** Visuals emphasize continuity, monitoring, and layered defense.

## Usage

- **HTML:** Link CSS from `branding/` and `patterns/`, then embed SVGs via `<img>` tags.
- **React:** Import SVGs as modules and use them in components.
- **Backgrounds:** Use `animated-mesh.css` for a global animated mesh overlay.

## Colors

- `--brand-cyan: #22d3ee`
- `--brand-emerald: #22c55e`
- `--brand-black: #0d1117`
- `--brand-slate: #1f2937`

## Typography

- Headings: `Poppins`
- Body: `Source Sans Pro`
- UI: `Inter`

---

This system is designed to be extended as you add new services, case studies, and tribal‑specific programs.
