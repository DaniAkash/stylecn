import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Grid, Showcase } from "@/screens/components-showcase/showcase.helpers"

export function SelectionSection() {
  return (
    <Grid>
      <Showcase title="Checkbox">
        <FieldGroup data-slot="checkbox-group" className="w-full">
          <Field orientation="horizontal">
            <Checkbox id="sel-cb-1" defaultChecked />
            <FieldLabel htmlFor="sel-cb-1">Newsletter</FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox id="sel-cb-2" />
            <FieldLabel htmlFor="sel-cb-2">Marketing emails</FieldLabel>
          </Field>
          <Field orientation="horizontal" data-disabled>
            <Checkbox id="sel-cb-3" disabled />
            <FieldLabel htmlFor="sel-cb-3">SMS (disabled)</FieldLabel>
          </Field>
        </FieldGroup>
      </Showcase>

      <Showcase title="Radio group">
        <RadioGroup defaultValue="m">
          <Field orientation="horizontal">
            <RadioGroupItem id="sel-r-s" value="s" />
            <FieldLabel htmlFor="sel-r-s">Small</FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem id="sel-r-m" value="m" />
            <FieldLabel htmlFor="sel-r-m">Medium</FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem id="sel-r-l" value="l" />
            <FieldLabel htmlFor="sel-r-l">Large</FieldLabel>
          </Field>
        </RadioGroup>
      </Showcase>

      <Showcase title="Switch">
        <FieldGroup className="w-full">
          <Field orientation="horizontal">
            <Switch id="sel-sw-1" defaultChecked />
            <FieldLabel htmlFor="sel-sw-1">Sync across devices</FieldLabel>
            <FieldDescription>Keep settings in sync.</FieldDescription>
          </Field>
          <Field orientation="horizontal">
            <Switch id="sel-sw-2" />
            <FieldLabel htmlFor="sel-sw-2">Telemetry</FieldLabel>
          </Field>
        </FieldGroup>
      </Showcase>

      <Showcase title="Slider">
        <div className="flex w-full flex-col gap-6">
          <Slider defaultValue={[33]} max={100} step={1} />
          <Slider defaultValue={[15, 75]} max={100} step={1} />
        </div>
      </Showcase>
    </Grid>
  )
}
