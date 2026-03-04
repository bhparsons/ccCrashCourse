# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Structure

This is a monorepo used for a Udemy crash course on Claude Code. It contains:

- **`hookhub/`** — A Next.js 16 web app (the main project). A community directory for discovering open-source Claude Code hooks.
- **`play_sound.py`** — Python utility that generates and plays a chime sound. Used as a Claude Code "Stop" hook to notify when a session completes.

## HookHub App (hookhub/)

### Commands

All commands must be run from the `hookhub/` directory:

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run lint     # ESLint (flat config, Next.js core-web-vitals + typescript)
```

No test framework is configured.

### Architecture

Next.js 16 App Router with TypeScript and Tailwind CSS v4.

- **Single-page app** — All content lives in `app/page.tsx` (hero, stats, how-it-works, hooks grid, CTA, footer).
- **Data layer** — Hook entries are static arrays in `app/data/hooks.ts` using the `Hook` type from `app/types/hook.ts`. Categories: Security, Notifications, Automation, SDK & Tooling, Communication, Formatting.
- **Components** — `Navbar`, `HookGrid`, `HookCard`. HookGrid renders a responsive card grid; HookCard displays category badge, event type, description, and GitHub link.
- **Styling** — Tailwind v4 with `@import "tailwindcss"` syntax. Custom CSS classes in `globals.css`: `hero-glow`, `section-glow-center`, `cta-glow`, `glass-card`, `gradient-border`. Theme tokens defined via `@theme inline`. Dark-only design with `#050507` background.
- **Fonts** — Inter (sans) and Geist Mono loaded via `next/font/google` in `layout.tsx`, exposed as `--font-inter` and `--font-geist-mono` CSS variables.
- **Path alias** — `@/*` maps to the project root.

### Adding a New Hook

Add an entry to the `hooks` array in `app/data/hooks.ts` following the `Hook` type interface (name, author, category, description, repoUrl, optional event).

## Python Environment

- Managed with `uv` (see `pyproject.toml`). Python 3.9+.
- The `play_sound.py` script uses only the standard library — no pip dependencies.
