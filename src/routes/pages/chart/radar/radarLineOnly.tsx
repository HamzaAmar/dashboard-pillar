import { Heading, Paper } from '@pillar-ui/core'
import { Tooltip, ResponsiveContainer, TooltipProps, RadarChart, PolarGrid, Radar, PolarAngleAxis } from 'recharts'
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent'

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
    <Paper as="article" flow="5">
      <Heading>Basic Line Chart</Heading>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <RadarChart data={data}>
          <Tooltip content={<CustomTooltip />} />
          <PolarAngleAxis dataKey="month" />
          <PolarGrid radialLines={false} stroke="var(--B6)" />
          <Radar dataKey="desktop" fill="var(--Se9)" fillOpacity={0} stroke="var(--Se9)" strokeWidth={2} />
        </RadarChart>
      </ResponsiveContainer>
    </Paper>
  )
}
