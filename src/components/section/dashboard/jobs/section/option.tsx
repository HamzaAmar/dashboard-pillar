import { Flex, Grid, Text } from '@components/core'
import { ChevronDown } from '@components/icons'

import type { JobOptionProps } from '../jobs.type'

export const Option = ({ title, number }: JobOptionProps) => {
  return (
    <Flex as="article" justify="between" items="center" className="l_box u_flex-1">
      <Flex gap="xs" items="center">
        <Text as="span" weight="bold" size="3xl">
          {number}
        </Text>
        <Text color="slate" contrast="low" size="sm">
          {title}
        </Text>
      </Flex>
      <ChevronDown width={20} direction="right" />
    </Flex>
  )
}

export const JobOptions = () => {
  return (
    <Grid columns="repeat(auto-fit, minmax(250px, 1fr)" gap="sm">
      <Option title="New Condidates to Review" number={120} />
      <Option title="Schedule for today" number={5} />
      <Option title="Message Received" number={10} />
    </Grid>
  )
}
