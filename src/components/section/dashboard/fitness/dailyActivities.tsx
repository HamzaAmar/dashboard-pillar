import { Heading, Paper } from '@pillar-ui/core'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { hour: '00:00', steps: 200 },
  { hour: '03:00', steps: 100 },
  { hour: '06:00', steps: 500 },
  { hour: '09:00', steps: 1500 },
  { hour: '12:00', steps: 2000 },
  { hour: '15:00', steps: 1800 },
  { hour: '18:00', steps: 1200 },
  { hour: '21:00', steps: 800 },
]

export default function DailyActivityBreakdown({ date }: { date: Date }) {
  return (
    <Paper>
      <Heading as="h2">Daily Activity Breakdown</Heading>
      <Paper flow="2">
        <p className="mb-4">Date: {date.toLocaleDateString()}</p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="hour" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="steps" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </Paper>
    </Paper>
  )
}
