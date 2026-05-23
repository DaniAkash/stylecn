export type BrandId = "default" | "apple" | "stripe" | "fly" | "elevenlabs" | "cursor"

export type Brand = {
  id: BrandId
  label: string
  description: string
  swatch: string
  cssVariables: string
}

const APPLE_CSS = `:root {
  --background: #f5f5f7;
  --foreground: #1d1d1f;
  --card: #ffffff;
  --card-foreground: #1d1d1f;
  --popover: #ffffff;
  --popover-foreground: #1d1d1f;
  --primary: #0071e3;
  --primary-foreground: #ffffff;
  --secondary: #e8e8ed;
  --secondary-foreground: #1d1d1f;
  --muted: #f5f5f7;
  --muted-foreground: #707070;
  --accent: #e8e8ed;
  --accent-foreground: #1d1d1f;
  --destructive: #b64400;
  --border: #e8e8ed;
  --input: #e8e8ed;
  --ring: #0071e3;
  --chart-1: #0071e3;
  --chart-2: #596680;
  --chart-3: #5e9c2a;
  --chart-4: #cc29bc;
  --chart-5: #b64400;
  --sidebar: #ffffff;
  --sidebar-foreground: #1d1d1f;
  --sidebar-primary: #0071e3;
  --sidebar-primary-foreground: #ffffff;
  --sidebar-accent: #f5f5f7;
  --sidebar-accent-foreground: #1d1d1f;
  --sidebar-border: #e8e8ed;
  --sidebar-ring: #0071e3;
  --radius: 0.625rem;
  --radius-xl: 28px;
}

.dark {
  --background: #000000;
  --foreground: #ffffff;
  --card: #1d1d1f;
  --card-foreground: #ffffff;
  --primary: #0071e3;
  --primary-foreground: #ffffff;
  --muted: #1d1d1f;
  --muted-foreground: #a1a1a6;
  --border: rgba(255,255,255,0.10);
  --input: rgba(255,255,255,0.15);
  --ring: #0071e3;
  --sidebar: #1d1d1f;
  --sidebar-foreground: #ffffff;
}
`

const STRIPE_CSS = `:root {
  --background: #ffffff;
  --foreground: #061b31;
  --card: #e5edf5;
  --card-foreground: #061b31;
  --popover: #ffffff;
  --popover-foreground: #061b31;
  --primary: #533afd;
  --primary-foreground: #ffffff;
  --secondary: #f8fafd;
  --secondary-foreground: #061b31;
  --muted: #f8fafd;
  --muted-foreground: #50617a;
  --accent: #e5edf5;
  --accent-foreground: #061b31;
  --destructive: #ff6118;
  --border: #d8d6df;
  --input: #d8d6df;
  --ring: #533afd;
  --chart-1: #533afd;
  --chart-2: #8087ff;
  --chart-3: #81b81a;
  --chart-4: #ff6118;
  --chart-5: #50617a;
  --sidebar: #f8fafd;
  --sidebar-foreground: #061b31;
  --sidebar-primary: #533afd;
  --sidebar-primary-foreground: #ffffff;
  --sidebar-accent: #e5edf5;
  --sidebar-accent-foreground: #061b31;
  --sidebar-border: #d8d6df;
  --sidebar-ring: #533afd;
  --radius: 0.25rem;
  --radius-xl: 6px;
}

.dark {
  --background: #061b31;
  --foreground: #ffffff;
  --card: #0a2541;
  --card-foreground: #ffffff;
  --primary: #8087ff;
  --primary-foreground: #061b31;
  --muted: #0a2541;
  --muted-foreground: #a5b4cb;
  --border: rgba(255,255,255,0.10);
  --input: rgba(255,255,255,0.15);
  --ring: #8087ff;
  --sidebar: #0a2541;
  --sidebar-foreground: #ffffff;
}
`

const FLY_CSS = `:root {
  --background: #ffffff;
  --foreground: #281950;
  --card: #ffffff;
  --card-foreground: #281950;
  --popover: #ffffff;
  --popover-foreground: #281950;
  --primary: #7c3aed;
  --primary-foreground: #ffffff;
  --secondary: #f1f2f9;
  --secondary-foreground: #281950;
  --muted: #f1f2f9;
  --muted-foreground: #5e537c;
  --accent: #e7e6f4;
  --accent-foreground: #281950;
  --destructive: #f59e0b;
  --border: #e7e6f4;
  --input: #e7e6f4;
  --ring: #7c3aed;
  --chart-1: #7c3aed;
  --chart-2: #3b82f6;
  --chart-3: #10b981;
  --chart-4: #f59e0b;
  --chart-5: #a39ac1;
  --sidebar: #f1f2f9;
  --sidebar-foreground: #281950;
  --sidebar-primary: #7c3aed;
  --sidebar-primary-foreground: #ffffff;
  --sidebar-accent: #e7e6f4;
  --sidebar-accent-foreground: #281950;
  --sidebar-border: #e7e6f4;
  --sidebar-ring: #7c3aed;
  --radius: 0.625rem;
  --radius-xl: 16px;
}

.dark {
  --background: #191034;
  --foreground: #ffffff;
  --card: #281950;
  --card-foreground: #ffffff;
  --primary: #7c3aed;
  --primary-foreground: #ffffff;
  --muted: #281950;
  --muted-foreground: #a39ac1;
  --border: rgba(255,255,255,0.10);
  --input: rgba(255,255,255,0.15);
  --ring: #7c3aed;
  --sidebar: #281950;
  --sidebar-foreground: #ffffff;
}
`

