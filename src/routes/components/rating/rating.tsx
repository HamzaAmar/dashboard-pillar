import { Breadcrumb, BreadcrumbItem, Flex, Grid, Heading, Rating } from '@pillar-ui/core'
import { Preview } from '@components/section'
import * as docs from './rating.docs'

const RadioPage = () => {
  return (
    <section aria-labelledby="rating--page-id" className="l_flow-lg">
      <Flex items="center" wrap justify="between">
        <Heading as="h1" id="rating--page-id" size="3">
          Rating Docs Page
        </Heading>
        <Breadcrumb size="4">
          <BreadcrumbItem link="../../..">Home</BreadcrumbItem>
          <BreadcrumbItem link="../..">Components</BreadcrumbItem>
          <BreadcrumbItem link="../">Composite</BreadcrumbItem>
          <BreadcrumbItem link="./" current>
            Rating
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Grid grid="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="4">
        <Preview
          title="Rating Show Label"
          description="You can show the Text you want in the rating by adding it to showLabel props if it false its still exist but it's only hidden from screen to be accessible "
          code={docs.ratingLevelShowLabel}
        >
          <Flex direction="col" gap="5">
            <Rating rating={3} size="4" />
            <Rating rating={3} />
            <Rating rating={3.4} size="6" />
          </Flex>
        </Preview>
        <Preview title="Rating level" description="rating level from 1 to 5" code={docs.ratingLevel}>
          <Flex direction="col" gap="5">
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
          <Flex direction="col" gap="5">
            <Rating rating={4} size="4" />
            <Rating rating={4} />
            <Rating rating={4} size="6" />
          </Flex>
        </Preview>
        <Preview
          title="Rating Color"
          description="default to warning possible values(danger, indigo , primary, purple, success, warning, mint)"
          code={docs.ratingColor}
        >
          <Flex direction="col" gap="5">
            <Rating color="d" rating={4} />
            <Rating color="i" rating={4} />
            <Rating color="p" rating={4} />
            <Rating color="se" rating={4} />
            <Rating color="su" rating={4} />
            <Rating color="w" rating={4} />
          </Flex>
        </Preview>
        <Preview title="Icon type" description="default to star possible values (heart, star)" code={docs.ratingType}>
          <Flex direction="col" gap="5">
            <Rating icon="heart" rating={4} color="d" />
            <Rating rating={4} />
          </Flex>
        </Preview>
      </Grid>
    </section>
  )
}

export default RadioPage
