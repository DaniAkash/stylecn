import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  RadialBar,
  RadialBarChart,
  XAxis,
  YAxis,
} from "recharts"

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
import {
  browserShare,
  conversionFunnel,
  radarSkills,
  radialProgress,
  revenueByMonth,
  trafficStacked,
} from "@/screens/charts/charts.data"

const barConfig = {
  desktop: { label: "Desktop", color: "var(--chart-1)" },
  mobile: { label: "Mobile", color: "var(--chart-2)" },
} satisfies ChartConfig

const lineConfig = {
  desktop: { label: "Desktop", color: "var(--chart-1)" },
  mobile: { label: "Mobile", color: "var(--chart-3)" },
} satisfies ChartConfig

const pieConfig = {
  visitors: { label: "Visitors" },
  chrome: { label: "Chrome", color: "var(--chart-1)" },
  safari: { label: "Safari", color: "var(--chart-2)" },
  firefox: { label: "Firefox", color: "var(--chart-3)" },
  edge: { label: "Edge", color: "var(--chart-4)" },
  other: { label: "Other", color: "var(--chart-5)" },
} satisfies ChartConfig

const radarConfig = {
  value: { label: "Score", color: "var(--chart-2)" },
} satisfies ChartConfig

const radialConfig = {
  value: { label: "%" },
  ship: { label: "Ship", color: "var(--chart-1)" },
  review: { label: "Review", color: "var(--chart-3)" },
  draft: { label: "Draft", color: "var(--chart-5)" },
} satisfies ChartConfig

const stackedConfig = {
  direct: { label: "Direct", color: "var(--chart-1)" },
  organic: { label: "Organic", color: "var(--chart-2)" },
  referral: { label: "Referral", color: "var(--chart-3)" },
} satisfies ChartConfig

const funnelConfig = {
  count: { label: "Count", color: "var(--chart-2)" },
} satisfies ChartConfig

export function Charts() {
  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold tracking-tight">Charts</h2>
        <p className="text-muted-foreground max-w-2xl text-sm">
          Recharts wrapped by shadcn&rsquo;s ChartContainer. Palette comes from
          the active theme&rsquo;s <code className="bg-muted rounded px-1">--chart-*</code> tokens.
        </p>
      </header>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Bar — grouped</CardTitle>
            <CardDescription>Desktop vs mobile, monthly.</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={barConfig} className="h-[260px] w-full">
              <BarChart data={revenueByMonth}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Line</CardTitle>
            <CardDescription>Two-series trend.</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={lineConfig} className="h-[260px] w-full">
              <LineChart data={revenueByMonth} margin={{ left: 8, right: 12 }}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line
                  dataKey="desktop"
                  type="monotone"
                  stroke="var(--color-desktop)"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                />
                <Line
                  dataKey="mobile"
                  type="monotone"
                  stroke="var(--color-mobile)"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Area — stacked</CardTitle>
            <CardDescription>Traffic by source, weekly.</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={stackedConfig} className="h-[260px] w-full">
              <AreaChart data={trafficStacked} margin={{ left: 0, right: 12 }}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={8} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Area
                  dataKey="direct"
                  type="monotone"
                  stackId="a"
                  stroke="var(--color-direct)"
                  fill="var(--color-direct)"
                  fillOpacity={0.6}
                />
                <Area
                  dataKey="organic"
                  type="monotone"
                  stackId="a"
                  stroke="var(--color-organic)"
                  fill="var(--color-organic)"
                  fillOpacity={0.5}
                />
                <Area
                  dataKey="referral"
                  type="monotone"
                  stackId="a"
                  stroke="var(--color-referral)"
                  fill="var(--color-referral)"
                  fillOpacity={0.4}
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Bar — horizontal funnel</CardTitle>
            <CardDescription>Conversion funnel, raw counts.</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={funnelConfig} className="h-[260px] w-full">
              <BarChart data={conversionFunnel} layout="vertical" margin={{ left: 12 }}>
                <CartesianGrid horizontal={false} />
                <XAxis type="number" hide />
                <YAxis
                  dataKey="stage"
                  type="category"
                  tickLine={false}
                  axisLine={false}
                  width={90}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="count" fill="var(--color-count)" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Donut</CardTitle>
            <CardDescription>Browser share.</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={pieConfig}
              className="mx-auto aspect-square h-[260px]"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={browserShare}
                  dataKey="visitors"
                  nameKey="browser"
                  innerRadius={60}
                  strokeWidth={2}
                >
                  {browserShare.map((entry) => (
                    <Cell key={entry.browser} fill={entry.fill} />
                  ))}
                </Pie>
                <ChartLegend
                  content={<ChartLegendContent nameKey="browser" />}
                  className="-translate-y-2 flex-wrap gap-2"
                />
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Radar</CardTitle>
            <CardDescription>Skill matrix.</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={radarConfig}
              className="mx-auto aspect-square h-[260px]"
            >
              <RadarChart data={radarSkills}>
                <ChartTooltip content={<ChartTooltipContent />} />
                <PolarGrid />
                <PolarAngleAxis dataKey="skill" />
                <Radar
                  dataKey="value"
                  stroke="var(--color-value)"
                  fill="var(--color-value)"
                  fillOpacity={0.4}
                />
              </RadarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Radial</CardTitle>
            <CardDescription>Progress dials by status.</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={radialConfig}
              className="mx-auto aspect-[2/1] h-[240px]"
            >
              <RadialBarChart
                data={radialProgress}
                startAngle={90}
                endAngle={-270}
                innerRadius="30%"
                outerRadius="100%"
              >
                <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                <RadialBar dataKey="value" background cornerRadius={6} />
                <ChartLegend
                  content={<ChartLegendContent nameKey="name" />}
                  className="-translate-y-2 flex-wrap gap-2"
                />
              </RadialBarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
