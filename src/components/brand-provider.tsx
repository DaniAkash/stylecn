import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"

import { brands, isBrandId, type BrandId } from "@/themes/brand.config"

type BrandContextValue = {
  brand: BrandId
  setBrand: (next: BrandId) => void
}

const BrandContext = createContext<BrandContextValue | null>(null)

function readBrandFromUrl(): BrandId {
  if (typeof window === "undefined") return "default"
  const raw = new URLSearchParams(window.location.search).get("brand")
  return isBrandId(raw) ? raw : "default"
}

function writeBrandToUrl(next: BrandId) {
  const params = new URLSearchParams(window.location.search)
  if (next === "default") {
    params.delete("brand")
  } else {
    params.set("brand", next)
  }
  const query = params.toString()
  const url = `${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash}`
  window.history.replaceState({}, "", url)
}

export function BrandProvider({ children }: { children: React.ReactNode }) {
  const [brand, setBrandState] = useState<BrandId>(() => readBrandFromUrl())

  useEffect(() => {
    const html = document.documentElement
    if (brand === "default") {
      html.removeAttribute("data-brand")
    } else {
      html.setAttribute("data-brand", brand)
    }
  }, [brand])

  // Resync on browser back/forward so the URL stays the source of truth.
  useEffect(() => {
    const handler = () => setBrandState(readBrandFromUrl())
    window.addEventListener("popstate", handler)
    return () => window.removeEventListener("popstate", handler)
  }, [])

  const setBrand = useCallback((next: BrandId) => {
    writeBrandToUrl(next)
    setBrandState(next)
  }, [])

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
