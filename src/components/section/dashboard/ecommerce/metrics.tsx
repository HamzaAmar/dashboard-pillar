import React from 'react'
import { Metric } from '../medical/meterics'
import { Calendar, User, Users } from '@pillar-ui/icons'
import { Grid, Paper } from '@pillar-ui/core'
import { MultipleChart } from '@routes/pages/chart/mixed/one'

const METRICS = [
  {
    id: 1,
    title: 'Best Seller',
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
  {
    id: 4,
    title: 'Total Appointments',
    value: '5,324',
    change: '-0.05%',
    icon: <Calendar width={24} />,
    color: 'emerald-500',
  },
]

export const EcommerceMetrics = () => {
  return (
    <Grid gap="5" cols={{ default: '1fr', md: '2fr 1fr' }}>
      <MultipleChart />
      <Paper flow="5">
        {METRICS.map(({ id, ...rest }) => (
          <Metric key={id} {...rest} />
        ))}
      </Paper>
    </Grid>
  )
}
