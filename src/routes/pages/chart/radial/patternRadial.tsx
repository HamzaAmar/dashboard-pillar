import { RadialBar, RadialBarChart, ResponsiveContainer, Tooltip } from 'recharts'
import { ChartLayout } from '../chartLayout'

const data = [
  { browser: 'chrome', visitors: 275, fill: 'url(#chromePattern)' },
  { browser: 'safari', visitors: 200, fill: 'url(#safariPattern)' },
  { browser: 'firefox', visitors: 187, fill: 'url(#firefoxPattern)' },
  { browser: 'edge', visitors: 173, fill: 'url(#edgePattern)' },
  { browser: 'other', visitors: 90, fill: 'url(#otherPattern)' },
]
//
export const PatternRadial = () => {
  return (
    <ChartLayout title="Pattern Radial Chart">
      <ResponsiveContainer width="100%" height={300}>
        <RadialBarChart data={data} innerRadius={30} outerRadius={110}>
          <defs>
            <pattern id="chromePattern" patternUnits="userSpaceOnUse" width="4" height="4">
              <path d="M 0 0 L 4 4 M -1 3 L 1 5 M 3 -1 L 5 1" stroke="var(--Se9)" strokeWidth="1" />
            </pattern>
            <pattern id="safariPattern" patternUnits="userSpaceOnUse" width="6" height="6">
              <path d="M 0 6 L 6 0" stroke="var(--P9)" strokeWidth="3" />
              <path d="M 3 9 L 9 3" stroke="var(--P9)" strokeWidth="3" />
              <path d="M -3 3 L 3 -3" stroke="var(--P9)" strokeWidth="3" />
            </pattern>
            <pattern id="firefoxPattern" patternUnits="userSpaceOnUse" width="1" height="4">
              <path d="M 0 0 L 1 0" stroke="var(--I9)" strokeWidth="1" />
            </pattern>
            <pattern id="edgePattern" patternUnits="userSpaceOnUse" width="4" height="1">
              <path d="M 0 0 L 0 1" stroke="var(--D9)" strokeWidth="1" />
            </pattern>
            <pattern id="otherPattern" patternUnits="userSpaceOnUse" width="4" height="4">
              <path d="M 0 0 L 4 4" stroke="var(--W9)" strokeWidth="1" />
              <path d="M 0 4 L 4 0" stroke="var(--W9)" strokeWidth="1" />
            </pattern>
          </defs>
          <Tooltip cursor={false} />
          <RadialBar cornerRadius={150} dataKey="visitors" background={{ fill: 'var(--B5)' }} />
        </RadialBarChart>
      </ResponsiveContainer>
    </ChartLayout>
  )
}
