import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

export function SettingsPreferences() {
  return (
    <form className="flex flex-col gap-6">
      <FieldGroup>
        <Field orientation="horizontal">
          <Switch id="pref-marketing" defaultChecked />
          <FieldLabel htmlFor="pref-marketing">Product updates</FieldLabel>
          <FieldDescription>Occasional emails about new features.</FieldDescription>
        </Field>
        <Field orientation="horizontal">
          <Switch id="pref-digest" />
          <FieldLabel htmlFor="pref-digest">Weekly digest</FieldLabel>
          <FieldDescription>A summary of activity, every Monday.</FieldDescription>
        </Field>
      </FieldGroup>

      <FieldSet>
        <FieldLegend>Notification channels</FieldLegend>
        <FieldGroup data-slot="checkbox-group">
          <Field orientation="horizontal">
            <Checkbox id="ch-email" defaultChecked />
            <FieldLabel htmlFor="ch-email">Email</FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox id="ch-push" defaultChecked />
            <FieldLabel htmlFor="ch-push">Push</FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox id="ch-sms" />
            <FieldLabel htmlFor="ch-sms">SMS</FieldLabel>
          </Field>
        </FieldGroup>
      </FieldSet>

      <FieldSet>
        <FieldLegend>Editor density</FieldLegend>
        <RadioGroup defaultValue="cozy">
          <Field orientation="horizontal">
            <RadioGroupItem id="density-compact" value="compact" />
            <FieldLabel htmlFor="density-compact">Compact</FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem id="density-cozy" value="cozy" />
            <FieldLabel htmlFor="density-cozy">Cozy</FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem id="density-comfortable" value="comfortable" />
            <FieldLabel htmlFor="density-comfortable">Comfortable</FieldLabel>
          </Field>
        </RadioGroup>
      </FieldSet>

      <Field>
        <FieldLabel>Default view</FieldLabel>
        <ToggleGroup type="single" defaultValue="list" variant="outline">
          <ToggleGroupItem value="list">List</ToggleGroupItem>
          <ToggleGroupItem value="grid">Grid</ToggleGroupItem>
          <ToggleGroupItem value="kanban">Kanban</ToggleGroupItem>
        </ToggleGroup>
      </Field>

      <Field>
        <FieldLabel htmlFor="font-size">Font size</FieldLabel>
        <Slider id="font-size" defaultValue={[14]} min={10} max={20} step={1} />
        <FieldDescription>Applies to all text in the editor.</FieldDescription>
      </Field>
    </form>
  )
}
