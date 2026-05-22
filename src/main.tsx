import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router"

import { router } from "@/router"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import "@/index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="apple-shadcn-theme">
      <TooltipProvider delayDuration={150}>
        <RouterProvider router={router} />
        <Toaster richColors />
      </TooltipProvider>
    </ThemeProvider>
  </StrictMode>,
)
