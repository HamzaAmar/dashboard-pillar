import React from 'react'
import { Flex, Grid, Heading, Paper, Select, Text } from '@pillar-ui/core'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'

const departmentData = [
  { name: 'Engineering', count: 45, color: '#4caf50' },
  { name: 'Marketing', count: 20, color: '#2196f3' },
  { name: 'Sales', count: 30, color: '#ff9800' },
  { name: 'HR', count: 10, color: '#9c27b0' },
]

export const DepartmentBreakdown = () => {
  const [filter, setFilter] = React.useState('all')

  const filteredData =
    filter === 'all' ? departmentData : departmentData.filter((dept) => dept.name.toLowerCase() === filter)

  return (
    <Paper flow="7" className="l_box">
      <Flex items="center" justify="between">
        <Heading size="6" weight="5">
          Department Breakdown
        </Heading>
        <Select value={filter} onChange={(e) => setFilter(e.target.value)} className="u_width-32">
          <option value="all">All Departments</option>
          {departmentData.map((dept) => (
            <option key={dept.name} value={dept.name.toLowerCase()}>
              {dept.name}
            </option>
          ))}
        </Select>
      </Flex>

      <ResponsiveContainer width="100%" aspect={2}>
        <PieChart>
          <Pie
            data={filteredData}
            innerRadius="60%"
            outerRadius="80%"
            paddingAngle={5}
            dataKey="count"
            label={({ name, count }) => `${name}: ${count}`}
          >
            {filteredData.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>

      <Grid cols={{ default: '1fr', md: 'repeat(4, 1fr)' }} gap="4">
        {departmentData.map((dept) => (
          <Paper key={dept.name} className="l_box">
            <Flex direction="col" gap="2">
              <Text color="b" low>
                {dept.name}
              </Text>
              <Text size="6" weight="6">
                {dept.count}
              </Text>
              <Text size="3" color="b" low>
                Employees
              </Text>
            </Flex>
          </Paper>
        ))}
      </Grid>
    </Paper>
  )
}
