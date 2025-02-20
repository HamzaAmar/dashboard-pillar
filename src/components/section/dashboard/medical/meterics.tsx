import React from 'react'
import { Paper, Grid, Text, Flex, Chips } from '@pillar-ui/core'
import { Users, User, Calendar } from '@pillar-ui/icons'

const METRICS = [
  {
    id: 1,
    title: 'Total Patients',
    value: '15,879',
    change: '-0.03%',
    icon: <Users width={24} />,
    color: 'violet-500',
  },
  { id: 2, title: 'Total Doctors', value: '2,035', change: '+0.06%', icon: <User width={24} />, color: 'amber-500' },
  {
    id: 3,
    title: 'Total Appointments',
    value: '5,324',
    change: '-0.05%',
    icon: <Calendar width={24} />,
    color: 'emerald-500',
  },
  { id: 4, title: 'Total Staff', value: '8,157', change: '+1.6%', icon: <Users width={24} />, color: 'blue-500' },
]

interface MetricProps {
  title: string
  value: string
  change: string
  icon: React.ReactNode
  color: string
}

export const Metric = ({ title, value, change, icon, color }: MetricProps) => {
  return (
    <Paper key={title} className="l_box">
      <Flex direction="col" gap="3">
        <Flex items="center" justify="between">
          <Text color="b" low>
            {title}
          </Text>
          {icon}
        </Flex>
        <Flex justify="between" items="center">
          <Text size="7" weight="7">
            {value}
          </Text>
          <Chips variant="soft" color={change.startsWith('+') ? 'su' : 'd'} size="3">
            {change}
          </Chips>
        </Flex>
      </Flex>
    </Paper>
  )
}

export const MetricsSection = () => {
  return (
    <Grid cols={{ default: '1fr', md: 'repeat(4, 1fr)' }} gap="4">
      {METRICS.map(({ id, ...rest }) => (
        <Metric key={id} {...rest} />
      ))}
    </Grid>
  )
}
