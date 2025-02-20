import { Grid, Paper } from '@pillar-ui/core'
import { MultipleChart } from './one'

export const Component = () => {
  return (
    <Paper flow="5" className="l_box">
      <Grid cols={{ default: '1fr', md: '1fr 1fr' }}>
        <MultipleChart />
        <MultipleChart />
        <MultipleChart />
        <MultipleChart />
      </Grid>
    </Paper>
  )
}
