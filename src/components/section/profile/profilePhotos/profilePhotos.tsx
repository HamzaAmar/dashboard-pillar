import { Grid, Heading } from '@pillar-ui/core'
import { range } from '@utils/randomNumber'

const profilePhotos = () => {
  const start = Math.floor(Math.random() * 250)
  const end = 30 + start
  const numbers = range(start, end)

  function handleError(event: React.SyntheticEvent<HTMLImageElement, Event>) {
    event.currentTarget.src = 'https://picsum.photos/id/200/300/300'
  }
  return (
    <div>
      <Heading className="u_sr-only" as="h3">
        Gallery List
      </Heading>
      <Grid as="section" gap="5" cols={{ default: '1fr 1fr', lg: 'repeat(3,1fr)' }}>
        {numbers.map((photo, index) => (
          <div className="profile-photos--wrapper" key={index}>
            <img
              className="profile-photos"
              width="100%"
              onError={handleError}
              src={`https://picsum.photos/id/${photo}/300/300`}
              alt="hello"
            />
          </div>
        ))}
      </Grid>
    </div>
  )
}

export default profilePhotos
