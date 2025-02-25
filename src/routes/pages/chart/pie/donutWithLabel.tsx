import React from 'react'
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { ChartLayout } from '../chartLayout'

const data = [
  { name: 'Group A', value: 500, color: 'var(--Se11)' },
  { name: 'Group B', value: 400, color: 'var(--P11)' },
  { name: 'Group C', value: 300, color: 'var(--Su11)' },
  { name: 'Group D', value: 200, color: 'var(--I11)' },
  { name: 'Group E', value: 100, color: 'var(--W11)' },
]

export const DonutWithLabel = () => {
  return (
    <ChartLayout title="Donut Chart with Label">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart accessibilityLayer width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={80}
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} stroke={entry.color} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </ChartLayout>
  )
}
