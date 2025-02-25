'use client'

import React from 'react'
import { Paper, Flex, Grid, Heading, Text } from '@pillar-ui/core'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

// Sample data for monthly performance trends
const performanceData = [
  { month: 'Jan', performance: 85 },
  { month: 'Feb', performance: 88 },
  { month: 'Mar', performance: 87 },
  { month: 'Apr', performance: 89 },
  { month: 'May', performance: 91 },
  { month: 'Jun', performance: 90 },
]

// Animated counter component
const AnimatedCounter = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    let startTime: number
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      const percentage = Math.min(progress / duration, 1)
      setCount(Math.floor(end * percentage))
      if (percentage < 1) {
        requestAnimationFrame(animateCount)
      }
    }
    requestAnimationFrame(animateCount)
  }, [end, duration])

  return <span>{count}</span>
}

// Metric card component
const MetricCard = ({ title, value }: { title: string; value: number }) => (
  <Paper className="l_box">
    <Flex direction="col" gap="3">
      <Text color="b" low>
        {title}
      </Text>
      <Heading size="7" weight="7">
        <AnimatedCounter end={value} />
      </Heading>
    </Flex>
  </Paper>
)

export const HRMOverview = () => {
  return (
    <Flex direction="col" gap="6">
      <Heading size="7" weight="5">
        HRM Dashboard Overview
      </Heading>

      <Grid cols={{ default: '1fr', md: 'repeat(3, 1fr)' }} gap="4">
        <MetricCard title="Total Employees" value={1250} />
        <MetricCard title="Active Employees" value={1180} />
        <MetricCard title="Department Count" value={8} />
      </Grid>

      <Paper className="l_box">
        <Heading size="5">Monthly Performance Trends</Heading>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="performance" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </Paper>
    </Flex>
  )
}
