import { Heading, Paper } from '@pillar-ui/core'
import { ArrowBarTop } from '@pillar-ui/icons'
import { RadialBar, RadialBarChart, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { date: '1/1', walk: 65, fill: 'var(--D9)' },
  { date: '1/8', walk: 68, fill: 'var(--B9)' },
  { date: '1/15', walk: 70, fill: 'var(--W9)' },
  { date: '1/22', walk: 73, fill: 'var(--I9)' },
  { date: '1/29', walk: 75, fill: 'var(--Su9)' },
  { date: '2/5', walk: 78, fill: 'var(--Se9)' },
  { date: '2/12', walk: 80, fill: 'var(--P9)' },
]

export function PerformanceMetricsTrends() {
  return (
    <Paper className="l_box">
      <Heading>Performance Metrics & Trends</Heading>
      <ResponsiveContainer width="100%" height={300}>
        <RadialBarChart data={data} innerRadius={30} outerRadius={110}>
          <Tooltip cursor={false} />
          <RadialBar dataKey="strength" background={{ fill: 'var(--B5)' }} />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="flex items-center gap-2 font-medium leading-none">
        Trending up by 5.2% this month <ArrowBarTop className="h-4 w-4" />
      </div>
      <div className="leading-none text-muted-foreground">Showing total visitors for the last 6 months</div>
    </Paper>
  )
}
