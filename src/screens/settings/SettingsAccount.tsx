import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

export function SettingsAccount() {
  return (
    <form className="flex flex-col gap-6">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="account-email">Email</FieldLabel>
          <Input id="account-email" type="email" defaultValue="dani@example.com" />
        </Field>
        <Field>
          <FieldLabel htmlFor="account-timezone">Timezone</FieldLabel>
          <Select defaultValue="utc">
            <SelectTrigger id="account-timezone">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="utc">UTC</SelectItem>
                <SelectItem value="ist">India Standard Time (IST)</SelectItem>
                <SelectItem value="pst">Pacific Time (PT)</SelectItem>
                <SelectItem value="cet">Central European Time (CET)</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </Field>
        <Field>
          <FieldLabel htmlFor="account-language">Language</FieldLabel>
          <Select defaultValue="en">
            <SelectTrigger id="account-language">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="ta">Tamil</SelectItem>
                <SelectItem value="ja">Japanese</SelectItem>
                <SelectItem value="de">German</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </Field>
      </FieldGroup>

      <Separator />

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium">Danger zone</h3>
        <p className="text-muted-foreground text-sm">
          Permanently delete your account and all associated data.
        </p>
        <div>
          <Button type="button" variant="destructive">Delete account</Button>
        </div>
      </div>
    </form>
  )
}
