import React from 'react'
import {
  ComposedChart,
  Line,
  Bar,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { Heading, Paper } from '@pillar-ui/core'

const data = [
  { month: 'Jan 03', teamA: 20, teamB: 45, teamC: 25 },
  { month: 'Feb 03', teamA: 12, teamB: 52, teamC: 30 },
  { month: 'Mar 03', teamA: 20, teamB: 40, teamC: 35 },
  { month: 'Apr 03', teamA: 25, teamB: 65, teamC: 30 },
  { month: 'May 03', teamA: 15, teamB: 25, teamC: 45 },
  { month: 'Jun 03', teamA: 20, teamB: 30, teamC: 35 },
  { month: 'Jul 03', teamA: 35, teamB: 40, teamC: 65 },
  { month: 'Aug 03', teamA: 20, teamB: 45, teamC: 50 },
  { month: 'Sep 03', teamA: 45, teamB: 55, teamC: 60 },
  { month: 'Oct 03', teamA: 20, teamB: 50, teamC: 35 },
  { month: 'Nov 03', teamA: 30, teamB: 45, teamC: 40 },
]

export const MultipleChart = ({ title = 'Combo Chart' }: { title?: string }) => {
  return (
    <Paper flow="5" className="l_box">
      <Heading as="h2" className="text-xl text-white mb-4">
        {title}
      </Heading>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <ComposedChart accessibilityLayer data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" vertical={false} />
          <XAxis dataKey="month" stroke="#fff" tick={{ fill: 'var(--B11)', fontSize: 12 }} />
          <YAxis stroke="#fff" tick={{ fill: 'var(--B11)', fontSize: 12 }} />
          <Tooltip />
          <Legend iconType="circle" />
          <Area
            animationDuration={1000}
            animationEasing="ease"
            dot={{ r: 4, fillOpacity: 1 }}
            type="monotone"
            dataKey="teamB"
            fill="#00a8a8"
            stroke="#00a8a8"
            fillOpacity={0.3}
            name="TEAM B"
          />
          <Line
            dot={{ r: 4, fillOpacity: 1, fill: 'var(--B1)' }}
            type="monotone"
            dataKey="teamC"
            stroke="#ffa500"
            strokeWidth={2}
            name="TEAM C"
          />
          <Bar dataKey="teamA" fill="#8884d8" name="TEAM A" radius={[4, 4, 0, 0]} />
        </ComposedChart>
      </ResponsiveContainer>
    </Paper>
  )
}
