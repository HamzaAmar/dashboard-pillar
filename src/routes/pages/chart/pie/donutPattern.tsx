import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { ChartLayout } from '../chartLayout'

type DataItem = {
  name: string
  value: number
  color: string
}

// Sample data
const data: DataItem[] = [
  { name: 'Group A', value: 500, color: 'url(#patternGroupA)' },
  { name: 'Group B', value: 300, color: 'url(#patternGroupB)' },
]

export const PatternDonut = () => {
  return (
    <ChartLayout title="Pattern Donut Chart">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <defs>
            <pattern id="patternGroupA" patternUnits="userSpaceOnUse" width="4" height="4">
              <path d="M 0 0 L 4 4 M -1 3 L 1 5 M 3 -1 L 5 1" stroke="var(--Se9)" strokeWidth="1" />
            </pattern>

            <pattern id="patternGroupB" patternUnits="userSpaceOnUse" width="6" height="6">
              <path d="M 0 6 L 6 0" stroke="var(--P9)" strokeWidth="1" />
              <path d="M 3 9 L 9 3" stroke="var(--P9)" strokeWidth="3" />
              <path d="M -3 3 L 3 -3" stroke="var(--P9)" strokeWidth="3" />
            </pattern>
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
