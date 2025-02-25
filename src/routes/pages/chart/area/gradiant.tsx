import { ResponsiveContainer, XAxis, AreaChart, Area, Tooltip } from 'recharts'
import { ChartLayout } from '../chartLayout'

const data = [
  { month: 'January', desktop: 186 },
  { month: 'February', desktop: 305 },
  { month: 'March', desktop: 237 },
  { month: 'April', desktop: 73 },
  { month: 'May', desktop: 209 },
  { month: 'June', desktop: 214 },
  { month: 'July', desktop: 287 }, // Random value
  { month: 'August', desktop: 142 }, // Random value
  { month: 'September', desktop: 321 }, // Random value
  { month: 'October', desktop: 95 }, // Random value
  { month: 'November', desktop: 264 }, // Random value
  { month: 'December', desktop: 178 }, // Random value
]

export const AreaGradient = () => {
  return (
    <ChartLayout title="Gradient Area Chart">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart accessibilityLayer data={data} margin={{ top: 0, right: 6, left: 6, bottom: 0 }}>
          <defs>
            <linearGradient id="line" x1="0" y1="0" x2="1" y2="0">
              <stop offset="5%" stopColor="var(--I9)" />
              <stop offset="95%" stopColor="var(--Se9)" />
            </linearGradient>
            <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--I9)" stopOpacity={0.5} />
              <stop offset="95%" stopColor="var(--I9)" stopOpacity={0.9} />
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
          <Area
            strokeWidth={2}
            dataKey="desktop"
            type="monotone"
            fill="url(#area)"
            fillOpacity={0.6}
            stroke="url(#line)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartLayout>
  )
}
