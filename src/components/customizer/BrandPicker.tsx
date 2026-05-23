import { useBrand } from "@/components/brand-provider"
import { Field, FieldLabel } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { brandList, type BrandId } from "@/themes/brand.config"

export function BrandPicker() {
  const { brand, setBrand } = useBrand()
  return (
    <Field>
      <FieldLabel htmlFor="brand-picker">Brand design</FieldLabel>
      <Select value={brand} onValueChange={(value) => setBrand(value as BrandId)}>
        <SelectTrigger id="brand-picker" className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {brandList.map((b) => (
              <SelectItem key={b.id} value={b.id}>
                <span className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="inline-block size-3 rounded-sm border border-border/60"
                    style={{ backgroundColor: b.swatch }}
                  />
                  {b.label}
                </span>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
  )
}
