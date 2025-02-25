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
import { ChartLayout } from '../chartLayout'

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
    <ChartLayout title={title}>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart accessibilityLayer data={data} margin={{ top: 0, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="teamA" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--I9)" />
              <stop offset="90%" stopColor="var(--P9)" />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--B7)" vertical={false} />
          <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fill: 'var(--B11)', fontSize: 12 }} />
          <YAxis width={30} axisLine={false} tickLine={false} tick={{ fill: 'var(--B11)', fontSize: 12 }} />
          <Tooltip />
          <Legend iconType="circle" />
          <Area
            animationDuration={1000}
            animationEasing="ease"
            dot={{ r: 3, fillOpacity: 1 }}
            type="monotone"
            dataKey="teamB"
            fill="var(--Su8)"
            stroke="var(--Su9)"
            fillOpacity={0.3}
            name="TEAM B"
          />
          <Line
            dot={{ r: 3, fillOpacity: 1, fill: 'var(--W9)' }}
            type="monotone"
            dataKey="teamC"
            stroke="var(--W9)"
            strokeWidth={2}
            name="TEAM C"
          />
          <Bar dataKey="teamA" fill="url(#teamA)" name="TEAM A" radius={[8, 8, 0, 0]} barSize={25} />
        </ComposedChart>
      </ResponsiveContainer>
    </ChartLayout>
  )
}
