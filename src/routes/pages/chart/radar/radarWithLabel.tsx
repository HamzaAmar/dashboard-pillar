import React from 'react'
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Tooltip } from 'recharts'
import { ChartLayout } from '../chartLayout'

type DataPoint = {
  subject: string
  value: number
}

const CustomizedLabel = ({ payload, x, y, value }: any) => {
  return (
    <text x={x} y={y} textAnchor="middle" fill="#fff" fontSize={12} dy={-4}>
      {value}
    </text>
  )
}

export const RadarWithLabel = () => {
  const data: DataPoint[] = [
    { subject: 'Sunday', value: 35 },
    { subject: 'Monday', value: 100 },
    { subject: 'Tuesday', value: 80 },
    { subject: 'Wednesday', value: 50 },
    { subject: 'Thursday', value: 30 },
    { subject: 'Friday', value: 80 },
    { subject: 'Saturday', value: 140 },
  ]

  return (
    <ChartLayout title="Radar with Label">
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart data={data}>
          <PolarGrid stroke="var(--B6)" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: 'var(--B11)', fontSize: 12 }} tickSize={18} />
          <PolarRadiusAxis angle={90} domain={[0, 180]} tick={{ fill: 'var(--B11)', fontSize: 12 }} />
          <Radar
            name="Values"
            dataKey="value"
            stroke="var(--I9)"
            fill="var(--I9)"
            fillOpacity={0.6}
            label={<CustomizedLabel />}
          />
          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    </ChartLayout>
  )
}
