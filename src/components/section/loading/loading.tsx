import { Logo } from '@components/common'
import { Flex, Spinner } from '@pillar-ui/core'

const loading = () => {
  return (
    <Flex justify="center" items="center" direction="col" gap="4" className="loading">
      <Logo className="loading--logo" />
      <Spinner size="6" />
    </Flex>
  )
}

export default loading
