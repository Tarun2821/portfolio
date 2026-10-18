# Tarun Kumar Biswas — Portfolio (Next.js 14 + TypeScript)

A bold, editorial-style dark portfolio built with **Next.js 14 App Router**, **TypeScript**, and **Tailwind CSS** — inspired by the Charlie & NURAT design references.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev
# → http://localhost:3000

# 3. Build for production
npm run build && npm start
```

---

## 📁 Folder Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout — Google Fonts via next/font, metadata
│   ├── page.tsx            # Home page — assembles all sections
│   └── globals.css         # Tailwind base + custom animation keyframes
│
├── sections/               # Page sections (some server, some client)
│   ├── Hero.tsx            # Server component — staggered CSS headline animation
│   ├── Projects.tsx        # Client — scroll-reveal heading + project list
│   ├── About.tsx           # Client — scroll-reveal bio + stats
│   ├── Process.tsx         # Client — stacked colorful process cards
│   └── Contact.tsx         # Client — "Drop Me A Line" hover + footer
│
├── components/             # Reusable UI components
│   ├── Navbar.tsx          # Client — fixed nav, mirrored logo, mobile overlay
│   ├── ProjectCard.tsx     # Client — hover color flood + desc reveal per card
│   └── ProcessCard.tsx     # Client — scroll-reveal stacked process card
│
├── hooks/
│   ├── useScrollReveal.ts  # IntersectionObserver → visible state
│   └── useMousePosition.ts # Global mouse tracking (ready to use)
│
├── data/
│   └── portfolio.ts        # ✏️  ALL your content lives here — edit this!
│
└── types/
    └── index.ts            # TypeScript interfaces: Project, ProcessStep, NavLink
```

---

## ✦ Key Interactions

| Interaction | Implementation |
|---|---|
| Projects appear on scroll | `useScrollReveal` → `translateY` + `opacity` CSS transition |
| Project hover — color flood | `useState(hovered)` → inline `background` style |
| Project hover — desc slide open | `.project-desc-wrap` max-height CSS transition |
| "Drop Me A Line" lift + email | `.drop-group:hover` CSS sibling targeting in `globals.css` |
| Process cards stagger in | Each card has `transitionDelay` + `marginLeft` offset |
| Hero headline stagger | Pure CSS `@keyframes slideUp` with `animation-delay` per line |
| Mirrored logo | `.logo-mirror { transform: scaleX(-1) }` |

---

## ✏️ Customization

### Change content
Edit `src/data/portfolio.ts` — all projects, process steps, and nav links live here.

### Change process card colors
Edit the `bgColor` field in `processSteps`:
```ts
{ bgColor: "#3d8b6b", ... }   // green
{ bgColor: "#9e5c2a", ... }   // terracotta
```

### Add real project images
1. Add `image: string` to the `Project` interface in `src/types/index.ts`
2. Add image paths to `src/data/portfolio.ts`
3. Render `<Image src={project.image} ... />` in `ProjectCard.tsx`

### Deploy to Vercel
```bash
npx vercel
```
Zero config — Next.js deploys perfectly on Vercel.

---

## 🛠 Tech Stack

| Tool | Purpose |
|---|---|
| Next.js 14 (App Router) | Framework, SSR, routing |
| TypeScript | Full type safety |
| Tailwind CSS v3 | Utility styling |
| `next/font` | Zero-CLS Google Fonts (Barlow Condensed + Barlow) |
| `next/link` | Client-side navigation |
| IntersectionObserver API | Scroll animations (no library) |
| CSS custom classes | Hover transitions, keyframe animations |
