import { Breadcrumb, Flex, Heading } from '@components/core'
import { CryptoAnalytics, CryptoCurrency, HistoryTrading } from './section'

const Crypto = () => {
  return (
    <section aria-labelledby="crypto-page-id" className="l_flow-lg">
      <Flex items="center" wrap justify="between">
        <Heading size="sm" weight="medium" id="crypto-page-id" as="h1">
          Crypto Page
        </Heading>
        <Breadcrumb size="sm">
          <Breadcrumb.Item link="../../">Home</Breadcrumb.Item>
          <Breadcrumb.Item link="../">Pages</Breadcrumb.Item>
          <Breadcrumb.Item link="./" current>
            Crypto
          </Breadcrumb.Item>
        </Breadcrumb>
      </Flex>
      <CryptoAnalytics />
      <CryptoCurrency />
      <HistoryTrading />
    </section>
  )
}

export default Crypto
