// import { Grid, Heading, Paper } from '@pillar-ui/core'
// import React from 'react'
// import {
//   CartesianGrid,
//   Cell,
//   Legend,
//   Line,
//   LineChart,
//   Pie,
//   PieChart,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from 'recharts'

// const projectAnalysisData = [
//   { month: 'Jan', revenue: 1500 },
//   { month: 'Feb', revenue: 1800 },
//   { month: 'Mar', revenue: 2200 },
//   { month: 'Apr', revenue: 1900 },
//   { month: 'May', revenue: 2400 },
//   { month: 'Jun', revenue: 2800 },
//   { month: 'Jul', revenue: 2500 },
//   { month: 'Aug', revenue: 2700 },
// ]

// const channelData = [
//   { name: 'Direct', value: 300, color: 'var(--I9)' },
//   { name: 'Referral', value: 200, color: 'var(--Su9)' },
//   { name: 'Social', value: 250, color: 'var(--W9)' },
//   { name: 'Organic', value: 250, color: 'var(--D9)' },
// ]

// export const Analysis = () => {
//   return (
//     <Grid cols={{ default: '1fr', lg: '2fr 1fr' }} gap="4">
//       <Paper flow="5" className="l_box">
//         <Heading size="4">Project Analysis</Heading>
//         <ResponsiveContainer width="100%" aspect={2}>
//           <LineChart data={projectAnalysisData}>
//             <XAxis tick={{ fontSize: 12, fill: 'var(--B11)' }} axisLine={false} tickLine={false} dataKey="month" />
//             <YAxis
//               domain={[500, 3000]}
//               width={30}
//               tick={{ fontSize: 12, fill: 'var(--B11)' }}
//               axisLine={false}
//               tickLine={false}
//             />
//             <CartesianGrid strokeDasharray="3 3" />
//             <Line type="step" dataKey="revenue" stroke="var(--I9)" strokeWidth={2} />
//             <Legend />
//             <Tooltip />
//           </LineChart>
//         </ResponsiveContainer>
//       </Paper>

//       <Paper flow="5" className="l_box">
//         <Heading size="4">Leads by Channel</Heading>
//         <ResponsiveContainer width="100%" aspect={1}>
//           <PieChart>
//             <Pie data={channelData} innerRadius="60%" outerRadius="80%" paddingAngle={5} dataKey="value">
//               {channelData.map((entry, index) => (
//                 <Cell key={index} fill={entry.color} />
//               ))}
//             </Pie>
//             <Tooltip />
//             <Legend />
//           </PieChart>
//         </ResponsiveContainer>
//       </Paper>
//     </Grid>
//   )
// }

import { Grid, Heading, Paper } from '@pillar-ui/core'
import React from 'react'
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Cell,
  Label,
} from 'recharts'

const projectAnalysisData = [
  { month: 'Jan', revenue: 1500, cost: 800, profit: 700 },
  { month: 'Feb', revenue: 1800, cost: 900, profit: 900 },
  { month: 'Mar', revenue: 2200, cost: 1100, profit: 1100 },
  { month: 'Apr', revenue: 1900, cost: 1000, profit: 900 },
  { month: 'May', revenue: 2400, cost: 1200, profit: 1200 },
  { month: 'Jun', revenue: 2800, cost: 1400, profit: 1400 },
  { month: 'Jul', revenue: 2500, cost: 1300, profit: 1200 },
  { month: 'Aug', revenue: 2700, cost: 1350, profit: 1350 },
]

const channelData = [
  { name: 'Direct', value: 300, color: 'var(--I9)' },
  { name: 'Referral', value: 200, color: 'var(--Su9)' },
  { name: 'Social', value: 250, color: 'var(--W9)' },
  { name: 'Organic', value: 250, color: 'var(--D9)' },
]

export const Analysis = () => {
  return (
    <Grid cols={{ default: '1fr', lg: '2fr 1fr' }} gap="4">
      <Paper flow="5" className="l_box">
        <Heading size="4">Project Analysis</Heading>
        <ResponsiveContainer width="100%" aspect={2}>
          <LineChart data={projectAnalysisData}>
            <XAxis tick={{ fontSize: 12, fill: 'var(--B11)' }} axisLine={false} tickLine={false} dataKey="month" />
            <YAxis
              domain={[
                0,
                Math.max(...projectAnalysisData.map((item) => Math.max(item.revenue, item.cost, item.profit))) + 500,
              ]}
              width={30}
              tick={{ fontSize: 12, fill: 'var(--B11)' }}
              axisLine={false}
              tickLine={false}
            />
            <CartesianGrid strokeDasharray="3 3" stroke="var(--B6)" />
            <Line
              type="natural"
              dot={{ r: 3, fill: 'var(--I9)' }}
              dataKey="revenue"
              stroke="var(--I9)"
              strokeWidth={2}
            />
            <Line type="natural" dot={{ r: 3, fill: 'var(--P9)' }} dataKey="cost" stroke="var(--P9)" strokeWidth={2} />
            <Line
              type="natural"
              dot={{ r: 3, fill: 'var(--Se9)' }}
              dataKey="profit"
              stroke="var(--Se9)"
              strokeWidth={2}
            />
            <Legend />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </Paper>

      <Paper flow="5" className="l_box">
        <Heading size="4">Leads by Channel</Heading>
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie data={channelData} innerRadius="65%" outerRadius="80%" paddingAngle={0} dataKey="value">
              {channelData.map((entry, index) => (
                <Cell key={index} fill={entry.color} stroke={entry.color} />
              ))}
              <Label
                value="Total"
                position="center"
                fill="var(--B12)"
                style={{ fontSize: '24px', filter: `drop-shadow(0px 2px 4px var(--O8))`, fontWeight: '500' }}
              />
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </Paper>
    </Grid>
  )
}
