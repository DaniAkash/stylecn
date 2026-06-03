import { CheckIcon, CopyIcon } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

import { useBrand } from "@/components/brand-provider"
import { Button } from "@/components/ui/button"
import { Field, FieldLabel } from "@/components/ui/field"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type PackageManager = "bun" | "pnpm" | "npm"

const PACKAGE_MANAGERS: readonly PackageManager[] = ["bun", "pnpm", "npm"] as const

const COMMAND_PREFIXES: Record<PackageManager, string> = {
  bun: "bunx --bun",
  pnpm: "pnpm dlx",
  npm: "npx",
}

function commandFor(pm: PackageManager, brandId: string) {
  return `${COMMAND_PREFIXES[pm]} shadcn@latest add DaniAkash/stylecn/${brandId}`
}

export function InstallCommand() {
  const { brand, meta } = useBrand()
  const [pm, setPm] = useState<PackageManager>("bun")
  const [copied, setCopied] = useState(false)
  const command = commandFor(pm, brand)

  async function copy() {
    try {
      await navigator.clipboard.writeText(command)
      setCopied(true)
      toast.success(`Copied ${meta.label} install command`)
      setTimeout(() => setCopied(false), 1500)
    } catch (err) {
      toast.error("Couldn't copy to clipboard", {
        description: err instanceof Error ? err.message : undefined,
      })
    }
  }

  return (
    <Field>
      <FieldLabel>Install via shadcn CLI</FieldLabel>
      <Tabs value={pm} onValueChange={(v) => setPm(v as PackageManager)} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          {PACKAGE_MANAGERS.map((value) => (
            <TabsTrigger key={value} value={value} className="px-1 text-xs">
              {value}
            </TabsTrigger>
          ))}
        </TabsList>
        {PACKAGE_MANAGERS.map((value) => (
          <TabsContent key={value} value={value} className="mt-2">
            <div className="bg-muted text-muted-foreground relative rounded-md p-2 pr-8 font-mono text-[10.5px] leading-snug break-all">
              {commandFor(value, brand)}
              <Button
                type="button"
                variant="ghost"
                size="icon-xs"
                onClick={copy}
                className="absolute top-1 right-1 size-6"
                aria-label="Copy install command"
              >
                {copied ? <CheckIcon /> : <CopyIcon />}
              </Button>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </Field>
  )
}
