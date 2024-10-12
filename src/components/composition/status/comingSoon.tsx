import { Button, Flex, Heading, Text } from '@components/core'
import { CircleRefresh, Message } from '@components/icons'
import type { ErrorProps } from './status.type'

const commingSoon = ({ variant = 'gradient', color }: ErrorProps) => {
  return (
    <Flex className="status l_box l_flow-sm" direction="column" justify="center" items="center">
      <Heading className={`status--${variant}`} align="center" size="3xl">
        Coming Soon
      </Heading>
      <Text align="center" size="xl" weight="bold">
        Page Not Found
      </Text>
      <Text align="center" color="slate" contrast="low" size="sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, voluptate nesciunt deleniti quae nihil fugiat quasi
        soluta illo esse assumenda exercitationem eaque sapiente magnam ipsum consequatur, quidem voluptatibus
        perferendis facere.
      </Text>
      <Flex wrap gap="sm">
        <Button color="danger" variant="solid" icon={<CircleRefresh />}>
          Retry
        </Button>
        <Button variant="outline" icon={<Message />}>
          Contact Support
        </Button>
      </Flex>
    </Flex>
  )
}

export default commingSoon
