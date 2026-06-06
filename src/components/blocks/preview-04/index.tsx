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

type Example = { title: string; Component: ComponentType }

// Tab 04 — AI Code & Tools. Masonry-by-columns layout (the same pattern
// preview-01 and preview-02 use): a fixed-width canvas split into 4 flex
// columns, each independently stacking its cards top-down with zero gaps
// between them. CSS Grid with row-spans cannot masonry-pack mixed-height
// rows; this can.
//
// Cards are distributed so column totals roughly balance. The "bigger"
// feel for Workflow / Image lives in their own inner content height (760
// and 360 px), so they still dominate their column visually without
// fighting the row alignment.
const COLUMNS: Example[][] = [
  [
    { title: "Workflow Canvas", Component: WorkflowExample },
    { title: "Code Block", Component: CodeBlockExample },
    { title: "Terminal", Component: TerminalExample },
    { title: "Open in Chat", Component: OpenInChatExample },
  ],
  [
    { title: "Artifact", Component: ArtifactExample },
    { title: "Stack Trace", Component: StackTraceExample },
    { title: "JSX Preview", Component: JsxPreviewExample },
    { title: "Package Info", Component: PackageInfoExample },
    { title: "Snippet", Component: SnippetExample },
  ],
  [
    { title: "Test Results", Component: TestResultsExample },
    { title: "Sandbox", Component: SandboxExample },
    { title: "Agent", Component: AgentExample },
    { title: "Commit", Component: CommitExample },
  ],
  [
    { title: "Image", Component: ImageExample },
    { title: "File Tree", Component: FileTreeExample },
    { title: "Environment Variables", Component: EnvironmentVariablesExample },
    { title: "Web Preview", Component: WebPreviewExample },
    { title: "Schema Display", Component: SchemaDisplayExample },
  ],
]

function CardWrap({ title, Component }: Example) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="flex flex-col gap-2 p-4">
        <div className="text-muted-foreground text-[10.5px] font-medium uppercase tracking-wider">
          {title}
        </div>
        <Component />
      </CardContent>
    </Card>
  )
}

export default function Preview04Example() {
  return (
    <div className="overflow-x-auto overflow-y-hidden bg-muted contain-[paint] [--gap:--spacing(4)] md:[--gap:--spacing(10)] 3xl:[--gap:--spacing(12)] dark:bg-background">
      <div className="flex w-full min-w-max justify-center">
        <div
          className="grid w-[1600px] grid-cols-4 items-start gap-(--gap) bg-muted p-(--gap) md:w-[1900px] dark:bg-background"
          data-slot="capture-target"
        >
          {COLUMNS.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className="flex flex-col gap-(--gap) p-1"
              style={{
                contentVisibility: "auto",
                containIntrinsicSize: "400px 2000px",
              }}
            >
              {column.map((item) => (
                <CardWrap key={item.title} {...item} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
