import React from 'react'
import { Cell, Label, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { ChartLayout } from '../chartLayout'

type DataItem = {
  name: string
  value: number
  color: string
}

// Sample data
const data: DataItem[] = [
  { name: 'Group A', value: 500, color: 'var(--Se9)' },
  { name: 'Group B', value: 400, color: 'var(--P9)' },
  { name: 'Group C', value: 300, color: 'var(--Su9)' },
  { name: 'Group D', value: 200, color: 'var(--I9)' },
  { name: 'Group E', value: 100, color: 'var(--W9)' },
]

export const DonutLabelInside = () => {
  return (
    <ChartLayout title="Donut Chart with Labels">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart accessibilityLayer width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius="50%"
            outerRadius="80%"
            strokeWidth={3}
            paddingAngle={0}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} stroke={entry.color} fill={entry.color} />
            ))}
            <Label
              value="Total"
              position="center"
              fill="var(--B12)"
              style={{ fontSize: '24px', filter: 'drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25))', fontWeight: '500' }}
            />
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </ChartLayout>
  )
}
