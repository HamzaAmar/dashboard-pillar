import { Grid, Paper } from '@pillar-ui/core'
import { BasicArea } from './basic'
import { LinearArea } from './linearArea'
import { StepArea } from './stepArea'
import { StackedArea } from './stacked'
import { StackedGradientArea } from './stackedWithGradiant'
import NegativeAreaChart from './negativeArea'
import { StackedPatternArea } from './stackWithPatterns'
// import GithubStyleChart from './githubStyle'

export const Component = () => {
  return (
    <Paper flow="5" className="l_box">
      <Grid cols={{ default: '1fr', md: '1fr 1fr' }}>
        <BasicArea />
        <LinearArea />
        <StepArea />
        <StackedArea />
        <StackedGradientArea />
        <StackedPatternArea />
        <NegativeAreaChart />
        {/* <GithubStyleChart /> */}
      </Grid>
    </Paper>
  )
}
