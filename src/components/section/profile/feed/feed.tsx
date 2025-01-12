import { useId, Fragment } from 'react'
import { getUsers } from '@api/user'
import { USERS_LIST } from '@api/user/users.data'
import { Post, UserPoster } from '@components/article'
import { Avatar, Flex, Grid, Heading, IconButton, Paper, Text } from '@pillar-ui/core'
import { Check, Cross } from '@components/icons'
import * as HoverCard from '@radix-ui/react-hover-card'

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
          <Avatar title={name} src={avatar} />
        </UserCardHover>
        <div>
          <Heading id={id} as="h4" size="3" weight="5">
            {name}
          </Heading>
          <Text size="3" color="b" low>
            {role}
          </Text>
        </div>
      </Flex>
      <Flex gap="3">
        <IconButton corner="full" size="4" color="i" variant="solid" title="Accept Friend" icon={<Check />} />
        <IconButton corner="full" size="4" color="d" variant="outline" title="refuse Friend" icon={<Cross />} />
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
            Magnam ea, nobis sequi quasi expedita sint at vel ullam numquam odio omnis hic, cum quae!
          </Text>
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
      <Grid gap="4" cols={{ default: '1fr', md: '1fr 1fr' }} className="feed-side--section">
        <Info />
        <SuggestFriends />
        {/* <ActivityTimeline /> */}
      </Grid>
    </Grid>
  )
}

export default feed
