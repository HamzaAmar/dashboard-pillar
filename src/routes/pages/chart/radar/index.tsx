import { Grid, Paper } from '@pillar-ui/core'
import { BasicChart } from './basicRadar'
import { MutlipleRadars } from './mutlipleRadars'
import { RadarLineOnly } from './radarLineOnly'
import { RadarGridCircle } from './radarGridCircle'
import { RadarWithLabel } from './radarWithLabel'
import { RadarWithDotsHorizontal } from './radarWithDots'

export const Component = () => {
  return (
    <Paper flow="5" className="l_box">
      <Grid cols={{ default: '1fr', md: '1fr 1fr' }}>
        <BasicChart />
        <RadarGridCircle />
        <RadarWithDotsHorizontal />
        <MutlipleRadars />
        <RadarLineOnly />
        <RadarWithLabel />
      </Grid>
    </Paper>
  )
}
