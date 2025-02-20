// import { Heading, Paper } from '@pillar-ui/core'
// import { Tooltip, ResponsiveContainer, TooltipProps, RadarChart, PolarGrid, Radar, PolarAngleAxis } from 'recharts'
// import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent'

// const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
//   if (active && payload && payload.length) {
//     return (
//       <div className="chart-tooltip">
//         <p style={{ margin: 0, color: 'var(--P11)' }}>{`Month: ${label}`}</p>
//         <p style={{ margin: 0, color: 'var(--P11)' }}>{`Orders: ${payload[0].value}`}</p>
//       </div>
//     )
//   }

//   return null
// }

// const data = [
//   { month: 'January', desktop: 186, phone: 305 },
//   { month: 'February', desktop: 305, phone: 186 },
//   { month: 'March', desktop: 237, phone: 214 },
//   { month: 'April', desktop: 273, phone: 186 },
//   { month: 'May', desktop: 209, phone: 305 },
//   { month: 'June', desktop: 214, phone: 273 },
//   { month: 'July', desktop: 250, phone: 150 },
// ]
// export const MutlipleRadars = () => {
//   return (
//     <Paper as="article" flow="5">
//       <Heading>Basic Line Chart</Heading>
//       <ResponsiveContainer width="100%" aspect={2 / 1}>
//         <RadarChart data={data}>
//           <Tooltip content={<CustomTooltip />} />
//           <PolarAngleAxis dataKey="month" />
//           <PolarGrid />
//           <Radar dataKey="desktop" fill="var(--Se9)" fillOpacity={0.6} />
//           <Radar dataKey="phone" fill="var(--P9)" fillOpacity={0.6} />
//         </RadarChart>
//       </ResponsiveContainer>
//     </Paper>
//   )
// }

import { Heading, Paper } from '@pillar-ui/core'
import { Tooltip, ResponsiveContainer, TooltipProps, RadarChart, PolarGrid, Radar, PolarAngleAxis } from 'recharts'
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent'

const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <div className="chart-tooltip">
        <p style={{ margin: 0, color: 'var(--P11)' }}>{`Metric: ${label}`}</p>
        <p style={{ margin: 0, color: 'var(--P11)' }}>{`Value: ${payload[0].value}`}</p>
      </div>
    )
  }

  return null
}

// Updated data for 5 soccer players' performance metrics
const data = [
  {
    player: 'Ronaldo',
    goals: 95,
    assists: 30,
    dribbles: 80,
    passAccuracy: 85,
    tackles: 20,
    aerialDuelsWon: 70,
  },
  {
    player: 'Messi',
    goals: 85,
    assists: 40,
    dribbles: 120,
    passAccuracy: 90,
    tackles: 15,
    aerialDuelsWon: 30,
  },
  {
    player: 'Neymar',
    goals: 70,
    assists: 35,
    dribbles: 150,
    passAccuracy: 88,
    tackles: 10,
    aerialDuelsWon: 40,
  },
  {
    player: 'Mbappé',
    goals: 80,
    assists: 25,
    dribbles: 90,
    passAccuracy: 82,
    tackles: 18,
    aerialDuelsWon: 50,
  },
  {
    player: 'Salah',
    goals: 75,
    assists: 20,
    dribbles: 70,
    passAccuracy: 80,
    tackles: 25,
    aerialDuelsWon: 60,
  },
]

export const MutlipleRadars = () => {
  return (
    <Paper as="article" flow="5">
      <Heading>Top 5 Soccer Players Performance Matrix</Heading>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <RadarChart data={data}>
          <Tooltip content={<CustomTooltip />} />
          <PolarAngleAxis dataKey="player" />
          <PolarGrid />
          <Radar dataKey="goals" fill="var(--Se9)" fillOpacity={0.6} />
          <Radar dataKey="assists" fill="var(--P9)" fillOpacity={0.6} />
          <Radar dataKey="dribbles" fill="var(--I9)" fillOpacity={0.6} />
          <Radar dataKey="tackles" fill="var(--Su9)" fillOpacity={0.6} />
          <Radar dataKey="aerialDuelsWon" fill="var(--W9)" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </Paper>
  )
}
