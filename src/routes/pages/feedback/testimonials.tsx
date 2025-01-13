import { Avatar, Flex, Grid, Heading, Paper, Rating, Text } from '@pillar-ui/core'
import { Quotes } from '@pillar-ui/icons'
import { FeedbackDTO, FeedbackPaginationDTO } from '@type/api/feedback'
import { useLoaderData } from 'react-router-dom'

const Testimonial = ({ name, email, message, job, rating, avatar }: FeedbackDTO) => {
  return (
    <Paper className="scroll-move" p="4" background="B2" border corner="3" as="article">
      <Flex justify="between" direction="col" as={Paper} height="100" gap="6">
        <Flex gap="3" items="center">
          <Avatar variant="dashed" src={avatar} />
          <Paper flow="1">
            <Flex gap="2" items="center">
              <Text size="4" weight="7">
                {name}
              </Text>
              <Text color="b" low size="3">
                ({job ?? 'Not Job Provided'})
              </Text>
            </Flex>
            <Text color="b" low size="3">
              {email}
            </Text>
            <Rating rating={rating} hideTitle size="3" />
          </Paper>
        </Flex>
        <Flex justify="between" items="end" gap="4">
          <Text color="b" low size="4">
            {message}
          </Text>
          <Quotes width="36" className="testimonial-icon" />
        </Flex>
      </Flex>
    </Paper>
  )
}

const Testimonials = () => {
  const { feedbacks } = useLoaderData() as FeedbackPaginationDTO
  return (
    <Paper flow="8">
      <div>
        <p className="secondary-heading text-animation"> Testimonials</p>

        <Heading align="center" as="h2">
          Hear What They Say About Us
        </Heading>
      </div>

      <Grid as="section" gap="5" cols={{ default: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' }}>
        {feedbacks.map((testimonial) => (
          <Testimonial key={testimonial.id} {...testimonial} />
        ))}
      </Grid>
    </Paper>
  )
}

export default Testimonials
