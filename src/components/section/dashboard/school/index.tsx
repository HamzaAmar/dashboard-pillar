import { Paper } from '@pillar-ui/core'
import { MetricList } from './metricCard'
import { DashboardCoursesCards } from './course'
import Teachers from './teachers'
import { Earnings } from './earnings'

const SchoolSection = () => {
  return (
    <Paper flow="5">
      <MetricList />
      <DashboardCoursesCards />
      <Earnings />
      <Teachers />
    </Paper>
  )
}

export default SchoolSection
