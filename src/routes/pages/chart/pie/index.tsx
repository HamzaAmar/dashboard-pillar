import { Grid, Paper } from '@pillar-ui/core'
import { PieChart, Pie, Cell, Legend, Tooltip, Label, ResponsiveContainer } from 'recharts'
import { PatternedDonutChart } from './patternDonut'
import TeamActivityChart from './half'

type DataItem = {
  name: string
  value: number
  color: string
}

// Sample data
const data: DataItem[] = [
  { name: 'Group A', value: 500, color: 'var(--Se9)' },
  { name: 'Group B', value: 400, color: 'var(--P9)' },
  { name: 'Group C', value: 300, color: 'var(--Su9)' },
  { name: 'Group D', value: 200, color: 'var(--I9)' },
  { name: 'Group E', value: 100, color: 'var(--W9)' },
]

// Custom label component
const CustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }: any) => {
  const RADIAN = Math.PI / 180
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  const percentValue = (percent * 100).toFixed(0)

  return (
    <text x={x} y={y} fontSize={12} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {percentValue}%
    </text>
  )
}

export const Component = () => {
  return (
    <Paper flow="5" className="l_box">
      <Grid cols={{ default: '1fr', md: '1fr 1fr' }}>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Basic Donut Chart</h3>
          <ResponsiveContainer width="100%" aspect={2 / 1}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius="50%"
                outerRadius="70%"
                stroke="var(--B1)"
                paddingAngle={5}
                radius={4}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Donut Chart with Labels */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Donut Chart with Labels</h3>
          <ResponsiveContainer width="100%" aspect={2 / 1}>
            <PieChart width={400} height={400}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius="50%"
                outerRadius="70%"
                stroke="var(--B1)"
                strokeWidth={3}
                paddingAngle={5}
                dataKey="value"
                label={CustomLabel}
                labelLine={false}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
                <Label value="Total" position="center" fill="var(--B12)" style={{ fontSize: '24px' }} />
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Donut Chart with Labels</h3>
          <ResponsiveContainer width="100%" aspect={2 / 1}>
            <PieChart width={400} height={400}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius="70%"
                stroke="var(--B1)"
                strokeWidth={3}
                paddingAngle={5}
                dataKey="value"
                label={CustomLabel}
                labelLine={false}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
                <Label value="Total" position="center" fill="var(--B12)" style={{ fontSize: '24px' }} />
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Basic Pie Chart */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Basic Pie Chart</h3>
          <ResponsiveContainer width="100%" aspect={2 / 1}>
            <PieChart width={400} height={400}>
              <Pie data={data} cx="50%" cy="50%" outerRadius="70%" stroke="var(--B1)" strokeWidth={3} dataKey="value">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart with Labels */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Pie Chart with Labels</h3>
          <ResponsiveContainer width="100%" aspect={2 / 1}>
            <PieChart width={400} height={400}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius="70%"
                dataKey="value"
                stroke="var(--B1)"
                strokeWidth={3}
                label={CustomLabel}
                labelLine={false}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
                <Label value="Total" position="center" fill="var(--B12)" style={{ fontSize: '24px' }} />
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <PatternedDonutChart />
        <TeamActivityChart />
      </Grid>
    </Paper>
  )
}
