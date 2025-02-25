import { Heading, Paper } from '@pillar-ui/core'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts'

const data = [
  { subject: 'Endurance', A: 120, B: 110, fullMark: 150 },
  { subject: 'Strength', A: 98, B: 130, fullMark: 150 },
  { subject: 'Flexibility', A: 86, B: 130, fullMark: 150 },
  { subject: 'Agility', A: 99, B: 100, fullMark: 150 },
  { subject: 'Balance', A: 85, B: 90, fullMark: 150 },
]

export default function RadarChartAnalysis() {
  return (
    <Paper className="l_box">
      <Heading as="h2">Fitness Profile</Heading>
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="var(--B5)" />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="Current" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Radar name="Previous" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </Paper>
  )
}
