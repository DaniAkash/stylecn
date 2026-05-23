// Stub of shadcn /create's useDesignSystemSearchParams hook.
// Their cards call it to read chart-color / font / icon-library picks
// from the URL. We don't expose those pickers, so this returns neutral
// defaults; the cards still render with their own static color/font tokens.

export type DesignSystemSearchParams = {
  base: string
  item: string
  baseColor: string
  theme: string
  style: string
  font: string
  fontHeading: string
  radius: string
  iconLibrary: string
  chartColor: string
  menuColor: string
  menuAccent: string
}

const DEFAULTS: DesignSystemSearchParams = {
  base: "radix",
  item: "preview",
  baseColor: "neutral",
  theme: "default",
  style: "nova",
  font: "geist",
  fontHeading: "geist",
  radius: "default",
  iconLibrary: "lucide",
  chartColor: "violet",
  menuColor: "default",
  menuAccent: "subtle",
}

export function useDesignSystemSearchParams(): [
  DesignSystemSearchParams,
  (next: Partial<DesignSystemSearchParams>) => void,
] {
  return [DEFAULTS, () => {}]
}
