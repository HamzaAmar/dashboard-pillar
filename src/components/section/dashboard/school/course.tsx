import React from 'react'
import { Paper, Flex, Heading, Text, IconButton, ProgressCircle, Grid } from '@pillar-ui/core'
import { DotsHorizontal, ChevronRight } from '@pillar-ui/icons'
import { ASSIGNMENT, COURSES } from './school.data'

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
                  <Text size="3" color="b" low>
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

      <Paper flow="5">
        {ASSIGNMENT.map(({ category, description, progress, tasks, color }, index) => (
          <Flex key={index} justify="between" items="center">
            <Flex gap="3" items="center">
              <ProgressCircle value={progress} size="4" color={color} label="hello" />
              <Paper>
                <Heading size="4" weight="5" truncate="2">
                  {category}
                </Heading>
                <Text size="3" color="b">
                  {description}
                </Text>
                <Text size="3" color="b" low>
                  {tasks}
                </Text>
              </Paper>
            </Flex>
            <IconButton variant="soft" icon={<ChevronRight />} size="3" title="View details" />
          </Flex>
        ))}
      </Paper>
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
