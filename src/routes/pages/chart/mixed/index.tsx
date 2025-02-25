import { Grid, Paper } from '@pillar-ui/core'
import { MultipleChart } from './one'

export const Component = () => {
  return (
    <Paper flow="5" className="l_box">
      <Grid gap="4" cols={{ default: '1fr', md: '1fr 1fr' }} className="charts-container">
        <MultipleChart />
        <MultipleChart />
        <MultipleChart />
        <MultipleChart />
      </Grid>
    </Paper>
  )
}
