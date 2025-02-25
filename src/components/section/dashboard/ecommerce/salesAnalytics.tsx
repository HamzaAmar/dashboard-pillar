import { Button, Flex, Grid, Heading, IconButton, Paper, Text } from '@pillar-ui/core'
import { ArrowDown, DotsHorizontal, Plus } from '@pillar-ui/icons'
import { useId } from 'react'
import { Link } from 'react-router-dom'
import { EcommerceDashboardArticleProps, StatusObjRecord, StatusUnion } from '../dashboard.type'

const statusObj: StatusObjRecord = {
  equal: {
    color: 'b',
    icon: <Plus width="12" />,
  },
  negative: {
    color: 'd',
    icon: <ArrowDown width="20" direction="right-bottom" />,
  },
  positive: {
    color: 'su',
    icon: <ArrowDown width="20" direction="right-top" />,
  },
}

const Article = ({ count, title }: EcommerceDashboardArticleProps) => {
  const id = `article-${useId()}-analytics`
  const status: StatusUnion =
    count.previous === count.current ? 'equal' : count.previous > count.current ? 'negative' : 'positive'

  return (
    <Paper as="article" aria-labelledby={id} className="l_box fl-1">
      <Flex as="header" justify="between" items="center">
        <Heading id={id} as="h3" size="3" color="b" low weight="5">
          {title}
        </Heading>
        <IconButton size="4" variant="text" icon={<DotsHorizontal />} title="Settings" />
      </Flex>
      <div>
        <Text size="8" weight="7">
          {count.current}
        </Text>
      </div>
      <Flex as="header" justify="between" items="center">
        <Button as={Link} to="#" size="3" variant="soft" color="b">
          View Your Earning
        </Button>
        <Text as={Flex} gap="1" low color={statusObj[status].color} size="3" weight="5">
          {statusObj[status].icon}

          <span>16.24 %</span>
        </Text>
      </Flex>
    </Paper>
  )
}

export const SalesAnalytics = () => {
  return (
    <Grid cols={{ default: 'repeat(auto-fit, minmax(240px, 1fr)' }} gap="4">
      <Article title="Total Sales" count={{ previous: 1000, current: 1000 }} />
      <Article title="Visitors" count={{ previous: 1000, current: 500 }} />
      <Article title="Total Order" count={{ previous: 1000, current: 1500 }} />
      <Article title="Refunded" count={{ previous: 1000, current: 500 }} />
    </Grid>
  )
}
