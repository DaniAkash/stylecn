import { MonitorIcon, MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

import { Field, FieldLabel } from "@/components/ui/field"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ModePicker() {
  const { theme = "system", setTheme } = useTheme()

  return (
    <Field>
      <FieldLabel>Mode</FieldLabel>
      <Tabs
        value={theme}
        onValueChange={(value) => setTheme(value)}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="light" className="gap-1 px-1 text-xs [&_svg:not([class*='size-'])]:size-3.5">
            <SunIcon />
            Light
          </TabsTrigger>
          <TabsTrigger value="dark" className="gap-1 px-1 text-xs [&_svg:not([class*='size-'])]:size-3.5">
            <MoonIcon />
            Dark
          </TabsTrigger>
          <TabsTrigger value="system" className="gap-1 px-1 text-xs [&_svg:not([class*='size-'])]:size-3.5">
            <MonitorIcon />
            System
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </Field>
  )
}
