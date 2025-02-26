import React from 'react'
import { Avatar, Chips, Flex, Grid, Heading, IconButton, Paper, Table, Text } from '@pillar-ui/core'
import { DotsHorizontal } from '@pillar-ui/icons'
import { Legend, PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer, Tooltip } from 'recharts'
import { formatPrice } from '@utils/formatNumber'

const TASKS = [
  { id: 1, title: 'Sales Accounting', status: 'completed' },
  { id: 2, title: 'Meeting with Sales Team', status: 'not_started' },
  { id: 3, title: 'Added New Customers', status: 'completed' },
  { id: 4, title: 'Customers Meeting', status: 'in_progress' },
]

// Sample data for Leads
const LEADS = [
  {
    id: 1,
    name: 'Socrates Itumay',
    email: 'socratesitumay@gmail.com',
    revenue: 1835,
    status: 'Hot',
    avatar: 'https://i.pravatar.cc/60?img=1',
  },
  {
    id: 2,
    name: 'Json Taylor',
    email: 'json241@gmail.com',
    revenue: 28,
    status: 'Warm',
    avatar: 'https://i.pravatar.cc/60?img=2',
  },
  {
    id: 3,
    name: 'Suzika Stallone',
    email: 'suzikastallone@gmail.com',
    revenue: 2844,
    status: 'Hot',
    avatar: 'https://i.pravatar.cc/60?img=3',
  },
  {
    id: 4,
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    revenue: 1200,
    status: 'Cold',
    avatar: 'https://i.pravatar.cc/60?img=4',
  },
  {
    id: 5,
    name: 'Bob Williams',
    email: 'bob.williams@example.com',
    revenue: 3500,
    status: 'Hot',
    avatar: 'https://i.pravatar.cc/60?img=5',
  },
  {
    id: 6,
    name: 'Charlie Brown',
    email: 'charlie.brown@example.com',
    revenue: 800,
    status: 'Warm',
    avatar: 'https://i.pravatar.cc/60?img=6',
  },

  {
    id: 10,
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    revenue: 1200,
    status: 'Cold',
    avatar: 'https://i.pravatar.cc/60?img=10',
  },
  {
    id: 11,
    name: 'Bob Williams',
    email: 'bob.williams@example.com',
    revenue: 3500,
    status: 'Hot',
    avatar: 'https://i.pravatar.cc/60?img=11',
  },
  {
    id: 12,
    name: 'Charlie Brown',
    email: 'charlie.brown@example.com',
    revenue: 800,
    status: 'Warm',
    avatar: 'https://i.pravatar.cc/60?img=12',
  },
  {
    id: 13,
    name: 'David Miller',
    email: 'david.miller@example.com',
    revenue: 2100,
    status: 'Hot',
    avatar: 'https://i.pravatar.cc/60?img=13',
  },
  {
    id: 8,
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    revenue: 500,
    status: 'Cold',
    avatar: 'https://i.pravatar.cc/60?img=8',
  },
  {
    id: 9,
    name: 'Frank Garcia',
    email: 'frank.garcia@example.com',
    revenue: 1800,
    status: 'Warm',
    avatar: 'https://i.pravatar.cc/60?img=9',
  },
]

const LEADS_OVERVIEW = [
  {
    label: 'Engagement',
    value: 80,
  },
  {
    label: 'Conversion',
    value: 70,
  },
  {
    label: 'Revenue',
    value: 90,
  },
  {
    label: 'Lead Quality',
    value: 75,
  },
  {
    label: 'Follow-up',
    value: 85,
  },
]

export const Leads = () => {
  return (
    <Grid cols={{ default: 'minmax(0,1fr)', md: '1fr minmax(100px,1fr)', lg: '1.75fr minmax(100px, 3fr)' }} gap="4">
      <Paper flow="4">
        <Paper className="l_box" flow="4">
          <Heading size="4" as="h2">
            Tasks
          </Heading>
          {TASKS.map((task) => (
            <Flex key={task.id} justify="between" items="center">
              <Flex gap="2" items="center">
                <Chips color={task.status === 'completed' ? 'su' : 'w'}>{task.status}</Chips>
                <Text size="3" low color="b">
                  {task.title}
                </Text>
              </Flex>
              <IconButton icon={<DotsHorizontal />} title="More options" size="3" variant="text" />
            </Flex>
          ))}
        </Paper>
        <Paper className="l_box" flow="4">
          <Heading size="4" as="h2">
            Leads Overview
          </Heading>
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart margin={{ top: 10, right: 30, left: 30, bottom: 10 }} data={LEADS_OVERVIEW}>
              <PolarGrid stroke="var(--B4)" />
              <PolarAngleAxis dataKey="label" fontSize={11} />
              <Radar dataKey="value" stroke="var(--I9)" fill="var(--I9)" fillOpacity={0.6} />
              <Tooltip />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </Paper>
      </Paper>

      <Paper className="l_box" flow="4">
        <Heading size="4" as="h2">
          Top Leads
        </Heading>
        <Table>
          <thead>
            <tr>
              <th>Lead</th>
              <th>Email</th>
              <th>Revenue</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {LEADS.map((lead) => (
              <tr key={lead.id}>
                <td>
                  <Flex gap="2" items="center">
                    <Avatar size="3" src={lead.avatar} />
                    <Text size="3">{lead.name}</Text>
                  </Flex>
                </td>
                <td>
                  <Text size="3">{lead.email}</Text>
                </td>
                <td>
                  <Text size="3">{formatPrice({ number: lead.revenue })}</Text>
                </td>
                <td>
                  <Chips variant="soft" color={lead.status === 'Hot' ? 'w' : 'i'}>
                    {lead.status}
                  </Chips>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Paper>
    </Grid>
  )
}
