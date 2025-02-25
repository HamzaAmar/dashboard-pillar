import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
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

export const BasicDonut = () => {
  return (
    <ChartLayout title="Basic Donut Chart">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius="45%"
            outerRadius="70%"
            stroke="var(--B1)"
            paddingAngle={0}
            radius={4}
            dataKey="value"
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
