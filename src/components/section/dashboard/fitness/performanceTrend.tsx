import { Heading, Paper } from '@pillar-ui/core'
import { ArrowBarTop } from '@pillar-ui/icons'
import {
  LabelList,
  RadialBar,
  RadialBarChart,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

// export function PerformanceMetricsTrends() {
//   return (
//     <Paper className="l_box">
//       <Heading>Performance Metrics & Trends</Heading>
//       <ResponsiveContainer width="100%" height={300}>
//         <LineChart data={data}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="date" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Line type="monotone" dataKey="endurance" stroke="#8884d8" />
//           <Line type="monotone" dataKey="strength" stroke="#82ca9d" />
//           <Line type="monotone" dataKey="flexibility" stroke="#ffc658" />
//         </LineChart>
//       </ResponsiveContainer>
//     </Paper>
//   )
// }

const chartData = [
  { date: '1/1', endurance: 65, strength: 70, flexibility: 60, fill: 'orange' },
  { date: '1/8', endurance: 68, strength: 72, flexibility: 62, fill: 'green' },
  { date: '1/15', endurance: 70, strength: 75, flexibility: 65, fill: 'brown' },
  { date: '1/22', endurance: 73, strength: 78, flexibility: 68, fill: 'red' },
  { date: '1/29', endurance: 75, strength: 80, flexibility: 70, fill: 'white' },
  { date: '2/5', endurance: 78, strength: 82, flexibility: 73, fill: 'blue' },
  { date: '2/12', endurance: 80, strength: 85, flexibility: 75, fill: 'var(--P9)' },
]

export function PerformanceMetricsTrends() {
  return (
    <Paper className="l_box">
      <Heading>Performance Metrics & Trends</Heading>
      <ResponsiveContainer width="100%" height={300}>
        <RadialBarChart data={chartData} startAngle={-90} endAngle={380} innerRadius={30} outerRadius={110}>
          <RadialBar dataKey="strength" background>
            <LabelList position="insideStart" dataKey="endurance" fontSize={11} />
          </RadialBar>
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="flex items-center gap-2 font-medium leading-none">
        Trending up by 5.2% this month <ArrowBarTop className="h-4 w-4" />
      </div>
      <div className="leading-none text-muted-foreground">Showing total visitors for the last 6 months</div>
    </Paper>
  )
}
