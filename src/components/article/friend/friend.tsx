import { useId } from 'react'
import { Avatar, Flex, Link as PillarLink, IconButton, Text, Paper } from '@pillar-ui/core'
import { DotsHorizontal } from '@pillar-ui/icons'
import { UserCardHover } from '@components/article'
import { Link } from 'react-router-dom'
import type { FriendProps } from './friend.type'

const Friend = ({ user }: FriendProps) => {
  const id = `friend-${useId()}-item`
  return (
    <Flex aria-labelledby={id} as="article" className="l_box" items="start" justify="between">
      <Flex items="start" gap="5">
        <UserCardHover user={user}>
          <Link to="/">
            <Avatar variant="outline" size="6" src={user.avatar} corner="h6" title={user.name} />
          </Link>
        </UserCardHover>
        <Paper flow="3">
          <div>
            <UserCardHover user={user}>
              <Link className="friend-card--name" to="/">
                <PillarLink color="b" id={id} weight="5" leading="2">
                  {user.name}
                </PillarLink>
              </Link>
            </UserCardHover>

            <Text color="b" low size="3">
              {user.role}
            </Text>
          </div>
          <Flex wrap gap="6">
            <Flex gap="1">
              <Text size="3" low weight="5" color="b" as="span">
                Followers :
              </Text>
              <Text weight="5" size="3" as="span">
                {user.followers}
              </Text>
            </Flex>
            <Flex gap="1">
              <Text size="3" weight="5" low color="b" as="span">
                Following :
              </Text>
              <Text weight="5" size="3" as="span">
                {user.following}
              </Text>
            </Flex>
          </Flex>
        </Paper>
      </Flex>
      <IconButton size="3" variant="text" icon={<DotsHorizontal />} title="Edit Friends Settings" />
    </Flex>
  )
}

export default Friend
