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
          <TabsTrigger value="light">
            <SunIcon />
            Light
          </TabsTrigger>
          <TabsTrigger value="dark">
            <MoonIcon />
            Dark
          </TabsTrigger>
          <TabsTrigger value="system">
            <MonitorIcon />
            System
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </Field>
  )
}
