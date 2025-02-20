import { ResponsiveContainer, XAxis, CartesianGrid, TooltipProps, AreaChart, Area, Tooltip } from 'recharts'
import type { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent'

const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <div className="chart-tooltip">
        <p style={{ margin: 0, color: 'var(--P11)' }}>{`Month: ${label}`}</p>
        <p style={{ margin: 0, color: 'var(--P11)' }}>{`Orders: ${payload[0].value}`}</p>
      </div>
    )
  }

  return null
}

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

export const BasicArea = () => {
  return (
    <ResponsiveContainer width="100%" aspect={2 / 1}>
      <AreaChart
        accessibilityLayer
        data={data}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <Tooltip content={<CustomTooltip />} />
        <Area dataKey="desktop" type="natural" fill="var(--Se6)" fillOpacity={0.6} stroke="var(--Se9)" />
      </AreaChart>
    </ResponsiveContainer>
  )
}
