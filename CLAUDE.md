# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@PRD.md describe the project specifications and archirecture.



## Project Overview

Static Next.js 16 web app presenting 43 biblical kings of Israel and Judah as interactive 3D trading cards with a quiz system. French-language only, no backend, no auth, no database. All data lives in TypeScript files, persistence via localStorage.

## Commands

```bash
npm run dev          # Dev server with Turbopack
npm run build        # Static export to out/
npm run lint         # ESLint
```

The project uses `output: 'export'` — the build produces static files in `out/`, no Node server needed.

## Tech Stack & Import Conventions

use websearch or context7 mcp to find the relevant documentation for librairies used in @package.json.

| Package | Import | Notes |
|---------|--------|-------|
| Motion 12.x | `import { motion, useInView } from "motion/react"` | NOT `framer-motion` |
| Zustand 5.x | `import { create } from 'zustand'` / `import { persist } from 'zustand/middleware'` | Store in `src/stores/` |
| Radix Dialog | `import * as Dialog from '@radix-ui/react-dialog'` | Quiz modals |
| Heroicons | `import { StarIcon } from '@heroicons/react/24/solid'` | UI icons |
| Tailwind v4.1 | CSS-first via `@theme` in `globals.css` | **No `tailwind.config.ts`** |
| next/font/google | Cinzel (titles, 400/600/700/800) + Inter (body, 300/400/600) | Self-hosted, CSS vars |

## Architecture

**Data flow**: `src/data/kings.ts` (43 king objects) → components read data directly, no API layer.

**State**: UI state via `useState`. Persistent state (viewed cards, quiz scores) via Zustand + `persist` middleware in `src/stores/useProgressStore.ts`, saved to localStorage as `kings-progress`.

**Pages**: Two routes only — `/` (home with cards) and `/quiz` (global quiz).

**Component hierarchy**:
- `KingCard.tsx` orchestrates `CardFront.tsx` + `CardBack.tsx` with 3D flip (Motion spring: stiffness 300, damping 40)
- `CardGrid.tsx` renders bento grid sections per era (united/israel/judah)
- `QuizModal.tsx` (Radix Dialog) for per-card quiz, `QuizFlow.tsx` for global quiz
- `src/lib/quiz.ts` generates questions dynamically from king data (4 question types, smart distractors using `FactCategory`)

**Any component using hooks, animations, or browser APIs needs `'use client'` directive.**

## Tailwind v4 CSS-First Config

All design tokens are in `src/app/globals.css` under `@theme` — colors (`parchment-*`, `era-*`, `gold`, `success`), fonts (`cinzel`, `inter`). PostCSS plugin: `@tailwindcss/postcss` in `postcss.config.mjs`.

## Design Principles

The UI follows modern SaaS patterns — asymmetric hero (60/40 split), oversized fluid typography (`clamp()`), bento grid (important kings span 2 cols), full-bleed alternating section backgrounds, scroll-triggered reveals via `useInView`. Avoid symmetric/centered/uniform AI-looking layouts.

Three visual eras: United Monarchy (gold `#d4a017`), Israel/North (red `#c0392b`), Judah/South (blue `#2c3e8f`). Background: parchment palette. Hero uses dark background (`parchment-900`).

## Data Model

Kings have: `id` (kebab-case slug), `kingdom` (`'united' | 'israel' | 'judah'`), `faithfulness` (1-5), `keyFacts` (5 items with `emoji`, `text`, `category: FactCategory`), `prophets`, `parallelKing` (ID or null). Full type definitions in `src/types/index.ts`.

## Task Files

`tasks/task-01.txt` through `task-14.txt` contain detailed implementation instructions with dependencies. `tasks/README.md` has the dependency map and execution order. Task 14 covers GitHub + Vercel deployment + OVH DNS.

## Key References

- `PRD.md` — Complete product spec (architecture, wireframes, data for all 43 kings, quiz logic)
- `kings-descriptions.md` — Full king data with image generation prompts
- Images: WebP format, 640x960px (2:3 ratio), target <50KB each, stored in `public/images/kings/`
