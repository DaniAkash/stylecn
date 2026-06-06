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

// Tab 04 — AI code + workflow + utility surfaces (18 components, 4 columns).
// Sibling of preview-03 which carries the chat / voice surfaces. Each tab is
// React.lazy-loaded so the heaviest devtool surfaces (shiki, react-flow,
// streamdown) only download when a visitor actually opens this tab.
const COLUMNS: Example[][] = [
  [
    { title: "Agent", Component: AgentExample },
    { title: "Artifact", Component: ArtifactExample },
    { title: "Code Block", Component: CodeBlockExample },
    { title: "Snippet", Component: SnippetExample },
    { title: "JSX Preview", Component: JsxPreviewExample },
  ],
  [
    { title: "Commit", Component: CommitExample },
    { title: "Environment Variables", Component: EnvironmentVariablesExample },
    { title: "File Tree", Component: FileTreeExample },
    { title: "Package Info", Component: PackageInfoExample },
    { title: "Schema Display", Component: SchemaDisplayExample },
  ],
  [
    { title: "Sandbox", Component: SandboxExample },
    { title: "Stack Trace", Component: StackTraceExample },
    { title: "Terminal", Component: TerminalExample },
    { title: "Test Results", Component: TestResultsExample },
    { title: "Web Preview", Component: WebPreviewExample },
  ],
  [
    { title: "Workflow Canvas", Component: WorkflowExample },
    { title: "Image", Component: ImageExample },
    { title: "Open in Chat", Component: OpenInChatExample },
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
