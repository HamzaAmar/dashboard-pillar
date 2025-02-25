import { Tooltip } from '@pillar-ui/core'
import { Area, AreaChart, ResponsiveContainer, XAxis } from 'recharts'
import { ChartLayout } from '../chartLayout'

const data = [
  {
    month: 'Jan',
    a: 4000,
    b: 2400,
    c: 2400,
  },
  {
    month: 'Feb',
    a: 3000,
    b: 1398,
    c: 2210,
  },
  {
    month: 'Mar',
    a: 2000,
    b: 9800,
    c: 2290,
  },
  {
    month: 'Apr',
    a: 2780,
    b: 3908,
    c: 2000,
  },
  {
    month: 'May',
    a: 1890,
    b: 4800,
    c: 2181,
  },
  {
    month: 'Jun',
    a: 2390,
    b: 3800,
    c: 2500,
  },
  {
    month: 'Jul',
    a: 3490,
    b: 4300,
    c: 2100,
  },
]
export const AreaPercentage = () => {
  return (
    <ChartLayout title="Area Chart">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
          stackOffset="expand"
          margin={{
            top: 10,
            right: 0,
            left: 10,
            bottom: 0,
          }}
        >
          <XAxis tickLine={false} axisLine={false} fontSize={12} dataKey="month" />
          <Tooltip />
          <Area type="monotone" dataKey="a" stackId="1" stroke="var(--P9)" fill="var(--P9)" />
          <Area type="monotone" dataKey="b" stackId="1" stroke="var(--I9)" fill="var(--I9)" />
          <Area type="monotone" dataKey="c" stackId="1" stroke="var(--D9)" fill="var(--D9)" />
        </AreaChart>
      </ResponsiveContainer>
    </ChartLayout>
  )
}
