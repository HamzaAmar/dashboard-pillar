import { USERS_LIST } from '@api/user/users.data'
import { FriendCard } from '@components/article'
import { Grid, Heading } from '@components/core'

const Friend = () => {
  return (
    <section aria-labelledby="user-friends-list-id">
      <Heading id="user-friends-list-id" as="h3" className="u_sr-only">
        User Friends List
      </Heading>
      <Grid gap="sm" columns="1fr 1fr 1fr" className="friends-lists md_grid-two sm_grid-one">
        {USERS_LIST.map((user) => {
          return <FriendCard key={user.slug} user={user} />
        })}
      </Grid>
    </section>
  )
}

export default Friend
