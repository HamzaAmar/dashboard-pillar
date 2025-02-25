import { ResponsiveContainer, XAxis, Tooltip, AreaChart, Area, Legend } from 'recharts'
import { ChartLayout } from '../chartLayout'

const data = [
  { month: 'January', desktop: 186, mobile: 120 },
  { month: 'February', desktop: 305, mobile: 150 },
  { month: 'March', desktop: 237, mobile: 130 },
  { month: 'April', desktop: 73, mobile: 80 },
  { month: 'May', desktop: 209, mobile: 100 },
  { month: 'June', desktop: 214, mobile: 110 },
  { month: 'July', desktop: 287, mobile: 190 },
  { month: 'August', desktop: 142, mobile: 90 },
  { month: 'September', desktop: 321, mobile: 160 },
  { month: 'October', desktop: 95, mobile: 150 },
  { month: 'November', desktop: 264, mobile: 120 },
  { month: 'December', desktop: 178, mobile: 100 },
]

export const StackedGradientArea = () => {
  return (
    <ChartLayout title="Stacked Gradient Area Chart">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="secondary" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--Se8)" stopOpacity={0.8} />
              <stop offset="95%" stopColor="var(--Se6)" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="primary" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--P8)" stopOpacity={0.8} />
              <stop offset="95%" stopColor="var(--P6)" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            fontSize={12}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <Tooltip />
          <Legend />
          <Area
            dataKey="desktop"
            type="natural"
            name="Desktop"
            stackId="1"
            fill="url(#secondary)"
            stroke="var(--Se9)"
          />
          <Area dataKey="mobile" type="natural" name="Mobile" stackId="1" fill="url(#primary)" stroke="var(--P9)" />
        </AreaChart>
      </ResponsiveContainer>
    </ChartLayout>
  )
}
