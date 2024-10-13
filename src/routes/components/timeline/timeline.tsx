import {
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  Flex,
  Grid,
  Heading,
  Text,
  Timeline,
  TimelineItem,
  TimelineItemProps,
} from '@pillar-ui/core'
import { Cross } from '@components/icons'
import { Preview } from '@components/section'
import * as docs from './timelines.docs'

const Items = (props: Omit<TimelineItemProps, 'children'>) => {
  return (
    <>
      <TimelineItem {...props}>
        <Heading size="3">Hello</Heading>
        <Text size="3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
          Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit! Nihil,
          quae.
        </Text>
      </TimelineItem>
      <TimelineItem {...props}>
        <Heading size="3">Hello</Heading>
        <Text size="3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
          Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit! Nihil,
          quae.
        </Text>
      </TimelineItem>
      <TimelineItem {...props}>
        <Heading size="3">Hello</Heading>
        <Text size="3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
          Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit! Nihil,
          quae.
        </Text>
      </TimelineItem>
    </>
  )
}

const timeline = () => {
  return (
    <section aria-labelledby="timeline--page-id" className="l_flow-lg">
      <Flex items="center" wrap justify="between">
        <Heading as="h1" id="timeline--page-id" size="3">
          Status Docs Page
        </Heading>
        <Breadcrumb size="4">
          <BreadcrumbItem link="../../..">Home</BreadcrumbItem>
          <BreadcrumbItem link="../..">Components</BreadcrumbItem>
          <BreadcrumbItem link="../">Base UI</BreadcrumbItem>
          <BreadcrumbItem link="./" current>
            Status
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Preview
        title="Timeline Color"
        description="color props default to primary possible other values (warning, secondary, slate, yellow, danger, indigo, primary, purple)"
        code={docs.timelineColor}
      >
        <Grid grid="1fr 1fr" className="md_grid-one" gap="7">
          <Timeline color="b">
            <Items />
          </Timeline>

          <Timeline color="i">
            <Items />
          </Timeline>
          <Timeline color="su">
            <Items />
          </Timeline>
          <Timeline color="d">
            <Items />
          </Timeline>
          <Timeline color="w">
            <Items />
          </Timeline>
          <Timeline color="se">
            <Items />
          </Timeline>
        </Grid>
      </Preview>

      <Preview
        title="Timeline Size"
        description=" size props default value sm Possible Values (xs , sm, md , lg, xl)"
        code={docs.timelineSize}
      >
        <Grid grid="1fr 1fr" className="md_grid-one" gap="7">
          <Timeline size="3">
            <Items />
          </Timeline>
          <Timeline size="4">
            <Items />
          </Timeline>
          <Timeline size="5">
            <Items />
          </Timeline>
          <Timeline size="6">
            <Items />
          </Timeline>
          <Timeline size="7">
            <Items />
          </Timeline>
        </Grid>
      </Preview>

      <Preview
        title="Radio Variant"
        description="variant props default value is solid possible values (solid, dotted, dashed)"
        code={docs.timelineVariant}
      >
        <Grid grid="1fr 1fr" className="md_grid-one" gap="7">
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
            <TimelineItem variant="solid">
              <Heading size="3">Hello</Heading>
              <Text size="3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
                Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit!
                Nihil, quae.
              </Text>
            </TimelineItem>
            <TimelineItem variant="dotted">
              <Heading size="3">Hello</Heading>
              <Text size="3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
                Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit!
                Nihil, quae.
              </Text>
            </TimelineItem>
            <TimelineItem>
              <Heading size="3">Hello</Heading>
              <Text size="3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
                Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit!
                Nihil, quae.
              </Text>
            </TimelineItem>
            <TimelineItem>
              <Heading size="3">Hello</Heading>
              <Text size="3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
                Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit!
                Nihil, quae.
              </Text>
            </TimelineItem>
          </Timeline>
        </Grid>
      </Preview>

      <Preview
        title="Timeline Corner"
        description="default circle possible values (circle, sm, sharp)"
        code={docs.timelineCorner}
      >
        <Grid grid="1fr 1fr" className="md_grid-one" gap="7">
          <Timeline corner="0">
            <Items />
          </Timeline>
          <Timeline corner="2">
            <Items />
          </Timeline>
          <Timeline corner="1">
            <Items />
          </Timeline>
          <Timeline corner="3">
            <Items />
          </Timeline>
          <Timeline corner="4">
            <Items />
          </Timeline>
          <Timeline corner="5">
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
          <TimelineItem bullet={<Cross />}>
            <Heading size="3">Hello</Heading>
            <Text size="3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
              Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit!
              Nihil, quae.
            </Text>
          </TimelineItem>
          <TimelineItem bullet={<Avatar size="3" image="https://picsum.photos/id/152/40/40" title="hello" />}>
            <Heading size="3">Hello</Heading>
            <Text size="3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
              Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit!
              Nihil, quae.
            </Text>
          </TimelineItem>
          <TimelineItem>
            <Heading size="3">Hello</Heading>
            <Text size="3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
              Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit!
              Nihil, quae.
            </Text>
          </TimelineItem>
          <TimelineItem>
            <Heading size="3">Hello</Heading>
            <Text size="3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
              Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit!
              Nihil, quae.
            </Text>
          </TimelineItem>
        </Timeline>
      </Preview>
    </section>
  )
}

export default timeline
