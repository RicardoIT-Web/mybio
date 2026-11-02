# mybio

Personal and professional bio page for Ricardo Piedade, Project Manager (energy, engineering and infrastructure).

Built with React, Vite and Framer Motion. English and Portuguese (EN/PT switch, or add `#pt` to the link).

## Editing the content

All text lives in `src/content.js`, with `en` and `pt` versions side by side. The headshot is `public/assets/ricardo.jpg`.

## Running locally

```bash
npm install
npm run dev
```

## Building for hosting

```bash
npm run build
```

The finished site is written to `dist/`. On Render, create a Static Site with build command `npm ci && npm run build` and publish directory `dist`.
