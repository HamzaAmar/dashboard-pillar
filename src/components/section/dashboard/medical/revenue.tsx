// components/RevenueStats.jsx
import React from 'react'
import { Paper, Heading } from '@pillar-ui/core'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const revenueData = [
  { month: 'Jan', profit: 2, income: 12 },
  { month: 'Feb', profit: 22, income: 25 },
  { month: 'Mar', profit: 19, income: 22 },
  { month: 'Apr', profit: 24, income: 28 },
  { month: 'May', profit: 16, income: 29 },
  { month: 'Jun', profit: 28, income: 32 },
  { month: 'Jul', profit: 12, income: 16 },
  { month: 'Aug', profit: 21, income: 27 },
  { month: 'Sep', profit: 19, income: 25 },
  { month: 'Oct', profit: 23, income: 30 },
  { month: 'Nov', profit: 22, income: 29 },
  { month: 'Dec', profit: 30, income: 38 },
]

export const RevenueStats = () => {
  return (
    <Paper flow="6" className="l_box">
      <Heading as="h2" weight="5">
        Revenue Statistics
      </Heading>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={revenueData} margin={{ left: 0, right: 15 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--B6)" />
          <XAxis axisLine={false} tickLine={false} dataKey="month" fontSize={12} />
          <YAxis axisLine={false} tickLine={false} domain={[0, 40]} fontSize={12} />
          <Tooltip />
          <Legend iconType="circle" />
          <Line
            type="bump"
            dataKey="profit"
            stroke="var(--P9)"
            strokeWidth="2"
            dot={{ r: 2, fill: 'var(--B2)' }}

            // strokeDasharray="6 4"
          />
          <Line
            type="bump"
            dataKey="income"
            stroke="var(--Se9)"
            strokeWidth="2"
            dot={{ r: 2, fill: 'var(--B2)' }}
            // strokeDasharray="6 4"
          />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  )
}
