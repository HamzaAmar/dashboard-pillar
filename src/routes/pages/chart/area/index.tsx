import { BasicArea } from './basic'
import { LinearArea } from './linearArea'
import { StepArea } from './stepArea'
import { StackedArea } from './stacked'
import { StackedGradientArea } from './stackedWithGradiant'
import NegativeAreaChart from './negativeArea'
import { StackedPatternArea } from './stackWithPatterns'
import { AreaWithDots } from './withDots'
import { AreaDashed } from './dashed'
import { AreaGradient } from './gradiant'
import { AreaWithLabel } from './withLabel'
import { AreaPercentage } from './percentage'
import { BumpArea } from './Bump'
import { MonotoneArea } from './monotone'
// import GithubStyleChart from './githubStyle'

export const Component = () => {
  return (
    <div className="l_box">
      <div className="charts-container">
        <BasicArea />
        <LinearArea />
        <StepArea />
        <BumpArea />
        <MonotoneArea />
        <StackedArea />
        <StackedGradientArea />
        <StackedPatternArea />
        <NegativeAreaChart />
        <AreaWithDots />
        <AreaGradient />
        <AreaDashed />
        <AreaWithLabel />
        <AreaPercentage />
      </div>
    </div>
  )
}
