const item = `
const Items = (props: Omit<TimelineItemProps, "children">) => {
    return (
      <>
        <Timeline.Item {...props}>
          <Heading size="xs">Hello</Heading>
          <Text size="xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            laboriosam cumque voluptatem magnam ad. Aspernatur explicabo a, est
            similique sed debitis eveniet alias repellendus doloremque nobis nisi
            odit! Nihil, quae.
          </Text>
        </Timeline.Item>
        <Timeline.Item {...props}>
          <Heading size="xs">Hello</Heading>
          <Text size="xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            laboriosam cumque voluptatem magnam ad. Aspernatur explicabo a, est
            similique sed debitis eveniet alias repellendus doloremque nobis nisi
            odit! Nihil, quae.
          </Text>
        </Timeline.Item>
        <Timeline.Item {...props}>
          <Heading size="xs">Hello</Heading>
          <Text size="xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            laboriosam cumque voluptatem magnam ad. Aspernatur explicabo a, est
            similique sed debitis eveniet alias repellendus doloremque nobis nisi
            odit! Nihil, quae.
          </Text>
        </Timeline.Item>
      </>
    );
}`

export const timelineColor = `
import { Timeline } from "@components/core";
${item}

const TimelineTest = ()=>{
    return(
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
    )
}`
export const timelineSize = `
import { Timeline } from "@components/core";

${item}

const TimelineTest = ()=>{
    return(
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
    )
}`
export const timelineCorner = `
import { Timeline } from "@components/core";

${item}

const TimelineTest = ()=>{
    return(
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
    )
}`
export const timelineVariant = `
import { Timeline } from "@components/core";

const TimelineTest = ()=>{
    return(
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                laboriosam cumque voluptatem magnam ad. Aspernatur explicabo a,
                est similique sed debitis eveniet alias repellendus doloremque
                nobis nisi odit! Nihil, quae.
              </Text>
            </Timeline.Item>
            <Timeline.Item variant="dotted">
              <Heading size="xs">Hello</Heading>
              <Text size="xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                laboriosam cumque voluptatem magnam ad. Aspernatur explicabo a,
                est similique sed debitis eveniet alias repellendus doloremque
                nobis nisi odit! Nihil, quae.
              </Text>
            </Timeline.Item>
            <Timeline.Item>
              <Heading size="xs">Hello</Heading>
              <Text size="xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                laboriosam cumque voluptatem magnam ad. Aspernatur explicabo a,
                est similique sed debitis eveniet alias repellendus doloremque
                nobis nisi odit! Nihil, quae.
              </Text>
            </Timeline.Item>
            <Timeline.Item>
              <Heading size="xs">Hello</Heading>
              <Text size="xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                laboriosam cumque voluptatem magnam ad. Aspernatur explicabo a,
                est similique sed debitis eveniet alias repellendus doloremque
                nobis nisi odit! Nihil, quae.
              </Text>
            </Timeline.Item>
          </Timeline>
    )
}`
export const timelineCustomBullet = `
import { Timeline } from "@components/core";

const TimelineTest = ()=>{
    return(
        <Timeline>
        <Timeline.Item bullet={<Cross />}>
          <Heading size="xs">Hello</Heading>
          <Text size="xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            laboriosam cumque voluptatem magnam ad. Aspernatur explicabo a,
            est similique sed debitis eveniet alias repellendus doloremque
            nobis nisi odit! Nihil, quae.
          </Text>
        </Timeline.Item>
        <Timeline.Item
          bullet={
            <Avatar
              variant="image"
              size="xs"
              image="https://picsum.photos/id/152/40/40"
              title="hello"
            />
          }
        >
          <Heading size="xs">Hello</Heading>
          <Text size="xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            laboriosam cumque voluptatem magnam ad. Aspernatur explicabo a,
            est similique sed debitis eveniet alias repellendus doloremque
            nobis nisi odit! Nihil, quae.
          </Text>
        </Timeline.Item>
        <Timeline.Item>
          <Heading size="xs">Hello</Heading>
          <Text size="xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            laboriosam cumque voluptatem magnam ad. Aspernatur explicabo a,
            est similique sed debitis eveniet alias repellendus doloremque
            nobis nisi odit! Nihil, quae.
          </Text>
        </Timeline.Item>
        <Timeline.Item>
          <Heading size="xs">Hello</Heading>
          <Text size="xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            laboriosam cumque voluptatem magnam ad. Aspernatur explicabo a,
            est similique sed debitis eveniet alias repellendus doloremque
            nobis nisi odit! Nihil, quae.
          </Text>
        </Timeline.Item>
      </Timeline>
    )
}`
