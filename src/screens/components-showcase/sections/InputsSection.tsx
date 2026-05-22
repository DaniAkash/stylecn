import { MailIcon, SearchIcon } from "lucide-react"

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { NativeSelect } from "@/components/ui/native-select"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Grid, Showcase } from "@/screens/components-showcase/showcase.helpers"

const frameworks = [
  { value: "next", label: "Next.js" },
  { value: "remix", label: "Remix" },
  { value: "vite", label: "Vite" },
  { value: "astro", label: "Astro" },
  { value: "tanstack", label: "TanStack Start" },
]

export function InputsSection() {
  return (
    <Grid>
      <Showcase title="Text input">
        <FieldGroup className="w-full">
          <Field>
            <FieldLabel htmlFor="show-email">Email</FieldLabel>
            <Input id="show-email" type="email" placeholder="you@example.com" />
          </Field>
        </FieldGroup>
      </Showcase>

      <Showcase title="Textarea">
        <FieldGroup className="w-full">
          <Field>
            <FieldLabel htmlFor="show-note">Note</FieldLabel>
            <Textarea id="show-note" rows={3} placeholder="Drop a note…" />
          </Field>
        </FieldGroup>
      </Showcase>

      <Showcase title="InputGroup">
        <FieldGroup className="w-full">
          <Field>
            <FieldLabel htmlFor="show-search">Search</FieldLabel>
            <InputGroup>
              <InputGroupAddon>
                <SearchIcon />
              </InputGroupAddon>
              <InputGroupInput id="show-search" placeholder="Search components…" />
              <InputGroupAddon align="inline-end">
                <InputGroupButton variant="outline">Go</InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </Field>
          <Field>
            <FieldLabel htmlFor="show-mail">With mail icon</FieldLabel>
            <InputGroup>
              <InputGroupAddon>
                <MailIcon />
              </InputGroupAddon>
              <InputGroupInput id="show-mail" type="email" placeholder="you@example.com" />
            </InputGroup>
          </Field>
        </FieldGroup>
      </Showcase>

      <Showcase title="InputOTP">
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </Showcase>

      <Showcase title="Select">
        <FieldGroup className="w-full">
          <Field>
            <FieldLabel htmlFor="show-fw">Framework</FieldLabel>
            <Select defaultValue="vite">
              <SelectTrigger id="show-fw">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>JS</SelectLabel>
                  {frameworks.map((f) => (
                    <SelectItem key={f.value} value={f.value}>
                      {f.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
        </FieldGroup>
      </Showcase>

      <Showcase title="Native select">
        <FieldGroup className="w-full">
          <Field>
            <FieldLabel htmlFor="show-native">Quick select</FieldLabel>
            <NativeSelect id="show-native" defaultValue="vite">
              {frameworks.map((f) => (
                <option key={f.value} value={f.value}>
                  {f.label}
                </option>
              ))}
            </NativeSelect>
          </Field>
        </FieldGroup>
      </Showcase>

      <Showcase title="Combobox">
        <FieldGroup className="w-full">
          <Field>
            <FieldLabel>Pick a framework</FieldLabel>
            <Combobox items={frameworks}>
              <ComboboxInput placeholder="Choose…" />
              <ComboboxContent>
                <ComboboxEmpty>No matches.</ComboboxEmpty>
                <ComboboxList>
                  {(item: (typeof frameworks)[number]) => (
                    <ComboboxItem key={item.value} value={item.value}>
                      {item.label}
                    </ComboboxItem>
                  )}
                </ComboboxList>
              </ComboboxContent>
            </Combobox>
          </Field>
        </FieldGroup>
      </Showcase>
    </Grid>
  )
}
