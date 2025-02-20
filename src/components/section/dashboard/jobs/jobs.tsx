import { useId } from 'react'
import { Avatar, Button, Chips, Flex, Grid, Heading, IconButton, Paper, Text } from '@pillar-ui/core'
import { useLoaderData } from 'react-router-dom'
import { ArrowDown, CircleCheck, DotsHorizontal, Message } from '@pillar-ui/icons'

import type { JobsProps } from '@api/jobs/todo.type'

export const Job = ({ image, title, description, type }: JobsProps) => {
  const id = `job-${useId()}-item`
  return (
    <Paper flow="5" as="article" aria-labelledby={id} className="l_box">
      <Flex justify="between" items="center">
        <Avatar src={`/images/jobs/${image}`} title="job" corner="0" />
        <IconButton icon={<DotsHorizontal />} title="more info" />
      </Flex>
      <Paper flow="4">
        <div>
          <Heading id={id} as="h3" className="u_leading__sm" weight="5">
            {title}
          </Heading>
          <Text truncate="4" size="3" color="b" low>
            {description}
          </Text>
        </div>
        <Flex wrap gap="3">
          {type.map((t, index) => (
            <Chips key={t} variant="soft" color={index === 0 ? 'se' : index === 1 ? 'i' : 'p'} size="3">
              {t}
            </Chips>
          ))}
        </Flex>
      </Paper>
      <Grid gap="3" cols={{ default: '1fr auto' }}>
        <Button size="4" icon={<CircleCheck />} fluid>
          Apply Now
        </Button>
        <Button variant="soft" size="4" icon={<Message />} color="b">
          Message
        </Button>
      </Grid>
    </Paper>
  )
}

export const Jobs = () => {
  const { jobs } = useLoaderData() as { jobs: JobsProps[] }

  return (
    <Paper as="section" flow="5" aria-labelledby="latest-jobs-id">
      <Heading id="latest-jobs-id" as="h2">
        Latest Jobs
      </Heading>
      <Flex items="center" direction="col" gap="5">
        <Grid
          cols={{ default: '1fr', md: '1fr 1fr', lg: 'repeat(3,1fr)' }}
          gap="4"
          className="jobs-list md_grid-two sm_grid-one"
        >
          {jobs.map((job) => (
            <Job key={job.id} {...job} />
          ))}
        </Grid>
        <Button iconPosition="end" color="b" variant="soft" icon={<ArrowDown direction="right-top" />}>
          More Jobs
        </Button>
      </Flex>
    </Paper>
  )
}
