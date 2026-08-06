# Ridgeline Contracting — React

Vite + React rebuild of the Ridgeline Contracting homepage, matching the design
reference (colors, fonts, layout) saved in the ContractorsWebsite project.

## Getting started

```bash
npm install
npm run dev
```

Routing is handled by [React Router](https://reactrouter.com) (`react-router-dom`).
`/` is the homepage; `/about` is a placeholder second page proving routing works.

## Structure

- `src/data/siteData.js` — business info, nav, stats, services, portfolio copy (edit here to update content)
- `src/styles/index.css` — design tokens (colors, fonts, spacing) and global styles
- `src/components/` — Header, Footer, Layout (shared shell), plus homepage section components (Hero, Stats, Services, Portfolio, CTA)
- `src/pages/` — one file per route: `Home.jsx` (`/`), `About.jsx` (`/about`, placeholder)

