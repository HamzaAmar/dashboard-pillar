import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { ChartLayout } from '../chartLayout'

const data = [
  { period: 'Jan', activeJob: 5500, onHold: 4500, shortlisted: 3000 },
  { period: 'Feb', activeJob: 1800, onHold: 5200, shortlisted: 800 },
  { period: 'Mar', activeJob: 4200, onHold: 2800, shortlisted: 1500 },
  { period: 'Apr', activeJob: 5500, onHold: 5800, shortlisted: 2200 },
  { period: 'May', activeJob: 5200, onHold: 5600, shortlisted: 2000 },
  { period: 'Jun', activeJob: 5400, onHold: 5900, shortlisted: 2100 },
]

const formatCurrency = (value: number) => {
  return `$${(value / 1000).toFixed(1)}K`
}

export const DynamicBarData = () => {
  return (
    <ChartLayout title="Multiple Bar Chart">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 0, right: 10, left: 10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis fontSize={12} dataKey="period" axisLine={false} tickLine={false} />
          <YAxis width={30} fontSize={12} tickFormatter={formatCurrency} axisLine={false} tickLine={false} />
          <Tooltip />
          <Bar dataKey="activeJob" name="Active Job" fill="var(--I9)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="onHold" name="On Hold" fill="var(--P9)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="shortlisted" name="Shortlisted" fill="var(--Se9)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartLayout>
  )
}
