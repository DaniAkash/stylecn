import { ArrowRightIcon, CheckIcon, DownloadIcon, ItalicIcon, BoldIcon, UnderlineIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/button-group"
import { Spinner } from "@/components/ui/spinner"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Grid, Showcase } from "@/screens/components-showcase/showcase.helpers"

export function ActionsSection() {
  return (
    <Grid>
      <Showcase title="Button variants">
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button variant="destructive">Destructive</Button>
      </Showcase>

      <Showcase title="Button sizes">
        <Button size="sm">Small</Button>
        <Button>Default</Button>
        <Button size="lg">Large</Button>
        <Button size="icon" aria-label="Confirm">
          <CheckIcon />
        </Button>
      </Showcase>

      <Showcase title="Button with icon">
        <Button>
          <DownloadIcon data-icon="inline-start" />
          Download
        </Button>
        <Button variant="outline">
          Next
          <ArrowRightIcon data-icon="inline-end" />
        </Button>
        <Button disabled>
          <Spinner data-icon="inline-start" />
          Loading
        </Button>
      </Showcase>

      <Showcase title="ButtonGroup">
        <ButtonGroup>
          <Button variant="outline">Day</Button>
          <Button variant="outline">Week</Button>
          <Button variant="outline">Month</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="outline">Copy</Button>
          <ButtonGroupSeparator />
          <Button variant="outline" size="icon" aria-label="More">
            <ArrowRightIcon />
          </Button>
        </ButtonGroup>
      </Showcase>

      <Showcase title="Toggle">
        <Toggle aria-label="Toggle bold">
          <BoldIcon />
        </Toggle>
        <Toggle aria-label="Toggle italic" variant="outline">
          <ItalicIcon />
        </Toggle>
        <Toggle aria-label="Toggle underline" pressed>
          <UnderlineIcon />
        </Toggle>
      </Showcase>

      <Showcase title="ToggleGroup">
        <ToggleGroup type="multiple" variant="outline">
          <ToggleGroupItem value="bold" aria-label="Bold"><BoldIcon /></ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Italic"><ItalicIcon /></ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Underline"><UnderlineIcon /></ToggleGroupItem>
        </ToggleGroup>
      </Showcase>
    </Grid>
  )
}
