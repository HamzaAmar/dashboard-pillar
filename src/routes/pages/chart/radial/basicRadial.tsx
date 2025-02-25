import { RadialBar, RadialBarChart, ResponsiveContainer, Tooltip } from 'recharts'
import { ChartLayout } from '../chartLayout'

const data = [
  { browser: 'chrome', visitors: 275, fill: 'var(--P9)' },
  { browser: 'safari', visitors: 200, fill: 'var(--Se9)' },
  { browser: 'firefox', visitors: 187, fill: 'var(--Su9)' },
  { browser: 'edge', visitors: 173, fill: 'var(--W9)' },
  { browser: 'other', visitors: 90, fill: 'var(--D9)' },
]

export const BasicRadial = () => {
  return (
    <ChartLayout title="Basic Donut Chart">
      <ResponsiveContainer width="100%" height={300}>
        <RadialBarChart data={data} innerRadius={30} outerRadius={110}>
          <Tooltip cursor={false} />
          <RadialBar dataKey="visitors" background={{ fill: 'var(--B5)' }} />
        </RadialBarChart>
      </ResponsiveContainer>
    </ChartLayout>
  )
}
