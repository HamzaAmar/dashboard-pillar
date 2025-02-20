import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

type DataPoint = {
  name: string
  north: number
  south: number
}

const data: DataPoint[] = [
  { name: '1', north: 300, south: 150 },
  { name: '2', north: 320, south: 80 },
  { name: '3', north: 310, south: 100 },
  { name: '4', north: 305, south: 20 },
  { name: '5', north: 320, south: -50 },
  { name: '6', north: 300, south: -120 },
  { name: '7', north: 330, south: -180 },
  { name: '8', north: 310, south: -100 },
  { name: '9', north: 350, south: -50 },
  { name: '10', north: 370, south: -120 },
  { name: '11', north: 350, south: -180 },
  { name: '12', north: 320, south: -200 },
]

const NegativeAreaChart = () => {
  return (
    <div className="w-full max-w-4xl p-4 bg-gray-900 text-gray-200">
      <h2 className="text-xl font-semibold mb-4">Area with Negative Values</h2>

      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <AreaChart width={800} height={400} data={data} margin={{ top: 20, right: 30, left: 50, bottom: 5 }}>
          <defs>
            <linearGradient id="northGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--Se8)" stopOpacity={0.5} />
              <stop offset="95%" stopColor="var(--Se6)" stopOpacity={0.3} />
            </linearGradient>
            <linearGradient id="southGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--P8)" stopOpacity={0.5} />
              <stop offset="95%" stopColor="var(--P8)" stopOpacity={0.3} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="name" stroke="#999" />
          <YAxis stroke="#999" domain={[-200, 400]} ticks={[-200, -100, 0, 100, 200, 300, 400]} />
          <Tooltip
            contentStyle={{ backgroundColor: '#333', border: 'none' }}
            itemStyle={{ color: '#fff' }}
            labelStyle={{ color: '#fff' }}
          />
          <Legend />
          <Area type="monotone" dataKey="north" stroke="var(--Se9)" fill="url(#northGradient)" name="north" />
          <Area type="monotone" dataKey="south" stroke="var(--P9)" fill="url(#southGradient)" name="south" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default NegativeAreaChart
