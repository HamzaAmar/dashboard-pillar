import { BarStackChart } from '@components/chart'
import { Flex, Heading, Paper, Text } from '@pillar-ui/core'
import { ArrowDown } from '@components/icons'
import { ParentSize } from '@visx/responsive'
import { useId } from 'react'

import type { JobStaticArticleProps } from './jobs.type'

export const JobStaticArticle = ({ city, number, color }: JobStaticArticleProps) => {
  const id = `city-${useId()}-jobs`
  return (
    <article aria-labelledby={id} className={`l_box job-static-article u_${color}`}>
      <Heading id={id} as="h3" size="4">
        {city} Jobs
      </Heading>
      <Text as="span" weight="7" size="9">
        {number}
      </Text>
      <Flex justify="between">
        <Text size="4" low color={color}>
          This Week
        </Text>
        <Flex weight="7" low gap="1" color={color} as={Text} size="4">
          <span>+30%</span>
          <ArrowDown direction="right-top" width={16} />
        </Flex>
      </Flex>
    </article>
  )
}

export const JobStatics = () => {
  return (
    <Paper as="section" flow="5" className="l_box fl-1">
      <header>
        <Heading as="h2">Job Statistics</Heading>
        <Text size="3" color="b" low>
          Show JobStatistics Mars 21-28
        </Text>
      </header>
      <ParentSize>{(parent) => <BarStackChart width={parent.width} height={300} />}</ParentSize>
    </Paper>
  )
}
