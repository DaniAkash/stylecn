import { MonitorIcon, MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

import { SidebarMenuButton } from "@/components/ui/sidebar"

const order = ["light", "dark", "system"] as const

export function ThemeToggle() {
  const { theme = "system", setTheme } = useTheme()

  function cycle() {
    const idx = order.indexOf((theme as (typeof order)[number]) ?? "system")
    const next = order[(idx + 1) % order.length]
    setTheme(next)
  }

  const Icon = theme === "dark" ? MoonIcon : theme === "light" ? SunIcon : MonitorIcon
  const label = `Theme: ${theme}`

  return (
    <SidebarMenuButton onClick={cycle} tooltip={label}>
      <Icon />
      <span className="capitalize">{theme}</span>
    </SidebarMenuButton>
  )
}
