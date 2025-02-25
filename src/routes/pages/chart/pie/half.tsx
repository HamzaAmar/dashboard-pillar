import React from 'react'
import { PieChart, Pie, Cell, Label, Legend, ResponsiveContainer } from 'recharts'
import { ChartLayout } from '../chartLayout'

interface RatingData {
  rating: string
  percentage: number
  color: string
}

const data: RatingData[] = [
  { rating: '5 Star', percentage: 48.58, color: 'var(--P9)' },
  { rating: '4 Star', percentage: 35.91, color: 'var(--Se9)' },
  { rating: '3 Star', percentage: 15.51, color: 'var(--D9)' },
]

const CustomLabel = ({ viewBox }: { viewBox?: { cx: number; cy: number } }) => {
  const { cx, cy } = viewBox || { cx: 0, cy: 0 }
  return (
    <g>
      <text fontWeight="700" fontSize={18} x={cx} y={cy - 10} textAnchor="middle" dominantBaseline="central">
        100%
      </text>
      <text fontSize={14} x={cx} y={cy + 15} textAnchor="middle" dominantBaseline="central" fill="var(--B11)">
        Completed
      </text>
    </g>
  )
}

export const TeamActivityChart = () => {
  return (
    <ChartLayout title="Half Doughnut Chart">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            startAngle={180}
            endAngle={0}
            dataKey="percentage"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} />
            ))}
            <Label content={<CustomLabel />} position="center" />
          </Pie>
          <Legend height={30} iconType="rect" />
        </PieChart>
      </ResponsiveContainer>
    </ChartLayout>
  )
}

export default TeamActivityChart
