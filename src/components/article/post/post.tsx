import { USERS_LIST } from '@api/user/users.data'
import { Avatar, Button, Flex, Heading, IconButton, Text } from '@components/core'
import { Dots, Heart, Message, Share, World } from '@components/icons'
import { useId } from 'react'
import { PostProps } from './post.type'

const fallbackUser = USERS_LIST[2]

const Post = ({ children, user = fallbackUser }: PostProps) => {
  const id = `user-${useId()}-post`

  return (
    <Flex as="article" aria-labelledby={id} justify="between" gap="sm" direction="column" className="post l_box">
      <Flex as="header" justify="between" items="center">
        <Flex gap="md">
          <Avatar variant="image" image={user.avatar} title={user.name} />
          <div className="leading-1">
            <Heading as="h4" id={id} truncate="multiline" numberLine={1} size="xs" weight="medium">
              {user.name}
            </Heading>
            <Text size="sm">
              2min · <World width={16} />
            </Text>
          </div>
        </Flex>
        <IconButton title="Post Settings" icon={<Dots />} />
      </Flex>
      <div className="post--main">{children}</div>
      <Flex gap="md" flex="1" className="u_mt-auto" as="footer">
        <Button color="slate" variant="soft" className="post--button" fluid icon={<Heart width="20" />}>
          Like
        </Button>
        <Button color="slate" variant="soft" className="post--button" fluid icon={<Message width="20" />}>
          Review
        </Button>
        <Button color="slate" variant="soft" className="post--button" fluid icon={<Share width="20" />}>
          Share
        </Button>
      </Flex>
    </Flex>
  )
}

export default Post
