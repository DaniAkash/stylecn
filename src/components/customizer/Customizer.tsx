import { useBrand } from "@/components/brand-provider"
import { BrandPicker } from "@/components/customizer/BrandPicker"
import { CopyCss } from "@/components/customizer/CopyCss"
import { ModePicker } from "@/components/customizer/ModePicker"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FieldGroup, FieldSeparator } from "@/components/ui/field"

export function Customizer() {
  const { meta } = useBrand()

  return (
    <Card className="isolate w-full overflow-hidden shadow-md">
      <CardHeader className="gap-1">
        <CardTitle className="text-sm">Theme</CardTitle>
        <CardDescription className="text-xs">
          {meta.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup className="gap-3.5">
          <BrandPicker />
          <FieldSeparator />
          <ModePicker />
        </FieldGroup>
      </CardContent>
      <CardFooter>
        <CopyCss />
      </CardFooter>
    </Card>
  )
}
