# Thai’s Grocery

Responsive homepage for Thai’s Grocery, implemented from the Figma file
[Thai's Grocery → Fresh modern market](https://www.figma.com/design/WluwEPAtT3HVNyljo1kxnO/Thai-s-Grocery?node-id=2-8972&m=dev).

**Stack:** Vite · React 19 · TypeScript · Tailwind CSS v4 · pnpm

## Getting started

```bash
pnpm install
pnpm assets   # one-time: downloads the photos + icons from Figma into public/
pnpm dev      # http://localhost:5173
```

> `pnpm assets` pulls from temporary Figma MCP URLs (valid ~7 days from
> Nov 6, 2026). Commit the downloaded files in `public/images` and
> `public/icons` so you never need the script again.

## Scripts

| Command          | What it does                                  |
| ---------------- | --------------------------------------------- |
| `pnpm dev`       | Start the dev server                          |
| `pnpm build`     | Type-check and build to `dist/`               |
| `pnpm preview`   | Serve the production build locally            |
| `pnpm typecheck` | Type-check only                               |
| `pnpm assets`    | Download Figma assets (`--force` to refresh)  |

## Project layout

```
src/
  App.tsx              page composition + cart state
  data.ts              departments, products, offers, recipes, footer links
  index.css            Tailwind import + design tokens from Figma (@theme)
  components/          Header, Hero, Categories, Products, Offers, Recipes,
                       QualityPromise, Footer, SectionHeading, Icon
public/images, icons   Figma-exported assets
```

## Responsive behavior

- **Mobile (<640px):** search drops below the brand row, department nav and
  category/product rows become swipeable rails, offers and recipes stack.
- **Tablet (640–1023px):** categories in a row of 6 (3 per row on small
  tablets), products stay a rail, offers/recipes go 2-up.
- **Desktop (≥1024px):** matches the 1440px Figma frame — 64px gutters,
  5-up product grid, 3-up offers/recipes.

## Deploying to Vercel

Import the repo in Vercel — it auto-detects Vite. `vercel.json` pins
`pnpm install` / `pnpm build` / `dist`. Make sure `public/images` and
`public/icons` are committed first.
