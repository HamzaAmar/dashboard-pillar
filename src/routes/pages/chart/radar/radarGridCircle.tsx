import { Heading, Paper } from '@pillar-ui/core'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  TooltipProps,
  RadarChart,
  PolarGrid,
  Radar,
  PolarAngleAxis,
} from 'recharts'
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
  { month: 'January', desktop: 300, mobile: 120 },
  { month: 'February', desktop: 305, mobile: 186 },
  { month: 'March', desktop: 237, mobile: 273 },
  { month: 'April', desktop: 115, mobile: 305 },
  { month: 'May', desktop: 209, mobile: 214 },
  { month: 'June', desktop: 214, mobile: 209 },
]
export const RadarGridCircle = () => {
  return (
    <Paper as="article" flow="5">
      <Heading>Basic Line Chart</Heading>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <RadarChart data={data}>
          <Tooltip content={<CustomTooltip />} />
          <PolarAngleAxis dataKey="month" />
          <PolarGrid gridType="circle" radialLines={false} />
          <Radar dot={{ r: 4, fillOpacity: 1 }} dataKey="mobile" fill="var(--I9)" fillOpacity={0.6} />
          <Radar dot={{ r: 4, fillOpacity: 1 }} dataKey="desktop" fill="var(--Se9)" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </Paper>
  )
}
