import type { ComponentType } from "react"

import AgentExample from "@/components/blocks/preview-03/examples/agent"
import ArtifactExample from "@/components/blocks/preview-03/examples/artifact"
import CodeBlockExample from "@/components/blocks/preview-03/examples/code-block"
import CommitExample from "@/components/blocks/preview-03/examples/commit"
import EnvironmentVariablesExample from "@/components/blocks/preview-03/examples/environment-variables"
import FileTreeExample from "@/components/blocks/preview-03/examples/file-tree"
import ImageExample from "@/components/blocks/preview-03/examples/image"
import JsxPreviewExample from "@/components/blocks/preview-03/examples/jsx-preview"
import OpenInChatExample from "@/components/blocks/preview-03/examples/open-in-chat"
import PackageInfoExample from "@/components/blocks/preview-03/examples/package-info"
import SandboxExample from "@/components/blocks/preview-03/examples/sandbox"
import SchemaDisplayExample from "@/components/blocks/preview-03/examples/schema-display"
import SnippetExample from "@/components/blocks/preview-03/examples/snippet"
import StackTraceExample from "@/components/blocks/preview-03/examples/stack-trace"
import TerminalExample from "@/components/blocks/preview-03/examples/terminal"
import TestResultsExample from "@/components/blocks/preview-03/examples/test-results"
import WebPreviewExample from "@/components/blocks/preview-03/examples/web-preview"
import WorkflowExample from "@/components/blocks/preview-03/examples/workflow"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

// Tab 04 — AI Code & Tools. True item-level CSS grid placement so a handful
// of components can occupy more visual real-estate where they read best:
//   - Artifact     : 2 cols wide  (long code blocks need breathing room)
//   - Workflow     : 2 cols × 2 rows (canvas-style; benefits from both axes)
//   - Image        : 2 rows tall (image content scales with available height)
// Other cards stay 1×1 and `grid-auto-flow: dense` backfills the rectangles
// the spanned cards leave behind, so the canvas reads as a coherent grid.

type SpanProps = { colSpan?: 1 | 2; rowSpan?: 1 | 2 }

type Example = {
  title: string
  Component: ComponentType
} & SpanProps

const ITEMS: Example[] = [
  { title: "Agent", Component: AgentExample },
  { title: "Artifact", Component: ArtifactExample, colSpan: 2 },
  { title: "Code Block", Component: CodeBlockExample },
  { title: "Snippet", Component: SnippetExample },
  { title: "JSX Preview", Component: JsxPreviewExample },
  { title: "Commit", Component: CommitExample },
  { title: "Environment Variables", Component: EnvironmentVariablesExample },
  { title: "File Tree", Component: FileTreeExample },
  { title: "Workflow Canvas", Component: WorkflowExample, colSpan: 2, rowSpan: 2 },
  { title: "Package Info", Component: PackageInfoExample },
  { title: "Schema Display", Component: SchemaDisplayExample },
  { title: "Image", Component: ImageExample, rowSpan: 2 },
  { title: "Sandbox", Component: SandboxExample },
  { title: "Stack Trace", Component: StackTraceExample },
  { title: "Terminal", Component: TerminalExample },
  { title: "Test Results", Component: TestResultsExample },
  { title: "Web Preview", Component: WebPreviewExample },
  { title: "Open in Chat", Component: OpenInChatExample },
]

function GridItem({ title, Component, colSpan = 1, rowSpan = 1 }: Example) {
  return (
    <div
      className={cn(
        colSpan === 2 && "col-span-2",
        rowSpan === 2 && "row-span-2",
      )}
    >
      <Card className="h-full overflow-hidden">
        <CardContent className="flex h-full flex-col gap-2 p-4">
          <div className="text-muted-foreground text-[10.5px] font-medium uppercase tracking-wider">
            {title}
          </div>
          <Component />
        </CardContent>
      </Card>
    </div>
  )
}

export default function Preview04Example() {
  return (
    <div className="overflow-x-auto overflow-y-hidden bg-muted contain-[paint] [--gap:--spacing(4)] md:[--gap:--spacing(10)] 3xl:[--gap:--spacing(12)] dark:bg-background">
      <div className="flex w-full min-w-max justify-center">
        <div
          className="grid w-[1600px] grid-flow-row-dense grid-cols-4 auto-rows-min items-start gap-(--gap) bg-muted p-(--gap) md:w-[1900px] dark:bg-background"
          data-slot="capture-target"
        >
          {ITEMS.map((item) => (
            <GridItem key={item.title} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}
