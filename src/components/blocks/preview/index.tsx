"use client"

import { ActivateAgentDialog } from "@/components/blocks/preview/cards/activate-agent-dialog"
import { AnalyticsCard } from "@/components/blocks/preview/cards/analytics-card"
import { AnomalyAlert } from "@/components/blocks/preview/cards/anomaly-alert"
import { BarChartCard } from "@/components/blocks/preview/cards/bar-chart-card"
import { BookAppointment } from "@/components/blocks/preview/cards/book-appointment"
import { CodespacesCard } from "@/components/blocks/preview/cards/codespaces-card"
import { ContributionsActivity } from "@/components/blocks/preview/cards/contributions-activity"
import { Contributors } from "@/components/blocks/preview/cards/contributors"
import { EnvironmentVariables } from "@/components/blocks/preview/cards/environment-variables"
import { FeedbackForm } from "@/components/blocks/preview/cards/feedback-form"
import { FileUpload } from "@/components/blocks/preview/cards/file-upload"
import { GithubProfile } from "@/components/blocks/preview/cards/github-profile"
import { IconPreviewGrid } from "@/components/blocks/preview/cards/icon-preview-grid"
import { InviteTeam } from "@/components/blocks/preview/cards/invite-team"
import { Invoice } from "@/components/blocks/preview/cards/invoice"
import { LiveWaveformCard } from "@/components/blocks/preview/cards/live-waveform"
import { NoTeamMembers } from "@/components/blocks/preview/cards/no-team-members"
import { NotFound } from "@/components/blocks/preview/cards/not-found"
import { ObservabilityCard } from "@/components/blocks/preview/cards/observability-card"
import { PieChartCard } from "@/components/blocks/preview/cards/pie-chart-card"
import { ReportBug } from "@/components/blocks/preview/cards/report-bug"
import { ShippingAddress } from "@/components/blocks/preview/cards/shipping-address"
import { Shortcuts } from "@/components/blocks/preview/cards/shortcuts"
import { SkeletonLoading } from "@/components/blocks/preview/cards/skeleton-loading"
import { SleepReport } from "@/components/blocks/preview/cards/sleep-report"
import { TypographySpecimen } from "@/components/blocks/preview/cards/typography-specimen"
import { UIElements } from "@/components/blocks/preview/cards/ui-elements"
import { UsageCard } from "@/components/blocks/preview/cards/usage-card"
import { Visitors } from "@/components/blocks/preview/cards/visitors"
import { WeeklyFitnessSummary } from "@/components/blocks/preview/cards/weekly-fitness-summary"

export default function PreviewExample() {
  return (
    <div className="overflow-x-auto overflow-y-hidden bg-muted contain-[paint] [--gap:--spacing(4)] 3xl:[--gap:--spacing(12)] md:[--gap:--spacing(10)] dark:bg-background style-lyra:md:[--gap:--spacing(6)] style-mira:md:[--gap:--spacing(6)]">
      <div className="flex w-full min-w-max justify-center">
        <div
          className="grid w-[2400px] grid-cols-7 items-start gap-(--gap) bg-muted p-(--gap) md:w-[3000px] dark:bg-background style-lyra:md:w-[2600px] style-mira:md:w-[2600px] *:[div]:gap-(--gap)"
          data-slot="capture-target"
        >
          <div className="flex flex-col p-1 [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
            <TypographySpecimen />
            <div className="md:hidden">
              <UIElements />
            </div>
            <CodespacesCard />
            <Invoice />
          </div>
          <div className="flex flex-col p-1 [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
            <IconPreviewGrid />
            <div className="hidden w-full md:flex">
              <UIElements />
            </div>
            <ObservabilityCard />
            <ShippingAddress />
          </div>
          <div className="flex flex-col p-1 [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
            <EnvironmentVariables />
            <BarChartCard />
            <InviteTeam />
            <ActivateAgentDialog />
          </div>
          <div className="flex flex-col p-1 [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
            <SkeletonLoading />
            <PieChartCard />
            <NoTeamMembers />
            <ReportBug />
            <Contributors />
          </div>
          <div className="flex flex-col p-1 [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
            <FeedbackForm />
            <BookAppointment />
            <SleepReport />
            <GithubProfile />
          </div>
          <div className="flex flex-col p-1 [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
            <WeeklyFitnessSummary />
            <FileUpload />
            <AnalyticsCard />
            <UsageCard />
            <Shortcuts />
          </div>
          <div className="flex flex-col p-1 [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
            <AnomalyAlert />
            <LiveWaveformCard />
            <Visitors />
            <ContributionsActivity />
            <NotFound />
          </div>
        </div>
      </div>
    </div>
  )
}
