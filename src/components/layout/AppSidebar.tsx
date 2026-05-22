import {
  AppWindowIcon,
  CreditCardIcon,
  GaugeIcon,
  HomeIcon,
  LogInIcon,
  SettingsIcon,
  ShapesIcon,
  UserPlusIcon,
} from "lucide-react"
import { NavLink } from "react-router"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { ThemeToggle } from "@/components/layout/ThemeToggle"

const mainLinks = [
  { to: "/", label: "Home", icon: HomeIcon, end: true },
  { to: "/dashboard", label: "Dashboard", icon: GaugeIcon },
  { to: "/settings", label: "Settings", icon: SettingsIcon },
  { to: "/components", label: "Components", icon: ShapesIcon },
]

const authLinks = [
  { to: "/auth/login", label: "Login", icon: LogInIcon },
  { to: "/auth/signup", label: "Signup", icon: UserPlusIcon },
]

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-1.5">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <AppWindowIcon className="size-4" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold">apple-shadcn</span>
            <span className="text-muted-foreground text-xs">theming lab</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Pages</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainLinks.map((link) => (
                <SidebarMenuItem key={link.to}>
                  <NavLink to={link.to} end={link.end}>
                    {({ isActive }) => (
                      <SidebarMenuButton asChild isActive={isActive} tooltip={link.label}>
                        <span>
                          <link.icon />
                          <span>{link.label}</span>
                        </span>
                      </SidebarMenuButton>
                    )}
                  </NavLink>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Account</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {authLinks.map((link) => (
                <SidebarMenuItem key={link.to}>
                  <NavLink to={link.to}>
                    {({ isActive }) => (
                      <SidebarMenuButton asChild isActive={isActive} tooltip={link.label}>
                        <span>
                          <link.icon />
                          <span>{link.label}</span>
                        </span>
                      </SidebarMenuButton>
                    )}
                  </NavLink>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Billing">
              <CreditCardIcon />
              <span>Billing</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <ThemeToggle />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
