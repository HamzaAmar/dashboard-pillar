import { Text } from '@pillar-ui/core'
import React from 'react'
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  TooltipProps,
} from 'recharts'
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent'

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]

const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    console.log('payload', payload)

    return (
      <div className="chart-tooltip">
        <p>{`Name: ${label}`}</p>
        <Text size="4">{`PV: ${payload[0].value}`}</Text>
        <Text size="4">{`UV: ${payload[1].value}`}</Text>
        <Text size="4">{`AMT: ${payload[2].value}`}</Text>
      </div>
    )
  }
  return null
}

export const MultiBar = () => {
  return (
    <ResponsiveContainer width="100%" aspect={2 / 1}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="var(--B6)" />
        <XAxis dataKey="name" fontSize={14} />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey="pv" fill="var(--P9)" activeBar={<Rectangle fill="var(--P10)" stroke="var(--P10)" />} />
        <Bar dataKey="uv" fill="var(--Se9)" activeBar={<Rectangle fill="var(--Se11)" stroke="var(--Se10)" />} />
        <Bar dataKey="amt" fill="var(--I9)" activeBar={<Rectangle fill="var(--I11)" stroke="var(--I10)" />} />
      </BarChart>
    </ResponsiveContainer>
  )
}
