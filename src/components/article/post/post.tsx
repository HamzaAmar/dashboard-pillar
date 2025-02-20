import { USERS_LIST } from '@api/user/users.data'
import { Avatar, Button, Flex, Heading, IconButton, Paper, Text } from '@pillar-ui/core'
import { DotsHorizontal, Heart, Message, Share, World } from '@pillar-ui/icons'
import { useId } from 'react'
import { PostProps } from './post.type'

const fallbackUser = USERS_LIST[2]

const Post = ({ children, user = fallbackUser }: PostProps) => {
  const id = `user-${useId()}-post`

  return (
    <Paper flow="5" as="article" aria-labelledby={id} className="post l_box">
      <Flex as="header" justify="between" items="center">
        <Flex gap="5">
          <Avatar src={user.avatar} title={user.name} />
          <div>
            <Heading as="h4" id={id} truncate="1" size="4" weight="5">
              {user.name}
            </Heading>
            <Text as={Flex} gap="2" items="center" color="b" low size="4">
              2min · <World width={14} />
            </Text>
          </div>
        </Flex>
        <IconButton title="Post Settings" size="4" icon={<DotsHorizontal />} />
      </Flex>
      <Paper flow="4" className="post--main">
        {children}
      </Paper>
      <Flex gap="5" flex="1" as="footer">
        <Button color="b" variant="soft" className="fl-1" icon={<Heart width="20" />}>
          Like
        </Button>
        <Button color="b" variant="soft" className="fl-1" icon={<Message width="20" />}>
          Review
        </Button>
        <Button color="b" variant="soft" className="fl-1" icon={<Share width="20" />}>
          Share
        </Button>
      </Flex>
    </Paper>
  )
}

export default Post
