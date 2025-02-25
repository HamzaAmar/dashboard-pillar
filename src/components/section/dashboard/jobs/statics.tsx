import { BarStackChart } from '@components/chart'
import { Flex, Heading, Paper, Text } from '@pillar-ui/core'
import { ArrowDown } from '@pillar-ui/icons'
import { ParentSize } from '@visx/responsive'
import { useId } from 'react'

import type { JobStaticArticleProps } from './jobs.type'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts'

export const JobStaticArticle = ({ city, number, color }: JobStaticArticleProps) => {
  const id = `city-${useId()}-jobs`
  return (
    <article aria-labelledby={id} className={`l_box u_${color}`}>
      <Heading id={id} as="h3" size="4">
        {city} Jobs
      </Heading>
      <Text as="span" weight="7" size="9">
        {number}
      </Text>
      <Flex justify="between">
        <Text size="4" low color={color}>
          This Week
        </Text>
        <Flex weight="7" low gap="1" color={color} as={Text} size="4">
          <span>+30%</span>
          <ArrowDown direction="right-top" width={16} />
        </Flex>
      </Flex>
    </article>
  )
}

const chartData = [
  { date: '2024-07-15', applications: 50, interviews: 10, offers: 2 },
  { date: '2024-07-16', applications: 60, interviews: 12, offers: 1 },
  { date: '2024-07-17', applications: 40, interviews: 8, offers: 3 },
  { date: '2024-07-18', applications: 70, interviews: 15, offers: 0 },
  { date: '2024-07-19', applications: 80, interviews: 20, offers: 4 },
  { date: '2024-07-20', applications: 55, interviews: 11, offers: 2 },
  { date: '2024-07-21', applications: 65, interviews: 14, offers: 1 },
  { date: '2024-07-22', applications: 45, interviews: 9, offers: 3 },
  { date: '2024-07-23', applications: 75, interviews: 18, offers: 0 },
  { date: '2024-07-24', applications: 85, interviews: 22, offers: 5 },
]

export const JobStatics = () => {
  return (
    <Paper as="section" flow="5" className="l_box fl-1">
      <header>
        <Heading as="h2">Job Statistics</Heading>
        <Text size="3" color="b" low>
          Show JobStatistics Mars 21-28
        </Text>
      </header>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart accessibilityLayer data={chartData}>
          <XAxis
            dataKey="date"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            fontSize={12}
            tickFormatter={(value) => {
              return new Date(value).toLocaleDateString('en-US', {
                weekday: 'short',
              })
            }}
          />
          <Bar dataKey="applications" stackId="a" fill="var(--P8)" radius={[0, 0, 4, 4]} />
          <Bar dataKey="interviews" stackId="a" fill="var(--Se8)" radius={[4, 4, 0, 0]} />
          <Tooltip />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  )
}
