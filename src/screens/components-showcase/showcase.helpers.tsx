import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type ShowcaseProps = {
  title: string
  description?: string
  children: React.ReactNode
}

export function Showcase({ title, description, children }: ShowcaseProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm">{title}</CardTitle>
        {description ? <CardDescription>{description}</CardDescription> : null}
      </CardHeader>
      <CardContent className="flex flex-wrap items-start gap-4">
        {children}
      </CardContent>
    </Card>
  )
}

export function Grid({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-4 md:grid-cols-2">{children}</div>
}
