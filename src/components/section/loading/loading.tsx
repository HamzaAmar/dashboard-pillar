import { Logo } from '@components/common'
import { Flex, Spinner } from '@components/core'

const loading = () => {
  return (
    <Flex justify="center" items="center" direction="column" gap="sm" className="loading">
      <Logo className="loading--logo" />
      <Spinner size="lg" />
    </Flex>
  )
}

export default loading
