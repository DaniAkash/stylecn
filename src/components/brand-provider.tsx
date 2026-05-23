import { createContext, useCallback, useContext, useEffect, useMemo } from "react"
import { useSearchParams } from "react-router"

import { brands, isBrandId, type BrandId } from "@/themes/brand.config"

type BrandContextValue = {
  brand: BrandId
  setBrand: (next: BrandId) => void
}

const BrandContext = createContext<BrandContextValue | null>(null)

export function BrandProvider({ children }: { children: React.ReactNode }) {
  const [params, setParams] = useSearchParams()
  const raw = params.get("brand")
  const brand: BrandId = isBrandId(raw) ? raw : "default"

  useEffect(() => {
    const html = document.documentElement
    if (brand === "default") {
      html.removeAttribute("data-brand")
    } else {
      html.setAttribute("data-brand", brand)
    }
  }, [brand])

  const setBrand = useCallback(
    (next: BrandId) => {
      setParams(
        (prev) => {
          const updated = new URLSearchParams(prev)
          if (next === "default") {
            updated.delete("brand")
          } else {
            updated.set("brand", next)
          }
          return updated
        },
        { replace: true },
      )
    },
    [setParams],
  )

  const value = useMemo(() => ({ brand, setBrand }), [brand, setBrand])

  return <BrandContext.Provider value={value}>{children}</BrandContext.Provider>
}

export function useBrand() {
  const ctx = useContext(BrandContext)
  if (!ctx) {
    throw new Error("useBrand must be used within a BrandProvider")
  }
  return { ...ctx, meta: brands[ctx.brand] }
}
