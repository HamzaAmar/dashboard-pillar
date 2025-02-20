import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, TooltipProps, Cell } from 'recharts'
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
  { period: 'Jan 2011', growth: 3 },
  { period: 'Feb 2011', growth: 5 },
  { period: 'Mar 2011', growth: -12 },
  { period: 'Apr 2011', growth: -25 },
  { period: 'May 2011', growth: -52 },
  { period: 'Jun 2011', growth: -24 },
  { period: 'Jul 2011', growth: -8 },
  { period: 'Jan 2012', growth: 4 },
  { period: 'Feb 2012', growth: 12 },
  { period: 'Mar 2012', growth: 6 },
  { period: 'Apr 2012', growth: 8 },
  { period: 'May 2012', growth: 10 },
  { period: 'Jun 2012', growth: 15 },
  { period: 'Jul 2012', growth: 18 },
  { period: 'Jan 2013', growth: -25 },
  { period: 'Feb 2013', growth: -45 },
  { period: 'Mar 2013', growth: -52 },
  { period: 'Apr 2013', growth: -42 },
  { period: 'May 2013', growth: -38 },
  { period: 'Jun 2013', growth: -35 },
  { period: 'Jul 2013', growth: -20 },
]

const success = 'var(--Su9)'
const warning = 'var(--W9)'
const danger = 'var(--D9)'

export const DynamicColor = () => {
  return (
    <div className="w-full h-96 p-4 bg-gray-900 rounded-lg">
      <h2 className="text-xl text-white mb-4">Column Chart With Negative Values</h2>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" vertical={false} />
          <XAxis dataKey="period" stroke="#fff" tick={{ fill: '#fff', fontSize: 12 }} tickMargin={10} />
          <YAxis stroke="#fff" tick={{ fill: '#fff', fontSize: 12 }} tickFormatter={(value) => `${value}%`} />
          <Tooltip content={<CustomTooltip />} />

          <Bar dataKey="growth" radius={[4, 4, 0, 0]}>
            {data.map((entry) => {
              const color = entry.growth >= 0 ? success : entry.growth < 0 && entry.growth > -40 ? warning : danger
              return <Cell fill={color} />
            })}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
