import type { ComponentType } from "react"

import AttachmentsExample from "@/components/blocks/preview-03/examples/attachments"
import AudioPlayerExample from "@/components/blocks/preview-03/examples/audio-player"
import ChainOfThoughtExample from "@/components/blocks/preview-03/examples/chain-of-thought"
import CheckpointExample from "@/components/blocks/preview-03/examples/checkpoint"
import ConfirmationExample from "@/components/blocks/preview-03/examples/confirmation"
import ContextExample from "@/components/blocks/preview-03/examples/context"
import ConversationExample from "@/components/blocks/preview-03/examples/conversation"
import InlineCitationExample from "@/components/blocks/preview-03/examples/inline-citation"
import MessageExample from "@/components/blocks/preview-03/examples/message"
import MicSelectorExample from "@/components/blocks/preview-03/examples/mic-selector"
import ModelSelectorExample from "@/components/blocks/preview-03/examples/model-selector"
import PersonaManaExample from "@/components/blocks/preview-03/examples/persona-mana"
import PlanExample from "@/components/blocks/preview-03/examples/plan"
import PromptInputExample from "@/components/blocks/preview-03/examples/prompt-input"
import QueueExample from "@/components/blocks/preview-03/examples/queue"
import ReasoningExample from "@/components/blocks/preview-03/examples/reasoning"
import ShimmerExample from "@/components/blocks/preview-03/examples/shimmer"
import SourcesExample from "@/components/blocks/preview-03/examples/sources"
import SpeechInputExample from "@/components/blocks/preview-03/examples/speech-input"
import SuggestionExample from "@/components/blocks/preview-03/examples/suggestion"
import TaskExample from "@/components/blocks/preview-03/examples/task"
import ToolExample from "@/components/blocks/preview-03/examples/tool"
import TranscriptionExample from "@/components/blocks/preview-03/examples/transcription"
import VoiceSelectorExample from "@/components/blocks/preview-03/examples/voice-selector"
import { Card, CardContent } from "@/components/ui/card"

type Example = { title: string; Component: ComponentType }

// Tab 03 — AI chat + voice surfaces (24 components, 5 columns).
// Tab 04 picks up the code / devtool / workflow surfaces (18 components).
// Splitting keeps each tab's mount cost bounded so neither pegs the main
// thread long enough for browsers to flag the page as slow.
const COLUMNS: Example[][] = [
  [
    { title: "Audio Player", Component: AudioPlayerExample },
    { title: "Mic Selector", Component: MicSelectorExample },
    { title: "Persona", Component: PersonaManaExample },
    { title: "Speech Input", Component: SpeechInputExample },
    { title: "Transcription", Component: TranscriptionExample },
  ],
  [
    { title: "Voice Selector", Component: VoiceSelectorExample },
    { title: "Message", Component: MessageExample },
    { title: "Conversation", Component: ConversationExample },
    { title: "Suggestion", Component: SuggestionExample },
    { title: "Shimmer", Component: ShimmerExample },
  ],
  [
    { title: "Attachments", Component: AttachmentsExample },
    { title: "Prompt Input", Component: PromptInputExample },
    { title: "Model Selector", Component: ModelSelectorExample },
    { title: "Queue", Component: QueueExample },
  ],
  [
    { title: "Chain of Thought", Component: ChainOfThoughtExample },
    { title: "Reasoning", Component: ReasoningExample },
    { title: "Context", Component: ContextExample },
    { title: "Confirmation", Component: ConfirmationExample },
    { title: "Checkpoint", Component: CheckpointExample },
  ],
  [
    { title: "Plan", Component: PlanExample },
    { title: "Task", Component: TaskExample },
    { title: "Tool", Component: ToolExample },
    { title: "Sources", Component: SourcesExample },
    { title: "Inline Citation", Component: InlineCitationExample },
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
          className="grid w-[2000px] grid-cols-5 items-start gap-(--gap) bg-muted p-(--gap) md:w-[2400px] dark:bg-background"
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
