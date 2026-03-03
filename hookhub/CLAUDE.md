# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at http://localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
```

No test framework is configured yet.

## Architecture

This is a **Next.js 16 App Router** project using TypeScript and Tailwind CSS v4.

- `app/` — App Router root. `layout.tsx` is the root layout; `page.tsx` is the home route. New routes are folders with a `page.tsx` inside.
- `app/globals.css` — Global styles. Uses Tailwind v4's `@import "tailwindcss"` syntax (not the old `@tailwind` directives). Theme tokens (`--background`, `--foreground`, `--font-sans`, `--font-mono`) are defined here via `@theme inline`.
- `public/` — Static assets served at `/`.

**Path alias:** `@/*` maps to the project root (e.g., `@/app/components/Foo`).

**Fonts:** Geist Sans and Geist Mono are loaded via `next/font/google` in `app/layout.tsx` and exposed as CSS variables `--font-geist-sans` / `--font-geist-mono`.

**Styling:** Tailwind CSS v4. Dark mode uses `prefers-color-scheme` media query, not a class toggle.
