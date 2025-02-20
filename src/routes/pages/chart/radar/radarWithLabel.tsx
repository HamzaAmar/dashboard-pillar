import React from 'react'
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Tooltip } from 'recharts'

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
    <div className="w-full h-96 bg-gray-900 p-4">
      <div className="text-gray-300 text-lg mb-4">Radar with Polygon Fill</div>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <RadarChart data={data}>
          <PolarGrid stroke="#444" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#888', fontSize: 12 }} tickSize={18} />
          <PolarRadiusAxis angle={90} domain={[0, 180]} tick={{ fill: '#888', fontSize: 12 }} />
          <Radar
            name="Values"
            dataKey="value"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
            label={<CustomizedLabel />}
          />
          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}
