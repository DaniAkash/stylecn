import { CircleAlertIcon, InfoIcon, ShieldCheckIcon } from "lucide-react"
import { toast } from "sonner"

import { Alert, AlertAction, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Grid, Showcase } from "@/screens/components-showcase/showcase.helpers"

export function FeedbackSection() {
  return (
    <Grid>
      <Showcase title="Alert">
        <div className="flex w-full flex-col gap-3">
          <Alert>
            <InfoIcon />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>This is a default alert.</AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <CircleAlertIcon />
            <AlertTitle>Something went wrong</AlertTitle>
            <AlertDescription>We couldn&rsquo;t save your changes.</AlertDescription>
            <AlertAction>
              <Button size="sm" variant="outline">Retry</Button>
            </AlertAction>
          </Alert>
          <Alert>
            <ShieldCheckIcon />
            <AlertTitle>Verified</AlertTitle>
            <AlertDescription>Your domain is connected.</AlertDescription>
          </Alert>
        </div>
      </Showcase>

      <Showcase title="Progress">
        <div className="flex w-full flex-col gap-3">
          <Progress value={20} />
          <Progress value={62} />
          <Progress value={95} />
        </div>
      </Showcase>

      <Showcase title="Toast (sonner)">
        <Button onClick={() => toast.success("Saved", { description: "Your settings are updated." })}>
          Success
        </Button>
        <Button variant="outline" onClick={() => toast.error("Failed", { description: "Couldn't reach the server." })}>
          Error
        </Button>
        <Button variant="ghost" onClick={() => toast.message("Heads up", { description: "Pulling fresh data…" })}>
          Message
        </Button>
      </Showcase>
    </Grid>
  )
}
