import { createBrowserRouter } from "react-router"

import { RootLayout } from "@/routes/RootLayout"
import { AuthLayout } from "@/routes/AuthLayout"
import HomeRoute from "@/routes/HomeRoute"
import DashboardRoute from "@/routes/DashboardRoute"
import ChartsRoute from "@/routes/ChartsRoute"
import SettingsRoute from "@/routes/SettingsRoute"
import ComponentsRoute from "@/routes/ComponentsRoute"
import LoginRoute from "@/routes/LoginRoute"
import SignupRoute from "@/routes/SignupRoute"

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomeRoute /> },
      { path: "/dashboard", element: <DashboardRoute /> },
      { path: "/charts", element: <ChartsRoute /> },
      { path: "/settings", element: <SettingsRoute /> },
      { path: "/components", element: <ComponentsRoute /> },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: "/auth/login", element: <LoginRoute /> },
      { path: "/auth/signup", element: <SignupRoute /> },
    ],
  },
])
