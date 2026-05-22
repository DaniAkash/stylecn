import { useState } from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Grid, Showcase } from "@/screens/components-showcase/showcase.helpers"

const barData = [
  { day: "Mon", value: 32 },
  { day: "Tue", value: 41 },
  { day: "Wed", value: 28 },
  { day: "Thu", value: 55 },
  { day: "Fri", value: 47 },
  { day: "Sat", value: 18 },
  { day: "Sun", value: 22 },
]

const chartConfig = {
  value: { label: "Builds", color: "var(--chart-2)" },
} satisfies ChartConfig

const invoices = [
  { id: "INV-001", customer: "Atlas", amount: "$2,400", status: "paid" },
  { id: "INV-002", customer: "Northwind", amount: "$1,250", status: "pending" },
  { id: "INV-003", customer: "Globex", amount: "$850", status: "paid" },
]

export function DataSection() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Grid>
      <Showcase title="Table">
        <Table>
          <TableCaption>Recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="font-mono text-xs">{row.id}</TableCell>
                <TableCell>{row.customer}</TableCell>
                <TableCell className="text-right">{row.amount}</TableCell>
                <TableCell>
                  <Badge variant={row.status === "paid" ? "secondary" : "outline"}>
                    {row.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell className="text-right">$4,500</TableCell>
              <TableCell />
            </TableRow>
          </TableFooter>
        </Table>
      </Showcase>

      <Showcase title="Chart (bar)">
        <ChartContainer config={chartConfig} className="h-[220px] w-full">
          <BarChart data={barData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="day" tickLine={false} axisLine={false} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Bar dataKey="value" fill="var(--color-value)" radius={4} />
          </BarChart>
        </ChartContainer>
      </Showcase>

      <Showcase title="Calendar">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </Showcase>

      <Showcase title="Carousel">
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, i) => (
              <CarouselItem key={i}>
                <div className="bg-muted flex aspect-square items-center justify-center rounded-md">
                  <span className="text-2xl font-semibold">{i + 1}</span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Showcase>
    </Grid>
  )
}
