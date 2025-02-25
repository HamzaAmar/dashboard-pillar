import { Grid, Paper } from '@pillar-ui/core'
import { BasicChart } from './basicChart'
import { LinesWithLabels } from './withLabels'
import { MultipleType } from './stackedMulti'
import { StepLine } from './stepLine'
import { StackedLines } from './stackedLine'
import { GradientLineChart } from './gradient'
import { PatternLineChart } from './pattern'
import { DashedChart } from './dashedChart'

export const Component = () => {
  return (
    <Paper flow="5" className="l_box">
      <Grid gap="4" cols={{ default: '1fr', md: '1fr 1fr' }} className="charts-container">
        <BasicChart />
        <DashedChart />
        <GradientLineChart />
        <PatternLineChart />
        <StepLine />
        <LinesWithLabels />
        <StackedLines />
        <MultipleType />
      </Grid>
    </Paper>
  )
}
