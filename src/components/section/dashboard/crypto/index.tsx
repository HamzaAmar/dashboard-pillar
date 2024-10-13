import { Breadcrumb, BreadcrumbItem, Flex, Heading } from '@pillar-ui/core'
import { CryptoAnalytics, CryptoCurrency, HistoryTrading } from './section'

const Crypto = () => {
  return (
    <section aria-labelledby="crypto-page-id" className="l_flow-lg">
      <Flex items="center" wrap justify="between">
        <Heading size="4" weight="5" id="crypto-page-id" as="h1">
          Crypto Page
        </Heading>
        <Breadcrumb size="4">
          <BreadcrumbItem link="../../">Home</BreadcrumbItem>
          <BreadcrumbItem link="../">Pages</BreadcrumbItem>
          <BreadcrumbItem link="./" current>
            Crypto
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <CryptoAnalytics />
      <CryptoCurrency />
      <HistoryTrading />
    </section>
  )
}

export default Crypto
