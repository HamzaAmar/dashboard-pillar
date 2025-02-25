import { ResponsiveContainer, XAxis, AreaChart, Area, Tooltip } from 'recharts'
import { ChartLayout } from '../chartLayout'

const data = [
  { month: 'January', desktop: 186 },
  { month: 'February', desktop: 305 },
  { month: 'March', desktop: 237 },
  { month: 'April', desktop: 73 },
  { month: 'May', desktop: 209 },
  { month: 'June', desktop: 214 },
  { month: 'July', desktop: 287 },
  { month: 'August', desktop: 142 },
  { month: 'September', desktop: 321 },
  { month: 'October', desktop: 95 },
  { month: 'November', desktop: 264 },
  { month: 'December', desktop: 178 },
]

export const StepArea = () => {
  return (
    <ChartLayout title="Step Area Chart">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart accessibilityLayer data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            fontSize={12}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <Tooltip />
          <Area dataKey="desktop" type="step" fill="var(--Se6)" fillOpacity={0.6} stroke="var(--Se9)" />
        </AreaChart>
      </ResponsiveContainer>
    </ChartLayout>
  )
}
