import { AppWindowIcon } from "lucide-react"
import { Link, Outlet } from "react-router"

export function AuthLayout() {
  return (
    <div className="bg-muted/30 flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <Link to="/" className="flex items-center gap-2 self-start text-sm font-medium">
        <div className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
          <AppWindowIcon className="size-4" />
        </div>
        apple-shadcn
      </Link>
      <div className="w-full max-w-sm">
        <Outlet />
      </div>
    </div>
  )
}
