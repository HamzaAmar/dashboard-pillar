import { Button, Flex, Heading, Text } from '@components/core'
import { Home, Message } from '@components/icons'
import type { ErrorProps } from './status.type'

const notFound = ({ variant = 'gradient', color }: ErrorProps) => {
  return (
    <Flex className={`status l_box l_flow-sm u_${color}`} direction="column" justify="center" items="center">
      <Heading className={`status--${variant}`} size="4xl">
        404
      </Heading>
      <Text size="xl" weight="bold">
        Page Not Found
      </Text>
      <Text size="sm" color="slate" contrast="low">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, voluptate nesciunt deleniti quae nihil fugiat quasi
        soluta illo esse assumenda exercitationem eaque sapiente magnam ipsum consequatur, quidem voluptatibus
        perferendis facere.
      </Text>
      <Flex wrap justify="center" gap="sm">
        <Button variant="solid" icon={<Home />}>
          Go Back Home
        </Button>
        <Button variant="soft" icon={<Message />}>
          Contact Support
        </Button>
      </Flex>
    </Flex>
  )
}

export default notFound
