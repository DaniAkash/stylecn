import { BRAND_IDS, BRAND_TOKENS, type BrandId } from "@/themes/brand-tokens"
import { COPY_CSS_SNIPPETS } from "@/themes/copy-css-snippets"

export type { BrandId }

export type Brand = {
  id: BrandId
  label: string
  swatch: string
  cssVariables: string
}

export const brandList: Brand[] = BRAND_TOKENS.map((b) => ({
  id: b.id,
  label: b.label,
  swatch: b.swatch,
  cssVariables: COPY_CSS_SNIPPETS[b.id],
}))

export const brands: Record<BrandId, Brand> = Object.fromEntries(
  brandList.map((b) => [b.id, b]),
) as Record<BrandId, Brand>

/** First brand in the alphabetically-sorted list — used when no ?brand= URL param is present. */
export const DEFAULT_BRAND: BrandId = brandList[0].id

export function isBrandId(value: string | null | undefined): value is BrandId {
  return typeof value === "string" && (BRAND_IDS as string[]).includes(value)
}
