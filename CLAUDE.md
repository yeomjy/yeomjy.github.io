# CLAUDE.md

## Overview

Personal academic homepage for Junyoung Yeom, deployed to GitHub Pages at
`yeomjy.github.io`. Single-page site (no routing) built with Vue 3 + Vuetify 3
and bundled with Vite. Content is mostly static, hardcoded inside `.vue`
components.

## Commands

```sh
yarn dev          # Vite dev server with HMR
yarn build        # type-check + production build to dist/
yarn preview      # preview the production build
yarn lint         # ESLint with --fix
yarn format       # Prettier over src
yarn type-check   # vue-tsc only
```

Package manager is **yarn** (see `yarn.lock`). CI deploys `dist/` to GitHub
Pages on push to `main`/`master` (`.github/workflows/deploy.yml`).

## Architecture

- `src/main.ts` — app entry. Registers Vuetify (FontAwesome icon set) and
  `vue-gtag` (Google Analytics, id `G-RZ50SN639D`).
- `src/App.vue` — wraps everything in `<v-app>` and renders `MainView` directly
  (there is **no** vue-router).
- `src/views/MainView.vue` — top-level responsive layout: a two-column
  `v-row` (profile sidebar + content) plus a footer credits card.
- `src/components/` — layout containers:
  - `ProfileSection.vue` — left sidebar (image, social links, education).
  - `ContentSection.vue` — right column (about, news, publications, teaching).
- `src/contents/` — the actual content blocks, one `.vue` per section
  (`AboutMe`, `NewsSection`, `PublicationSection`, `TeachingExperience`,
  `SocialInfo`, `EducationInfo`, `ProfileImage`). Editing site content =
  editing these files.
- `src/assets/` — global CSS (`main.css` imports `base.css`), images, and
  publication assets under `pub/`.

## Conventions

- Vue 3 `<script setup lang="ts">` SFCs throughout.
- Prettier: 2-space indent, no semicolons, double quotes, trailing commas
  (`all`). Run `yarn format` / `yarn lint` before committing.
- Icons use FontAwesome via Vuetify's `fa` icon set, e.g.
  `<v-icon icon="fa-brands fa-github" />`. The `fa-google-scholar` icon
  requires FontAwesome **6+**.
- Add new content sections as a component in `src/contents/` and wire it into
  `ProfileSection.vue` or `ContentSection.vue`.
