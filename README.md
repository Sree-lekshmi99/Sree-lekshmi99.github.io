# Sree Lekshmi · Portfolio

A multi-page React portfolio built with Vite and React Router, using a dark
palette (Puce Red + Rose Gold + Rackley blue) with Champagne/Light Red accents.

Fully responsive — works on mobile, tablet, and desktop.

## Pages

- `/` — Home (hero + quick-links)
- `/about` — About Me
- `/skills` — Skills
- `/experience` — Work experience (timeline)
- `/projects` — Projects grid
- `/contact` — Contact info

Uses `HashRouter`, so URLs look like `/#/about` and deep links always work on GitHub Pages (no 404 redirect hack needed).

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

### Option A — User site (recommended for resume)

1. Create a repo named **`<your-username>.github.io`**.
2. Push this folder to the `main` branch.
3. Repo → **Settings → Pages → Source: GitHub Actions**.
4. The workflow at `.github/workflows/deploy.yml` builds and deploys on every push.
5. Site lives at `https://<your-username>.github.io/`.

`vite.config.js` already has `base: '/'` (correct for a user site).

### Option B — Project site (`<user>.github.io/<repo>/`)

1. `vite.config.js` → set `base: '/<repo-name>/'`.
2. `package.json` → set `homepage` to match.
3. Push and enable Pages → GitHub Actions.

## Customize

- Copy on each page: `src/pages/*.jsx`
- Colors: CSS variables at the top of `src/index.css`
- Navigation items: `navItems` array in `src/App.jsx`
- LinkedIn/GitHub URLs: `src/pages/Contact.jsx`

## File structure

```
src/
  main.jsx           # entry + HashRouter
  App.jsx            # layout + routes
  index.css          # palette + all styles
  pages/
    Home.jsx
    About.jsx
    Skills.jsx
    Experience.jsx
    Projects.jsx
    Contact.jsx
```
