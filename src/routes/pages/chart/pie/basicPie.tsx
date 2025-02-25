import React from 'react'
import { ChartLayout } from '../chartLayout'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

const data = [
  { name: 'Group A', value: 500, color: 'var(--Se9)' },
  { name: 'Group B', value: 400, color: 'var(--P9)' },
  { name: 'Group C', value: 300, color: 'var(--Su9)' },
  { name: 'Group D', value: 200, color: 'var(--I9)' },
  { name: 'Group E', value: 100, color: 'var(--W9)' },
]

export const BasicPie = () => {
  return (
    <ChartLayout title="Basic Pie Chart">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart accessibilityLayer width={400} height={400}>
          <Pie data={data} cx="50%" cy="50%" outerRadius="70%" stroke="var(--B1)" strokeWidth={3} dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </ChartLayout>
  )
}
