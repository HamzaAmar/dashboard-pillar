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

export const PatternBarChart = () => {
  return (
    <ChartLayout title="Pattern Bar Chart">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 0, right: 10, left: 10, bottom: 0 }}>
          <defs>
            <pattern id="jobPattern" patternUnits="userSpaceOnUse" width="4" height="4">
              <path d="M 0 0 L 4 4 M -1 3 L 1 5 M 3 -1 L 5 1" stroke="var(--Se9)" strokeWidth="1" />
            </pattern>

            <pattern id="holdPattern" patternUnits="userSpaceOnUse" width="6" height="6">
              <path d="M 0 6 L 6 0" stroke="var(--P9)" strokeWidth="1" />
              <path d="M 3 9 L 9 3" stroke="var(--P9)" strokeWidth="3" />
              <path d="M -3 3 L 3 -3" stroke="var(--P9)" strokeWidth="3" />
            </pattern>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis fontSize={12} dataKey="period" axisLine={false} tickLine={false} />
          <YAxis width={30} fontSize={12} tickFormatter={formatCurrency} axisLine={false} tickLine={false} />
          <Tooltip />
          <Bar
            dataKey="activeJob"
            name="Active Job"
            stroke="var(--Se9)"
            fill="url(#jobPattern)"
            radius={[4, 4, 0, 0]}
          />
          <Bar dataKey="onHold" name="On Hold" stroke="var(--P9)" fill="url(#holdPattern)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartLayout>
  )
}
