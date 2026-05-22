import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function SettingsProfile() {
  return (
    <form className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Avatar className="size-16">
          <AvatarFallback className="text-base">DA</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium">Profile photo</p>
          <p className="text-muted-foreground text-xs">PNG or JPG, up to 2&nbsp;MB.</p>
          <div className="mt-1 flex gap-2">
            <Button type="button" size="sm" variant="outline">Upload</Button>
            <Button type="button" size="sm" variant="ghost">Remove</Button>
          </div>
        </div>
      </div>

      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="settings-name">Display name</FieldLabel>
          <Input id="settings-name" defaultValue="Dani Akash" />
        </Field>
        <Field>
          <FieldLabel htmlFor="settings-handle">Username</FieldLabel>
          <Input id="settings-handle" defaultValue="daniakash" />
          <FieldDescription>This will be your public profile URL.</FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="settings-bio">Bio</FieldLabel>
          <Textarea
            id="settings-bio"
            rows={4}
            defaultValue="Building developer tools and design systems."
          />
        </Field>
      </FieldGroup>

      <div className="flex justify-end gap-2">
        <Button type="button" variant="ghost">Cancel</Button>
        <Button type="submit">Save changes</Button>
      </div>
    </form>
  )
}
