import { ResponsiveContainer, XAxis, Tooltip, AreaChart, Area, Legend } from 'recharts'
import { ChartLayout } from '../chartLayout'

const data = [
  { month: 'January', desktop: 186, mobile: 120 },
  { month: 'February', desktop: 305, mobile: 150 },
  { month: 'March', desktop: 237, mobile: 130 },
  { month: 'April', desktop: 73, mobile: 80 },
  { month: 'May', desktop: 209, mobile: 100 },
  { month: 'June', desktop: 214, mobile: 110 },
  { month: 'July', desktop: 287, mobile: 190 },
  { month: 'August', desktop: 142, mobile: 90 },
  { month: 'September', desktop: 321, mobile: 160 },
  { month: 'October', desktop: 95, mobile: 150 },
  { month: 'November', desktop: 264, mobile: 120 },
  { month: 'December', desktop: 178, mobile: 100 },
]

export const StackedPatternArea = () => {
  return (
    <ChartLayout title="Stacked Pattern Area Chart">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <pattern id="desktopPattern" patternUnits="userSpaceOnUse" width="4" height="4">
              <path d="M 0 0 L 4 4 M -1 3 L 1 5 M 3 -1 L 5 1" stroke="var(--Se9)" strokeWidth="1" opacity="0.7" />
            </pattern>

            <pattern id="mobilePattern" patternUnits="userSpaceOnUse" width="6" height="6">
              <path d="M 0 6 L 6 0" stroke="var(--P9)" strokeWidth="1" opacity="0.7" />
              <path d="M 3 9 L 9 3" stroke="var(--P9)" strokeWidth="1" opacity="0.7" />
              <path d="M -3 3 L 3 -3" stroke="var(--P9)" strokeWidth="1" opacity="0.7" />
            </pattern>
          </defs>
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            fontSize={12}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <Tooltip />
          <Legend />
          <Area
            dataKey="desktop"
            type="natural"
            name="Desktop"
            stackId="1"
            fill="url(#desktopPattern)"
            stroke="var(--Se9)"
          />
          <Area
            dataKey="mobile"
            type="natural"
            name="Mobile"
            stackId="1"
            fill="url(#mobilePattern)"
            stroke="var(--P9)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartLayout>
  )
}
