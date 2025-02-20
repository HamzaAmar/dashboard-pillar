import { CSSProperties } from 'react'
import { Avatar, Button, Flex, Heading, Paper, Text } from '@pillar-ui/core'
import { Link } from 'react-router-dom'
import type { BlogPostProps } from './blog.type'
import { ArrowDown } from '@pillar-ui/icons'

const blog = ({ title, description, to, image, user }: BlogPostProps) => {
  return (
    <Flex
      as="article"
      justify="between"
      direction="col"
      className="blog-post"
      style={{ '--image': `url(${image})` } as CSSProperties}
    >
      <Paper flow="6">
        <Heading truncate="3" size="6" color="b" low as="h2">
          {title}
        </Heading>
        <Text size="4" truncate="6">
          {description}
        </Text>
      </Paper>
      <Paper flow="6" className="blog-post--footer">
        <Flex items="center" gap="3">
          <Avatar src={user.avatar} title={user.name} />
          <Text truncate="2" weight="5">
            {user.name}
          </Text>
        </Flex>
        <Button fluid icon={<ArrowDown direction="right-top" />} color="b" variant="soft" as={Link} to={to}>
          Read More
        </Button>
      </Paper>
    </Flex>
  )
}

export default blog
