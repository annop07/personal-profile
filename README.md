# personal-profile

Portfolio site for **Annop Sangsila** — AI Engineer / Full-Stack Developer.
Next.js 16 (App Router, Turbopack), React 19, Tailwind CSS v4, TypeScript.

Live pages: `/` (projects + skills), `/about` (timeline, work experience), `/contact`,
and a generated page per project at `/projects/[slug]`.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build — 18 static pages
npm run lint
```

## Layout

```
app/
├── data/
│   ├── projects.ts         ← every project; category 'ai' | 'fullstack'
│   └── workExperience.ts   ← jobs and competitions shown on /about
├── components/             ← Navbar, HeroSection, FeaturedProjects, TechnicalSkills, …
├── projects/[slug]/        ← one static page per entry in projects.ts
└── layout.tsx              ← site metadata, Open Graph, theme provider
public/
├── covers/                 ← architecture diagrams for projects with no UI (SVG)
├── photos/                 ← screenshots, grouped per project
└── og.png                  ← 1200×630 social preview card
```

## Adding a project

Append an entry to `app/data/projects.ts`. `generateStaticParams` picks it up and
builds the page; nothing else needs editing.

- `category: 'ai'` renders as a full card at the top of the home page,
  `'fullstack'` renders as a compact row underneath.
- `metric` is the headline number on the card — keep `value` short and let
  `label` carry the context. It is plain text on purpose, so it stays
  selectable, searchable and readable by a screen reader.
- `image` may be a screenshot from `public/photos/` or a diagram from
  `public/covers/`. SVG is allowed (`next.config.ts` opts in) but social
  previews fall back to `og.png`, because most scrapers will not render SVG.
- `highlights` become the "What it demonstrates" list on the project page;
  `images` become the screenshot gallery and may be empty.

## Deployment

Set `NEXT_PUBLIC_SITE_URL` to the production origin so canonical and Open Graph
URLs resolve. On Vercel this falls back to `VERCEL_PROJECT_PRODUCTION_URL`
automatically, and locally to `http://localhost:3000`.
