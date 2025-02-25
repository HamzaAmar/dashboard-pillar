import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { ChartLayout } from '../chartLayout'

const data = [
  { month: 'January', orders: 120, sales: 150, profit: 80 },
  { month: 'February', orders: 225, sales: 250, profit: 180 },
  { month: 'March', orders: 80, sales: 100, profit: 50 },
  { month: 'April', orders: 15, sales: 30, profit: 10 },
  { month: 'May', orders: 500, sales: 550, profit: 400 },
  { month: 'June', orders: 250, sales: 300, profit: 200 },
  { month: 'July', orders: 250, sales: 280, profit: 220 },
  { month: 'August', orders: 280, sales: 310, profit: 250 },
  { month: 'September', orders: 320, sales: 350, profit: 280 },
  { month: 'October', orders: 10, sales: 20, profit: 5 },
  { month: 'November', orders: 400, sales: 450, profit: 350 },
  { month: 'December', orders: 40, sales: 60, profit: 30 },
]

export const MultipleType = () => {
  return (
    <ChartLayout title="Line Chart with Different Types">
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
          <Line
            dataKey="orders"
            stroke="var(--P9)"
            strokeWidth={2}
            dot={{ r: 0 }}
            activeDot={{ r: 6 }}
            type="step" // Step curve
          />
          <Line dataKey="sales" stroke="var(--W9)" strokeWidth={2} dot={{ r: 0 }} activeDot={{ r: 6 }} type="linear" />
          <Line
            dataKey="profit"
            stroke="var(--D9)"
            strokeWidth={2}
            dot={{ r: 0 }}
            activeDot={{ r: 6 }}
            type="monotone"
          />
          <Tooltip />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </ChartLayout>
  )
}
