import type { ComponentType } from "react"

import AgentExample from "@/components/blocks/preview-03/examples/agent"
import ArtifactExample from "@/components/blocks/preview-03/examples/artifact"
import AttachmentsExample from "@/components/blocks/preview-03/examples/attachments"
import AudioPlayerExample from "@/components/blocks/preview-03/examples/audio-player"
import ChainOfThoughtExample from "@/components/blocks/preview-03/examples/chain-of-thought"
import CheckpointExample from "@/components/blocks/preview-03/examples/checkpoint"
import CodeBlockExample from "@/components/blocks/preview-03/examples/code-block"
import CommitExample from "@/components/blocks/preview-03/examples/commit"
import ConfirmationExample from "@/components/blocks/preview-03/examples/confirmation"
import ContextExample from "@/components/blocks/preview-03/examples/context"
import ConversationExample from "@/components/blocks/preview-03/examples/conversation"
import EnvironmentVariablesExample from "@/components/blocks/preview-03/examples/environment-variables"
import FileTreeExample from "@/components/blocks/preview-03/examples/file-tree"
import ImageExample from "@/components/blocks/preview-03/examples/image"
import InlineCitationExample from "@/components/blocks/preview-03/examples/inline-citation"
import JsxPreviewExample from "@/components/blocks/preview-03/examples/jsx-preview"
import MessageExample from "@/components/blocks/preview-03/examples/message"
import MicSelectorExample from "@/components/blocks/preview-03/examples/mic-selector"
import ModelSelectorExample from "@/components/blocks/preview-03/examples/model-selector"
import OpenInChatExample from "@/components/blocks/preview-03/examples/open-in-chat"
import PackageInfoExample from "@/components/blocks/preview-03/examples/package-info"
import PersonaManaExample from "@/components/blocks/preview-03/examples/persona-mana"
import PlanExample from "@/components/blocks/preview-03/examples/plan"
import PromptInputExample from "@/components/blocks/preview-03/examples/prompt-input"
import QueueExample from "@/components/blocks/preview-03/examples/queue"
import ReasoningExample from "@/components/blocks/preview-03/examples/reasoning"
import SandboxExample from "@/components/blocks/preview-03/examples/sandbox"
import SchemaDisplayExample from "@/components/blocks/preview-03/examples/schema-display"
import ShimmerExample from "@/components/blocks/preview-03/examples/shimmer"
import SnippetExample from "@/components/blocks/preview-03/examples/snippet"
import SourcesExample from "@/components/blocks/preview-03/examples/sources"
import SpeechInputExample from "@/components/blocks/preview-03/examples/speech-input"
import StackTraceExample from "@/components/blocks/preview-03/examples/stack-trace"
import SuggestionExample from "@/components/blocks/preview-03/examples/suggestion"
import TaskExample from "@/components/blocks/preview-03/examples/task"
import TerminalExample from "@/components/blocks/preview-03/examples/terminal"
import TestResultsExample from "@/components/blocks/preview-03/examples/test-results"
import ToolExample from "@/components/blocks/preview-03/examples/tool"
import TranscriptionExample from "@/components/blocks/preview-03/examples/transcription"
import VoiceSelectorExample from "@/components/blocks/preview-03/examples/voice-selector"
import WebPreviewExample from "@/components/blocks/preview-03/examples/web-preview"
import WorkflowExample from "@/components/blocks/preview-03/examples/workflow"
import { Card, CardContent } from "@/components/ui/card"

type Example = { title: string; Component: ComponentType }

// 7 columns × 6 = 42 components. Mirrors the wide horizontal-scroll canvas
// used by preview-01 / preview-02. Components grouped loosely by category so
// readers can scan a column for related AI surfaces without forcing a rigid
// taxonomy.
const COLUMNS: Example[][] = [
  [
    { title: "Audio Player", Component: AudioPlayerExample },
    { title: "Mic Selector", Component: MicSelectorExample },
    { title: "Persona", Component: PersonaManaExample },
    { title: "Speech Input", Component: SpeechInputExample },
    { title: "Transcription", Component: TranscriptionExample },
    { title: "Voice Selector", Component: VoiceSelectorExample },
  ],
  [
    { title: "Message", Component: MessageExample },
    { title: "Conversation", Component: ConversationExample },
    { title: "Suggestion", Component: SuggestionExample },
    { title: "Chain of Thought", Component: ChainOfThoughtExample },
    { title: "Reasoning", Component: ReasoningExample },
    { title: "Shimmer", Component: ShimmerExample },
  ],
  [
    { title: "Attachments", Component: AttachmentsExample },
    { title: "Model Selector", Component: ModelSelectorExample },
    { title: "Prompt Input", Component: PromptInputExample },
    { title: "Queue", Component: QueueExample },
    { title: "Sources", Component: SourcesExample },
    { title: "Inline Citation", Component: InlineCitationExample },
  ],
  [
    { title: "Confirmation", Component: ConfirmationExample },
    { title: "Checkpoint", Component: CheckpointExample },
    { title: "Context", Component: ContextExample },
    { title: "Plan", Component: PlanExample },
    { title: "Task", Component: TaskExample },
    { title: "Tool", Component: ToolExample },
  ],
  [
    { title: "Agent", Component: AgentExample },
    { title: "Artifact", Component: ArtifactExample },
    { title: "Code Block", Component: CodeBlockExample },
    { title: "Snippet", Component: SnippetExample },
    { title: "JSX Preview", Component: JsxPreviewExample },
    { title: "File Tree", Component: FileTreeExample },
  ],
  [
    { title: "Commit", Component: CommitExample },
    { title: "Environment Variables", Component: EnvironmentVariablesExample },
    { title: "Sandbox", Component: SandboxExample },
    { title: "Stack Trace", Component: StackTraceExample },
    { title: "Test Results", Component: TestResultsExample },
    { title: "Terminal", Component: TerminalExample },
  ],
  [
    { title: "Package Info", Component: PackageInfoExample },
    { title: "Schema Display", Component: SchemaDisplayExample },
    { title: "Web Preview", Component: WebPreviewExample },
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

export default function Preview03Example() {
  return (
    <div className="overflow-x-auto overflow-y-hidden bg-muted contain-[paint] [--gap:--spacing(4)] md:[--gap:--spacing(10)] 3xl:[--gap:--spacing(12)] dark:bg-background">
      <div className="flex w-full min-w-max justify-center">
        <div
          className="grid w-[2800px] grid-cols-7 items-start gap-(--gap) bg-muted p-(--gap) md:w-[3200px] dark:bg-background"
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
