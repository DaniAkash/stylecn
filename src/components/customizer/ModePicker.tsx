import { MonitorIcon, MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

import { Field, FieldLabel } from "@/components/ui/field"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export function ModePicker() {
  const { theme = "system", setTheme } = useTheme()

  return (
    <Field>
      <FieldLabel>Mode</FieldLabel>
      <ToggleGroup
        type="single"
        value={theme}
        onValueChange={(value) => {
          if (value) setTheme(value)
        }}
        variant="outline"
        className="w-full"
      >
        <ToggleGroupItem value="light" aria-label="Light" className="flex-1">
          <SunIcon />
          <span>Light</span>
        </ToggleGroupItem>
        <ToggleGroupItem value="dark" aria-label="Dark" className="flex-1">
          <MoonIcon />
          <span>Dark</span>
        </ToggleGroupItem>
        <ToggleGroupItem value="system" aria-label="System" className="flex-1">
          <MonitorIcon />
          <span>System</span>
        </ToggleGroupItem>
      </ToggleGroup>
    </Field>
  )
}
