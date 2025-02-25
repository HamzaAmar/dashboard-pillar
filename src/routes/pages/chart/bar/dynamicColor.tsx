import React from 'react'
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { ChartLayout } from '../chartLayout'

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
    <ChartLayout title="Dynamic Color Bar Chart">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 0, right: 10, left: 10, bottom: 0 }}>
          <XAxis fontSize={12} dataKey="period" tickLine={false} axisLine={false} />
          <Tooltip />
          <Bar dataKey="growth" radius={[4, 4, 0, 0]}>
            {data.map((entry) => {
              const color = entry.growth >= 0 ? success : entry.growth < 0 && entry.growth > -40 ? warning : danger
              return <Cell fill={color} />
            })}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartLayout>
  )
}
