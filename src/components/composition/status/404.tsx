import { Button, Flex, Heading, Text } from '@pillar-ui/core'
import { Home, Message } from '@pillar-ui/icons'
import type { ErrorProps } from './status.type'

const notFound = ({ variant = 'gradient', color }: ErrorProps) => {
  return (
    <Flex className={`status l_box u_${color}`} direction="col" gap="5" justify="center" items="center">
      <Heading className={`status--${variant}`} size="9">
        404
      </Heading>
      <Text size="7" weight="7">
        Page Not Found
      </Text>
      <Text size="4" color="b" low>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, voluptate nesciunt deleniti quae nihil fugiat quasi
        soluta illo esse assumenda exercitationem eaque sapiente magnam ipsum consequatur, quidem voluptatibus
        perferendis facere.
      </Text>
      <Flex wrap justify="center" gap="4">
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
