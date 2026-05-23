import { Outlet, useLocation } from "react-router"

import { BrandProvider } from "@/components/brand-provider"
import { AppSidebar } from "@/components/layout/AppSidebar"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

const pageTitles: Record<string, string> = {
  "/": "Home",
  "/dashboard": "Dashboard",
  "/charts": "Charts",
  "/settings": "Settings",
  "/components": "Components",
}

export function RootLayout() {
  const { pathname } = useLocation()
  const title = pageTitles[pathname] ?? "apple-shadcn"

  return (
    <BrandProvider>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <h1 className="text-sm font-medium">{title}</h1>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-6">
            <Outlet />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </BrandProvider>
  )
}
