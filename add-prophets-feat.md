# Plan: Add Prophets Collection + Hub Landing Page

## Context

The app currently presents 43 biblical kings as 3D trading cards. The user wants to add 23 prophets as a second character category and transform the homepage into a hub that links to both collections. This sets the architecture for future Bible character types (judges, apostles, etc.).

**User choices:**
- **Navigation:** Hub Landing Page (homepage becomes a gateway to collections)
- **Quiz:** Unified `/quiz` with type filter (Rois / Prophètes / Tous)
- **Architecture:** Parallel structure — keep existing kings code untouched, create parallel prophet components

## Route Structure

```
CURRENT                          NEW
/              (kings home)  →   /              (hub landing page)
                                 /rois          (kings collection, moved from /)
/kings/[id]    (king detail) →   /rois/[id]     (king detail, renamed)
                                 /prophetes     (prophets collection, NEW)
                                 /prophetes/[id](prophet detail, NEW)
/quiz          (kings quiz)  →   /quiz          (unified quiz with type filter)
```

## Hub Landing Page Design

```
Desktop:
┌──────────────────────────────────────────────────────────────┐
│  [📖 Bible Interactive  |  28/43 👑  12/23 🕊️  |  Quiz]     │
├──────────────────────────────────────────────────────────────┤
│  [FOND SOMBRE parchment-900]                                 │
│                                                              │
│  PERSONNAGES                      [1 king + 1 prophet card   │
│  DE LA BIBLE                       floating, overlapping,    │
│                                    slight rotation + bob]    │
│  Découvrez les rois et                                       │
│  prophètes de l'Ancien Testament                             │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────────────┐  ┌──────────────────────┐         │
│  │ [gold/5% bg]         │  │ [teal/5% bg]         │         │
│  │                      │  │                      │         │
│  │ [3 king cards fanned]│  │ [3 prophet cards     │         │
│  │                      │  │  fanned]             │         │
│  │ 👑 LES ROIS          │  │ 🕊️ LES PROPHÈTES    │         │
│  │ 43 rois d'Israël     │  │ 23 prophètes de l'AT│         │
│  │ et de Juda           │  │                      │         │
│  │ 28/43 découverts     │  │ 12/23 découverts     │         │
│  │ [Explorer →]         │  │ [Explorer →]         │         │
│  └──────────────────────┘  └──────────────────────┘         │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ [parchment-900 bg]                                    │   │
│  │ 🎯 TESTEZ VOS CONNAISSANCES                          │   │
│  │ Quiz sur les rois, prophètes, ou les deux             │   │
│  │ [Lancer un quiz →]                                    │   │
│  └──────────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────┘
```

Mobile: Stack vertically, 1 column.

## Prophet Card Visual Differences

| Aspect | Kings | Prophets |
|--------|-------|----------|
| Badge icon | 👑 (👸 for Athalie) | 🕊️ |
| Bottom label | "X ans" (reign) | "~X ans" (ministry) |
| Stars label (front) | Fidélité | Impact spirituel |
| Back: row after ref | "Roi parallèle: [name]" | "Rois contemporains: [list]" |
| Back: association row | "Prophètes: [list]" | "Spécialité: [text]" |
| Star label text | Infidèle → Exemplaire | Mention → Majeur |
| Era colors | Gold / Red / Blue (3 eras) | Gold / Red / Blue / **Teal** (4 eras) |
| Image path | `/images/kings/[id].webp` | `/images/prophets/[id].webp` |
| Bento "important" rule | faithfulness ≥ 4 OR reign > 30y | impact ≥ 4 |

## Prophet Eras (4 vs kings' 3)

| Era | Color | Prophets |
|-----|-------|----------|
| Monarchie Unie | `era-united` (gold) | Samuel, Nathan, Gad, Ahija |
| Royaume du Nord | `era-israel` (red) | Jéhu fils de Hanani, Élie, Élisée, Jonas, Amos, Osée, Abdias |
| Royaume du Sud | `era-judah` (blue) | Joël, Ésaïe, Michée, Nahum, Habakuk, Sophonie, Jérémie, Ézéchiel, Daniel |
| Post-Exiliques | `era-postexilic` (teal `#0d9488`) **NEW** | Aggée, Zacharie, Malachie |

## Implementation Phases

### Phase 0: Foundation (no visible changes)

| Step | File | Action |
|------|------|--------|
| 0.1 | `src/types/index.ts` | ADD: `ProphetEraId`, `Prophet`, `ProphetEra`, `QuizSubjectType`, `QuizConfigExtended` |
| 0.2 | `src/app/globals.css` | ADD: `--color-era-postexilic: #0d9488`, `--color-prophet: #0d9488`, `--color-prophet-light: #ccfbf1` |
| 0.3 | `src/data/prophets.ts` | CREATE: 23 prophet objects + `PROPHET_ERAS` + helpers (`getProphetsByEra`, `getProphetById`, `getAdjacentProphets`) |
| 0.4 | `src/stores/useProgressStore.ts` | ADD: `prophetsViewed: string[]`, `markProphetViewed()` (keep localStorage key `kings-progress` for backward compat) |

### Phase 1: Move kings to `/rois`

| Step | File | Action |
|------|------|--------|
| 1.1 | `src/app/rois/page.tsx` | CREATE: Copy current `page.tsx` content here |
| 1.2 | `src/app/rois/[id]/page.tsx` | CREATE: Move `kings/[id]/page.tsx` content here |
| 1.3 | `src/app/kings/[id]/page.tsx` | DELETE |
| 1.4 | Header, CardBack, KingDetailClient, QuizFlow | UPDATE: internal links `/kings/` → `/rois/` |

