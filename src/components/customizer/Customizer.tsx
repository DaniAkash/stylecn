import { BrandDnaStrip } from "@/components/customizer/BrandDnaStrip"
import { BrandPicker } from "@/components/customizer/BrandPicker"
import { CopyCss } from "@/components/customizer/CopyCss"
import { ModePicker } from "@/components/customizer/ModePicker"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FieldGroup, FieldSeparator } from "@/components/ui/field"

export function Customizer() {
  return (
    <Card className="isolate w-full overflow-hidden shadow-md">
      <CardHeader className="gap-2.5">
        <CardTitle className="text-sm">Theme</CardTitle>
        <BrandDnaStrip />
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
