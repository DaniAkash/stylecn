# stylecn

> Brand-themed presets for [shadcn/ui](https://ui.shadcn.com).

A gallery of real-world brand designs — Apple, Stripe, Linear, Airbnb, and more — applied to the full shadcn/ui component set. Browse the live preview, pick the brand you like, copy the CSS variables. Drop them into your own shadcn project.

**Live preview:** `https://stylecn.daniakash.com` _(placeholder — domain TBD)_

## Why

shadcn/ui ships a neutral baseline. Most teams then spend hours tweaking CSS variables to match their own brand. `stylecn` does the work for a few well-known brands so you can copy and ship.

## Available brands

14 brand presets ship today, plus the neutral shadcn baseline. Sorted alphabetically.

| Brand | Primary CTA | Surface treatment | Card radius |
|---|---|---|---|
| Airbnb | `#ff385c` Rausch coral | White cards on Fog `#f7f7f7` canvas | 20px |
| Apple | `#0071e3` Azure | White cards lifted off Fog `#f5f5f7` canvas | 28px |
| Claude | `#d97757` Warm orange | Parchment `#faf9f5`, flat (card == canvas) | 10px |
| Cursor | `#f54e00` Onyx orange | Pebble-gray `#e6e5e0` cards on warm parchment canvas | 4px |
| Duolingo | `#58cc02` Vivid green | White, rounded everywhere, Nunito sans | 12px |
| ElevenLabs | `#000000` Obsidian | White cards on Eggshell `#fdfcfc` canvas | 16px |
| Fly.io | `#7c3aed` Electric violet | White cards floating on Lavender Mist sidebar | 16px |
| Linear | `#5e6ad2` Brand violet | Dark-first command center; light mode inverts cleanly | 6px |
| Raycast | `#ff6363` Coral | Dark-first obsidian terminal; light mode inverts | 11px |
| Resend | `#3b9eff` Sky blue | Dark-first developer terminal; serif heading fallback | 16px |
| Stripe | `#533afd` Deep violet | Powder-blue tinted cards on pure white | 6px |
| Superhuman | `#714cb6` Violet | White cards on cream `#f2f0eb` canvas | 16px |
| Todoist | `#e34432` Soft red | Warm-white `#fefdfc` flat surfaces | 10px |
| Wise | `#9fe870` Lime green | White, lime CTA with dark text (inverted foreground) | 10px |

Three brands ship **dark-first** — their canonical mode is dark and a coherent light variant is provided alongside.

More coming — see [Adding a brand](#adding-a-brand).

## Use a theme in your project

Three ways, pick the one that fits:

### 1. Copy & paste (fastest)

Visit the live preview, pick a brand, click **Copy CSS**. Paste the block into your project's `index.css` (or `globals.css`). Done.

### 2. shadcn CLI _(planned)_

```sh
bunx shadcn add @daniakash/stylecn/linear
```

Not yet published as a registry. Coming once the brand set stabilizes.

### 3. npm package _(planned)_

```sh
bun add @daniakash/stylecn
```

```css
@import "@daniakash/stylecn/linear.css";
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
