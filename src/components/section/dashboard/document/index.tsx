import { Breadcrumb, BreadcrumbItem, Flex, Heading, Paper } from '@pillar-ui/core'

const Crypto = () => {
  return (
    <Paper as="section" flow="5" aria-labelledby="crypto-page-id">
      <Flex items="center" wrap justify="between">
        <Heading size="6" weight="5" id="crypto-page-id">
          Document Page
        </Heading>
        <Breadcrumb>
          <BreadcrumbItem href="../../">Home</BreadcrumbItem>
          <BreadcrumbItem href="../">Pages</BreadcrumbItem>
          <BreadcrumbItem href="./" current>
            Crypto
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
    </Paper>
  )
}

export default Crypto
