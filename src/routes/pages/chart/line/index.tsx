import { Grid, Paper } from '@pillar-ui/core'
import { BasicChart } from './basicChart'
import { LinesWithLabels } from './withLabels'
import { BruchLine } from './withBruch'
import { StepLine } from './stepLine'
import { StackedLines } from './stackedLine'

export const Component = () => {
  return (
    <Paper flow="5" className="l_box">
      <Grid cols={{ default: '1fr', md: '1fr 1fr' }}>
        <BasicChart />
        <StepLine />
        <LinesWithLabels />
        <StackedLines />
        <BruchLine />
      </Grid>
    </Paper>
  )
}
