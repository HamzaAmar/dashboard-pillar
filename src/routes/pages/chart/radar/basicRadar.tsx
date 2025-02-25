import { Tooltip, ResponsiveContainer, RadarChart, PolarGrid, Radar, PolarAngleAxis } from 'recharts'
import { ChartLayout } from '../chartLayout'

const data = [
  { month: 'January', desktop: 186 },
  { month: 'February', desktop: 305 },
  { month: 'March', desktop: 237 },
  { month: 'April', desktop: 273 },
  { month: 'May', desktop: 209 },
  { month: 'June', desktop: 214 },
]
export const BasicChart = () => {
  return (
    <ChartLayout title="Basic Radar Chart">
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart margin={{ top: 0, right: 0, left: 0, bottom: 0 }} data={data}>
          <Tooltip />
          <PolarAngleAxis dataKey="month" tick={{ fill: 'var(--B11)', fontSize: 12 }} />
          <PolarGrid stroke="var(--B5)" />
          <Radar dataKey="desktop" fill="var(--Se9)" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </ChartLayout>
  )
}
