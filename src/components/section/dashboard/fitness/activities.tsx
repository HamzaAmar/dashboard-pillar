import { Grid, Heading, Paper, Tooltip } from '@pillar-ui/core'
import React from 'react'
import {
  Area,
  AreaChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'

const activityData = [
  { date: 'Mon', steps: 8500, calories: 2200, active: 500 },
  { date: 'Tue', steps: 10200, calories: 2400, active: 520 },
  { date: 'Wed', steps: 9800, calories: 2300, active: 600 },
  { date: 'Thu', steps: 11000, calories: 2500, active: 700 },
  { date: 'Fri', steps: 9500, calories: 2350, active: 550 },
  { date: 'Sat', steps: 7800, calories: 2100, active: 400 },
  { date: 'Sun', steps: 6500, calories: 1900, active: 350 },
]

const activityTypeData = [
  { name: 'Walking', value: 45, color: 'var(--B9)' },
  { name: 'Running', value: 25, color: 'var(--W9)' },
  { name: 'Cycling', value: 20, color: 'var(--Se9)' },
  { name: 'Gym', value: 10, color: 'var(--Su9)' },
]

export const Activities = () => {
  return (
    <Grid cols={{ default: '1fr', lg: '2fr 1fr' }} gap="4">
      <Paper className="l_box" flow="6">
        <Heading size="4">Weekly Activity Trends</Heading>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={activityData}>
            <CartesianGrid stroke="var(--B5)" strokeDasharray="3 3" />
            <XAxis fontSize={12} dataKey="date" axisLine={false} tickLine={false} />
            <YAxis fontSize={12} axisLine={false} tickLine={false} />
            <Tooltip />
            <Legend />
            <Area
              strokeWidth={2}
              dot={{ r: 3, fill: 'var(--P9)' }}
              type="monotone"
              dataKey="steps"
              fill="var(--P9)"
              stroke="var(--P9)"
              name="Steps"
            />
            <Area
              strokeWidth={2}
              type="monotone"
              dataKey="calories"
              fill="var(--Se9)"
              stroke="var(--Se9)"
              name="Calories"
              dot={{ r: 3, fill: 'var(--Se9)' }}
            />

            <Area
              strokeWidth={2}
              dot={{ r: 3, fill: 'var(--Su9)' }}
              type="monotone"
              dataKey="active"
              fill="var(--Su9)"
              stroke="var(--Su9)"
              name="Active Minutes"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Paper>

      <Paper className="l_box">
        <Heading size="4">Activity Distribution</Heading>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={activityTypeData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
              {activityTypeData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </Paper>
    </Grid>
  )
}
