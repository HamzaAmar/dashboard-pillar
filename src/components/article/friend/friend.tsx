import { useId } from 'react'
import { Avatar, Flex, Heading, IconButton, Text } from '@pillar-ui/core'
import { Dots } from '@components/icons'
import { UserCardHover } from '@components/article'
import { Link } from 'react-router-dom'
import type { FriendProps } from './friend.type'

const Friend = ({ user }: FriendProps) => {
  const id = `friend-${useId()}-item`
  return (
    <Flex aria-labelledby={id} as="article" className="l_box" justify="between">
      <Flex items="center" gap="5" className="u_leading__sm">
        <UserCardHover user={user}>
          <Link to="/">
            <Avatar size="6" image={user.avatar} corner="3" title={user.name} />
          </Link>
        </UserCardHover>
        <div className="">
          <UserCardHover user={user}>
            <Link className="friend-card--name" to="/">
              <Heading as="h4" id={id} size="3" weight="5">
                {user.name}
              </Heading>
            </Link>
          </UserCardHover>

          <Text color="b" low size="4">
            {user.role}
          </Text>
          <Flex wrap gap="3">
            <Flex gap="1">
              <Text size="3" low weight="5" color="b" as="span">
                Followers :
              </Text>
              <Text size="3" as="span">
                {user.followers}
              </Text>
            </Flex>
            <Flex gap="1">
              <Text size="3" weight="5" low color="b" as="span">
                Following :{' '}
              </Text>
              <Text size="3" as="span">
                {user.following}
              </Text>
            </Flex>
          </Flex>
        </div>
      </Flex>
      <IconButton icon={<Dots />} title="Edit Friends Settings" />
    </Flex>
  )
}

export default Friend
