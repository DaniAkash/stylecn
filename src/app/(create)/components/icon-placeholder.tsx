import * as LucideIcons from "lucide-react"
import { SquareIcon, type LucideProps } from "lucide-react"
import type { ComponentType } from "react"

// Stub of shadcn's IconPlaceholder. In their /create page the user picks
// an icon library (lucide / tabler / hugeicons / phosphor / remixicon)
// and this component dispatches to the right one. We always use lucide,
// so we just look up the prop[lucide] name in the lucide-react exports
// and render that. Other library props are accepted for type-compat but
// ignored.

type IconPlaceholderProps = LucideProps & {
  lucide?: string
  tabler?: string
  hugeicons?: string
  phosphor?: string
  remixicon?: string
}

const icons = LucideIcons as unknown as Record<string, ComponentType<LucideProps>>

export function IconPlaceholder({
  lucide,
  tabler: _tabler,
  hugeicons: _hugeicons,
  phosphor: _phosphor,
  remixicon: _remixicon,
  ...rest
}: IconPlaceholderProps) {
  const name = lucide ?? ""
  const Icon = name && icons[name] ? icons[name] : SquareIcon
  return <Icon {...rest} />
}
