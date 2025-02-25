import { Avatar, Button, Chips, Flex, Grid, Heading, IconButton, Paper, Table, Text } from '@pillar-ui/core'
import { DotsHorizontal, Filter } from '@pillar-ui/icons'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

const leaveRequests = [
  {
    id: 1,
    employee: 'John Doe',
    type: 'Vacation',
    startDate: '2024-03-20',
    endDate: '2024-03-25',
    status: 'Pending',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
  },
  {
    id: 2,
    employee: 'Jane Smith',
    type: 'Sick Leave',
    startDate: '2024-03-18',
    endDate: '2024-03-19',
    status: 'Approved',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
  },
  {
    id: 3,
    employee: 'Mike Johnson',
    type: 'Personal',
    startDate: '2024-03-22',
    endDate: '2024-03-22',
    status: 'Pending',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
  },
]

const leaveData = [
  { type: 'Vacation', days: 15, color: '#4caf50' },
  { type: 'Sick Leave', days: 8, color: '#f44336' },
  { type: 'Personal', days: 5, color: '#2196f3' },
  { type: 'Other', days: 2, color: '#ff9800' },
]

export const LeaveManagement = () => {
  return (
    <Paper flow="7" className="l_box">
      <Flex items="center" justify="between">
        <Heading size="6" weight="5">
          Leave Management
        </Heading>
        <Button icon={<DotsHorizontal />}>Manage Leaves</Button>
      </Flex>

      <Grid cols={{ default: '1fr', md: '1fr 2fr' }} gap="4">
        <Paper className="l_box">
          <Heading size="4" className="u_margin-block-end-4">
            Leave Distribution
          </Heading>
          <ResponsiveContainer width="100%" aspect={1}>
            <PieChart>
              <Pie data={leaveData} innerRadius="60%" outerRadius="80%" paddingAngle={5} dataKey="days">
                {leaveData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Paper>

        <Paper className="l_box">
          <Flex justify="between" items="center" className="u_margin-block-end-4">
            <Heading size="4">Upcoming Leave Requests</Heading>
            <IconButton icon={<Filter />} title="Filter requests" />
          </Flex>
          <Table>
            <thead>
              <tr>
                <th>Employee</th>
                <th>Type</th>
                <th>Dates</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {leaveRequests.map((request) => (
                <tr key={request.id}>
                  <td>
                    <Flex gap="2" items="center">
                      <Avatar src={request.avatar} size="4" />
                      <Text>{request.employee}</Text>
                    </Flex>
                  </td>
                  <td>{request.type}</td>
                  <td>
                    <Text size="3">
                      {request.startDate} - {request.endDate}
                    </Text>
                  </td>
                  <td>
                    <Chips color={request.status === 'Approved' ? 'su' : 'w'} variant="soft">
                      {request.status}
                    </Chips>
                  </td>
                  <td>
                    <IconButton variant="text" icon={<DotsHorizontal />} title="More actions" />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Paper>
      </Grid>
    </Paper>
  )
}