const ELEVENLABS_CSS = `:root {
  --background: #fdfcfc;
  --foreground: #000000;
  --card: #ffffff;
  --card-foreground: #000000;
  --popover: #ffffff;
  --popover-foreground: #000000;
  --primary: #000000;
  --primary-foreground: #fdfcfc;
  --secondary: #f5f3f1;
  --secondary-foreground: #000000;
  --muted: #f5f3f1;
  --muted-foreground: #777169;
  --accent: #f5f3f1;
  --accent-foreground: #000000;
  --destructive: #ff4704;
  --border: #e5e5e5;
  --input: #e5e5e5;
  --ring: #000000;
  --chart-1: #0447ff;
  --chart-2: #ff4704;
  --chart-3: #777169;
  --chart-4: #a59f97;
  --chart-5: #b1b0b0;
  --sidebar: #fdfcfc;
  --sidebar-foreground: #000000;
  --sidebar-primary: #000000;
  --sidebar-primary-foreground: #fdfcfc;
  --sidebar-accent: #f5f3f1;
  --sidebar-accent-foreground: #000000;
  --sidebar-border: #e5e5e5;
  --sidebar-ring: #000000;
  --radius: 0.625rem;
  --radius-xl: 16px;
}

.dark {
  --background: #0a0908;
  --foreground: #fdfcfc;
  --card: #1a1817;
  --card-foreground: #fdfcfc;
  --primary: #fdfcfc;
  --primary-foreground: #000000;
  --muted: #2a2825;
  --muted-foreground: #a59f97;
  --border: rgba(255,255,255,0.10);
  --input: rgba(255,255,255,0.15);
  --ring: #fdfcfc;
  --sidebar: #1a1817;
  --sidebar-foreground: #fdfcfc;
}
`

const CURSOR_CSS = `:root {
  --background: #f7f7f4;
  --foreground: #262510;
  --card: #e6e5e0;
  --card-foreground: #262510;
  --popover: #e6e5e0;
  --popover-foreground: #262510;
  --primary: #262510;
  --primary-foreground: #f7f7f4;
  --secondary: #cdcdc9;
  --secondary-foreground: #262510;
  --muted: #cdcdc9;
  --muted-foreground: #7a7974;
  --accent: #cdcdc9;
  --accent-foreground: #262510;
  --destructive: #f54e00;
  --border: #cdcdc9;
  --input: #7a7974;
  --ring: #262510;
  --chart-1: #f54e00;
  --chart-2: #34785c;
  --chart-3: #c08532;
  --chart-4: #4ade80;
  --chart-5: #7a7974;
  --sidebar: #e6e5e0;
  --sidebar-foreground: #262510;
  --sidebar-primary: #262510;
  --sidebar-primary-foreground: #f7f7f4;
  --sidebar-accent: #cdcdc9;
  --sidebar-accent-foreground: #262510;
  --sidebar-border: #cdcdc9;
  --sidebar-ring: #262510;
  --radius: 0.25rem;
  --radius-xl: 4px;
}

.dark {
  --background: #1a1815;
  --foreground: #f7f7f4;
  --card: #2a2622;
  --card-foreground: #f7f7f4;
  --primary: #f7f7f4;
  --primary-foreground: #262510;
  --muted: #3a3530;
  --muted-foreground: #a8a59f;
  --border: rgba(255,255,255,0.10);
  --input: rgba(255,255,255,0.15);
  --ring: #f7f7f4;
  --sidebar: #2a2622;
  --sidebar-foreground: #f7f7f4;
}
`

const DEFAULT_CSS = `/* Baseline shadcn nova — the default when no brand is picked. */`

export const brands: Record<BrandId, Brand> = {
  default: {
    id: "default",
    label: "shadcn (default)",
    description: "Neutral nova baseline",
    swatch: "#0a0a0a",
    cssVariables: DEFAULT_CSS,
  },
  apple: {
    id: "apple",
    label: "Apple",
    description: "Gallery white canvas · Azure CTA",
    swatch: "#0071e3",
    cssVariables: APPLE_CSS,
  },
  stripe: {
    id: "stripe",
    label: "Stripe",
    description: "Powder-blue cards · Deep violet CTA",
    swatch: "#533afd",
    cssVariables: STRIPE_CSS,
  },
  fly: {
    id: "fly",
    label: "Fly.io",
    description: "Lavender mist · Electric violet CTA",
    swatch: "#7c3aed",
    cssVariables: FLY_CSS,
  },
  elevenlabs: {
    id: "elevenlabs",
    label: "ElevenLabs",
    description: "Eggshell warmth · Black pill CTA",
    swatch: "#000000",
    cssVariables: ELEVENLABS_CSS,
  },
  cursor: {
    id: "cursor",
    label: "Cursor",
    description: "Warm parchment · Tinted cards · Onyx orange accent",
    swatch: "#f54e00",
    cssVariables: CURSOR_CSS,
  },
}

export const brandList: Brand[] = [
  brands.default,
  brands.apple,
  brands.stripe,
  brands.fly,
  brands.elevenlabs,
  brands.cursor,
]

export function isBrandId(value: string | null | undefined): value is BrandId {
  return (
    value === "default" ||
    value === "apple" ||
    value === "stripe" ||
    value === "fly" ||
    value === "elevenlabs" ||
    value === "cursor"
  )
}
