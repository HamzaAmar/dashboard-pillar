import { Breadcrumb, BreadcrumbItem, Flex, Heading, Paper } from '@pillar-ui/core'
import { CRMTable } from './crmList'
import { Metrics } from './metrics'
import { Analysis } from './analysis'
import { Leads } from './leads'

export const CRMDashboard = () => {
  return (
    <Paper flow="5">
      <Flex items="center" justify="between">
        <Heading size="5" weight="5">
          CRM Dashboard
        </Heading>
        <Breadcrumb>
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem href="/crm" current>
            CRM
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Metrics />
      <Analysis />
      <Leads />
      <CRMTable />
    </Paper>
  )
}
