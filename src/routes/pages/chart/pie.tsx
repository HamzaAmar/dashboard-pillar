import { DonutChart, PieChart } from '@components/chart'
import { Paper } from '@pillar-ui/core'

const bar = () => {
  return (
    <div>
      <Paper as="section" flow="7" className="l_box">
        <DonutChart width={1000} height={500} />
        <PieChart width={1000} height={500} />
      </Paper>
    </div>
  )
}

export default bar
