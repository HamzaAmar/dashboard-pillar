import { Grid } from '@pillar-ui/core'
import React from 'react'
import { MetricCard } from './metricCard'
import { Clock, Flame, Heart, Walking } from '@pillar-ui/icons'

export const MetricOverview = () => {
  return (
    <Grid cols={{ default: '1fr', md: 'repeat(4, 1fr)' }} gap="4">
      <MetricCard
        title="Daily Steps"
        value="10,234"
        change="+12.5"
        icon={<Walking className="text-blue-500" />}
        color="blue"
      />
      <MetricCard
        title="Calories Burned"
        value="2,456"
        change="+8.3"
        icon={<Flame className="text-red-500" />}
        color="red"
      />
      <MetricCard
        title="Active Minutes"
        value="185"
        change="+15.2"
        icon={<Clock className="text-green-500" />}
        color="green"
      />
      <MetricCard
        title="Resting Heart Rate"
        value="68"
        change="-2.1"
        icon={<Heart className="text-purple-500" />}
        color="purple"
      />
    </Grid>
  )
}
