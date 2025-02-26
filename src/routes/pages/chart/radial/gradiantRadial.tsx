import { RadialBar, RadialBarChart, ResponsiveContainer, Tooltip } from 'recharts'
import { ChartLayout } from '../chartLayout'

const data = [
  { browser: 'chrome', visitors: 275, fill: 'url(#chrome)' },
  { browser: 'safari', visitors: 200, fill: 'url(#safari)' },
  { browser: 'firefox', visitors: 187, fill: 'url(#firefox)' },
  { browser: 'edge', visitors: 173, fill: 'url(#edge)' },
  { browser: 'other', visitors: 90, fill: 'url(#other)' },
]
// M31-6.5v13h28v-13zm-45 15v13h28v-13zm60 0v13h28v-13zm-15 15v13h28v-13z
export const GradientRadial = () => {
  return (
    <ChartLayout title="Gradient Radial Chart">
      <ResponsiveContainer width="100%" height={300}>
        <RadialBarChart barSize={8} data={data} innerRadius={30} outerRadius={110}>
          <defs>
            <linearGradient id="chrome" x1="0" y1="0" x2="1" y2="0">
              <stop offset="5%" stopColor="var(--D9)" stopOpacity={1} />
              <stop offset="95%" stopColor="var(--D9)" stopOpacity={0.5} />
            </linearGradient>
            <linearGradient id="safari" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--P9)" stopOpacity={1} />
              <stop offset="95%" stopColor="var(--P9)" stopOpacity={0.5} />
            </linearGradient>
            <linearGradient id="firefox" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--Se9)" stopOpacity={1} />
              <stop offset="95%" stopColor="var(--Se9)" stopOpacity={0.5} />
            </linearGradient>
            <linearGradient id="edge" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--I9)" stopOpacity={1} />
              <stop offset="95%" stopColor="var(--I9)" stopOpacity={0.5} />
            </linearGradient>
            <linearGradient id="other" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--Su9)" stopOpacity={1} />
              <stop offset="95%" stopColor="var(--Su9)" stopOpacity={0.5} />
            </linearGradient>
          </defs>
          <Tooltip cursor={false} />
          <RadialBar cornerRadius={150} dataKey="visitors" background={{ fill: 'var(--B5)' }} />
        </RadialBarChart>
      </ResponsiveContainer>
    </ChartLayout>
  )
}
