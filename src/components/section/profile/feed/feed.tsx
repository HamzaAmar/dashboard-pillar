import { useId, Fragment } from 'react'
import { getUsers } from '@api/user'
import { USERS_LIST } from '@api/user/users.data'
import { Post, UserPoster } from '@components/article'
import { Avatar, Flex, Grid, Heading, IconButton, Paper, Text } from '@pillar-ui/core'
import { Check, X } from '@pillar-ui/icons'
import * as HoverCard from '@radix-ui/react-hover-card'
import Image from '@components/core/image'

const user = USERS_LIST[0]

const Info = () => {
  return (
    <Paper as="section" flow="5" aria-labelledby="information-id" className="l_box">
      <Heading id="information-id" as="h3" size="4" color="b" low weight="5">
        Information
      </Heading>
      <Text size="3">{user.description}</Text>

      <Grid cols={{ default: 'auto 1fr' }} gap="4" items="center">
        <Text as="span" weight="7" size="4">
          Number :
        </Text>
        <Text as="span" color="b" low size="3">
          {user.phone}
        </Text>
        <Text as="span" weight="7" size="4">
          Email :
        </Text>
        <Text as="span" color="b" low size="3">
          {user.email}
        </Text>
        <Text as="span" weight="7" size="4">
          Address :
        </Text>
        <Text as="span" color="b" low size="3">
          {user.address}
        </Text>

        <Text as="span" weight="7" size="4">
          Role :
        </Text>
        <Text as="span" color="b" low size="3">
          {user.role}
        </Text>
        {Object.entries(user.contact).map(([key, value]) => (
          <Fragment key={key}>
            <Text as="span" weight="7" size="4">
              {key} :
            </Text>
            <Text as="span" color="b" low size="3">
              {value}
            </Text>
          </Fragment>
        ))}
      </Grid>
    </Paper>
  )
}

const User = ({ name, avatar, role }: any) => {
  const id = `user-${useId()}--suggested`
  return (
    <Flex as="article" aria-labelledby={id} justify="between" items="center">
      <Flex gap="3">
        <UserCardHover user={{ name, avatar, role }}>
          <Avatar size="4" title={name} src={avatar} />
        </UserCardHover>
        <div>
          <Heading id={id} as="h4" size="4" weight="5" leading="3">
            {name}
          </Heading>
          <Text size="3" color="b" low>
            {role}
          </Text>
        </div>
      </Flex>
      <Flex gap="3">
        <IconButton size="3" color="p" variant="soft" title="Accept Friend" icon={<Check />} />
        <IconButton size="3" color="d" variant="soft" title="refuse Friend" icon={<X />} />
      </Flex>
    </Flex>
  )
}

const SuggestFriends = () => {
  return (
    <Paper as="section" flow="5" aria-labelledby="suggested-friend-id" className="l_box">
      <Heading as="h3" id="suggested-friend-id" size="4" weight="5">
        Suggested accounts
      </Heading>
      <Paper flow="5">
        {getUsers({ pageSize: 8 }).map((user) => (
          <User key={user.slug} {...user} />
        ))}
      </Paper>
    </Paper>
  )
}

const UserCardHover = ({ children, user }: any) => {
  return (
    <HoverCard.Root openDelay={200}>
      <HoverCard.Trigger asChild>{children}</HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content align="center" sideOffset={16} side="left" asChild>
          <UserPoster user={user}>{children}</UserPoster>
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  )
}

const feed = () => {
  return (
    <Grid cols={{ default: '1fr', lg: '1fr 25rem' }} gap="4">
      <Paper as="section" flow="5">
        <Heading className="u_sr-only" as="h3">
          Home Posts
        </Heading>
        <Post>
          <Text size="4" color="b" low>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio odio ipsa molestiae voluptas deserunt.
            Magnam ea, nobis sequi quasi expedita sint at vel ullam numquam odio omnis hic, cum quae! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Distinctio odio ipsa molestiae voluptas deserunt. Magnam ea, nobis
            sequi quasi expedita sint at vel ullam numquam odio omnis hic
          </Text>
          <Grid cols={{ default: '1fr 1fr' }} gap="4">
            <Image src="https://picsum.photos/id/128/300/160" alt="placeholder" />
            <Image src="https://picsum.photos/id/128/300/160" alt="placeholder" />
            <Image src="https://picsum.photos/id/128/300/160" alt="placeholder" />
            <Paper border background="B3" corner="4" className="F-c">
              <Text weight="5" size="7">
                5+
              </Text>
            </Paper>
          </Grid>
        </Post>
        <Post>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio odio ipsa molestiae voluptas deserunt.
          Magnam ea, nobis sequi quasi expedita sint at vel ullam numquam odio omnis hic, cum quae!
        </Post>
        <Post>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio odio ipsa molestiae voluptas deserunt.
          Magnam ea, nobis sequi quasi expedita sint at vel ullam numquam odio omnis hic, cum quae!
        </Post>
        <Post>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio odio ipsa molestiae voluptas deserunt.
          Magnam ea, nobis sequi quasi expedita sint at vel ullam numquam odio omnis hic, cum quae!
        </Post>
        <Post>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio odio ipsa molestiae voluptas deserunt.
          Magnam ea, nobis sequi quasi expedita sint at vel ullam numquam odio omnis hic, cum quae!
        </Post>
        <Post>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio odio ipsa molestiae voluptas deserunt.
          Magnam ea, nobis sequi quasi expedita sint at vel ullam numquam odio omnis hic, cum quae!
        </Post>
      </Paper>
      <Paper flow="5" className="feed-side--section">
        <Info />
        <SuggestFriends />
        {/* <ActivityTimeline /> */}
      </Paper>
    </Grid>
  )
}

export default feed
