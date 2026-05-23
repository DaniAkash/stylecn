import { useState } from "react"

import PreviewExample from "@/components/blocks/preview"
import Preview02Example from "@/components/blocks/preview-02"
import { Customizer } from "@/components/customizer/Customizer"
import { Button } from "@/components/ui/button"

const PREVIEWS = [
  { id: "preview", label: "01", Component: PreviewExample },
  { id: "preview-02", label: "02", Component: Preview02Example },
] as const

type PreviewId = (typeof PREVIEWS)[number]["id"]

export default function ComponentsRoute() {
  const [active, setActive] = useState<PreviewId>("preview")
  const ActiveComponent = PREVIEWS.find((p) => p.id === active)?.Component ?? PreviewExample

  return (
    <div className="flex gap-4 lg:gap-6">
      <div className="relative min-w-0 flex-1 overflow-hidden rounded-2xl ring-1 ring-foreground/10">
        <ActiveComponent />
        <div className="dark absolute right-3 bottom-3 z-20 flex items-center gap-1 rounded-xl bg-card/95 p-1 shadow-xl backdrop-blur-xl">
          {PREVIEWS.map((p) => (
            <Button
              key={p.id}
              variant="ghost"
              size="sm"
              data-active={active === p.id}
              className="h-7 min-w-8 cursor-pointer rounded-lg px-2.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground data-[active=true]:bg-accent data-[active=true]:text-accent-foreground"
              onClick={() => setActive(p.id)}
            >
              {p.label}
            </Button>
          ))}
        </div>
      </div>
      <aside className="sticky top-6 hidden h-fit w-72 shrink-0 self-start lg:block">
        <Customizer />
      </aside>
    </div>
  )
}
