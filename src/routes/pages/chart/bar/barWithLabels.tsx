import { Tooltip, BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Cell } from 'recharts'
import { ChartLayout } from '../chartLayout'

const data = [
  {
    name: 'Page A',
    uv: 4000,
    color: 'var(--P9)',
  },
  {
    name: 'Page B',
    uv: 3000,
    color: 'var(--W9)',
  },
  {
    name: 'Page C',
    uv: 2000,
    color: 'var(--D9)',
  },
  {
    name: 'Page D',
    uv: 2780,
    color: 'var(--I9)',
  },
  {
    name: 'Page E',
    uv: 1890,
    color: 'var(--Se9)',
  },
  {
    name: 'Page F',
    uv: 2390,
    color: 'var(--Su9)',
  },
  {
    name: 'Page G',
    uv: 3490,
    color: 'var(--P7)',
  },
  {
    name: 'Page H',
    uv: 2958,
    color: 'var(--Se8)',
  },
  {
    name: 'Page I',
    uv: 3302,
    color: 'var(--B12)',
  },
  {
    name: 'Page G',
    uv: 2500,
    color: 'var(--I11)',
  },
]

const CustomizedLabel = ({ x, y, stroke, width, value }: any) => {
  return (
    <text x={x + width / 2} y={y} dy={-4} stroke={stroke} fontSize={10} textAnchor="middle">
      {value}
    </text>
  )
}

export const BarWithLabel = () => {
  return (
    <ChartLayout title="Bar chart With Label">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart margin={{ top: 20, right: 10, left: 10, bottom: 0 }} width={150} height={40} data={data}>
          <XAxis dataKey="name" stroke="var(--B11)" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip />
          <Bar radius={[100, 100, 0, 0]} dataKey="uv" label={<CustomizedLabel />}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartLayout>
  )
}
