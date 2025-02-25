import { Tooltip } from '@pillar-ui/core'
import { BarChart, Bar, ResponsiveContainer, XAxis } from 'recharts'
import { ChartLayout } from '../chartLayout'

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]

export const XAxisAbove = () => {
  return (
    <ChartLayout title="Basic Bar Chart">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart margin={{ top: 0, right: 0, left: 0, bottom: 0 }} width={150} height={40} data={data}>
          <XAxis
            domain={[0, 5000]}
            stroke="var(--B11)"
            fontSize={12}
            tickLine={false}
            orientation="top"
            padding="gap"
          />
          <Bar dataKey="uv" fill="var(--P9)" />

          <Tooltip />
        </BarChart>
      </ResponsiveContainer>
    </ChartLayout>
  )
}
