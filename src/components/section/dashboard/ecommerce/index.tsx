import { Breadcrumb, Flex, Heading } from '@components/core'

import { EcommerceTables, SalesAnalytics, SalesCharts, StoreVisit } from './section'

const Ecommerce = () => {
  return (
    <div className="l_flow-md">
      <Flex items="center" wrap justify="between">
        <Heading as="h1" size="sm" weight="medium">
          Ecommerce Dashboard
        </Heading>
        <Breadcrumb size="sm">
          <Breadcrumb.Item link="../../">Home</Breadcrumb.Item>
          <Breadcrumb.Item link="../..">E-commerce</Breadcrumb.Item>
          <Breadcrumb.Item link="./" current>
            Checkout
          </Breadcrumb.Item>
        </Breadcrumb>
      </Flex>
      <section aria-labelledby="store-analytics-id" className="l_flow-md">
        <Heading id="store-analytics-id" as="h2" size="xs">
          Store Analytics
        </Heading>
        <StoreVisit />
        <SalesAnalytics />
        <SalesCharts />
      </section>
      <section aria-labelledby="store-sell-id" className="l_flow-md">
        <Heading id="store-sell-id" as="h2" size="xs">
          Store sell
        </Heading>
        <EcommerceTables />
      </section>
    </div>
  )
}

export default Ecommerce
