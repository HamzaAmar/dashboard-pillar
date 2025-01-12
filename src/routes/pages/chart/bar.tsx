import { BarChart, BarStackChart, BarStackChart2 } from '@components/chart'
import { Paper } from '@pillar-ui/core'

const bar = () => {
  return (
    <div>
      <Paper as="section" flow="7" className="l_box">
        <BarChart width={1000} height={500} />
        <BarStackChart width={1000} height={500} />
        <BarStackChart2 width={1000} height={500} />
      </Paper>
    </div>
  )
}

export default bar
