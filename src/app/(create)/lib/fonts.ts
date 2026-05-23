// Stub of shadcn /create's font registry. Used by the typography-specimen
// card to render a list of font choices. We expose a single neutral entry.

export type Font = {
  name: string
  value: string
  label: string
  family: string
  className?: string
}

export const FONTS: Font[] = [
  {
    name: "geist",
    value: "geist",
    label: "Geist",
    family: "var(--font-sans)",
  },
]

export const FONT_HEADING_OPTIONS: Font[] = FONTS
