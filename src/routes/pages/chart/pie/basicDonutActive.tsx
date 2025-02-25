// import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Sector, Tooltip } from 'recharts'
// import { ChartLayout } from '../chartLayout'
// import { PieSectorDataItem } from 'recharts/types/polar/Pie'

// type DataItem = {
//   name: string
//   value: number
//   color: string
// }

// // Sample data
// const data: DataItem[] = [
//   { name: 'Group A', value: 500, color: 'var(--Se9)' },
//   { name: 'Group B', value: 400, color: 'var(--P9)' },
//   { name: 'Group C', value: 300, color: 'var(--Su9)' },
//   { name: 'Group D', value: 200, color: 'var(--I9)' },
//   { name: 'Group E', value: 100, color: 'var(--W9)' },
// ]

// export const BasicActiveDonut = () => {
//   return (
//     <ChartLayout title="Basic Donut Chart Active">
//       <ResponsiveContainer width="100%" height={300}>
//         <PieChart>
//           <Pie
//             data={data}
//             dataKey="value"
//             nameKey="browser"
//             innerRadius={60}
//             strokeWidth={5}
//             activeIndex={0}
//             activeShape={({ outerRadius = 0, ...props }: PieSectorDataItem) => (
//               <Sector {...props} outerRadius={outerRadius + 10} />
//             )}
//           >
//             {data.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} />
//             ))}
//           </Pie>
//           <Tooltip />
//           <Legend />
//         </PieChart>
//       </ResponsiveContainer>
//     </ChartLayout>
//   )
// }

import { useState } from 'react'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Sector, Tooltip } from 'recharts'
import { ChartLayout } from '../chartLayout'
import { PieSectorDataItem } from 'recharts/types/polar/Pie'

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

export const BasicActiveDonut = () => {
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined)

  const handleMouseEnter = (data: any, index: number) => {
    setActiveIndex(index)
  }

  const handleMouseLeave = () => {
    setActiveIndex(undefined)
  }

  return (
    <ChartLayout title="Donut Chart Active on Hover">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={60}
            strokeWidth={5}
            activeIndex={activeIndex}
            activeShape={({ outerRadius = 0, ...props }: PieSectorDataItem) => (
              <Sector {...props} outerRadius={outerRadius + 10} />
            )}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </ChartLayout>
  )
}
