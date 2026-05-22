import { GitBranchIcon } from "lucide-react"
import { Link } from "react-router"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function Login() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome back</CardTitle>
        <CardDescription>Sign in to apple-shadcn to continue.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-5">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="login-email">Email</FieldLabel>
              <Input id="login-email" type="email" placeholder="you@example.com" required />
            </Field>
            <Field>
              <div className="flex items-center justify-between">
                <FieldLabel htmlFor="login-password">Password</FieldLabel>
                <a className="text-muted-foreground text-xs underline-offset-4 hover:underline" href="#">
                  Forgot?
                </a>
              </div>
              <Input id="login-password" type="password" required />
            </Field>
          </FieldGroup>

          <Button type="submit" className="w-full">Sign in</Button>

          <FieldSeparator>Or continue with</FieldSeparator>

          <Button type="button" variant="outline" className="w-full">
            <GitBranchIcon data-icon="inline-start" />
            GitHub
          </Button>

          <FieldDescription className="text-center">
            Don&rsquo;t have an account?{" "}
            <Link className="underline-offset-4 hover:underline" to="/auth/signup">
              Sign up
            </Link>
          </FieldDescription>
        </form>
      </CardContent>
    </Card>
  )
}
