import React from 'react'
import { ResponsiveContainer, XAxis, CartesianGrid, Tooltip, AreaChart, Area, Legend, TooltipProps } from 'recharts'
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent'

const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <div className="chart-tooltip">
        <p style={{ margin: 0, color: 'var(--P11)' }}>{`Month: ${label}`}</p>
        {payload.map((entry, index) => (
          <p key={index} style={{ margin: 0, color: 'var(--P11)' }}>
            {`${entry.name}: ${entry.value}`}
          </p>
        ))}
      </div>
    )
  }
  return null
}

const data = [
  { month: 'January', desktop: 186, mobile: 120 },
  { month: 'February', desktop: 305, mobile: 150 },
  { month: 'March', desktop: 237, mobile: 130 },
  { month: 'April', desktop: 73, mobile: 80 },
  { month: 'May', desktop: 209, mobile: 100 },
  { month: 'June', desktop: 214, mobile: 110 },
  { month: 'July', desktop: 287, mobile: 190 },
  { month: 'August', desktop: 142, mobile: 90 },
  { month: 'September', desktop: 321, mobile: 160 },
  { month: 'October', desktop: 95, mobile: 150 },
  { month: 'November', desktop: 264, mobile: 120 },
  { month: 'December', desktop: 178, mobile: 100 },
]

export const StackedPatternArea = () => {
  return (
    <ResponsiveContainer width="100%" aspect={2 / 1}>
      <AreaChart data={data} margin={{ left: 12, right: 12 }}>
        <defs>
          {/* Pattern for desktop area */}
          <pattern id="desktopPattern" patternUnits="userSpaceOnUse" width="4" height="4">
            <path d="M 0 0 L 4 4 M -1 3 L 1 5 M 3 -1 L 5 1" stroke="var(--Se9)" strokeWidth="1" opacity="0.7" />
          </pattern>

          {/* Pattern for mobile area */}
          <pattern id="mobilePattern" patternUnits="userSpaceOnUse" width="6" height="6">
            <path d="M 0 6 L 6 0" stroke="var(--P9)" strokeWidth="1" opacity="0.7" />
            <path d="M 3 9 L 9 3" stroke="var(--P9)" strokeWidth="1" opacity="0.7" />
            <path d="M -3 3 L 3 -3" stroke="var(--P9)" strokeWidth="1" opacity="0.7" />
          </pattern>
        </defs>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Area
          dataKey="desktop"
          type="natural"
          name="Desktop"
          stackId="1"
          fill="url(#desktopPattern)"
          stroke="var(--Se9)"
        />
        <Area dataKey="mobile" type="natural" name="Mobile" stackId="1" fill="url(#mobilePattern)" stroke="var(--P9)" />
      </AreaChart>
    </ResponsiveContainer>
  )
}
