import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const data = [
  { ageRange: '85+', males: 0.5, females: -0.5 },
  { ageRange: '80-84', males: 1.0, females: -1.0 },
  { ageRange: '75-79', males: 1.5, females: -1.5 },
  { ageRange: '70-74', males: 2.0, females: -2.0 },
  { ageRange: '65-69', males: 2.5, females: -2.5 },
  { ageRange: '60-64', males: 3.0, females: -3.0 },
  { ageRange: '55-59', males: 3.5, females: -3.5 },
  { ageRange: '50-54', males: 4.0, females: -4.0 },
  { ageRange: '45-49', males: 4.5, females: -4.5 },
  { ageRange: '40-44', males: 5.0, females: -5.0 },
  { ageRange: '35-39', males: 5.5, females: -5.5 },
  { ageRange: '30-34', males: 5.5, females: -5.5 },
  { ageRange: '25-29', males: 5.5, females: -5.5 },
  { ageRange: '20-24', males: 5.0, females: -5.0 },
  { ageRange: '15-19', males: 4.5, females: -4.5 },
  { ageRange: '10-14', males: 4.0, females: -4.0 },
  { ageRange: '5-9', males: 3.5, females: -3.5 },
  { ageRange: '0-4', males: 3.0, females: -3.0 },
]

export const PyramidHorizontal = () => {
  return (
    <ResponsiveContainer width="100%" aspect={2 / 1.25}>
      <BarChart
        barGap={-10}
        barSize={10}
        width={800}
        height={600}
        data={data}
        layout="vertical"
        margin={{ top: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" horizontal={true} />
        <XAxis
          type="number"
          domain={[-6, 6]}
          ticks={[-6, -4, -2, 0, 2, 4, 6]}
          tickFormatter={(value) => `${Math.abs(value)}%`}
        />
        <YAxis type="category" dataKey="ageRange" width={50} />
        <Tooltip formatter={(value: number) => `${Math.abs(value)}%`} labelFormatter={(label) => `Age: ${label}`} />
        <Legend verticalAlign="top" height={36} />
        <ReferenceLine height={30} width={30} x={0} stroke="var(--B12)" />
        <Bar dataKey="males" fill="var(--Se9)" name="Males" />
        <Bar dataKey="females" fill="var(--P9)" name="Females" />
      </BarChart>
    </ResponsiveContainer>
  )
}
