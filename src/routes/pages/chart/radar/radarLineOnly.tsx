import { Tooltip, ResponsiveContainer, TooltipProps, RadarChart, PolarGrid, Radar, PolarAngleAxis } from 'recharts'
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent'
import { ChartLayout } from '../chartLayout'

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
  { month: 'April', desktop: 273 },
  { month: 'May', desktop: 209 },
  { month: 'June', desktop: 214 },
]
export const RadarLineOnly = () => {
  return (
    <ChartLayout title="Radar Line Only">
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart data={data}>
          <Tooltip content={<CustomTooltip />} />
          <PolarAngleAxis dataKey="month" tick={{ fill: 'var(--B11)', fontSize: 12 }} />
          <PolarGrid radialLines={false} stroke="var(--B6)" />
          <Radar dataKey="desktop" fill="var(--Se9)" fillOpacity={0} stroke="var(--Se9)" strokeWidth={2} />
        </RadarChart>
      </ResponsiveContainer>
    </ChartLayout>
  )
}
