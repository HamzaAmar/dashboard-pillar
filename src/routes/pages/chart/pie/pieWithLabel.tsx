import React from 'react'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { ChartLayout } from '../chartLayout'

const data = [
  { name: 'Group A', value: 500, color: 'var(--Se9)' },
  { name: 'Group B', value: 400, color: 'var(--P9)' },
  { name: 'Group C', value: 300, color: 'var(--Su9)' },
  { name: 'Group D', value: 200, color: 'var(--I9)' },
  { name: 'Group E', value: 100, color: 'var(--W9)' },
]

const CustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }: any) => {
  const RADIAN = Math.PI / 180
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  const percentValue = (percent * 100).toFixed(0)

  return (
    <text x={x} y={y} fontSize={12} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {percentValue}%
    </text>
  )
}

export const PieWithLabel = () => {
  return (
    <ChartLayout title="Pie Chart with Labels">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart accessibilityLayer width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius="70%"
            dataKey="value"
            stroke="var(--B1)"
            strokeWidth={3}
            label={CustomLabel}
            labelLine={false}
          >
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
