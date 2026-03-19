# dev.lucassilva — Personal Portfolio

Personal portfolio and blog built with React, TanStack Router, and shadcn/ui. Features a clean minimal design, dark/light mode, bilingual support (EN/PT-BR), and full SEO meta tags.

**Live:** [lucassilvadev.com](https://lucassilvadev.com)

---

## Tech stack

- **React 19** + **TypeScript**
- **TanStack Router** — file-based routing with full type safety
- **shadcn/ui** — component library
- **Tailwind CSS v4** — utility-first styling
- **i18next** + **react-i18next** — EN/PT-BR internationalization
- **Vite** — build tool

---

## Features

- Dark / light mode toggle with smooth transition
- Bilingual — English and Brazilian Portuguese
- Fully responsive sidebar layout
- SEO meta tags and Open Graph per route
- Accessible semantic HTML structure (`article`, `section`, `aside`, `nav`)
- Type-safe translations with i18next + TypeScript

---

## Pages

| Route | Description |
|---|---|
| `/` | Hero, tech stack, stats |
| `/about` | Bio, skills, info cards |
| `/work` | Project grid with featured cards |
| `/blog` | Blog post list |
| `/contact` | Email, LinkedIn, GitHub links |

---

## Getting started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Install

```bash
git clone https://github.com/LucasAuSilva/lucassilvadev.com
cd lucassilvadev.com
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

---

## Project structure

```
src/
├── components/
│   ├── ui/
│   └── language-toggle.tsx
│   └── ...
├── i18n/
│   ├── index.ts
│   └── locales/
│       ├── en.json
│       └── pt-BR.json
├── routes/
│   ├── __root.tsx
│   ├── index.tsx
│   ├── about.tsx
│   ├── work.tsx
│   ├── blog.tsx
│   └── contact.tsx
└── main.tsx
```

---

## Internationalization

The portfolio supports English and Brazilian Portuguese. Language preference is persisted in `localStorage`.

To add or update translations, edit the files in `src/i18n/locales/`. TypeScript will enforce that both `en.json` and `pt-BR.json` have matching keys.

---

## License

MIT — feel free to use this as inspiration for your own portfolio.

---

Built by [Lucas Augusto da Silva](https://lucassilvadev.com)

