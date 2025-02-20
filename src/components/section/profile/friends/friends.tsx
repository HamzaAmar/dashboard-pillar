import { USERS_LIST } from '@api/user/users.data'
import { FriendCard } from '@components/article'
import { Grid, Heading, Paper } from '@pillar-ui/core'

const Friend = () => {
  return (
    <Paper as="section" flow="5" aria-labelledby="user-friends-list-id">
      <Heading id="user-friends-list-id" size="4" as="h3">
        User Friends List
      </Heading>
      <Grid gap="4" cols={{ default: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' }} className="friends-lists">
        {USERS_LIST.map((user) => {
          return <FriendCard key={user.slug} user={user} />
        })}
      </Grid>
    </Paper>
  )
}

export default Friend
