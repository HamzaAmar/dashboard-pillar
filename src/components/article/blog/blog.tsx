import { CSSProperties } from 'react'
import { Avatar, Button, Flex, Heading, Text } from '@pillar-ui/core'
import { Link } from 'react-router-dom'
import type { BlogPostProps } from './blog.type'
import { ArrowDown } from '@components/icons'

const blog = ({ title, description, to, image, user }: BlogPostProps) => {
  return (
    <Flex
      as="article"
      justify="between"
      direction="col"
      className="blog-post"
      style={{ '--image': `url(${image})` } as CSSProperties}
    >
      <div className="l_flow-lg">
        <Heading truncate="3" size="6" color="b" low as="h2">
          {title}
        </Heading>
        <Text size="4" truncate="6">
          {description}
        </Text>
      </div>
      <div className="blog-post--footer l_flow-lg">
        <Flex items="center" gap="3">
          <Avatar image={user.avatar} title={user.name} />
          <Text truncate="2" weight="5">
            {user.name}
          </Text>
        </Flex>
        <Button fluid icon={<ArrowDown direction="right-top" />} color="b" variant="soft" as={Link} to={to}>
          Read More
        </Button>
      </div>
    </Flex>
  )
}

export default blog
