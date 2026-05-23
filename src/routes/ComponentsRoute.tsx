import { Customizer } from "@/components/customizer/Customizer"
import { ComponentsShowcase } from "@/screens/components-showcase/ComponentsShowcase"

export default function ComponentsRoute() {
  return (
    <div className="flex gap-6">
      <div className="min-w-0 flex-1">
        <ComponentsShowcase />
      </div>
      <aside className="sticky top-6 hidden h-fit w-72 shrink-0 self-start lg:block">
        <Customizer />
      </aside>
    </div>
  )
}
