import { LineChart } from '@components/chart'
import { Paper } from '@pillar-ui/core'

const bar = () => {
  return (
    <div>
      <Paper as="section" flow="7" className="l_box">
        <LineChart width={1000} height={500} />
      </Paper>
    </div>
  )
}

export default bar
