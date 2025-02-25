import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { ChartLayout } from '../chartLayout'

const data = [
  { country: 'South Korea', value: 1500 },
  { country: 'Canada', value: 1000 },
  { country: 'United Kingdom', value: 1000 },
  { country: 'Netherlands', value: 500 },
  { country: 'Italy', value: 1100 },
  { country: 'France', value: 500 },
  { country: 'Japan', value: 500 },
  { country: 'United States', value: 1300 },
  { country: 'China', value: 150 },
  { country: 'Germany', value: 700 },
]

export const Horizontal = () => {
  return (
    <ChartLayout title="Horizontal Bar Chart">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} layout="vertical">
          <CartesianGrid vertical={false} stroke="var(--B5)" />
          <XAxis axisLine={false} tickLine={false} fontSize="12" type="number" domain={[0, 1500]} />
          <YAxis
            axisLine={false}
            tickLine={false}
            type="category"
            dataKey="country"
            fontSize={10}
            interval={0}
            width={50}
          />
          <Tooltip />
          <Bar dataKey="value" fill="var(--Se9)" radius={[0, 6, 6, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartLayout>
  )
}
