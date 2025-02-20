import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface Data {
  month: string
  React: number
  Next: number
  Vue: number
  Angular: number
  Svelte: number
  Remix: number
  Qwik: number
}

const colors = {
  React: 'var(--P9)',
  Next: 'var(--B9)',
  Vue: 'var(--Su9)',
  Angular: 'var(--D9)',
  Svelte: 'var(--W9)',
  Remix: 'var(--I9)',
  Qwik: 'var(--Se9)',
} satisfies Record<string, string>

const data: Data[] = [
  {
    month: 'Jan',
    React: 210000,
    Next: 160000,
    Vue: 110000,
    Angular: 70000,
    Svelte: 65000,
    Remix: 45000,
    Qwik: 20000,
  },
  {
    month: 'Feb',
    React: 215000,
    Next: 165000,
    Vue: 112000,
    Angular: 68000,
    Svelte: 67000,
    Remix: 47000,
    Qwik: 22000,
  },
  {
    month: 'Mar',
    React: 220000,
    Next: 170000,
    Vue: 115000,
    Angular: 65000,
    Svelte: 70000,
    Remix: 50000,
    Qwik: 25000,
  },
  {
    month: 'Apr',
    React: 225000,
    Next: 175000,
    Vue: 118000,
    Angular: 62000,
    Svelte: 73000,
    Remix: 53000,
    Qwik: 28000,
  },
  {
    month: 'May',
    React: 230000,
    Next: 180000,
    Vue: 120000,
    Angular: 60000,
    Svelte: 76000,
    Remix: 55000,
    Qwik: 30000,
  },
  {
    month: 'Jun',
    React: 235000,
    Next: 185000,
    Vue: 122000,
    Angular: 58000,
    Svelte: 80000,
    Remix: 58000,
    Qwik: 32000,
  },
]
type Colors = keyof typeof colors
const COLORS = Object.keys(colors) as Colors[]

export const StackedLines = () => {
  return (
    <div className="w-full h-96 p-4 bg-gray-900 rounded-lg">
      <h2 className="text-xl text-white mb-4">JavaScript Framework Trends</h2>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="month" stroke="#fff" />
          <YAxis stroke="#fff" tickFormatter={(value) => `${value / 1000}k`} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1a1a1a',
              border: 'none',
              borderRadius: '4px',
              color: '#fff',
            }}
          />
          <Legend iconType="circle" />
          {COLORS.map((framework) => (
            <Line
              key={framework}
              type="monotone"
              dataKey={framework}
              stroke={colors[framework]}
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
