import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { ChartLayout } from '../chartLayout'

type DataItem = {
  name: string
  value: number
  color: string
}

// Sample data
const data: DataItem[] = [
  { name: 'Group A', value: 500, color: 'url(#groupA)' },
  { name: 'Group B', value: 300, color: 'url(#groupB)' },
]

export const GradientDonut = () => {
  return (
    <ChartLayout title="Gradient Donut Chart">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <defs>
            <linearGradient id="groupA" x1="0" y1="0" x2="1" y2="0">
              <stop offset="5%" stopColor="var(--I9)" stopOpacity={1} />
              <stop offset="95%" stopColor="var(--I9)" stopOpacity={0.6} />
            </linearGradient>
            <linearGradient id="groupB" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--Se9)" stopOpacity={1} />
              <stop offset="95%" stopColor="var(--Se9)" stopOpacity={0.6} />
            </linearGradient>
          </defs>
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
              <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </ChartLayout>
  )
}
