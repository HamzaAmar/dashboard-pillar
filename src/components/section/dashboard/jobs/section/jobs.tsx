import { useId } from 'react'
import { Avatar, Button, Chips, Flex, Grid, Heading, IconButton, Text } from '@components/core'
import { useLoaderData } from 'react-router-dom'
import { ArrowDown, CircleCheck, Dots, Message } from '@components/icons'

import type { JobsProps } from '@api/jobs/todo.type'

export const Job = ({ image, title, description }: JobsProps) => {
  const id = `job-${useId()}-item`
  return (
    <article aria-labelledby={id} className="l_box l_flow-md">
      <Flex justify="between" items="center">
        <Avatar variant="image" image={`/images/jobs/${image}`} title="job" corner="sharp" />
        <IconButton icon={<Dots />} title="more info" />
      </Flex>
      <div className="l_flow-sm">
        <div>
          <Heading id={id} as="h3" size="xs" className="u_leading__sm" weight="medium">
            {title}
          </Heading>
          <Text truncate="multiline" numberLine={4} size="xs" color="slate" contrast="low">
            {description}
          </Text>
        </div>
        <Flex wrap gap="xs">
          <Chips color="indigo" variant="soft">
            Full Time
          </Chips>
          <Chips variant="soft" color="indigo">
            Hello
          </Chips>
          <Chips color="indigo" variant="soft">
            Hello
          </Chips>
        </Flex>
      </div>
      <Flex gap="xs" wrap>
        <Button size="sm" icon={<CircleCheck />} fluid>
          Apply Now
        </Button>
        <Button size="sm" icon={<Message />} fluid color="slate">
          Message
        </Button>
      </Flex>
    </article>
  )
}

export const Jobs = () => {
  const { jobs } = useLoaderData() as { jobs: JobsProps[] }

  return (
    <section aria-labelledby="latest-jobs-id" className="l_flow-md">
      <Heading id="latest-jobs-id" as="h2" size="xs">
        Latest Jobs
      </Heading>
      <Flex items="center" direction="column" gap="md">
        <Grid columns="repeat(3,1fr)" gap="sm" className="jobs-list md_grid-two sm_grid-one">
          {jobs.map((job) => (
            <Job key={job.id} {...job} />
          ))}
        </Grid>
        <Button size="lg" iconPosition="end" variant="link" icon={<ArrowDown direction="right-top" />}>
          More Jobs
        </Button>
      </Flex>
    </section>
  )
}
