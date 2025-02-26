import { Chips, Flex, Grid, Paper, Text } from '@pillar-ui/core'
import React from 'react'
import { fakeData } from '../school/school.data'
import { Line, LineChart, ResponsiveContainer } from 'recharts'

const METRICS = [
  {
    title: 'Total Customers',
    value: '254,244',
    change: '+0.05%',
    trend: 'up',
    data: fakeData(15, 100000, 300000),
    gradient: 'customers',
    color: 'var(--Se9)',
  },
  {
    title: 'Total Revenue',
    value: '$1.465M',
    change: '-0.01%',
    trend: 'down',
    data: fakeData(15, 1000000, 2000000),
    gradient: 'revenue',
    color: 'var(--W9)',
  },
  {
    title: 'Conversion Ratio',
    value: '26.97%',
    change: '+2.96%',
    trend: 'up',
    data: fakeData(15, 10, 40),
    gradient: 'ratio',
    color: 'var(--I9)',
  },
  {
    title: 'Total Deals',
    value: '12,644',
    change: '+1.34%',
    trend: 'up',
    data: fakeData(15, 5000, 20000),
    gradient: 'deals',
    color: 'var(--P9)',
  },
]

export const Metrics = () => {
  return (
    <Grid cols={{ default: '1fr', md: '1fr 1fr', lg: 'repeat(4, 1fr)' }} gap="4">
      {METRICS.map((metric) => (
        <Paper flow="5" className="l_box" key={metric.title}>
          <Flex gap="2" items="center">
            <Text size="3" color="b" low>
              {metric.title}
            </Text>
            <Chips color={metric.trend === 'up' ? 'su' : 'd'} size="3">
              {metric.change}
            </Chips>
          </Flex>
          <Flex gap="3">
            <Text size="6" weight="6">
              {metric.value}
            </Text>
            <Paper style={{ flex: '1' }} height="40px">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart margin={{ top: 10, right: 10, left: 10, bottom: 10 }} data={metric.data}>
                  <defs>
                    <linearGradient id={metric.gradient} x1="0" y1="0" x2="1" y2="0">
                      <stop offset="5%" stopColor={metric.color} stopOpacity={1} />
                      <stop offset="95%" stopColor={metric.color} stopOpacity={0.7} />
                    </linearGradient>
                    <filter id={`shadow-${metric.gradient}`} x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color={metric.color} flood-opacity="0.5" />
                    </filter>
                  </defs>
                  <Line
                    filter={`url(#shadow-${metric.gradient})`}
                    type="monotone"
                    dataKey="value"
                    stroke={`url(#${metric.gradient})`}
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Paper>
          </Flex>
        </Paper>
      ))}
    </Grid>
  )
}
