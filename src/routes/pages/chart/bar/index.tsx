import { Paper } from '@pillar-ui/core'
import { BasicBar } from './basic'
import { MultiBar } from './mutiBar'
import { Horizontal } from './horizontal'
import { MultiHorizontal } from './mutiHorizontal'
import { Stacked } from './stacked'
import { HorizontalStacked } from './horizontalStacked'
import { PyramidHorizontal } from './pyramidHorizontal'
import { BasicBarStroke } from './basicBarStroke'
import { DynamicColor } from './dynamicColor'
import { BarWithLabel } from './barWithLabels'
import { DynamicBarData } from './dynamicData'
import { PatternBarChart } from './patterBar'
import { GradientBarChart } from './gradient'
import { XAxisAbove } from './basicXAxisAbove'

export const Component = () => {
  return (
    <Paper flow="5" className="l_box">
      <div className="charts-container">
        <BasicBar />
        <XAxisAbove />
        <DynamicBarData />
        <BarWithLabel />
        <PatternBarChart />
        <GradientBarChart />
        <BasicBarStroke />
        <MultiBar />
        <DynamicColor />
        <Stacked />
        <Horizontal />
        <MultiHorizontal />
        <HorizontalStacked />
        <PyramidHorizontal />
      </div>
    </Paper>
  )
}
