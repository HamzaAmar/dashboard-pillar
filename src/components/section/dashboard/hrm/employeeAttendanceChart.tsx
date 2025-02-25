import type React from 'react'
import { useState } from 'react'
import { Paper, Flex, Heading, Select } from '@pillar-ui/core'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

// Sample attendance data
const attendanceData = {
  daily: [
    { date: '2023-06-01', attendance: 95 },
    { date: '2023-06-02', attendance: 97 },
    { date: '2023-06-03', attendance: 94 },
    { date: '2023-06-04', attendance: 98 },
    { date: '2023-06-05', attendance: 96 },
    { date: '2023-06-06', attendance: 95 },
    { date: '2023-06-07', attendance: 97 },
  ],
  weekly: [
    { week: 'Week 1', attendance: 96 },
    { week: 'Week 2', attendance: 97 },
    { week: 'Week 3', attendance: 95 },
    { week: 'Week 4', attendance: 98 },
  ],
  monthly: [
    { month: 'Jan', attendance: 96 },
    { month: 'Feb', attendance: 97 },
    { month: 'Mar', attendance: 95 },
    { month: 'Apr', attendance: 98 },
    { month: 'May', attendance: 96 },
    { month: 'Jun', attendance: 97 },
  ],
}

export const EmployeeAttendanceChart = () => {
  const [timeRange, setTimeRange] = useState('daily')

  const handleTimeRangeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTimeRange(event.target.value)
  }

  const data = attendanceData[timeRange as keyof typeof attendanceData]
  const xAxisKey = timeRange === 'daily' ? 'date' : timeRange === 'weekly' ? 'week' : 'month'

  return (
    <Paper className="l_box">
      <Flex direction="col" gap="4">
        <Flex justify="between" items="center">
          <Heading size="5">Employee Attendance Trend</Heading>
          <Select value={timeRange} onChange={handleTimeRangeChange}>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </Select>
        </Flex>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xAxisKey} />
            <YAxis domain={[90, 100]} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="attendance" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </Flex>
    </Paper>
  )
}
