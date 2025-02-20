import Image from '@components/core/image'
import { Grid, Heading, Paper } from '@pillar-ui/core'
import { range } from '@utils/randomNumber'

const profilePhotos = () => {
  const start = Math.floor(Math.random() * 250)
  const end = 30 + start
  const numbers = range(start, end)

  return (
    <Paper flow="5">
      <Heading size="4" as="h3">
        Gallery List
      </Heading>
      <Grid as="section" gap="5" cols={{ default: '1fr 1fr', lg: 'repeat(3,1fr)' }}>
        {numbers.map((photo, index) => (
          <Image key={index} src={`https://picsum.photos/id/${photo}/300/300`} alt="hello" />
        ))}
      </Grid>
    </Paper>
  )
}

export default profilePhotos
