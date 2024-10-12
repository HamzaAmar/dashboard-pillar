import { Avatar, Breadcrumb, Flex, Grid, Heading, Text, Timeline } from '@components/core'
import { TimelineItemProps } from '@components/core/timeline/timeline.type'
import { Cross } from '@components/icons'
import { Preview } from '@components/section'
import * as docs from './timelines.docs'

const Items = (props: Omit<TimelineItemProps, 'children'>) => {
  return (
    <>
      <Timeline.Item {...props}>
        <Heading size="xs">Hello</Heading>
        <Text size="xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
          Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit! Nihil,
          quae.
        </Text>
      </Timeline.Item>
      <Timeline.Item {...props}>
        <Heading size="xs">Hello</Heading>
        <Text size="xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
          Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit! Nihil,
          quae.
        </Text>
      </Timeline.Item>
      <Timeline.Item {...props}>
        <Heading size="xs">Hello</Heading>
        <Text size="xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
          Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit! Nihil,
          quae.
        </Text>
      </Timeline.Item>
    </>
  )
}

const timeline = () => {
  return (
    <section aria-labelledby="timeline--page-id" className="l_flow-lg">
      <Flex items="center" wrap justify="between">
        <Heading as="h1" id="timeline--page-id" size="xs">
          Status Docs Page
        </Heading>
        <Breadcrumb size="sm">
          <Breadcrumb.Item link="../../..">Home</Breadcrumb.Item>
          <Breadcrumb.Item link="../..">Components</Breadcrumb.Item>
          <Breadcrumb.Item link="../">Base UI</Breadcrumb.Item>
          <Breadcrumb.Item link="./" current>
            Status
          </Breadcrumb.Item>
        </Breadcrumb>
      </Flex>
      <Preview
        title="Timeline Color"
        description="color props default to primary possible other values (warning, secondary, slate, yellow, danger, indigo, primary, purple)"
        code={docs.timelineColor}
      >
        <Grid columns="1fr 1fr" className="md_grid-one" gap="xl">
          <Timeline color="slate">
            <Items />
          </Timeline>

          <Timeline color="indigo">
            <Items />
          </Timeline>
          <Timeline color="green">
            <Items />
          </Timeline>
          <Timeline color="red">
            <Items />
          </Timeline>
          <Timeline color="orange">
            <Items />
          </Timeline>
          <Timeline color="purple">
            <Items />
          </Timeline>
        </Grid>
      </Preview>

      <Preview
        title="Timeline Size"
        description=" size props default value sm Possible Values (xs , sm, md , lg, xl)"
        code={docs.timelineSize}
      >
        <Grid columns="1fr 1fr" className="md_grid-one" gap="xl">
          <Timeline size="xs">
            <Items />
          </Timeline>
          <Timeline size="sm">
            <Items />
          </Timeline>
          <Timeline size="md">
            <Items />
          </Timeline>
          <Timeline size="lg">
            <Items />
          </Timeline>
          <Timeline size="xl">
            <Items />
          </Timeline>
        </Grid>
      </Preview>

      <Preview
        title="Radio Variant"
        description="variant props default value is solid possible values (solid, dotted, dashed)"
        code={docs.timelineVariant}
      >
        <Grid columns="1fr 1fr" className="md_grid-one" gap="xl">
          <Timeline variant="solid">
            <Items />
          </Timeline>
          <Timeline variant="dotted">
            <Items />
          </Timeline>
          <Timeline variant="dashed">
            <Items />
          </Timeline>
          <Timeline variant="dashed">
            <Timeline.Item variant="solid">
              <Heading size="xs">Hello</Heading>
              <Text size="xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
                Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit!
                Nihil, quae.
              </Text>
            </Timeline.Item>
            <Timeline.Item variant="dotted">
              <Heading size="xs">Hello</Heading>
              <Text size="xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
                Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit!
                Nihil, quae.
              </Text>
            </Timeline.Item>
            <Timeline.Item>
              <Heading size="xs">Hello</Heading>
              <Text size="xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
                Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit!
                Nihil, quae.
              </Text>
            </Timeline.Item>
            <Timeline.Item>
              <Heading size="xs">Hello</Heading>
              <Text size="xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
                Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit!
                Nihil, quae.
              </Text>
            </Timeline.Item>
          </Timeline>
        </Grid>
      </Preview>

      <Preview
        title="Timeline Corner"
        description="default circle possible values (circle, sm, sharp)"
        code={docs.timelineCorner}
      >
        <Grid columns="1fr 1fr" className="md_grid-one" gap="xl">
          <Timeline corner="sharp">
            <Items />
          </Timeline>
          <Timeline corner="xs">
            <Items />
          </Timeline>
          <Timeline corner="2xs">
            <Items />
          </Timeline>
          <Timeline corner="sm">
            <Items />
          </Timeline>
          <Timeline corner="md">
            <Items />
          </Timeline>
          <Timeline corner="lg">
            <Items />
          </Timeline>
          <Timeline corner="xl">
            <Items />
          </Timeline>
          <Timeline corner="2xl">
            <Items />
          </Timeline>
          <Timeline>
            <Items />
          </Timeline>
        </Grid>
      </Preview>

      <Preview
        title="Timeline Custom bullet"
        description="bullet props accept reactNode You can do what you want in it Icon Image and so on"
        code={docs.timelineCustomBullet}
      >
        <Timeline>
          <Timeline.Item bullet={<Cross />}>
            <Heading size="xs">Hello</Heading>
            <Text size="xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
              Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit!
              Nihil, quae.
            </Text>
          </Timeline.Item>
          <Timeline.Item
            bullet={<Avatar variant="image" size="xs" image="https://picsum.photos/id/152/40/40" title="hello" />}
          >
            <Heading size="xs">Hello</Heading>
            <Text size="xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
              Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit!
              Nihil, quae.
            </Text>
          </Timeline.Item>
          <Timeline.Item>
            <Heading size="xs">Hello</Heading>
            <Text size="xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
              Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit!
              Nihil, quae.
            </Text>
          </Timeline.Item>
          <Timeline.Item>
            <Heading size="xs">Hello</Heading>
            <Text size="xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
              Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit!
              Nihil, quae.
            </Text>
          </Timeline.Item>
        </Timeline>
      </Preview>
    </section>
  )
}

export default timeline
