import { Heading, Paper } from '@pillar-ui/core'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Active', value: 400 },
  { name: 'Rest', value: 300 },
]

const COLORS = ['#0088FE', '#00C49F']

export default function OverallSummary() {
  return (
    <Paper className="l_box">
      <Heading>Overall Summary</Heading>
      <div className="text-center">
        <h3 className="text-2xl font-bold">10,234</h3>
        <p>Total Steps</p>
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-bold">2,500</h3>
        <p>Calories Burned</p>
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-bold">120 min</h3>
        <p>Active Minutes</p>
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-bold">3</h3>
        <p>Workouts Completed</p>
      </div>
      <div className="w-48 h-48">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <p className="text-center mt-2">Activity vs Rest</p>
      </div>
    </Paper>
  )
}
