const item = `
const Items = (props: Omit<TimelineItemProps, "children">) => {
    return (
      <>
        <TimelineItem {...props}>
          <Heading size="3">Hello</Heading>
          <Text size="3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            laboriosam cumque voluptatem magnam ad. Aspernatur explicabo a, est
            similique sed debitis eveniet alias repellendus doloremque nobis nisi
            odit! Nihil, quae.
          </Text>
        </TimelineItem>
        <TimelineItem {...props}>
          <Heading size="3">Hello</Heading>
          <Text size="3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            laboriosam cumque voluptatem magnam ad. Aspernatur explicabo a, est
            similique sed debitis eveniet alias repellendus doloremque nobis nisi
            odit! Nihil, quae.
          </Text>
        </TimelineItem>
        <TimelineItem {...props}>
          <Heading size="3">Hello</Heading>
          <Text size="3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            laboriosam cumque voluptatem magnam ad. Aspernatur explicabo a, est
            similique sed debitis eveniet alias repellendus doloremque nobis nisi
            odit! Nihil, quae.
          </Text>
        </TimelineItem>
      </>
    );
}`

export const timelineColor = `
import { Timeline } from "@pillar-ui/core";
${item}

const TimelineTest = ()=>{
    return(
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
    )
}`
export const timelineSize = `
import { Timeline } from "@pillar-ui/core";

${item}

const TimelineTest = ()=>{
    return(
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
    )
}`
export const timelineCorner = `
import { Timeline } from "@pillar-ui/core";

${item}

const TimelineTest = ()=>{
    return(
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
    )
}`
export const timelineVariant = `
import { Timeline } from "@pillar-ui/core";

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
            <TimelineItem variant="solid">
              <Heading size="3">Hello</Heading>
              <Text size="3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                laboriosam cumque voluptatem magnam ad. Aspernatur explicabo a,
                est similique sed debitis eveniet alias repellendus doloremque
                nobis nisi odit! Nihil, quae.
              </Text>
            </TimelineItem>
            <TimelineItem variant="dotted">
              <Heading size="3">Hello</Heading>
              <Text size="3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                laboriosam cumque voluptatem magnam ad. Aspernatur explicabo a,
                est similique sed debitis eveniet alias repellendus doloremque
                nobis nisi odit! Nihil, quae.
              </Text>
            </TimelineItem>
            <TimelineItem>
              <Heading size="3">Hello</Heading>
              <Text size="3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                laboriosam cumque voluptatem magnam ad. Aspernatur explicabo a,
                est similique sed debitis eveniet alias repellendus doloremque
                nobis nisi odit! Nihil, quae.
              </Text>
            </TimelineItem>
            <TimelineItem>
              <Heading size="3">Hello</Heading>
              <Text size="3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                laboriosam cumque voluptatem magnam ad. Aspernatur explicabo a,
                est similique sed debitis eveniet alias repellendus doloremque
                nobis nisi odit! Nihil, quae.
              </Text>
            </TimelineItem>
          </Timeline>
    )
}`
export const timelineCustomBullet = `
import { Timeline } from "@pillar-ui/core";

const TimelineTest = ()=>{
    return(
        <Timeline>
        <TimelineItem bullet={<Cross />}>
          <Heading size="3">Hello</Heading>
          <Text size="3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            laboriosam cumque voluptatem magnam ad. Aspernatur explicabo a,
            est similique sed debitis eveniet alias repellendus doloremque
            nobis nisi odit! Nihil, quae.
          </Text>
        </TimelineItem>
        <TimelineItem
          bullet={
            <Avatar
              
              size="3"
              image="https://picsum.photos/id/152/40/40"
              title="hello"
            />
          }
        >
          <Heading size="3">Hello</Heading>
          <Text size="3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            laboriosam cumque voluptatem magnam ad. Aspernatur explicabo a,
            est similique sed debitis eveniet alias repellendus doloremque
            nobis nisi odit! Nihil, quae.
          </Text>
        </TimelineItem>
        <TimelineItem>
          <Heading size="3">Hello</Heading>
          <Text size="3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            laboriosam cumque voluptatem magnam ad. Aspernatur explicabo a,
            est similique sed debitis eveniet alias repellendus doloremque
            nobis nisi odit! Nihil, quae.
          </Text>
        </TimelineItem>
        <TimelineItem>
          <Heading size="3">Hello</Heading>
          <Text size="3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            laboriosam cumque voluptatem magnam ad. Aspernatur explicabo a,
            est similique sed debitis eveniet alias repellendus doloremque
            nobis nisi odit! Nihil, quae.
          </Text>
        </TimelineItem>
      </Timeline>
    )
}`
