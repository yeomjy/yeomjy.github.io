# yeomjy.github.io

Source for my personal academic homepage, built with [Vue 3](https://vuejs.org)
and [Vuetify 3](https://vuetifyjs.com) and bundled with [Vite](https://vite.dev).
The site is deployed to GitHub Pages via the workflow in
`.github/workflows/deploy.yml` on every push to `main`.

## Development

The package manager is [Yarn](https://yarnpkg.com).

```sh
yarn install      # install dependencies
yarn dev          # start the dev server with HMR
yarn build        # type-check + production build to dist/
yarn preview      # preview the production build locally
yarn lint         # ESLint (flat config) with --fix
yarn format       # format src/ with Prettier
```

## Editing content

The page has no router; content lives in single-file components:

- `src/components/ProfileSection.vue` — left sidebar (photo, social links, education).
- `src/components/ContentSection.vue` — right column (about, news, publications, teaching).
- `src/contents/*.vue` — the individual content blocks. Edit these to update the
  site's text, publications, news, etc.

## Acknowledgements

The design is inspired by
[evryn's vue-modern-resume](https://github.com/evryn/vue-modern-resume) and
[Jon Barron's website](https://github.com/jonbarron/website).
