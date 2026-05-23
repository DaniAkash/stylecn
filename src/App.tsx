import { useState } from "react"

import PreviewExample from "@/components/blocks/preview"
import Preview02Example from "@/components/blocks/preview-02"
import { BrandProvider } from "@/components/brand-provider"
import { Customizer } from "@/components/customizer/Customizer"
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"

const PREVIEWS = [
  { id: "preview", label: "01", Component: PreviewExample },
  { id: "preview-02", label: "02", Component: Preview02Example },
] as const

type PreviewId = (typeof PREVIEWS)[number]["id"]

export function App() {
  const [active, setActive] = useState<PreviewId>("preview")
  const ActiveComponent =
    PREVIEWS.find((p) => p.id === active)?.Component ?? PreviewExample

  return (
    <ThemeProvider defaultTheme="system" storageKey="apple-shadcn-theme">
      <TooltipProvider delayDuration={150}>
        <BrandProvider>
          <div className="bg-background flex h-svh w-full gap-3 p-3 md:gap-4 md:p-4">
            <aside className="w-60 shrink-0 md:w-64">
              <Customizer />
            </aside>
            <main className="ring-foreground/10 relative isolate min-w-0 flex-1 overflow-hidden rounded-2xl ring-1">
              <div className="h-full overflow-auto">
                <ActiveComponent />
              </div>
              <div className="dark bg-card/95 absolute right-3 bottom-3 z-20 flex items-center gap-1 rounded-xl p-1 shadow-xl backdrop-blur-xl">
                {PREVIEWS.map((p) => (
                  <Button
                    key={p.id}
                    variant="ghost"
                    size="sm"
                    data-active={active === p.id}
                    className="text-muted-foreground hover:text-foreground data-[active=true]:bg-accent data-[active=true]:text-accent-foreground h-7 min-w-8 cursor-pointer rounded-lg px-2.5 text-xs font-medium transition-colors"
                    onClick={() => setActive(p.id)}
                  >
                    {p.label}
                  </Button>
                ))}
              </div>
            </main>
          </div>
          <Toaster richColors />
        </BrandProvider>
      </TooltipProvider>
    </ThemeProvider>
  )
}
