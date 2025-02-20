import { Breadcrumb, BreadcrumbItem, Flex, Heading, Paper } from '@pillar-ui/core'
import { CryptoAnalytics } from '../crypto/cryptoAnalytics'
import { CryptoCurrency } from '../crypto/cryptoCurrency'
import { HistoryTrading } from '../crypto/historyTrading'

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
      <CryptoAnalytics />
      <CryptoCurrency />
      <HistoryTrading />
    </Paper>
  )
}

export default HRM
