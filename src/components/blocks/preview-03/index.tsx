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
import { LazyExample } from "@/components/blocks/preview-03/LazyExample"

type Example = {
  title: string
  Component: ComponentType
}

type Section = {
  title: string
  examples: Example[]
}

const SECTIONS: Section[] = [
  {
    title: "Chatbot",
    examples: [
      { title: "Attachments", Component: AttachmentsExample },
      { title: "Chain of Thought", Component: ChainOfThoughtExample },
      { title: "Checkpoint", Component: CheckpointExample },
      { title: "Confirmation", Component: ConfirmationExample },
      { title: "Context", Component: ContextExample },
      { title: "Conversation", Component: ConversationExample },
      { title: "Inline Citation", Component: InlineCitationExample },
      { title: "Message", Component: MessageExample },
      { title: "Model Selector", Component: ModelSelectorExample },
      { title: "Plan", Component: PlanExample },
      { title: "Prompt Input", Component: PromptInputExample },
      { title: "Queue", Component: QueueExample },
      { title: "Reasoning", Component: ReasoningExample },
      { title: "Shimmer", Component: ShimmerExample },
      { title: "Sources", Component: SourcesExample },
      { title: "Suggestion", Component: SuggestionExample },
      { title: "Task", Component: TaskExample },
      { title: "Tool", Component: ToolExample },
    ],
  },
  {
    title: "Code",
    examples: [
      { title: "Agent", Component: AgentExample },
      { title: "Artifact", Component: ArtifactExample },
      { title: "Code Block", Component: CodeBlockExample },
      { title: "Commit", Component: CommitExample },
      { title: "Environment Variables", Component: EnvironmentVariablesExample },
      { title: "File Tree", Component: FileTreeExample },
      { title: "JSX Preview", Component: JsxPreviewExample },
      { title: "Package Info", Component: PackageInfoExample },
      { title: "Sandbox", Component: SandboxExample },
      { title: "Schema Display", Component: SchemaDisplayExample },
      { title: "Snippet", Component: SnippetExample },
      { title: "Stack Trace", Component: StackTraceExample },
      { title: "Terminal", Component: TerminalExample },
      { title: "Test Results", Component: TestResultsExample },
      { title: "Web Preview", Component: WebPreviewExample },
    ],
  },
  {
    title: "Voice",
    examples: [
      { title: "Audio Player", Component: AudioPlayerExample },
      { title: "Mic Selector", Component: MicSelectorExample },
      { title: "Persona", Component: PersonaManaExample },
      { title: "Speech Input", Component: SpeechInputExample },
      { title: "Transcription", Component: TranscriptionExample },
      { title: "Voice Selector", Component: VoiceSelectorExample },
    ],
  },
  {
    title: "Workflow",
    examples: [{ title: "Workflow Canvas", Component: WorkflowExample }],
  },
  {
    title: "Utilities",
    examples: [
      { title: "Image", Component: ImageExample },
      { title: "Open in Chat", Component: OpenInChatExample },
    ],
  },
]

export default function Preview03Example() {
  return (
    <div className="bg-muted dark:bg-background min-h-full p-6 md:p-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-12">
        <header>
          <p className="text-muted-foreground text-xs font-medium uppercase tracking-widest">
            AI Elements
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
            Build AI-native UI in your brand
          </h1>
          <p className="text-muted-foreground mt-2 max-w-2xl text-sm leading-relaxed">
            Every component shipped by{" "}
            <a
              href="https://elements.ai-sdk.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 decoration-dotted"
            >
              AI Elements
            </a>
            , rendered with the active stylecn brand. AI Elements uses standard
            shadcn CSS variables, so your picked brand applies everywhere
            automatically.
          </p>
        </header>

        {SECTIONS.map((section) => (
          <section key={section.title} className="flex flex-col gap-4">
            <div className="flex items-baseline gap-3">
              <h2 className="text-base font-semibold tracking-tight">
                {section.title}
              </h2>
              <span className="text-muted-foreground text-xs">
                {section.examples.length}{" "}
                {section.examples.length === 1 ? "component" : "components"}
              </span>
            </div>
            <div className="grid auto-rows-min grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {section.examples.map(({ title, Component }) => (
                <LazyExample key={title} title={title} Component={Component} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
