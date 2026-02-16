# Tasks — Rois d'Israël : Application Biblique Interactive

## Project Summary

A static web application (Next.js 16) presenting the 43 biblical kings of Israel and Judah as interactive 3D trading cards. Users can explore cards organized by era (United Monarchy, Northern Kingdom, Southern Kingdom), flip them to discover educational content, and test their knowledge through gamified quizzes. Built with React 19, TypeScript, Tailwind CSS v4, Motion animations, and Zustand for state persistence.

---

## Task List

| # | Task | Description | Est. Time |
|---|------|-------------|-----------|
| 01 | Project Setup & Foundation | Scaffold Next.js, install deps, configure Tailwind v4, fonts, static export | 1–2h |
| 02 | TypeScript Types & Data Model | Define all interfaces: King, Era, Quiz, Progression | 0.5–1h |
| 03 | Kings Data File (43 kings) | Create the complete data file with all 43 kings, eras, and helper functions | 2–3h |
| 04 | Zustand Progress Store | Build the persistence store for viewed cards and quiz scores | 0.5–1h |
| 05 | StarRating, CardFront, CardBack | Build the 3 presentational card sub-components | 1.5–2h |
| 06 | KingCard 3D Flip | Build the animated flip card with Motion spring physics | 1.5–2h |
| 07 | CardGrid & Era Sections | Responsive grid with era headers and parallel king scroll | 1–1.5h |
| 08 | Header & Hero | Sticky nav bar with progress counter + hero section with CTA | 1–1.5h |
| 09 | FilterBar & Home Page Assembly | Filter controls + assemble page.tsx with all components | 1–1.5h |
| 10 | Quiz Question Generation Engine | Dynamic question generation with 4 types and smart distractors | 1.5–2h |
| 11 | Quiz Hook & QuizModal | useQuiz hook + Radix Dialog modal for per-card quizzes | 1.5–2h |
| 12 | Global Quiz Page | Full /quiz page with config, questions, and results | 1.5–2h |
| 13 | Progression, A11y & Polish | Connect progression UI, accessibility, meta tags, final build | 1.5–2h |

**Total estimated time: 15–23 hours**

---

## Dependency Map

```
Task 01 (Foundation)
  ├── Task 02 (Types)
  │     └── Task 03 (Kings Data)
  │           ├── Task 05 (Card Sub-components)
  │           │     └── Task 06 (KingCard Flip)
  │           │           └── Task 07 (CardGrid)
  │           │                 └── Task 09 (Home Page)
│           │                       └── Task 11 (QuizModal) ──┐
  │           └── Task 10 (Quiz Engine) ──────────────────────────┤
  │                                                               └── Task 12 (Quiz Page)
  ├── Task 04 (Progress Store)
  │     ├── Task 06 (KingCard reads/writes store)
  │     ├── Task 08 (Header/Hero reads store)
  │     ├── Task 11 (QuizModal writes scores)
  │     └── Task 12 (Quiz Page writes scores)
  └── Task 08 (Header & Hero)
        └── Task 09 (Home Page)

Task 13 (Polish) ← depends on ALL tasks 01–12
```

---

## Recommended Execution Order

Execute tasks in this sequence. Tasks within the same group can potentially be parallelized:

1. **Task 01** — Project Setup (must be first)
2. **Task 02** — Types (must follow 01)
3. **Task 03** + **Task 04** — Data + Store (can run in parallel, both need 01+02)
4. **Task 05** — Card sub-components (needs 03)
5. **Task 06** — KingCard flip (needs 04+05)
6. **Task 07** + **Task 08** — CardGrid + Header/Hero (can run in parallel)
7. **Task 09** — Home page assembly (needs 07+08)
8. **Task 10** — Quiz engine (needs 03, can run earlier if desired)
9. **Task 11** — QuizModal (needs 09+10)
10. **Task 12** — Quiz page (needs 10+11)
11. **Task 13** — Final polish (needs everything)
