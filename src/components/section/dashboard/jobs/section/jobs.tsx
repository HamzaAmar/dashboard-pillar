import { useId } from 'react'
import { Avatar, Button, Chips, Flex, Grid, Heading, IconButton, Text } from '@pillar-ui/core'
import { useLoaderData } from 'react-router-dom'
import { ArrowDown, CircleCheck, Dots, Message } from '@components/icons'

import type { JobsProps } from '@api/jobs/todo.type'

export const Job = ({ image, title, description }: JobsProps) => {
  const id = `job-${useId()}-item`
  return (
    <article aria-labelledby={id} className="l_box l_flow-md">
      <Flex justify="between" items="center">
        <Avatar image={`/images/jobs/${image}`} title="job" corner="0" />
        <IconButton icon={<Dots />} title="more info" />
      </Flex>
      <div className="l_flow-sm">
        <div>
          <Heading id={id} as="h3" size="3" className="u_leading__sm" weight="5">
            {title}
          </Heading>
          <Text truncate="4" size="3" color="b" low>
            {description}
          </Text>
        </div>
        <Flex wrap gap="3">
          <Chips color="i" variant="soft">
            Full Time
          </Chips>
          <Chips variant="soft" color="i">
            Hello
          </Chips>
          <Chips color="i" variant="soft">
            Hello
          </Chips>
        </Flex>
      </div>
      <Flex gap="3" wrap>
        <Button size="4" icon={<CircleCheck />} fluid>
          Apply Now
        </Button>
        <Button size="4" icon={<Message />} fluid color="b">
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
      <Heading id="latest-jobs-id" as="h2" size="3">
        Latest Jobs
      </Heading>
      <Flex items="center" direction="col" gap="5">
        <Grid grid="repeat(3,1fr)" gap="4" className="jobs-list md_grid-two sm_grid-one">
          {jobs.map((job) => (
            <Job key={job.id} {...job} />
          ))}
        </Grid>
        <Button size="6" iconPosition="end" variant="link" icon={<ArrowDown direction="right-top" />}>
          More Jobs
        </Button>
      </Flex>
    </section>
  )
}
