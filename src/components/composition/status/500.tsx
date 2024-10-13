import { Button, Flex, Heading, Text } from '@pillar-ui/core'
import { CircleRefresh, Message } from '@components/icons'
import type { ErrorProps } from './status.type'

const Error500 = ({ variant = 'gradient', color }: ErrorProps) => {
  return (
    <Flex className="status l_box l_flow-sm" direction="col" justify="center" items="center">
      <Heading className={`status--${variant}`} size="9">
        500
      </Heading>
      <Text align="center" size="7" weight="7">
        Error In page
      </Text>
      <Text align="center" color="b" low size="4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, voluptate nesciunt deleniti quae nihil fugiat quasi
        soluta illo esse assumenda exercitationem eaque sapiente magnam ipsum consequatur, quidem voluptatibus
        perferendis facere.
      </Text>
      <Flex wrap gap="4">
        <Button color="d" variant="solid" icon={<CircleRefresh />}>
          Retry
        </Button>
        <Button variant="outline" icon={<Message />}>
          Contact Support
        </Button>
      </Flex>
    </Flex>
  )
}

export default Error500
