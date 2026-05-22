import {
  ArrowRightIcon,
  GaugeIcon,
  LogInIcon,
  SettingsIcon,
  ShapesIcon,
} from "lucide-react"
import { Link } from "react-router"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const tiles = [
  {
    to: "/dashboard",
    title: "Dashboard",
    description: "Stat cards, charts, tables.",
    icon: GaugeIcon,
  },
  {
    to: "/settings",
    title: "Settings",
    description: "Tabs, fields, switches, sliders.",
    icon: SettingsIcon,
  },
  {
    to: "/components",
    title: "Components",
    description: "Every shadcn primitive on one page.",
    icon: ShapesIcon,
  },
  {
    to: "/auth/login",
    title: "Auth",
    description: "Login and signup forms.",
    icon: LogInIcon,
  },
]

export function Home() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
      <header className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <h2 className="text-3xl font-semibold tracking-tight">apple-shadcn</h2>
          <Badge variant="secondary">scaffold</Badge>
        </div>
        <p className="text-muted-foreground max-w-2xl text-base">
          A workbench for bringing Apple&rsquo;s design language to shadcn/ui.
          This scaffold ships every primitive and a handful of mock pages to
          theme against.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2">
        {tiles.map((tile) => (
          <Card key={tile.to} className="group transition-colors hover:bg-muted/40">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 text-primary flex size-9 items-center justify-center rounded-lg">
                  <tile.icon className="size-4" />
                </div>
                <CardTitle>{tile.title}</CardTitle>
              </div>
              <CardDescription>{tile.description}</CardDescription>
              <CardAction>
                <Button asChild size="sm" variant="ghost">
                  <Link to={tile.to}>
                    Open
                    <ArrowRightIcon data-icon="inline-end" />
                  </Link>
                </Button>
              </CardAction>
            </CardHeader>
          </Card>
        ))}
      </section>

      <Card>
        <CardHeader>
          <CardTitle>What&rsquo;s next</CardTitle>
          <CardDescription>
            Apple-style tokens, typography, materials, and motion will land in
            follow-up changes on top of this baseline.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-muted-foreground text-sm">
          The neutral nova preset is intentional &mdash; it&rsquo;s the cleanest
          surface to layer Apple primitives onto.
        </CardContent>
        <CardFooter className="gap-2">
          <Badge variant="outline">vite</Badge>
          <Badge variant="outline">react 19</Badge>
          <Badge variant="outline">tailwind v4</Badge>
          <Badge variant="outline">shadcn radix-nova</Badge>
        </CardFooter>
      </Card>
    </div>
  )
}
