import React from 'react'
import { Paper, Flex, Heading, Text, Color, Badge } from '@pillar-ui/core'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts'

interface RadarChartData {
  department: string
  categoryA: number // Assuming two categories for Radar chart
  categoryB: number
  fullMark: number // Max value for scaling
}

interface LegendData {
  name: string
  count: number
  percentageChange: string
  isIncreased: boolean
  color: Color
}

const radarChartData: RadarChartData[] = [
  { department: 'Cardiology', categoryA: 80, categoryB: 60, fullMark: 100 },
  { department: 'Pediatrics', categoryA: 90, categoryB: 70, fullMark: 100 },
  { department: 'Orthope', categoryA: 50, categoryB: 40, fullMark: 100 },
  { department: 'Neurology', categoryA: 70, categoryB: 55, fullMark: 100 },
  { department: 'Psychiatry', categoryA: 60, categoryB: 45, fullMark: 100 },
  { department: 'Radiology', categoryA: 40, categoryB: 30, fullMark: 100 },
  { department: 'Others', categoryA: 30, categoryB: 20, fullMark: 100 },
]

const legendData: LegendData[] = [
  { name: 'Male', count: 1200, percentageChange: '0.64%', isIncreased: true, color: 'p' },
  { name: 'Female', count: 750, percentageChange: '2.75%', isIncreased: false, color: 'd' },
]

const PatientsOverviewCard = () => {
  return (
    <Paper className="l_box" flow="5">
      <Flex direction="col" gap="4">
        <Heading size="4" weight="6">
          Patients Overview
        </Heading>

        <ResponsiveContainer width="100%" height={200}>
          <RadarChart data={radarChartData} cx="50%" cy="50%" outerRadius="80%">
            <PolarGrid stroke="var(--B4)" />
            <PolarAngleAxis dataKey="department" tickLine={false} tick={{ fontSize: 12 }} />
            <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} axisLine={false} />
            <Radar
              name="Category A"
              dataKey="categoryA"
              stroke="var(--P9)"
              fill="var(--P9)"
              fillOpacity={0.2}
              strokeWidth={2}
            />
            <Radar
              name="Category B"
              dataKey="categoryB"
              stroke="var(--D9)"
              fill="var(--D9)"
              fillOpacity={0.2}
              strokeWidth={2}
            />
            <Tooltip />
          </RadarChart>
        </ResponsiveContainer>

        <Paper flow="2">
          {legendData.map((item, index) => (
            <Flex key={index} items="center" justify="between">
              <Flex items="center" gap="2">
                <Badge type="dot" size="6" color={item.color} />
                <Text size="3" weight="5">
                  {item.name}
                </Text>
                <Text size="3" color={item.isIncreased ? 'p' : 'd'} weight="5" low>
                  {item.isIncreased ? 'Increased by' : 'Decreased by'} {item.percentageChange}%
                </Text>
              </Flex>
              <Heading size="4" weight="5">
                {item.count}
              </Heading>
            </Flex>
          ))}
        </Paper>
      </Flex>
    </Paper>
  )
}

export default PatientsOverviewCard
