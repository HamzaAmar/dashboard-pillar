import React from 'react'
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts'

type MovieData = {
  name: string
  value: number
  gradient: string
}

const data: MovieData[] = [
  { name: 'Comedy', value: 25.6, gradient: 'first' },
  { name: 'Action', value: 32.0, gradient: 'second' },
  { name: 'SciFi', value: 23.8, gradient: 'third' },
  { name: 'Drama', value: 9.9, gradient: 'fourth' },
  { name: 'Horror', value: 8.7, gradient: 'fifth' },
]

const RADIAN = Math.PI / 180
const CustomizedLabel = (props: any) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, name } = props
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)
  const rotate = midAngle > 90 && midAngle < 270 ? midAngle + 180 : midAngle

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      transform={`rotate(${rotate}, ${x}, ${y})`}
      className="text-xs font-medium"
    >
      {name}
    </text>
  )
}

export const PatternedDonutChart = () => {
  return (
    <div className="w-full max-w-xl p-4 bg-gray-900 text-gray-200">
      <h2 className="text-xl mb-4">Favourite Movie Type</h2>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <PieChart width={400} height={400}>
          <defs>
            <linearGradient id="first" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--Se9)" />
              <stop offset="95%" stopColor="var(--Se10)" />
            </linearGradient>
            <linearGradient id="second" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--P9)" />
              <stop offset="95%" stopColor="var(--P10)" />
            </linearGradient>
            <linearGradient id="third" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--W9)" />
              <stop offset="95%" stopColor="var(--W10)" />
            </linearGradient>
            <linearGradient id="fourth" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--I9)" />
              <stop offset="95%" stopColor="var(--I10)" />
            </linearGradient>
            <linearGradient id="fifth" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--Su9)" />
              <stop offset="95%" stopColor="var(--Su10)" />
            </linearGradient>
          </defs>

          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius="50%"
            outerRadius="80%"
            dataKey="value"
            labelLine={false}
            label={<CustomizedLabel />}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={`url(#${entry.gradient})`} stroke="none" />
            ))}
          </Pie>

          {/* Center Text */}

          <text x="37%" y="50%" textAnchor="middle" dominantBaseline="middle" className="text-gray-400">
            Total
          </text>
          <text
            x="36%"
            y="60%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-xl font-bold text-gray-200"
          >
            172
          </text>

          <Legend width={150} verticalAlign="middle" align="right" layout="vertical" iconType="rect" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
