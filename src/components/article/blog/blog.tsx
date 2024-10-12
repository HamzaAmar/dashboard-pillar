import { CSSProperties } from 'react'
import { Avatar, Button, Flex, Heading, Text } from '@components/core'
import { Link } from 'react-router-dom'
import type { BlogPostProps } from './blog.type'
import { ArrowDown } from '@components/icons'

const blog = ({ title, description, to, image, user }: BlogPostProps) => {
  return (
    <Flex
      as="article"
      justify="between"
      direction="column"
      className="blog-post"
      style={{ '--image': `url(${image})` } as CSSProperties}
    >
      <div className="l_flow-lg">
        <Heading truncate="multiline" numberLine={3} size="lg" color="slate" contrast="low" as="h2">
          {title}
        </Heading>
        <Text size="sm" truncate="multiline" numberLine={7}>
          {description}
        </Text>
      </div>
      <div className="blog-post--footer l_flow-lg">
        <Flex items="center" gap="xs">
          <Avatar variant="image" image={user.avatar} title={user.name} />
          <Text truncate="multiline" numberLine={2} weight="medium">
            {user.name}
          </Text>
        </Flex>
        <Button fluid icon={<ArrowDown direction="right-top" />} color="slate" variant="soft" as={Link} to={to}>
          Read More
        </Button>
      </div>
    </Flex>
  )
}

export default blog
