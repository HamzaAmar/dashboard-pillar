import { BarStackChart } from '@components/chart'
import { Flex, Heading, Text } from '@components/core'
import { ArrowDown } from '@components/icons'
import { ParentSize } from '@visx/responsive'
import { useId } from 'react'

import type { JobStaticArticleProps } from '../jobs.type'

export const JobStaticArticle = ({ city, number, color }: JobStaticArticleProps) => {
  const id = `city-${useId()}-jobs`
  return (
    <article aria-labelledby={id} className={`l_box job-static-article u_${color}`}>
      <Heading id={id} as="h3" size="2xs">
        {city} Jobs
      </Heading>
      <Text as="span" weight="bold" size="3xl">
        {number}
      </Text>
      <Flex justify="between">
        <Text size="2xs" color={color}>
          This Week
        </Text>
        <Flex weight="bold" gap="2xs" color={color} as={Text} size="xs">
          <span>+30%</span>
          <ArrowDown direction="right-top" width={16} />
        </Flex>
      </Flex>
    </article>
  )
}

export const JobStatics = () => {
  return (
    <section className="l_box u_flex-1">
      <header>
        <Heading as="h2" size="xs">
          Job Statistics
        </Heading>
        <Text size="xs" color="slate" contrast="low">
          Show JobStatistics Mars 21-28
        </Text>
      </header>
      <Flex>
        <ParentSize>{(parent) => <BarStackChart width={parent.width} height={300} />}</ParentSize>
      </Flex>
    </section>
  )
}
