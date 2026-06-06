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

// Tab 04 — AI Code & Tools. True item-level CSS grid placement.
//
// 18 cards × varying spans, ordered so `grid-auto-flow: row dense` packs
// every cell with zero blank space across a 4-col × 6-row canvas:
//
//   row 1 │ Agent · Artifact (2) · Code Block
//   row 2 │ Snippet · JSX Preview · Commit · File Tree
//   row 3 │ Env Vars · Workflow (2×2) · Image (1×2)
//   row 4 │ Schema  · Workflow      · Image
//   row 5 │ Sandbox · Stack Trace · Web Preview (2)
//   row 6 │ Terminal · Test Results · Package Info · Open in Chat
//
// Spans chosen for readability of the underlying surface:
//   Artifact   2×1   long code blocks read better wider
//   Workflow   2×2   canvas-style; benefits from both axes
//   Image      1×2   image content scales with available height
//   Web Preview 2×1  web mockup feels like a web page when wider

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
  { title: "File Tree", Component: FileTreeExample },
  { title: "Environment Variables", Component: EnvironmentVariablesExample },
  { title: "Workflow Canvas", Component: WorkflowExample, colSpan: 2, rowSpan: 2 },
  { title: "Image", Component: ImageExample, rowSpan: 2 },
  { title: "Schema Display", Component: SchemaDisplayExample },
  { title: "Sandbox", Component: SandboxExample },
  { title: "Stack Trace", Component: StackTraceExample },
  { title: "Web Preview", Component: WebPreviewExample, colSpan: 2 },
  { title: "Terminal", Component: TerminalExample },
  { title: "Test Results", Component: TestResultsExample },
  { title: "Package Info", Component: PackageInfoExample },
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
