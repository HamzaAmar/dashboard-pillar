import { Grid, Paper } from '@pillar-ui/core'
import { PatternedDonutChart } from './patternDonut'
import TeamActivityChart from './half'
import { BasicDonut } from './basicDonut'
import { DonutWithLabel } from './donutWithLabel'
import { DonutLabelInside } from './donutLabelInside'
import { BasicActiveDonut } from './basicDonutActive'
import { CustomActiveDonut } from './customActiveDonut'
import { GradientDonut } from './DonutGradient'
import { PatternDonut } from './donutPattern'
import { BasicPie } from './basicPie'
import { PieWithLabel } from './pieWithLabel'
import { TwoLevelPie } from './twoLevelPie'

export const Component = () => {
  return (
    <Paper flow="5" className="l_box">
      <Grid gap="4" cols={{ default: '1fr', md: '1fr 1fr' }} className="charts-container">
        <BasicDonut />
        <DonutWithLabel />
        <DonutLabelInside />
        <BasicActiveDonut />
        <CustomActiveDonut />
        <GradientDonut />
        <PatternDonut />
        <BasicPie />
        <PieWithLabel />
        <PatternedDonutChart />
        <TeamActivityChart />
        <TwoLevelPie />
      </Grid>
    </Paper>
  )
}
