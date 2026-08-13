import { lazy, Suspense, useState } from "react"

import PreviewExample from "@/components/blocks/preview"
import Preview02Example from "@/components/blocks/preview-02"
import { BrandProvider } from "@/components/brand-provider"
import { Customizer } from "@/components/customizer/Customizer"
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"

// AI Elements ships heavy deps (shiki, react-flow, motion, streamdown, …).
// Split tab 03 (chat / voice) and tab 04 (code / tools) into separate lazy
// chunks so each tab only mounts ~half the catalog. Cuts initial parse cost
// and keeps Chrome / Firefox happy.
const Preview03Example = lazy(() => import("@/components/blocks/preview-03"))
const Preview04Example = lazy(() => import("@/components/blocks/preview-04"))

function AiPreviewFallback() {
  return (
    <div className="bg-muted dark:bg-background h-full overflow-x-auto overflow-y-hidden p-4 md:p-10">
      <div className="flex w-max gap-4 md:gap-10">
        {Array.from({ length: 5 }).map((_, col) => (
          <div key={col} className="flex w-[380px] flex-col gap-4 md:gap-10">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-64 w-full rounded-xl" />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

const PREVIEWS = [
  { id: "preview", label: "01", Component: PreviewExample },
  { id: "preview-02", label: "02", Component: Preview02Example },
  {
    id: "preview-03",
    label: "03",
    Component: () => (
      <Suspense fallback={<AiPreviewFallback />}>
        <Preview03Example />
      </Suspense>
    ),
  },
  {
    id: "preview-04",
    label: "04",
    Component: () => (
      <Suspense fallback={<AiPreviewFallback />}>
        <Preview04Example />
      </Suspense>
    ),
  },
] as const

type PreviewId = (typeof PREVIEWS)[number]["id"]

export function App() {
  const [active, setActive] = useState<PreviewId>("preview")
  const ActiveComponent =
    PREVIEWS.find((p) => p.id === active)?.Component ?? PreviewExample

  return (
    <ThemeProvider defaultTheme="system" storageKey="stylecn-theme">
      <TooltipProvider delayDuration={150}>
        <BrandProvider>
          <header className="sr-only">
            <h1>stylecn — Brand-themed presets for shadcn/ui</h1>
            <p>
              Live gallery of 14 brand-themed presets for shadcn/ui — including
              Apple, Stripe, Linear, Airbnb, Cursor, Resend, Raycast, Claude,
              Duolingo, ElevenLabs, Fly.io, Superhuman, Todoist and Wise. Pick a
              brand, preview every shadcn/ui component, copy the CSS variables,
              drop them into your own project.
            </p>
          </header>
          <div className="bg-background flex h-svh w-full gap-3 p-3 md:gap-4 md:p-4">
            <aside className="w-60 shrink-0 md:w-64" aria-label="Brand picker">
              <Customizer />
            </aside>
            <main className="ring-foreground/10 relative isolate min-w-0 flex-1 overflow-hidden rounded-2xl ring-1">
              <div className="h-full overflow-auto">
                <ActiveComponent />
              </div>
              <div className="bg-card/95 absolute right-3 bottom-3 z-20 flex items-center gap-1 rounded-xl p-1 shadow-xl ring-1 ring-foreground/10 backdrop-blur-xl">
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
