import { Breadcrumb, BreadcrumbItem, Flex, Heading, Paper } from '@pillar-ui/core'
import { StoreVisit } from './storeVisit'
import { SalesAnalytics } from './salesAnalytics'
import { SalesCharts } from './salesCharts'
import { EcommerceTables } from './ecommerceTable'

const Ecommerce = () => {
  return (
    <Paper flow="7">
      <Flex items="center" wrap justify="between">
        <Heading as="h1" size="7" weight="5">
          Ecommerce Dashboard
        </Heading>
        <Breadcrumb>
          <BreadcrumbItem href="../../">Home</BreadcrumbItem>
          <BreadcrumbItem href="../..">E-commerce</BreadcrumbItem>
          <BreadcrumbItem href="./" current>
            Checkout
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Paper flow="5" as="section" aria-labelledby="store-analytics-id">
        <Heading id="store-analytics-id" as="h2" size="5" weight="5">
          Store Analytics
        </Heading>
        <StoreVisit />
        <SalesAnalytics />
        <SalesCharts />
      </Paper>
      <Paper flow="5" as="section" aria-labelledby="store-sell-id">
        <Heading id="store-sell-id" as="h2" size="5" weight="5">
          Store sell
        </Heading>
        <EcommerceTables />
      </Paper>
    </Paper>
  )
}

export default Ecommerce
