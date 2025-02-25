import React from 'react'
import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts'
import { ChartLayout } from '../chartLayout'

const data01 = [
  { name: 'Group A', value: 400, color: 'var(--Se9)' },
  { name: 'Group B', value: 300, color: 'var(--P9)' },
  { name: 'Group C', value: 300, color: 'var(--Su9)' },
  { name: 'Group D', value: 200, color: 'var(--I9)' },
  { name: 'Group E', value: 100, color: 'var(--W9)' },
]
const data02 = [
  { name: 'A1', value: 100 },
  { name: 'A2', value: 300 },
  { name: 'B1', value: 100 },
  { name: 'B2', value: 80 },
  { name: 'B3', value: 40 },
  { name: 'B4', value: 30 },
  { name: 'B5', value: 50 },
  { name: 'C1', value: 100 },
  { name: 'C2', value: 200 },
  { name: 'D1', value: 150 },
  { name: 'D2', value: 50 },
]

export const TwoLevelPie = () => {
  return (
    <ChartLayout title="Two Level Pie Chart">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart width={400} height={400}>
          <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60}>
            {data01.map((entry, index) => (
              <Cell key={`pie-${index}`} fill={entry.color} stroke={entry.color} />
            ))}
          </Pie>
          <Pie
            data={data02}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            fill="var(--B11)"
            stroke="var(--B2)"
            strokeWidth={3}
            label
          />
        </PieChart>
      </ResponsiveContainer>
    </ChartLayout>
  )
}
