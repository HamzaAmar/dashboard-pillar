import { Rating } from '@components/composition'
import { Breadcrumb, Flex, Grid, Heading } from '@components/core'
import { Preview } from '@components/section'
import * as docs from './rating.docs'

const RadioPage = () => {
  return (
    <section aria-labelledby="rating--page-id" className="l_flow-lg">
      <Flex items="center" wrap justify="between">
        <Heading as="h1" id="rating--page-id" size="xs">
          Rating Docs Page
        </Heading>
        <Breadcrumb size="sm">
          <Breadcrumb.Item link="../../..">Home</Breadcrumb.Item>
          <Breadcrumb.Item link="../..">Components</Breadcrumb.Item>
          <Breadcrumb.Item link="../">Composite</Breadcrumb.Item>
          <Breadcrumb.Item link="./" current>
            Rating
          </Breadcrumb.Item>
        </Breadcrumb>
      </Flex>
      <Grid columns="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="sm">
        <Preview
          title="Rating Show Label"
          description="You can show the Text you want in the rating by adding it to showLabel props if it false its still exist but it's only hidden from screen to be accessible "
          code={docs.ratingLevelShowLabel}
        >
          <Flex direction="column" gap="md">
            <Rating rating={3} showLabel size="sm" />
            <Rating rating={3} showLabel />
            <Rating rating={3.4} showLabel size="lg" />
          </Flex>
        </Preview>
        <Preview title="Rating level" description="rating level from 1 to 5" code={docs.ratingLevel}>
          <Flex direction="column" gap="md">
            <Rating rating={1} />
            <Rating rating={2} />
            <Rating rating={3} />
            <Rating rating={4} />
            <Rating rating={5} />
          </Flex>
        </Preview>
        <Preview
          title="Rating Size"
          description="default to (md: medium) other possible values(sm, md, lg)"
          code={docs.ratingSize}
        >
          <Flex direction="column" gap="md">
            <Rating rating={4} size="sm" />
            <Rating rating={4} />
            <Rating rating={4} size="lg" />
          </Flex>
        </Preview>
        <Preview
          title="Rating Color"
          description="default to warning possible values(danger, indigo , primary, purple, success, warning, mint)"
          code={docs.ratingColor}
        >
          <Flex direction="column" gap="md">
            <Rating color="danger" rating={4} />
            <Rating color="indigo" rating={4} />
            <Rating color="primary" rating={4} />
            <Rating color="purple" rating={4} />
            <Rating color="success" rating={4} />
            <Rating color="warning" rating={4} />
          </Flex>
        </Preview>
        <Preview title="Icon type" description="default to star possible values (heart, star)" code={docs.ratingType}>
          <Flex direction="column" gap="md">
            <Rating icon="heart" rating={4} color="danger" />
            <Rating rating={4} />
          </Flex>
        </Preview>
      </Grid>
    </section>
  )
}

export default RadioPage
