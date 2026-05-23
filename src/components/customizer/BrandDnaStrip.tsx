import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

import { useBrand } from "@/components/brand-provider"

const TOKENS = ["background", "card", "muted", "primary", "foreground"] as const

type SwatchToken = (typeof TOKENS)[number]

const TOKEN_LABEL: Record<SwatchToken, string> = {
  background: "Canvas",
  card: "Card surface",
  muted: "Muted surface",
  primary: "Primary CTA",
  foreground: "Text",
}

/**
 * A horizontal strip of swatches sampled from the active brand's resolved
 * CSS variables — canvas, card, muted, primary, foreground. Re-reads when
 * the brand or mode changes. Acts as the brand's visual DNA in the picker
 * header, replacing the prior prose description.
 */
export function BrandDnaStrip() {
  const { brand } = useBrand()
  const { theme, systemTheme } = useTheme()
  const resolvedTheme = theme === "system" ? systemTheme : theme
  const [colors, setColors] = useState<string[]>([])

  useEffect(() => {
    // Wait one frame so BrandProvider's data-brand setter and next-themes'
    // class toggle have both committed before we sample computed styles.
    const id = requestAnimationFrame(() => {
      const styles = getComputedStyle(document.documentElement)
      setColors(
        TOKENS.map((token) => styles.getPropertyValue(`--${token}`).trim()),
      )
    })
    return () => cancelAnimationFrame(id)
  }, [brand, resolvedTheme])

  if (colors.length === 0) {
    return (
      <div
        aria-hidden="true"
        className="ring-border/60 h-6 w-full rounded-md bg-muted ring-1"
      />
    )
  }

  return (
    <div
      role="img"
      aria-label={`${brand} theme color palette`}
      className="ring-border/60 flex h-6 w-full overflow-hidden rounded-md ring-1"
    >
      {colors.map((color, i) => (
        <div
          key={TOKENS[i]}
          title={`${TOKEN_LABEL[TOKENS[i]]}: ${color}`}
          className="flex-1"
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  )
}
