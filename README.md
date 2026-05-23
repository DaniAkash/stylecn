# stylecn

> Brand-themed presets for [shadcn/ui](https://ui.shadcn.com).

A small gallery of real-world brand designs — Apple, Stripe, Fly.io — applied to the full shadcn/ui component set. Browse the live preview, pick the brand you like, copy the CSS variables. Drop them into your own shadcn project.

**Live preview:** `https://stylecn.daniakash.com` _(placeholder — domain TBD)_

## Why

shadcn/ui ships a neutral baseline. Most teams then spend hours tweaking CSS variables to match their own brand. `stylecn` does the work for a few well-known brands so you can copy and ship.

## Available brands

| Brand | Primary | Card surface | Radius signature |
|---|---|---|---|
| Apple | `#0071e3` Azure | Snow on Fog canvas | 28px |
| Stripe | `#533afd` Deep Violet | Powder-blue tinted | 6px |
| Fly.io | `#7c3aed` Electric Violet | White on Lavender Mist | 16px |

More coming — see [Adding a brand](#adding-a-brand).

## Use a theme in your project

Three ways, pick the one that fits:

### 1. Copy & paste (fastest)

Visit the live preview, pick a brand, click **Copy CSS**. Paste the block into your project's `index.css` (or `globals.css`). Done.

### 2. shadcn CLI _(planned)_

```sh
bunx shadcn add @daniakash/stylecn/apple
```

Not yet published as a registry. Coming once the brand set stabilizes.

### 3. npm package _(planned)_

```sh
bun add @daniakash/stylecn
```

```css
@import "@daniakash/stylecn/apple.css";
```

Not yet published.

## Local development

```sh
bun install
bun dev      # http://localhost:5173
```

The picker lives at `/`. URL contract: `?brand=<id>` swaps the active brand without a reload.

## Adding a brand

1. Define the brand's design system as a token spec (colors, radii, typography stack, surface levels).
2. Open a PR adding two pieces:
   - A new `[data-brand="<your-brand>"]` block in `src/themes/brands.css`
   - A new entry in `src/themes/brand.config.ts` with `id`, `label`, `swatch`, `description`, and the canonical `cssVariables` string for Copy CSS.
3. Attach a screenshot of the live preview in light + dark modes.

The token spec process itself (extracting real brand sites into a structured design brief) is intentionally not documented here — that's the maintainer's research workflow. Submit the derived CSS block and we'll review.

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4
- shadcn/ui (radix base, nova style)
- bun

## License

MIT
