import { useId, Fragment } from 'react'
import { getUsers } from '@api/user'
import { USERS_LIST } from '@api/user/users.data'
import { Post, UserPoster } from '@components/article'
import { Avatar, Flex, Grid, Heading, IconButton, Text } from '@components/core'
import { Check, Cross } from '@components/icons'
import * as HoverCard from '@radix-ui/react-hover-card'

const user = USERS_LIST[0]

const Info = () => {
  return (
    <section aria-labelledby="information-id" className="l_box l_flow-md">
      <Heading id="information-id" as="h3" size="sm" color="slate" contrast="low" weight="medium">
        Information
      </Heading>
      <Text size="xs">{user.description}</Text>

      <Grid columns="auto 1fr" gap="sm" items="center">
        <Text as="span" weight="bold" size="sm">
          Number :
        </Text>
        <Text as="span" color="slate" contrast="low" size="xs">
          {user.phone}
        </Text>
        <Text as="span" weight="bold" size="sm">
          Email :
        </Text>
        <Text as="span" color="slate" contrast="low" size="xs">
          {user.email}
        </Text>
        <Text as="span" weight="bold" size="sm">
          Address :
        </Text>
        <Text as="span" color="slate" contrast="low" size="xs">
          {user.address}
        </Text>

        <Text as="span" weight="bold" size="sm">
          Role :
        </Text>
        <Text as="span" color="slate" contrast="low" size="xs">
          {user.role}
        </Text>
        {Object.entries(user.contact).map(([key, value]) => (
          <Fragment key={key}>
            <Text as="span" weight="bold" size="sm">
              {key} :
            </Text>
            <Text as="span" color="slate" contrast="low" size="xs">
              {value}
            </Text>
          </Fragment>
        ))}
      </Grid>
    </section>
  )
}

const User = ({ name, avatar, role }: any) => {
  const id = `user-${useId()}--suggested`
  return (
    <Flex as="article" aria-labelledby={id} justify="between" items="center">
      <Flex gap="xs">
        <UserCardHover user={{ name, avatar, role }}>
          <Avatar title={name} variant="image" image={avatar} />
        </UserCardHover>
        <div>
          <Heading id={id} as="h4" size="xs" weight="medium">
            {name}
          </Heading>
          <Text size="xs" color="slate" contrast="low">
            {role}
          </Text>
        </div>
      </Flex>
      <Flex gap="xs">
        <IconButton corner="full" size="sm" color="indigo" variant="solid" title="Accept Friend" icon={<Check />} />
        <IconButton corner="full" size="sm" color="red" variant="outline" title="refuse Friend" icon={<Cross />} />
      </Flex>
    </Flex>
  )
}

const SuggestFriends = () => {
  return (
    <section aria-labelledby="suggested-friend-id" className="l_box l_flow-md">
      <Heading as="h3" id="suggested-friend-id" size="sm" weight="medium">
        Suggested accounts
      </Heading>
      <div className="l_flow-md">
        {getUsers({ pageSize: 8 }).map((user) => (
          <User key={user.slug} {...user} />
        ))}
      </div>
    </section>
  )
}
// const ActivityTimeline = () => {
//   return (
//     <div className="l_box l_flow-md">
//       <h1>Hell</h1>
//     </div>
//   )
// }

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
    <Grid columns="1fr 25rem" gap="sm" className="md_grid-one">
      <section className="l_flow-md">
        <Heading className="u_sr-only" as="h3">
          Home Posts
        </Heading>
        <Post>
          <Text size="sm" color="slate" contrast="low">
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
      </section>
      <Grid gap="sm" className="md_grid-two sm_grid-one feed-side--section">
        <Info />
        <SuggestFriends />
        {/* <ActivityTimeline /> */}
      </Grid>
    </Grid>
  )
}

export default feed
