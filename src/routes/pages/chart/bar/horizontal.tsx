import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

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
    <ResponsiveContainer width="100%" aspect={2 / 1}>
      <BarChart data={data} layout="vertical">
        <CartesianGrid vertical={false} stroke="var(--B7)" />
        <XAxis type="number" domain={[0, 1500]} />
        <YAxis type="category" dataKey="country" fontSize={10} interval={0} width={50} />
        <Tooltip />
        <Bar dataKey="value" fill="var(--Se9)" radius={[0, 6, 6, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
