import { Flex, Grid, Text } from '@pillar-ui/core'
import { ChevronDown } from '@components/icons'

import type { JobOptionProps } from '../jobs.type'

export const Option = ({ title, number }: JobOptionProps) => {
  return (
    <Flex as="article" justify="between" items="center" className="l_box u_flex-1">
      <Flex gap="3" items="center">
        <Text as="span" weight="7" size="9">
          {number}
        </Text>
        <Text color="b" low size="4">
          {title}
        </Text>
      </Flex>
      <ChevronDown width={20} direction="right" />
    </Flex>
  )
}

export const JobOptions = () => {
  return (
    <Grid grid="repeat(auto-fit, minmax(250px, 1fr)" gap="4">
      <Option title="New Condidates to Review" number={120} />
      <Option title="Schedule for today" number={5} />
      <Option title="Message Received" number={10} />
    </Grid>
  )
}
