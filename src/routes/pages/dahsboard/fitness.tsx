import React from 'react'
import { Paper, Grid, Text, Flex, Heading, Chips, Button } from '@pillar-ui/core'
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart,
} from 'recharts'
import { ChartLine, Heart, Flame, Scale, Clock, Coffee, HandMove, Walking } from '@pillar-ui/icons'
import FitnessDashboard from '@components/section/dashboard/fitness'

// Sample data
const activityData = [
  { date: 'Mon', steps: 8500, calories: 2200, active: 320 },
  { date: 'Tue', steps: 10200, calories: 2400, active: 380 },
  { date: 'Wed', steps: 9800, calories: 2300, active: 350 },
  { date: 'Thu', steps: 11000, calories: 2500, active: 400 },
  { date: 'Fri', steps: 9500, calories: 2350, active: 360 },
  { date: 'Sat', steps: 7800, calories: 2100, active: 280 },
  { date: 'Sun', steps: 6500, calories: 1900, active: 240 },
]

const activityTypeData = [
  { name: 'Walking', value: 45, color: '#4CAF50' },
  { name: 'Running', value: 25, color: '#2196F3' },
  { name: 'Cycling', value: 20, color: '#FF9800' },
  { name: 'Gym', value: 10, color: '#9C27B0' },
]

export const Component = () => {
  return (
    <FitnessDashboard />
    // <Paper flow="7" className="p-6">
    //   <Paper flow="6">
    //     {/* Header */}
    //     <Flex justify="between" items="center">
    //       <Heading size="6">Fitness & Health Analytics</Heading>
    //       <Button variant="soft">Download Report</Button>
    //     </Flex>

    //     <Grid cols={{ default: '1fr', lg: '2fr 1fr' }} gap="4">
    //       <Paper className="l_box">
    //         <Heading size="4">Weekly Activity Trends</Heading>
    //         <ResponsiveContainer width="100%" height={300}>
    //           <LineChart data={activityData}>
    //             <CartesianGrid strokeDasharray="3 3" />
    //             <XAxis dataKey="date" />
    //             <YAxis />
    //             <Tooltip />
    //             <Legend />
    //             <Line type="monotone" dataKey="steps" stroke="#2196F3" name="Steps" />
    //             <Line type="monotone" dataKey="calories" stroke="#FF9800" name="Calories" />
    //             <Line type="monotone" dataKey="active" stroke="#4CAF50" name="Active Minutes" />
    //           </LineChart>
    //         </ResponsiveContainer>
    //       </Paper>

    //       <Paper className="l_box">
    //         <Heading size="4">Activity Distribution</Heading>
    //         <ResponsiveContainer width="100%" height={300}>
    //           <PieChart>
    //             <Pie data={activityTypeData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
    //               {activityTypeData.map((entry, index) => (
    //                 <Cell key={`cell-${index}`} fill={entry.color} />
    //               ))}
    //             </Pie>
    //             <Tooltip />
    //             <Legend />
    //           </PieChart>
    //         </ResponsiveContainer>
    //       </Paper>
    //     </Grid>

    //     <Paper className="l_box">
    //       <Heading size="4">Calorie Intake vs. Burn</Heading>
    //       <ResponsiveContainer width="100%" height={300}>
    //         <AreaChart data={activityData}>
    //           <CartesianGrid strokeDasharray="3 3" />
    //           <XAxis dataKey="date" />
    //           <YAxis />
    //           <Tooltip />
    //           <Legend />
    //           <Area
    //             type="monotone"
    //             dataKey="calories"
    //             stackId="1"
    //             stroke="#82ca9d"
    //             fill="#82ca9d"
    //             name="Calories Burned"
    //           />
    //           <Area
    //             type="monotone"
    //             dataKey="active"
    //             stackId="1"
    //             stroke="#8884d8"
    //             fill="#8884d8"
    //             name="Active Calories"
    //           />
    //         </AreaChart>
    //       </ResponsiveContainer>
    //     </Paper>

    //     <Paper className="l_box">
    //       <Heading size="4" className="mb-4">
    //         Personalized Recommendations
    //       </Heading>
    //       <Grid cols={{ default: '1fr', md: 'repeat(3, 1fr)' }} gap="4">
    //         <Paper className="l_box">
    //           <ChartLine className="text-blue-500" />
    //           <Text weight="6">Increase Daily Steps</Text>
    //           <Text size="3" low>
    //             Try to reach 12,000 steps by adding short walks during breaks
    //           </Text>
    //         </Paper>
    //         <Paper className="l_box">
    //           <Coffee className="text-green-500" />
    //           <Text weight="6">Improve Sleep Quality</Text>
    //           <Text size="3" low>
    //             Aim for 7-8 hours of sleep and maintain consistent sleep schedule
    //           </Text>
    //         </Paper>
    //         <Paper className="l_box">
    //           <Scale className="text-purple-500" />
    //           <Text weight="6">Balance Nutrition</Text>
    //           <Text size="3" low>
    //             Focus on protein intake and reduce evening snacking
    //           </Text>
    //         </Paper>
    //       </Grid>
    //     </Paper>
    //   </Paper>
    // </Paper>
  )
}
