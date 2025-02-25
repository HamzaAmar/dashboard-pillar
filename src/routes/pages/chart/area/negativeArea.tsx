import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { ChartLayout } from '../chartLayout'

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
    <ChartLayout title="Negative area chart">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
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
          <CartesianGrid vertical={false} horizontal={false} />
          <XAxis fontSize={12} axisLine={false} tickLine={false} dataKey="name" stroke="#999" />
          <YAxis
            axisLine={false}
            tickLine={false}
            stroke="#999"
            domain={[-200, 400]}
            ticks={[-200, -100, 0, 100, 200, 300, 400]}
            width={30}
            fontSize={12}
          />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="north" stroke="var(--Se9)" fill="url(#northGradient)" name="north" />
          <Area type="monotone" dataKey="south" stroke="var(--P9)" fill="url(#southGradient)" name="south" />
        </AreaChart>
      </ResponsiveContainer>
    </ChartLayout>
  )
}

export default NegativeAreaChart
