import { Tooltip } from '@pillar-ui/core'
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from 'recharts'
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
  {
    name: 'Page H',
    uv: 3490,
    pv: 5200,
    amt: 2100,
  },
  {
    name: 'Page F',
    uv: 2200,
    pv: 4200,
    amt: 2100,
  },
]

export const Stacked = () => {
  return (
    <ChartLayout title="Stacked Bar Chart">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart width={150} height={40} data={data}>
          <Bar dataKey="uv" fill="var(--P9)" stackId="a" />
          <Bar dataKey="uv" fill="var(--I9)" stackId="a" />
          <XAxis
            tickLine={false}
            axisLine={false}
            dataKey="month"
            stroke="var(--B12)"
            angle={-45}
            textAnchor="end"
            fontSize={12}
          />
          <YAxis fontSize={12} tickLine={false} axisLine={false} width={30} stroke="var(--B12)" />
          <Tooltip />
        </BarChart>
      </ResponsiveContainer>
    </ChartLayout>
  )
}
