import { Avatar, Button, Flex, Text, Paper } from '@pillar-ui/core'
import { Globe, Message } from '@components/icons'
import type { UserPosterProps } from './userPoster.type'
import * as HoverCard from '@radix-ui/react-hover-card'
import { forwardRef } from 'react'

export const UserCardHover = ({ children, user }: any) => {
  return (
    <HoverCard.Root openDelay={200}>
      <HoverCard.Trigger asChild>{children}</HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content align="center" sideOffset={12} side="top" asChild>
          <UserPoster user={user}>{children}</UserPoster>
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  )
}

/* 
=========================================================================================
  USER POSTER Section Start 
=========================================================================================
*/

export const UserPoster = forwardRef<HTMLDivElement, UserPosterProps>(({ user, ...rest }, forwardedRef) => {
  return (
    <Paper as="article" flow="5" ref={forwardedRef} {...rest} className="user-poster l_box">
      <Flex gap="4">
        <Avatar src={user.avatar} title={user.name} />
        <div>
          <Text weight="5">{user.name}</Text>
          <Text size="4" color="b" truncate="4" low>
            {user.description}
          </Text>
        </div>
      </Flex>
      <Flex justify="center" className="user-poster--common-friends" gap="4">
        <Globe width={16} />
        <div>
          <Text truncate="1" weight="5" size="3">
            6 friends in Common
          </Text>
          <Text truncate="1" size="4">
            Samir Lmoud , Ryan Helper and Kent
          </Text>
        </div>
      </Flex>
      <footer>
        <Button icon={<Message width={20} />} fluid>
          Message
        </Button>
      </footer>
    </Paper>
  )
})

/* 
=========================================================================================
  USER POSTER Section Start 
=========================================================================================
*/