### Phase 2: Prophet components

| Step | File | Mirrors |
|------|------|---------|
| 2.1 | `src/components/ProphetCardFront.tsx` | `CardFront.tsx` — 🕊️ icon, ministry duration, impact stars |
| 2.2 | `src/components/ProphetCardBack.tsx` | `CardBack.tsx` — contemporary kings, specialty, impact rating |
| 2.3 | `src/components/ProphetCard.tsx` | `KingCard.tsx` — same 3D flip, uses `markProphetViewed` |
| 2.4 | `src/components/ProphetCardGrid.tsx` | `CardGrid.tsx` — 4 era sections (incl. post-exilic) |
| 2.5 | `src/components/ProphetFilterBar.tsx` | `FilterBar.tsx` — 4 eras, impact filter, name search |
| 2.6 | `src/components/ProphetHero.tsx` | `Hero.tsx` — "Les Prophètes", preview: Élie, Ésaïe, Daniel |
| 2.7 | `src/components/ProphetDetailClient.tsx` | `KingDetailClient.tsx` — prophet-specific fields |

### Phase 3: Prophet pages

| Step | File | Action |
|------|------|--------|
| 3.1 | `src/app/prophetes/page.tsx` | CREATE: ProphetHero + ProphetFilterBar + ProphetCardGrid + ProphetQuizModal |
| 3.2 | `src/app/prophetes/[id]/page.tsx` | CREATE: Static params from PROPHETS, OG metadata, ProphetDetailClient |

### Phase 4: Hub landing page

| Step | File | Action |
|------|------|--------|
| 4.1 | `src/components/HubHero.tsx` | CREATE: Dark hero, "Personnages de la Bible", floating king+prophet cards |
| 4.2 | `src/components/CategoryCard.tsx` | CREATE: Reusable card (emoji, title, count, progress, preview images, CTA) |
| 4.3 | `src/app/page.tsx` | REPLACE: Hub with HubHero + CategoryCards (Rois, Prophètes) + Quiz CTA |

### Phase 5: Quiz extension

| Step | File | Action |
|------|------|--------|
| 5.1 | `src/lib/prophet-quiz.ts` | CREATE: 4 question types for prophets (identification, facts, king-association, impact) |
| 5.2 | `src/lib/unified-quiz.ts` | CREATE: Orchestrator — delegates to king or prophet quiz, mixes 50/50 for "Tous" |
| 5.3 | `src/components/ProphetQuizModal.tsx` | CREATE: Card-level quiz modal for prophets |
| 5.4 | `src/components/QuizFlow.tsx` | MODIFY: Add subject type selector (Rois/Prophètes/Tous) before category |

### Phase 6: Header + metadata

| Step | File | Action |
|------|------|--------|
| 6.1 | `src/components/Header.tsx` | MODIFY: "Bible Interactive" title, dual progress badges (👑 + 🕊️) |
| 6.2 | `src/app/layout.tsx` | MODIFY: Update metadata title/description/OG for broader scope |

### Phase 7: Assets + polish

| Step | File | Action |
|------|------|--------|
| 7.1 | `public/images/prophets/placeholder.webp` | ADD: Prophet placeholder image |
| 7.2 | All components | Verify responsive + accessibility |

## Files Summary

**New files (17):** `prophets.ts`, `prophet-quiz.ts`, `unified-quiz.ts`, `ProphetCard.tsx`, `ProphetCardFront.tsx`, `ProphetCardBack.tsx`, `ProphetCardGrid.tsx`, `ProphetFilterBar.tsx`, `ProphetHero.tsx`, `ProphetDetailClient.tsx`, `ProphetQuizModal.tsx`, `HubHero.tsx`, `CategoryCard.tsx`, `rois/page.tsx`, `rois/[id]/page.tsx`, `prophetes/page.tsx`, `prophetes/[id]/page.tsx`

**Modified files (7):** `types/index.ts`, `globals.css`, `useProgressStore.ts`, `page.tsx` (→ hub), `QuizFlow.tsx`, `Header.tsx`, `layout.tsx`

**Deleted (1):** `kings/[id]/page.tsx` (moved to `rois/[id]`)

**Untouched king components (9):** KingCard, CardFront, CardBack, CardGrid, FilterBar, Hero, KingDetailClient, QuizModal, StarRating

## Verification

- [ ] `npm run build` succeeds (static export, no errors)
- [ ] `/` shows hub with 2 category cards linking to `/rois` and `/prophetes`
- [ ] `/rois` shows all 43 kings (existing functionality preserved)
- [ ] `/rois/[id]` detail pages work for all kings
- [ ] `/prophetes` shows 23 prophets in 4 era sections
- [ ] `/prophetes/[id]` detail pages work for all prophets
- [ ] Prophet cards flip with 3D animation, progress tracked in store
- [ ] Quiz type filter works: Rois / Prophètes / Tous
- [ ] Prophet card quiz modal works from card back
- [ ] Header shows dual progress (X/43 👑, X/23 🕊️)
- [ ] Post-exilic era displays with teal color
- [ ] Responsive: 1 col mobile → 4 col desktop for both collections
- [ ] localStorage persistence works for both kings and prophets progress
