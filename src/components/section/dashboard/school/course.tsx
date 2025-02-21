import React from 'react'
import { Paper, Flex, Heading, Text, IconButton, ProgressCircle, Grid } from '@pillar-ui/core'
import { DotsHorizontal, ChevronRight } from '@pillar-ui/icons'
import { ASSIGNMENT, COURSES } from './school.data'

// {joinEvent ? (
//     <div>
//       <Flex gap="2" items="center">
//         <Text size="2" color="b" low>
//           Date
//         </Text>
//         <Text size="2" weight="5">
//           {date}
//         </Text>
//       </Flex>
//       <Flex gap="2" items="center">
//         <Text size="2" color="b">
//           Duration
//         </Text>
//         <Text size="2" weight="5">
//           {duration}
//         </Text>
//       </Flex>
//       <Text size="3" weight="5" color="p">
//         Join the event
//       </Text>
//     </div>
//   ) : null}
const TopCoursesCard = () => {
  return (
    <Paper flow="5" className="l_box">
      <Flex justify="between" items="center" className="u_padding-block-4 u_padding-inline-3">
        <Heading size="4" weight="6">
          Top Courses
        </Heading>
        <IconButton variant="text" icon={<DotsHorizontal />} title="More options" size="3" />
      </Flex>

      <Paper flow="4">
        {COURSES.map(({ course, duration, date, views, joinEvent, title, isUpcomingWebinar }, index) => (
          <Flex key={index} justify="between" items="center">
            <Flex gap="3" items="center">
              {course}
              <div>
                <Heading size="4" weight="5" truncate="2">
                  {title}
                </Heading>
                {isUpcomingWebinar ? (
                  <Text size="3" color="su" low>
                    Upcoming Webinar
                  </Text>
                ) : (
                  <Text size="3" color="b">
                    {views}
                  </Text>
                )}
              </div>
            </Flex>
          </Flex>
        ))}
      </Paper>
    </Paper>
  )
}

const AssignmentProgressCard = () => {
  return (
    <Paper flow="5" className="l_box">
      <Flex justify="between" items="center" gap="2">
        <Heading size="4" weight="6">
          Assignment Progress
        </Heading>
        <IconButton variant="text" icon={<DotsHorizontal />} title="Settings" size="4" />
      </Flex>

      <Flex direction="col" gap="3" className="u_padding-inline-3 u_padding-bottom-4">
        {ASSIGNMENT.map((assignment, index) => (
          <Flex key={index} justify="between" items="center">
            <Flex gap="3" items="center">
              <ProgressCircle value={assignment.progress} size="4" color="p" label="hello" />
              <Paper>
                <Heading size="4" weight="5" truncate="2">
                  {assignment.category}
                </Heading>
                <Text size="3" color="b">
                  {assignment.description}
                </Text>
                <Text size="3" color="b" low>
                  {assignment.tasks}
                </Text>
              </Paper>
            </Flex>
            <IconButton variant="soft" icon={<ChevronRight />} size="3" title="View details" />
          </Flex>
        ))}
      </Flex>
    </Paper>
  )
}

export const DashboardCoursesCards = () => {
  return (
    <Grid gap="4" cols={{ default: '1fr', md: '1fr 1fr' }}>
      <TopCoursesCard />
      <AssignmentProgressCard />
    </Grid>
  )
}
