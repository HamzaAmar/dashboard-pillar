import { useId } from 'react'
import { Avatar, Flex, Heading, IconButton, Text } from '@components/core'
import { Dots } from '@components/icons'
import { UserCardHover } from '@components/article'
import { Link } from 'react-router-dom'
import type { FriendProps } from './friend.type'

const Friend = ({ user }: FriendProps) => {
  const id = `friend-${useId()}-item`
  return (
    <Flex aria-labelledby={id} as="article" className="l_box" justify="between">
      <Flex items="center" gap="md" className="u_leading__sm">
        <UserCardHover user={user}>
          <Link to="/">
            <Avatar size="lg" variant="image" image={user.avatar} corner="sm" title={user.name} />
          </Link>
        </UserCardHover>
        <div className="">
          <UserCardHover user={user}>
            <Link className="friend-card--name" to="/">
              <Heading as="h4" id={id} size="xs" weight="medium">
                {user.name}
              </Heading>
            </Link>
          </UserCardHover>

          <Text color="slate" contrast="low" size="sm">
            {user.role}
          </Text>
          <Flex wrap gap="xs">
            <Flex gap="2xs">
              <Text size="xs" contrast="low" weight="medium" color="slate" as="span">
                Followers :
              </Text>
              <Text size="xs" as="span">
                {user.followers}
              </Text>
            </Flex>
            <Flex gap="2xs">
              <Text size="xs" weight="medium" contrast="low" color="slate" as="span">
                Following :{' '}
              </Text>
              <Text size="xs" as="span">
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
