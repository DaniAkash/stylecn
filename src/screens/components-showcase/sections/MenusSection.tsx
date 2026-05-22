import { useState } from "react"
import {
  CopyIcon,
  ScissorsIcon,
  ClipboardPasteIcon,
  TrashIcon,
  MoreHorizontalIcon,
  CalendarIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Grid, Showcase } from "@/screens/components-showcase/showcase.helpers"

export function MenusSection() {
  const [showBookmarks, setShowBookmarks] = useState(true)
  const [showFullUrls, setShowFullUrls] = useState(false)

  return (
    <Grid>
      <Showcase title="DropdownMenu">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" aria-label="More">
              <MoreHorizontalIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>My account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <UserIcon />
                Profile
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <SettingsIcon />
                Settings
                <DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={showBookmarks}
              onCheckedChange={setShowBookmarks}
            >
              Show bookmarks
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={showFullUrls}
              onCheckedChange={setShowFullUrls}
            >
              Show full URLs
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Showcase>

      <Showcase title="ContextMenu">
        <ContextMenu>
          <ContextMenuTrigger className="bg-muted text-muted-foreground flex h-32 w-full items-center justify-center rounded-md border text-sm">
            Right-click here
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>
              <CopyIcon />
              Copy
              <ContextMenuShortcut>⌘C</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              <ScissorsIcon />
              Cut
              <ContextMenuShortcut>⌘X</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              <ClipboardPasteIcon />
              Paste
              <ContextMenuShortcut>⌘V</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem variant="destructive">
              <TrashIcon />
              Delete
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </Showcase>

      <Showcase title="Command">
        <Command className="border">
          <CommandInput placeholder="Type a command…" />
          <CommandList>
            <CommandEmpty>No results.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <CalendarIcon />
                Calendar
              </CommandItem>
              <CommandItem>
                <UserIcon />
                Search profiles
              </CommandItem>
              <CommandItem>
                <SettingsIcon />
                Open settings
                <CommandShortcut>⌘,</CommandShortcut>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Actions">
              <CommandItem>
                <CopyIcon />
                Copy URL
              </CommandItem>
              <CommandItem>
                <TrashIcon />
                Delete
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </Showcase>
    </Grid>
  )
}
