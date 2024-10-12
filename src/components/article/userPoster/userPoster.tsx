import { Avatar, Button, Flex, Text } from '@components/core'
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
    <article ref={forwardedRef} {...rest} className="user-poster l_box l_flow-md">
      <Flex gap="sm">
        <Avatar variant="image" image={user.avatar} title={user.name} />
        <div>
          <Text weight="medium">{user.name}</Text>
          <Text size="sm" color="slate" truncate="multiline" numberLine={4} contrast="low">
            {user.description}
          </Text>
        </div>
      </Flex>
      <Flex justify="center" className="user-poster--common-friends" gap="sm">
        <Globe width={16} />
        <div>
          <Text truncate="multiline" numberLine={1} weight="medium" size="xs">
            6 friends in Common
          </Text>
          <Text truncate="multiline" numberLine={1} size="sm">
            Samir Lmoud , Ryan Helper and Kent
          </Text>
        </div>
      </Flex>
      <footer>
        <Button icon={<Message width={20} />} fluid>
          Message
        </Button>
      </footer>
    </article>
  )
})

/* 
=========================================================================================
  USER POSTER Section Start 
=========================================================================================
*/
