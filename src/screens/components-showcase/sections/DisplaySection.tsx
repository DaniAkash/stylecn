import { CommandIcon, MailWarningIcon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { Kbd } from "@/components/ui/kbd"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Spinner } from "@/components/ui/spinner"
import { Button } from "@/components/ui/button"
import { Grid, Showcase } from "@/screens/components-showcase/showcase.helpers"

export function DisplaySection() {
  return (
    <Grid>
      <Showcase title="Badge">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="destructive">Destructive</Badge>
      </Showcase>

      <Showcase title="Avatar">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>DA</AvatarFallback>
        </Avatar>
        <Avatar className="size-12">
          <AvatarFallback className="text-base">GH</AvatarFallback>
        </Avatar>
      </Showcase>

      <Showcase title="Spinner">
        <Spinner />
        <Spinner className="size-6" />
        <div className="flex items-center gap-2 text-sm">
          <Spinner /> Loading…
        </div>
      </Showcase>

      <Showcase title="Skeleton">
        <div className="flex w-full flex-col gap-2">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-20 w-full" />
        </div>
      </Showcase>

      <Showcase title="Kbd">
        <div className="flex items-center gap-1 text-sm">
          Press <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
          to open the command menu.
        </div>
        <Separator />
        <div className="flex items-center gap-1 text-sm">
          <Kbd>
            <CommandIcon className="size-3" />
          </Kbd>
          <Kbd>⇧</Kbd>
          <Kbd>P</Kbd>
        </div>
      </Showcase>

      <Showcase title="Empty">
        <Empty className="w-full">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <MailWarningIcon />
            </EmptyMedia>
            <EmptyTitle>No messages</EmptyTitle>
            <EmptyDescription>
              When teammates message you, they&rsquo;ll show up here.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button size="sm" variant="outline">Invite teammates</Button>
          </EmptyContent>
        </Empty>
      </Showcase>
    </Grid>
  )
}
