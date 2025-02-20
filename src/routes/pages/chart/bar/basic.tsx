import { Tooltip } from '@pillar-ui/core'
import { Legend } from '@visx/legend'
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, TooltipProps } from 'recharts'
import type { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent'

const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <div className="chart-tooltip">
        <p style={{ margin: 0, color: 'var(--P11)' }}>{`Month: ${label}`}</p>
        <p style={{ margin: 0, color: 'var(--P11)' }}>{`Orders: ${payload[0].value}`}</p>
      </div>
    )
  }

  return null
}

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

export const BasicBar = () => {
  return (
    <ResponsiveContainer width="100%" aspect={2 / 1}>
      <BarChart width={150} height={40} data={data}>
        <Bar dataKey="uv" fill="var(--P9)" />
        <XAxis dataKey="month" stroke="var(--B12)" angle={-45} textAnchor="end" fontSize={12} color="red" />
        <YAxis stroke="var(--B12)" />
        <CartesianGrid stroke="var(--B8)" strokeDasharray="3 3" />
        <Tooltip />
      </BarChart>
    </ResponsiveContainer>
  )
}
