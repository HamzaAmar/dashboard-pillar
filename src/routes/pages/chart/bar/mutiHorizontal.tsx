import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { ChartLayout } from '../chartLayout'

const data = [
  { country: 'South Korea', company: 1500, history: 1200 },
  { country: 'Canada', company: 1000, history: 2100 },
  { country: 'United Kingdom', company: 1000, history: 2500 },
  { country: 'Netherlands', company: 500, history: 2400 },
  { country: 'Italy', company: 1100, history: 2200 },
  { country: 'France', company: 500, history: 1800 },
  { country: 'Japan', company: 500, history: 2100 },
  { country: 'United States', company: 1300, history: 1800 },
  { country: 'China', company: 150, history: 2200 },
  { country: 'Germany', company: 700, history: 1800 },
]

export const MultiHorizontal = () => {
  return (
    <ChartLayout title="Horizontal Stacked Bar Chart">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis fontSize={12} tickLine={false} axisLine={false} type="number" domain={[0, 2500]} />
          <YAxis interval={0} fontSize={10} type="category" dataKey="country" />
          <Tooltip />
          <Bar dataKey="company" fill="var(--P9)" radius={[0, 6, 6, 0]} />
          <Bar dataKey="history" fill="var(--Se9)" radius={[0, 6, 6, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartLayout>
  )
}
