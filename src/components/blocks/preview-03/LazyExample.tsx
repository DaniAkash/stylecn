import { useEffect, useRef, useState, type ComponentType } from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

type LazyExampleProps = {
  title: string
  Component: ComponentType
}

export function LazyExample({ title, Component }: LazyExampleProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (visible) return
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: "300px" },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [visible])

  return (
    <Card
      ref={ref}
      className="overflow-hidden"
      // Tells the browser it can skip rendering off-screen cards' subtrees.
      // 'contain-intrinsic-size' gives layout a placeholder height so scroll
      // bars stay accurate. Combined, this is the biggest browser-side perf
      // win for very long pages with heavy DOM in each row.
      style={{
        contentVisibility: "auto",
        containIntrinsicSize: "320px",
      }}
    >
      <CardContent className="flex h-full min-h-[260px] flex-col gap-3 p-4">
        <div className="text-muted-foreground text-[11px] font-medium uppercase tracking-wider">
          {title}
        </div>
        <div className="flex-1">
          {visible ? <Component /> : <Skeleton className="h-full min-h-[180px] w-full" />}
        </div>
      </CardContent>
    </Card>
  )
}
