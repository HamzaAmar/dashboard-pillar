import React, { useState } from 'react'
import { PieChart, Pie, Sector, ResponsiveContainer, Cell } from 'recharts'
import { ChartLayout } from '../chartLayout'
import { PieSectorDataItem } from 'recharts/types/polar/Pie'

const data = [
  { name: 'Group A', value: 500, color: 'var(--Se9)' },
  { name: 'Group B', value: 400, color: 'var(--P9)' },
  { name: 'Group C', value: 300, color: 'var(--Su9)' },
  { name: 'Group D', value: 200, color: 'var(--I9)' },
  { name: 'Group E', value: 100, color: 'var(--W9)' },
]

const renderActiveShape = (props: PieSectorDataItem) => {
  const RADIAN = Math.PI / 180
  const {
    cx = 0,
    cy = 0,
    midAngle = 0,
    innerRadius,
    outerRadius = 0,
    startAngle,
    endAngle,
    fill,
    payload,
    percent = 1,
    value,
  } = props
  const sin = Math.sin(-RADIAN * midAngle)
  const cos = Math.cos(-RADIAN * midAngle)
  const sx = cx + (outerRadius + 10) * cos
  const sy = cy + (outerRadius + 10) * sin
  const mx = cx + (outerRadius + 30) * cos
  const my = cy + (outerRadius + 30) * sin
  const ex = mx + (cos >= 0 ? 1 : -1) * 22
  const ey = my
  const textAnchor = cos >= 0 ? 'start' : 'end'

  return (
    <g>
      <text fontSize={12} x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        fontSize={14}
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="var(--B12)"
      >{`PV ${value}`}</text>
      <text fontSize={10} x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="var(--B11)">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  )
}

export const CustomActiveDonut = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index)
  }

  return (
    <ChartLayout title="Custom Active Donut Chart">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart margin={{ top: 0, right: 20, left: 20, bottom: 0 }}>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={60}
            fill="#8884d8"
            dataKey="value"
            onMouseEnter={onPieEnter}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </ChartLayout>
  )
}
