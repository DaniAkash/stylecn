import {
  ContainersSection,
  DataSection,
  DisplaySection,
  FeedbackSection,
  InputsSection,
  MenusSection,
  NavigationSection,
  OverlaysSection,
  SelectionSection,
} from "@/screens/components-showcase/sections"
import { ActionsSection } from "@/screens/components-showcase/sections/ActionsSection"

const sections = [
  { id: "actions", title: "Actions", Component: ActionsSection },
  { id: "inputs", title: "Inputs", Component: InputsSection },
  { id: "selection", title: "Selection", Component: SelectionSection },
  { id: "display", title: "Display", Component: DisplaySection },
  { id: "feedback", title: "Feedback", Component: FeedbackSection },
  { id: "containers", title: "Containers", Component: ContainersSection },
  { id: "overlays", title: "Overlays", Component: OverlaysSection },
  { id: "navigation", title: "Navigation", Component: NavigationSection },
  { id: "data", title: "Data display", Component: DataSection },
  { id: "menus", title: "Menus", Component: MenusSection },
]

export function ComponentsShowcase() {
  return (
    <div className="flex flex-col gap-10">
      <header className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold tracking-tight">Component library</h2>
        <p className="text-muted-foreground max-w-2xl text-sm">
          Every primitive shadcn ships, grouped by category. Use this page as
          the visual reference when iterating on Apple-style tokens.
        </p>
      </header>

      <nav className="bg-muted/40 sticky top-0 z-10 -mx-6 flex flex-wrap gap-2 border-b px-6 py-3 backdrop-blur">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="text-muted-foreground hover:text-foreground rounded-md px-2 py-1 text-xs font-medium"
          >
            {section.title}
          </a>
        ))}
      </nav>

      {sections.map(({ id, title, Component }) => (
        <section key={id} id={id} className="flex scroll-mt-20 flex-col gap-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <Component />
        </section>
      ))}
    </div>
  )
}
