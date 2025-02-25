import { Tooltip } from '@pillar-ui/core'
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts'
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

export const BasicBarStroke = () => {
  return (
    <ChartLayout title="Basic Bar Chart">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart margin={{ top: 0, right: 10, left: 10, bottom: 0 }} data={data}>
          <Bar dataKey="uv" fill="var(--P9)" radius={[10, 10, 10, 10]} stroke="var(--P9)" />
          <XAxis
            axisLine={false}
            tickLine={false}
            dataKey="month"
            stroke="var(--B12)"
            angle={-45}
            textAnchor="end"
            fontSize={12}
            color="red"
          />
          <YAxis fontSize={12} width={30} axisLine={false} tickLine={false} stroke="var(--B12)" />
          <Tooltip />
        </BarChart>
      </ResponsiveContainer>
    </ChartLayout>
  )
}
