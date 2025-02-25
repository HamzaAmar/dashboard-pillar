import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { ChartLayout } from '../chartLayout'

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

export const BasicChart = () => {
  return (
    <ChartLayout title="Basic Line Chart">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart margin={{ top: 0, right: 0, left: 0, bottom: 0 }} data={data}>
          <XAxis
            axisLine={false}
            tickLine={false}
            fontSize={12}
            dataKey="month"
            stroke="var(--B12)"
            angle={-45}
            textAnchor="end"
          />
          <YAxis axisLine={false} tickLine={false} width={30} fontSize={12} stroke="var(--B12)" />
          <CartesianGrid stroke="var(--B4)" strokeDasharray="5 5" />
          <Line dataKey="orders" stroke="var(--P9)" strokeWidth={2} dot={{ r: 0 }} activeDot={{ r: 6 }} />
          <Tooltip />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </ChartLayout>
  )
}
