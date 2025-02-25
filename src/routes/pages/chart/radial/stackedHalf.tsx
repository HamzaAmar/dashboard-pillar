// import { Label, PolarRadiusAxis, RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts'
// import { ChartLayout } from '../chartLayout'

// const chartData = [{ month: 'january', desktop: 1260, mobile: 570 }]

// export const RadialStackedHalf = () => {
//   const totalVisitors = chartData[0].desktop + chartData[0].mobile

//   return (
//     <ChartLayout title="Radial stacked half">
//       <ResponsiveContainer width="100%" height={300}>
//         <RadialBarChart barGap={5} data={chartData} endAngle={180} innerRadius={80} outerRadius={130}>
//           <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
//             <Label
//               content={({ viewBox }) => {
//                 if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
//                   return (
//                     <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
//                       <tspan x={viewBox.cx} y={(viewBox.cy || 0) - 16} fontSize={24} fontWeight="600">
//                         {totalVisitors.toLocaleString()}
//                       </tspan>
//                       <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 4} fontSize={12} fill="var(--B11)">
//                         Visitors
//                       </tspan>
//                     </text>
//                   )
//                 }
//               }}
//             />
//           </PolarRadiusAxis>
//           <RadialBar dataKey="desktop" stackId="a" cornerRadius={150} fill="var(--D9)" />
//           <RadialBar dataKey="mobile" fill="var(--W9)" stackId="a" cornerRadius={150} />
//         </RadialBarChart>
//       </ResponsiveContainer>
//     </ChartLayout>
//   )
// }

import { Label, PolarRadiusAxis, RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts'
import { ChartLayout } from '../chartLayout'

const chartData = [{ month: 'January', desktop: 1260, mobile: 570, tablet: 800 }]

export const RadialStackedHalf = () => {
  const totalVisitors = chartData[0].desktop + chartData[0].mobile + chartData[0].tablet

  return (
    <ChartLayout title="Radial Stacked Half">
      <ResponsiveContainer width="100%" height={300}>
        <RadialBarChart data={chartData} endAngle={180} startAngle={0} innerRadius="70%" outerRadius="100%">
          <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
            <Label
              content={({ viewBox }) => {
                if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                  return (
                    <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                      <tspan x={viewBox.cx} y={(viewBox.cy || 0) - 16} fontSize={24} fontWeight="600">
                        {totalVisitors.toLocaleString()}
                      </tspan>
                      <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 4} fontSize={12} fill="var(--B11)">
                        Visitors
                      </tspan>
                    </text>
                  )
                }
              }}
            />
          </PolarRadiusAxis>
          {/* Added tablet data and adjusted radius to create a gap */}
          <RadialBar dataKey="tablet" stackId="a" cornerRadius={150} fill="var(--T9)" />
          <RadialBar dataKey="desktop" stackId="a" cornerRadius={150} fill="var(--D9)" />
          <RadialBar dataKey="mobile" stackId="a" cornerRadius={150} fill="var(--W9)" />
        </RadialBarChart>
      </ResponsiveContainer>
    </ChartLayout>
  )
}
