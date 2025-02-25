import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { ChartLayout } from '../chartLayout'

const data = [
  { period: 'Jan', activeJob: 5500, onHold: 4500 },
  { period: 'Feb', activeJob: 1800, onHold: 5200 },
  { period: 'Mar', activeJob: 4200, onHold: 2800 },
  { period: 'Apr', activeJob: 5500, onHold: 5800 },
  { period: 'May', activeJob: 5200, onHold: 5600 },
  { period: 'Jun', activeJob: 5400, onHold: 5900 },
]

const formatCurrency = (value: number) => {
  return `$${(value / 1000).toFixed(1)}K`
}

export const GradientBarChart = () => {
  return (
    <ChartLayout title="Gradient Bar Chart">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 0, right: 10, left: 10, bottom: 0 }}>
          <defs>
            <linearGradient id="line" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--I9)" stopOpacity={0.9} />
              <stop offset="95%" stopColor="var(--P9)" stopOpacity={0.8} />
            </linearGradient>
            <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--I9)" stopOpacity={0.9} />
              <stop offset="95%" stopColor="var(--Se9)" stopOpacity={0.5} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis fontSize={12} dataKey="period" axisLine={false} tickLine={false} />
          <YAxis width={30} fontSize={12} tickFormatter={formatCurrency} axisLine={false} tickLine={false} />
          <Tooltip />
          <Bar dataKey="activeJob" name="Active Job" fill="url(#line)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="onHold" name="On Hold" fill="url(#area)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartLayout>
  )
}
