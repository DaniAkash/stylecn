import { CalendarIcon, InfoIcon } from "lucide-react"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Grid, Showcase } from "@/screens/components-showcase/showcase.helpers"

export function OverlaysSection() {
  return (
    <Grid>
      <Showcase title="Dialog">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Edit profile</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile. Click save when you&rsquo;re done.
              </DialogDescription>
            </DialogHeader>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="dlg-name">Name</FieldLabel>
                <Input id="dlg-name" defaultValue="Dani Akash" />
              </Field>
              <Field>
                <FieldLabel htmlFor="dlg-username">Username</FieldLabel>
                <Input id="dlg-username" defaultValue="daniakash" />
              </Field>
            </FieldGroup>
            <DialogFooter>
              <Button>Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </Showcase>

      <Showcase title="AlertDialog">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">Delete</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete this item?</AlertDialogTitle>
              <AlertDialogDescription>
                This action can&rsquo;t be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Delete</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Showcase>

      <Showcase title="Sheet">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Open sheet</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Notifications</SheetTitle>
              <SheetDescription>You&rsquo;re all caught up.</SheetDescription>
            </SheetHeader>
            <SheetFooter>
              <Button variant="outline">Close</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </Showcase>

      <Showcase title="Drawer">
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline">Open drawer</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Quick add</DrawerTitle>
              <DrawerDescription>Capture a new note in seconds.</DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Showcase>

      <Showcase title="Popover">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">
              <CalendarIcon data-icon="inline-start" />
              Schedule
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-72">
            <PopoverHeader>
              <PopoverTitle>Pick a time</PopoverTitle>
              <PopoverDescription>Slots auto-sync to your calendar.</PopoverDescription>
            </PopoverHeader>
            <Field>
              <FieldLabel htmlFor="pop-time">Time</FieldLabel>
              <Input id="pop-time" type="time" defaultValue="09:30" />
            </Field>
          </PopoverContent>
        </Popover>
      </Showcase>

      <Showcase title="Tooltip">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon" aria-label="Info">
              <InfoIcon />
            </Button>
          </TooltipTrigger>
          <TooltipContent>This is a tooltip.</TooltipContent>
        </Tooltip>
      </Showcase>

      <Showcase title="HoverCard">
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link" className="px-1">@shadcn</Button>
          </HoverCardTrigger>
          <HoverCardContent>
            <div className="flex gap-3">
              <Avatar>
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1 text-sm">
                <p className="font-semibold">shadcn</p>
                <p className="text-muted-foreground text-xs">
                  Components built with Radix and Tailwind.
                </p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </Showcase>
    </Grid>
  )
}
