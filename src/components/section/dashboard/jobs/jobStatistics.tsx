import React from 'react'
import { Paper, Flex, Heading, Text, IconButton, Avatar, Color, Button, Grid } from '@pillar-ui/core'
import { DotsHorizontal } from '@pillar-ui/icons'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts'

interface StatisticsChartData {
  month: string
  employers: number
  candidates: number
}

interface ActivityData {
  userName: string
  userAvatar: string
  activity: string
  jobTitle: string
  timestamp: string
  initials: string
  color: Color
}

const chartData: StatisticsChartData[] = [
  { month: 'Jan', employers: 40, candidates: 30 },
  { month: 'Feb', employers: 50, candidates: 35 },
  { month: 'Mar', employers: 60, candidates: 45 },
  { month: 'Apr', employers: 70, candidates: 65 },
  { month: 'May', employers: 55, candidates: 50 },
  { month: 'Jun', employers: 45, candidates: 40 },
  { month: 'Jul', employers: 50, candidates: 48 },
  { month: 'Aug', employers: 65, candidates: 55 },
  { month: 'Sep', employers: 75, candidates: 68 },
  { month: 'Oct', employers: 80, candidates: 75 },
  { month: 'Nov', employers: 85, candidates: 80 },
  { month: 'Dec', employers: 90, candidates: 82 },
]

const StatisticsCard = () => {
  return (
    <Paper flow="4" className="l_box">
      <Flex justify="between" items="center">
        <Heading size="4" weight="6">
          Statistics
        </Heading>
        <IconButton variant="text" icon={<DotsHorizontal />} title="More options" size="4" />
      </Flex>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={chartData} margin={{ top: 0, right: 16, left: 0, bottom: 0 }}>
          <defs>
            {/* Pattern for desktop area */}
            <pattern id="employersPattern" patternUnits="userSpaceOnUse" width="4" height="4">
              <path d="M 0 0 L 4 4 M -1 3 L 1 5 M 3 -1 L 5 1" stroke="var(--P9)" strokeWidth="1" opacity="1" />
            </pattern>

            {/* Pattern for mobile area */}
            <pattern id="candidatesPattern" patternUnits="userSpaceOnUse" width="6" height="6">
              <path d="M 0 6 L 6 0" stroke="var(--D9)" strokeWidth="1" opacity="1" />
              <path d="M 3 9 L 9 3" stroke="var(--D9)" strokeWidth="1" opacity="1" />
              <path d="M -3 3 L 3 -3" stroke="var(--D9)" strokeWidth="1" opacity="1" />
            </pattern>
          </defs>
          <XAxis axisLine={false} dataKey="month" tickLine={false} fontSize={12} angle={-45} textAnchor="end" />
          <YAxis axisLine={false} tickLine={false} fontSize={12} />
          <Tooltip />
          <Legend iconType="plainline" iconSize={12} />
          <Area
            type="monotone"
            dataKey="employers"
            stroke="var(--P9)"
            strokeWidth={2}
            fill="url(#employersPattern)"
            dot={{ r: 3, fill: 'var(--P9)' }}
            name="Employers"
          />
          <Area
            type="monotone"
            dataKey="candidates"
            stroke="var(--D9)"
            fill="url(#candidatesPattern)"
            strokeWidth={2}
            dot={{ r: 3, fill: 'var(--D9)' }}
            name="Candidates"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Paper>
  )
}

const activityData: ActivityData[] = [
  {
    userName: 'John Doe',
    userAvatar: '',
    activity: 'Created job posting for',
    jobTitle: 'Software Engineer',
    timestamp: '27 May, 2024 - 10:15 AM',
    initials: 'JD',
    color: 'p',
  },
  {
    userName: 'Michael Johnson',
    userAvatar: '',
    activity: 'Updated job status to "Filled" for',
    jobTitle: 'Project Manager',
    timestamp: '25 May, 2024 - 11:45 AM',
    initials: 'MJ',
    color: 'd',
  },
  {
    userName: 'Emily Williams',
    userAvatar: '/avatar_emily.png', // Assuming you have avatar in public
    activity: 'Sent interview invitation for',
    jobTitle: 'Data Analyst role to jackson rivera.',
    timestamp: '24 May, 2024 - 9:00 AM',
    initials: 'EW',
    color: 'se', // Not used as avatar src is provided
  },
  {
    userName: 'David Brown',
    userAvatar: '',
    activity: 'Rejected job application for',
    jobTitle: 'Graphic Designer',
    timestamp: '23 May, 2024 - 03:20 PM',
    initials: 'DB',
    color: 'su',
  },
]

const UserActivityCard = () => {
  return (
    <Paper flow="5" className="l_box">
      <Flex justify="between" items="center">
        <Heading size="4" weight="6">
          User Activity
        </Heading>
        <Button size="3">View All →</Button>
      </Flex>

      <Paper flow="4">
        {activityData.map((activityItem, index) => (
          <Paper key={index} flow="2">
            <Flex gap="3" items="start">
              <Avatar src={activityItem.userAvatar} size="4" color={activityItem.color} title={activityItem.userName}>
                {!activityItem.userAvatar && activityItem.initials}
              </Avatar>
              <Paper flow="2">
                <div>
                  <Text size="4" weight="5" truncate="2">
                    {activityItem.userName}
                  </Text>
                  <Text low color="b" size="3">
                    {activityItem.activity}
                    <Text as="span" weight="5">
                      {activityItem.jobTitle}
                    </Text>
                  </Text>
                </div>
                <Text size="2" color="b" low>
                  {activityItem.timestamp}
                </Text>
              </Paper>
            </Flex>
          </Paper>
        ))}
      </Paper>
    </Paper>
  )
}

const StatisticsDashboardPage: React.FC = () => {
  return (
    <Grid cols={{ default: '1fr', md: '5fr 3fr' }} gap="5">
      <StatisticsCard />
      <UserActivityCard />
    </Grid>
  )
}

export default StatisticsDashboardPage
