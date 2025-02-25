import { ResponsiveContainer, XAxis, AreaChart, Area, Tooltip, LabelList } from 'recharts'
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

export const AreaWithLabel = () => {
  return (
    <ChartLayout title="Label Area Chart">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          accessibilityLayer
          data={data}
          margin={{
            left: 10,
            right: 10,
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
          <Area dot={{ r: 2 }} dataKey="desktop" type="natural" fill="var(--Se6)" fillOpacity={0.6} stroke="var(--Se9)">
            <LabelList className="chart-label" color="var(--B12)" fontSize={12} dataKey="desktop" position="top" />
          </Area>
        </AreaChart>
      </ResponsiveContainer>
    </ChartLayout>
  )
}
