import { Paper } from '@pillar-ui/core'
import { BasicRadial } from './basicRadial'
import { RadialWithLabel } from './radialWithLabel'
import { RadialGrid } from './radialGrid'
import { RadialStackedHalf } from './stackedHalf'
import { GradientRadial } from './gradiantRadial'
import { PatternRadial } from './patternRadial'

export const Component = () => {
  return (
    <Paper flow="5" className="l_box">
      <div className="charts-container">
        <BasicRadial />
        <RadialWithLabel />
        <RadialGrid />
        <RadialStackedHalf />
        <GradientRadial />
        <PatternRadial />
      </div>
    </Paper>
  )
}
