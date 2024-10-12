import { Button, Flex, Grid, Heading, Text } from '@components/core'
import { ArrowDown, Plus } from '@components/icons'
import { useId } from 'react'
import { Link } from 'react-router-dom'
import { EcommerceDashboardArticleProps, StatusObjRecord, StatusUnion } from '../../dashboard.type'

const Article = ({ count, title }: EcommerceDashboardArticleProps) => {
  const id = `article-${useId()}-analytics`
  const status: StatusUnion =
    count.previous === count.current ? 'equal' : count.previous > count.current ? 'negative' : 'positive'

  const statusObj: StatusObjRecord = {
    equal: {
      color: 'slate',
      icon: <Plus width="12" />,
    },
    negative: {
      color: 'red',
      icon: <ArrowDown width="20" direction="right-bottom" />,
    },
    positive: {
      color: 'green',
      icon: <ArrowDown width="20" direction="right-top" />,
    },
  }
  return (
    <article aria-labelledby={id} className="l_box u_flex-1 l_flow-sm">
      <Flex as="header" justify="between" items="center">
        <Heading id={id} as="h3" size="xs" color="slate" contrast="low" weight="medium">
          {title}
        </Heading>

        <Text as={Flex} gap="2xs" contrast="low" color={statusObj[status].color} size="sm" weight="medium">
          {statusObj[status].icon}

          <span>16.24 %</span>
        </Text>
      </Flex>
      <div>
        <Text weight="bold">{count.current}</Text>
      </div>
      <Flex as="header" justify="between" items="center">
        <Button as={Link} to="#" size="xs" variant="link">
          View Your Eearning
        </Button>
        <Text>16.24 %</Text>
      </Flex>
    </article>
  )
}

export const SalesAnalytics = () => {
  return (
    <Grid columns="repeat(auto-fit, minmax(240px, 1fr)" gap="sm">
      <Article title="Total Sales" count={{ previous: 1000, current: 1000 }} />
      <Article title="Visitors" count={{ previous: 1000, current: 500 }} />
      <Article title="Total Order" count={{ previous: 1000, current: 1500 }} />
      <Article title="Refunded" count={{ previous: 1000, current: 500 }} />
    </Grid>
  )
}
