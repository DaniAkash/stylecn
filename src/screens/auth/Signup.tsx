import { Link } from "react-router"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function Signup() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create your account</CardTitle>
        <CardDescription>It takes less than a minute.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-5">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="signup-name">Full name</FieldLabel>
              <Input id="signup-name" placeholder="Ada Lovelace" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="signup-email">Email</FieldLabel>
              <Input id="signup-email" type="email" placeholder="you@example.com" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="signup-password">Password</FieldLabel>
              <Input id="signup-password" type="password" required />
              <FieldDescription>At least 8 characters.</FieldDescription>
            </Field>
            <Field orientation="horizontal">
              <Checkbox id="signup-terms" />
              <FieldLabel htmlFor="signup-terms" className="text-sm font-normal">
                I agree to the Terms of Service and Privacy Policy.
              </FieldLabel>
            </Field>
          </FieldGroup>

          <Button type="submit" className="w-full">Create account</Button>

          <FieldDescription className="text-center">
            Already have an account?{" "}
            <Link className="underline-offset-4 hover:underline" to="/auth/login">
              Sign in
            </Link>
          </FieldDescription>
        </form>
      </CardContent>
    </Card>
  )
}
