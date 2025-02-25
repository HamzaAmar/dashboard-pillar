import { useState } from 'react'
import { Paper, Flex, Grid, Heading, Table, Chips } from '@pillar-ui/core'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

// Sample data for candidate stages
const stageData = [
  { name: 'Applied', count: 100 },
  { name: 'Screening', count: 75 },
  { name: 'Interview', count: 50 },
  { name: 'Offer', count: 25 },
  { name: 'Hired', count: 15 },
]

// Sample data for interview outcomes
const outcomeData = [
  { name: 'Passed', value: 60, color: '#4caf50' },
  { name: 'Failed', value: 30, color: '#f44336' },
  { name: 'Pending', value: 10, color: '#ffc107' },
]

// Sample candidate data
const candidateData = [
  { id: 1, name: 'John Doe', position: 'Software Engineer', stage: 'Interview', status: 'Active' },
  { id: 2, name: 'Jane Smith', position: 'Product Manager', stage: 'Offer', status: 'Active' },
  { id: 3, name: 'Bob Johnson', position: 'UX Designer', stage: 'Screening', status: 'On Hold' },
  { id: 4, name: 'Alice Brown', position: 'Data Analyst', stage: 'Applied', status: 'Active' },
  { id: 5, name: 'Charlie Wilson', position: 'DevOps Engineer', stage: 'Hired', status: 'Completed' },
]

export const RecruitmentPipeline = () => {
  const [sortColumn, setSortColumn] = useState('')
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')

  const handleSort = (column: string) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortColumn(column)
      setSortDirection('asc')
    }
  }

  const sortedCandidates = [...candidateData].sort((a, b) => {
    if (a[sortColumn as keyof typeof a] < b[sortColumn as keyof typeof b]) return sortDirection === 'asc' ? -1 : 1
    if (a[sortColumn as keyof typeof a] > b[sortColumn as keyof typeof b]) return sortDirection === 'asc' ? 1 : -1
    return 0
  })

  return (
    <Flex direction="col" gap="6">
      <Heading size="7" weight="5">
        Recruitment Pipeline
      </Heading>

      <Grid cols={{ default: '1fr', lg: '1fr 1fr' }} gap="4">
        <Paper className="l_box">
          <Heading size="5">Candidates per Stage</Heading>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={stageData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </Paper>

        <Paper className="l_box">
          <Heading size="5">Interview Outcomes</Heading>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={outcomeData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                {outcomeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Paper>
      </Grid>

      <Paper className="l_box">
        <Heading size="5">Candidate Details</Heading>
        <Table>
          <thead>
            <tr>
              <th onClick={() => handleSort('name')}>Name</th>
              <th onClick={() => handleSort('position')}>Position</th>
              <th onClick={() => handleSort('stage')}>Stage</th>
              <th onClick={() => handleSort('status')}>Status</th>
            </tr>
          </thead>
          <tbody>
            {sortedCandidates.map((candidate) => (
              <tr key={candidate.id}>
                <td>{candidate.name}</td>
                <td>{candidate.position}</td>
                <td>{candidate.stage}</td>
                <td>
                  <Chips color={candidate.status === 'Active' ? 'su' : candidate.status === 'On Hold' ? 'w' : 'p'}>
                    {candidate.status}
                  </Chips>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Paper>
    </Flex>
  )
}
