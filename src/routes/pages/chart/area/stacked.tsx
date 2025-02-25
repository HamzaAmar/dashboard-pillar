import { ResponsiveContainer, XAxis, Tooltip, AreaChart, Area, Legend } from 'recharts'
import { ChartLayout } from '../chartLayout'

const data = [
  { month: 'January', mobile: 120, tablet: 150, laptop: 200 },
  { month: 'February', mobile: 150, tablet: 180, laptop: 250 },
  { month: 'March', mobile: 130, tablet: 160, laptop: 220 },
  { month: 'April', mobile: 80, tablet: 100, laptop: 150 },
  { month: 'May', mobile: 100, tablet: 130, laptop: 180 },
  { month: 'June', mobile: 110, tablet: 140, laptop: 190 },
  { month: 'July', mobile: 190, tablet: 220, laptop: 300 },
  { month: 'August', mobile: 90, tablet: 120, laptop: 170 },
  { month: 'September', mobile: 160, tablet: 190, laptop: 270 },
  { month: 'October', mobile: 150, tablet: 180, laptop: 240 },
  { month: 'November', mobile: 120, tablet: 150, laptop: 210 },
  { month: 'December', mobile: 100, tablet: 130, laptop: 190 },
]

export const StackedArea = () => {
  return (
    <ChartLayout title="Stacked Area Chart">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
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
          <Area dataKey="laptop" type="step" name="Desktop" fill="var(--Se6)" stroke="var(--Se9)" />
          <Area dataKey="tablet" type="natural" name="Tablet" fill="var(--W6)" stroke="var(--W9)" />
          <Area dataKey="mobile" name="Mobile" fill="var(--P6)" stroke="var(--P9)" />
        </AreaChart>
      </ResponsiveContainer>
    </ChartLayout>
  )
}
