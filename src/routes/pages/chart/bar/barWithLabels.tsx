import { Tooltip, BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Cell } from 'recharts'

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
    <text x={x + width / 2} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
      {value}
    </text>
  )
}

export const BarWithLabel = () => {
  return (
    <ResponsiveContainer width="100%" aspect={2 / 1}>
      <BarChart width={150} height={40} data={data}>
        <XAxis dataKey="name" stroke="var(--B12)" angle={-45} textAnchor="end" fontSize={10} color="red" />
        <YAxis domain={[0, 4500]} stroke="var(--B8)" strokeDasharray="3 3" />
        <CartesianGrid stroke="var(--B8)" strokeDasharray="3 3" />
        <Tooltip />
        <Bar radius={[100, 100, 0, 0]} dataKey="uv" label={<CustomizedLabel />}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}
