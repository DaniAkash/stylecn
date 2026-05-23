import { CheckIcon, CopyIcon } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

import { useBrand } from "@/components/brand-provider"
import { Button } from "@/components/ui/button"

export function CopyCss() {
  const { meta } = useBrand()
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(meta.cssVariables)
      setCopied(true)
      toast.success(`Copied ${meta.label} CSS variables`)
      setTimeout(() => setCopied(false), 1500)
    } catch (err) {
      toast.error("Couldn't copy to clipboard", {
        description: err instanceof Error ? err.message : undefined,
      })
    }
  }

  return (
    <Button onClick={copy} variant="secondary" className="w-full" size="sm">
      {copied ? <CheckIcon data-icon="inline-start" /> : <CopyIcon data-icon="inline-start" />}
      {copied ? "Copied" : "Copy CSS"}
    </Button>
  )
}
