import { Brush } from '@pillar-ui/icons'
import React, { useState } from 'react'
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
} from 'recharts'
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent'

interface DataPoint {
  date: number
  stockPrice: number
}

const generateData = (): DataPoint[] => {
  const data: DataPoint[] = []
  const startDate = new Date(2023, 3, 1) // April is month 3 (0-based indexing)
  const endDate = new Date(2023, 4, 0) // April has 30 days

  let price = 100 // Starting stock price

  for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
    const timestamp = date.getTime()
    price += Math.random() * 10 - 5 // Random fluctuation
    data.push({ date: timestamp, stockPrice: price })
  }

  return data
}

const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <div className="chart-tooltip">
        <p>{`Month: ${label}`}</p>
        <p>{`High: ${payload[0].value}`}</p>
        <p>{`Low: ${payload[1].value}`}</p>
      </div>
    )
  }
  return null
}

export const BruchLine = () => {
  const data = generateData()

  return (
    <ResponsiveContainer width="100%" aspect={2 / 1}>
      <LineChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={false}
          tick={{ fill: 'var(--B12)' }}
          tickFormatter={(value) => {
            const date = new Date(value)
            return date.toLocaleDateString('en-US', {
              month: 'short',
              year: '2-digit',
            })
          }}
        />
        <YAxis tickLine={false} axisLine={false} tick={{ fill: 'var(--B12)' }} domain={[0, 100]} ticks={[0, 50, 100]} />
        <CartesianGrid stroke="var(--B8)" strokeDasharray="3 3" />
        <Tooltip content={<CustomTooltip />} />
        <Line dataKey="value" stroke="var(--P9)" dot={false} strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  )
}
