import { Breadcrumb, BreadcrumbItem, Flex, Heading, Paper } from '@pillar-ui/core'
import { HRMOverview } from './overview'
import { LeaveManagement } from './leaveManagement'
import { DepartmentBreakdown } from './departmentBreakdown'
import { PayrollStatistics } from './payrollStatistics'
import { RecruitmentPipeline } from './recruitmentPipeline'
import { EmployeeAttendanceChart } from './employeeAttendanceChart'

const HRM = () => {
  return (
    <Paper as="section" flow="7" aria-labelledby="crypto-page-id">
      <Flex items="center" wrap justify="between">
        <Heading size="7" weight="5" id="crypto-page-id">
          Crypto Page
        </Heading>
        <Breadcrumb>
          <BreadcrumbItem href="../../">Home</BreadcrumbItem>
          <BreadcrumbItem href="../">Pages</BreadcrumbItem>
          <BreadcrumbItem href="./" current>
            Crypto
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <HRMOverview />
      <EmployeeAttendanceChart />
      <RecruitmentPipeline />
      <PayrollStatistics />
      <LeaveManagement />
      <DepartmentBreakdown />
    </Paper>
  )
}

export default HRM
