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

export const MonotoneArea = () => {
  return (
    <ChartLayout title="Monotone Area Chart">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          accessibilityLayer
          data={data}
          margin={{
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}
        >
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            fontSize={12}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <Tooltip />
          <Area dataKey="desktop" type="monotoneX" fill="var(--Se6)" fillOpacity={0.6} stroke="var(--Se9)" />
        </AreaChart>
      </ResponsiveContainer>
    </ChartLayout>
  )
}
