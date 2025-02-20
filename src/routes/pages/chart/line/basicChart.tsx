import { Heading, Paper } from '@pillar-ui/core'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  TooltipProps,
} from 'recharts'
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent'

const data = [
  { month: 'January', orders: 120 },
  { month: 'February', orders: 225 },
  { month: 'March', orders: 80 },
  { month: 'April', orders: 15 },
  { month: 'May', orders: 500 },
  { month: 'June', orders: 250 },
  { month: 'July', orders: 250 },
  { month: 'August', orders: 280 },
  { month: 'September', orders: 320 },
  { month: 'October', orders: 10 },
  { month: 'November', orders: 400 },
  { month: 'December', orders: 40 },
]

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
export const BasicChart = () => {
  return (
    <Paper as="article" flow="5">
      <Heading>Basic Line Chart</Heading>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <LineChart width={500} height={300} data={data}>
          <Line dataKey="orders" stroke="var(--P9)" strokeWidth={2} dot={{ r: 0 }} activeDot={{ r: 6 }} />
          <XAxis dataKey="month" stroke="var(--B12)" angle={-45} textAnchor="end" fontSize={12} color="red" />
          <YAxis stroke="var(--B12)" />
          <CartesianGrid stroke="var(--B8)" strokeDasharray="3 3" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  )
}
