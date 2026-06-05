# TODO

Non-blocking polish items noticed while modernizing the site. None affect
functionality — these are cosmetic/responsive refinements to pick up later.

## Responsive / layout (cosmetic)

- [ ] **Publications: empty vertical gap on narrow screens.** In a publication
      entry the image and the description sit in a two-column grid; when it
      stacks (< `md`, 960px) the shorter column leaves a large blank gap
      between the image and the description text (e.g. the NeurIPS 2023 entry).
      Fix by adjusting column `align`/height handling so the text follows the
      image directly when stacked. (`src/contents/PublicationSection.vue`)

- [ ] **Tablet `md` range (960–1280px) feels cramped.** The profile sidebar is
      1/3 width here, so the name wraps to two lines and spacing is tight.
      Consider widening the profile column at `md` or stacking a bit earlier.
      (`src/views/MainView.vue` column breakpoints)

## SEO / meta

- [ ] **Add document meta tags.** `<meta name="description">`, Open Graph /
      Twitter Card tags (og:title, og:description, og:image, og:url, og:type),
      and theme-color / canonical for better search and social-share previews.
      (placeholder TODO comment already in `index.html`)
