import React from 'react'
import { PieChart, Pie, Cell, Label, LabelList, Legend, ResponsiveContainer } from 'recharts'

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

const CustomizeLabel = ({ cx, cy, midAngle, outerRadius, payload }: any) => {
  const RADIAN = Math.PI / 180
  const radius = outerRadius + 30
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text x={x} y={y} fill={'red'} textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {/* {`${payload.percentage}%`} */}
      Hello
    </text>
  )
}

const CustomLabel = ({ viewBox }: { viewBox?: { cx: number; cy: number } }) => {
  const { cx, cy } = viewBox || { cx: 0, cy: 0 }
  return (
    <g>
      <text
        fontWeight="700"
        fontSize={18}
        x={cx}
        y={cy - 10}
        textAnchor="middle"
        dominantBaseline="central"
        className="text-2xl font-bold"
      >
        100%
      </text>
      <text
        fontWeight="700"
        fontSize={18}
        x={cx}
        y={cy + 15}
        textAnchor="middle"
        dominantBaseline="central"
        className="text-base text-gray-500"
      >
        Completed
      </text>
    </g>
  )
}

export const TeamActivityChart = () => {
  return (
    <div className="w-full max-w-md p-6">
      <h2 className="text-2xl font-bold mb-8">Team activity</h2>

      <div className="relative">
        <ResponsiveContainer width="100%" aspect={2 / 1}>
          <PieChart width={400} height={250}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              startAngle={180}
              endAngle={0}
              paddingAngle={4}
              dataKey="percentage"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
              <Label content={<CustomLabel />} position="center" />
              <LabelList dataKey="percentage" position="outside" content={<CustomizeLabel />} />
            </Pie>
            <Legend width={150} verticalAlign="middle" align="right" layout="vertical" iconType="rect" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default TeamActivityChart
