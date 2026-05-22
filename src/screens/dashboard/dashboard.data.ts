export const stats = [
  { label: "Active users", value: "8,294", change: "+12.4%", trend: "up" as const },
  { label: "Revenue", value: "$48,210", change: "+4.8%", trend: "up" as const },
  { label: "Churn", value: "1.3%", change: "-0.2%", trend: "down" as const },
  { label: "Avg. session", value: "5m 32s", change: "+1.1%", trend: "up" as const },
]

export const chartData = [
  { month: "Jan", visits: 1240, signups: 320 },
  { month: "Feb", visits: 1580, signups: 410 },
  { month: "Mar", visits: 1390, signups: 380 },
  { month: "Apr", visits: 1840, signups: 520 },
  { month: "May", visits: 2210, signups: 610 },
  { month: "Jun", visits: 2540, signups: 720 },
]

export const recentActivity = [
  {
    id: "act_01",
    user: { name: "Ada Lovelace", initials: "AL" },
    action: "Closed issue",
    target: "#214 — toolbar layout shift",
    status: "resolved" as const,
    when: "2m ago",
  },
  {
    id: "act_02",
    user: { name: "Linus Torvalds", initials: "LT" },
    action: "Opened PR",
    target: "#1188 — fast-path icon paint",
    status: "review" as const,
    when: "14m ago",
  },
  {
    id: "act_03",
    user: { name: "Grace Hopper", initials: "GH" },
    action: "Deployed",
    target: "production v2.41.0",
    status: "shipped" as const,
    when: "1h ago",
  },
  {
    id: "act_04",
    user: { name: "Margaret Hamilton", initials: "MH" },
    action: "Reported",
    target: "memory pressure on iOS 18",
    status: "open" as const,
    when: "3h ago",
  },
  {
    id: "act_05",
    user: { name: "Alan Turing", initials: "AT" },
    action: "Reviewed",
    target: "#1182 — chart palette",
    status: "approved" as const,
    when: "Yesterday",
  },
]

export type ActivityStatus = (typeof recentActivity)[number]["status"]
