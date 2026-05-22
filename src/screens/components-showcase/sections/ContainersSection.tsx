import { FileTextIcon, FolderIcon, ImageIcon } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Grid, Showcase } from "@/screens/components-showcase/showcase.helpers"

const tags = Array.from({ length: 30 }, (_, i) => `tag-${i + 1}`)

export function ContainersSection() {
  return (
    <Grid>
      <Showcase title="Accordion">
        <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It uses the Radix Accordion primitive under the hood.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>Yes, themed with the active CSS variables.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>Yes, via tw-animate-css.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </Showcase>

      <Showcase title="Collapsible">
        <Collapsible className="w-full">
          <CollapsibleTrigger asChild>
            <Button variant="outline" size="sm">Toggle</Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-2 text-sm">
            Hidden content lives here. Click toggle to reveal.
          </CollapsibleContent>
        </Collapsible>
      </Showcase>

      <Showcase title="ItemGroup">
        <ItemGroup className="w-full">
          <Item>
            <ItemMedia>
              <FolderIcon className="size-5" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Projects</ItemTitle>
              <ItemDescription>12 items</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button size="sm" variant="ghost">Open</Button>
            </ItemActions>
          </Item>
          <ItemSeparator />
          <Item>
            <ItemMedia>
              <FileTextIcon className="size-5" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Notes</ItemTitle>
              <ItemDescription>34 items</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button size="sm" variant="ghost">Open</Button>
            </ItemActions>
          </Item>
          <ItemSeparator />
          <Item>
            <ItemMedia>
              <ImageIcon className="size-5" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Media</ItemTitle>
              <ItemDescription>120 items</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button size="sm" variant="ghost">Open</Button>
            </ItemActions>
          </Item>
        </ItemGroup>
      </Showcase>

      <Showcase title="ScrollArea">
        <ScrollArea className="bg-background h-40 w-full rounded-md border">
          <div className="flex flex-col gap-1 p-3 text-sm">
            {tags.map((t) => (
              <div key={t}>{t}</div>
            ))}
          </div>
        </ScrollArea>
      </Showcase>

      <Showcase title="Resizable">
        <ResizablePanelGroup orientation="horizontal" className="bg-background h-40 w-full rounded-md border">
          <ResizablePanel defaultSize={40}>
            <div className="flex h-full items-center justify-center text-sm">Left</div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={60}>
            <div className="flex h-full items-center justify-center text-sm">Right</div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </Showcase>

      <Showcase title="Separator + AspectRatio">
        <div className="flex w-full flex-col gap-3">
          <div className="text-sm">Above</div>
          <Separator />
          <div className="text-sm">Below</div>
          <AspectRatio ratio={16 / 9} className="bg-muted overflow-hidden rounded-md">
            <div className="text-muted-foreground flex h-full items-center justify-center text-xs">
              16 / 9 aspect ratio
            </div>
          </AspectRatio>
        </div>
      </Showcase>
    </Grid>
  )
}
