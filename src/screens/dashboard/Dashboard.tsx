import { TrendingDownIcon, TrendingUpIcon } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  chartData,
  recentActivity,
  stats,
  type ActivityStatus,
} from "@/screens/dashboard/dashboard.data"

const chartConfig = {
  visits: { label: "Visits", color: "var(--chart-1)" },
  signups: { label: "Signups", color: "var(--chart-3)" },
} satisfies ChartConfig

const statusVariant: Record<ActivityStatus, "default" | "secondary" | "outline" | "destructive"> = {
  resolved: "secondary",
  review: "outline",
  shipped: "default",
  open: "destructive",
  approved: "secondary",
}

export function Dashboard() {
  return (
    <div className="flex flex-col gap-6">
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Trend = stat.trend === "up" ? TrendingUpIcon : TrendingDownIcon
          return (
            <Card key={stat.label}>
              <CardHeader>
                <CardDescription>{stat.label}</CardDescription>
                <CardTitle className="text-3xl">{stat.value}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground flex items-center gap-1.5 text-sm">
                <Trend className="size-4" />
                <span>{stat.change}</span>
                <span>vs. last week</span>
              </CardContent>
            </Card>
          )
        })}
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Traffic overview</CardTitle>
            <CardDescription>Visits and signups over the last 6 months.</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[260px] w-full">
              <AreaChart data={chartData} margin={{ left: 0, right: 12 }}>
                <defs>
                  <linearGradient id="visitsFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-visits)" stopOpacity={0.45} />
                    <stop offset="100%" stopColor="var(--color-visits)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="signupsFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-signups)" stopOpacity={0.45} />
                    <stop offset="100%" stopColor="var(--color-signups)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Area
                  dataKey="visits"
                  type="monotone"
                  stroke="var(--color-visits)"
                  fill="url(#visitsFill)"
                  strokeWidth={2}
                />
                <Area
                  dataKey="signups"
                  type="monotone"
                  stroke="var(--color-signups)"
                  fill="url(#signupsFill)"
                  strokeWidth={2}
                />
                <ChartLegend content={<ChartLegendContent />} />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Team online</CardTitle>
            <CardDescription>Folks active in the last hour.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            {recentActivity.slice(0, 4).map((entry) => (
              <div key={entry.id} className="flex items-center gap-3">
                <Avatar className="size-9">
                  <AvatarFallback>{entry.user.initials}</AvatarFallback>
                </Avatar>
                <div className="flex min-w-0 flex-1 flex-col">
                  <span className="truncate text-sm font-medium">{entry.user.name}</span>
                  <span className="text-muted-foreground truncate text-xs">
                    {entry.action}
                  </span>
                </div>
                <Badge variant="outline" className="text-xs">
                  {entry.when}
                </Badge>
              </div>
            ))}
            <Separator />
            <p className="text-muted-foreground text-xs">+3 more on standby</p>
          </CardContent>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Recent activity</CardTitle>
          <CardDescription>Latest events across the workspace.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Target</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">When</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentActivity.map((entry) => (
                <TableRow key={entry.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="size-7">
                        <AvatarFallback className="text-xs">{entry.user.initials}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">{entry.user.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{entry.action}</TableCell>
                  <TableCell className="font-mono text-xs">{entry.target}</TableCell>
                  <TableCell>
                    <Badge variant={statusVariant[entry.status]} className="capitalize">
                      {entry.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground text-right text-sm">
                    {entry.when}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
