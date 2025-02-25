import { Paper, Flex, Grid, Heading } from '@pillar-ui/core'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

// Sample data for monthly payroll expenses
const monthlyPayrollData = [
  { month: 'Jan', expense: 50000 },
  { month: 'Feb', expense: 52000 },
  { month: 'Mar', expense: 51000 },
  { month: 'Apr', expense: 53000 },
  { month: 'May', expense: 55000 },
  { month: 'Jun', expense: 54000 },
]

// Sample data for historical payroll trends
const historicalPayrollData = [
  { year: 2018, expense: 580000 },
  { year: 2019, expense: 600000 },
  { year: 2020, expense: 620000 },
  { year: 2021, expense: 650000 },
  { year: 2022, expense: 680000 },
]

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)
}

export const PayrollStatistics = () => {
  return (
    <Flex direction="col" gap="6">
      <Heading size="7" weight="5">
        Payroll Statistics
      </Heading>

      <Grid cols={{ default: '1fr', lg: '1fr 1fr' }} gap="4">
        <Paper className="l_box">
          <Heading size="5">Monthly Payroll Expenses</Heading>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyPayrollData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis tickFormatter={(value) => formatCurrency(value)} />
              <Tooltip formatter={(value) => formatCurrency(value as number)} />
              <Legend />
              <Bar dataKey="expense" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </Paper>

        <Paper className="l_box">
          <Heading size="5">Historical Payroll Trends</Heading>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={historicalPayrollData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis tickFormatter={(value) => formatCurrency(value)} />
              <Tooltip formatter={(value) => formatCurrency(value as number)} />
              <Legend />
              <Line type="monotone" dataKey="expense" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </Paper>
      </Grid>
    </Flex>
  )
}
