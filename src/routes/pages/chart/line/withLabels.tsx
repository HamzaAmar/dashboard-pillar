import React from 'react'
import { Heading, Paper } from '@pillar-ui/core'
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
  LabelList,
} from 'recharts'
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent'

// Sample data based on the image
const data = [
  { month: 'Jan', high: 45, low: 20 },
  { month: 'Feb', high: 46, low: 22 },
  { month: 'Mar', high: 48, low: 23 },
  { month: 'Apr', high: 39, low: 27 },
  { month: 'May', high: 35, low: 25 },
  { month: 'Jun', high: 33, low: 24 },
  { month: 'Jul', high: 28, low: 22 },
  { month: 'Aug', high: 28, low: 22 },
  { month: 'Sep', high: 28, low: 22 },
  { month: 'Oct', high: 12, low: 32 },
  { month: 'Nov', high: 15, low: 12 },
  { month: 'Dec', high: 24, low: 19 },
]

// Custom Tooltip Component
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

// Main Chart Component
export const LinesWithLabels = () => {
  return (
    <Paper as="article" flow="5">
      <Heading as="h2">Line Chart With Data Labels</Heading>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <LineChart data={data} margin={{ top: 40 }}>
          <XAxis fontSize={14} dataKey="month" angle={-45} textAnchor="end" />
          <YAxis domain={[18, 48]} label={{ value: 'Temperature', angle: -90, position: 'insideLeft' }} />
          <CartesianGrid stroke="var(--B8)" strokeDasharray="3 3" />
          <Tooltip content={<CustomTooltip />} />
          <Legend margin={{ top: 50, right: 0 }} />
          <Line
            type="monotone"
            dataKey="high"
            stroke="var(--P9)"
            name="High-2013"
            strokeWidth={2}
            dot={{
              fill: 'var(--color-desktop)',
            }}
            activeDot={{
              r: 6,
            }}
          >
            <LabelList position="top" offset={12} fontSize={12} fill="var(--B11)" />
          </Line>

          <Line
            type="monotone"
            dataKey="low"
            stroke="var(--Se9)"
            name="Low-2013"
            strokeWidth={2}
            dot={{
              fill: 'var(--color-desktop)',
            }}
            activeDot={{
              r: 6,
            }}
          >
            <LabelList position="top" offset={12} fontSize={12} fill="var(--B11)" />
          </Line>
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  )
}
