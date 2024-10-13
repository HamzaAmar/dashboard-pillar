import { Breadcrumb, BreadcrumbItem, Flex, Heading } from '@pillar-ui/core'

import { EcommerceTables, SalesAnalytics, SalesCharts, StoreVisit } from './section'

const Ecommerce = () => {
  return (
    <div className="l_flow-md">
      <Flex items="center" wrap justify="between">
        <Heading as="h1" size="4" weight="5">
          Ecommerce Dashboard
        </Heading>
        <Breadcrumb size="4">
          <BreadcrumbItem link="../../">Home</BreadcrumbItem>
          <BreadcrumbItem link="../..">E-commerce</BreadcrumbItem>
          <BreadcrumbItem link="./" current>
            Checkout
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <section aria-labelledby="store-analytics-id" className="l_flow-md">
        <Heading id="store-analytics-id" as="h2" size="3">
          Store Analytics
        </Heading>
        <StoreVisit />
        <SalesAnalytics />
        <SalesCharts />
      </section>
      <section aria-labelledby="store-sell-id" className="l_flow-md">
        <Heading id="store-sell-id" as="h2" size="3">
          Store sell
        </Heading>
        <EcommerceTables />
      </section>
    </div>
  )
}

export default Ecommerce
