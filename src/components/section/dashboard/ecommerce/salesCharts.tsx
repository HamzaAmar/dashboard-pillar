import { Grid, Heading, Paper } from '@pillar-ui/core'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Line,
  LineChart,
  Legend,
} from 'recharts'

export interface ChartCore {
  width: number
  height: number
}

// const BarChart = ({ width, height }: ChartCore) => {
//   const days = productsSalesDays.map((d) => d.day)
//   const prices = productsSalesDays.map((d) => d.price)

//   const xScale = useMemo(
//     () =>
//       scaleBand<string>({
//         range: [0, width],
//         round: true,
//         domain: days,
//         padding: 0.6,
//       }),
//     [width, days]
//   )
//   const yScale = useMemo(
//     () =>
//       scaleLinear<number>({
//         range: [0, height],
//         round: true,
//         domain: [0, Math.max(...prices)],
//       }),
//     [height, prices]
//   )

//   return (
//     <svg width={width} height={height}>
//       <rect width={width} height={height} fill="none" />
//       <Group height={height - 20}>
//         {productsSalesDays.map((d) => {
//           const day = d.day
//           const barHeight = yScale(d.price)

//           const barWidth = xScale.bandwidth()
//           const barY = height - barHeight
//           const barX = xScale(d.day)

//           return (
//             <Bar key={`bar-${day}`} x={barX} y={barY} width={barWidth} height={barHeight} fill="var(--P9)" rx={5} />
//           )
//         })}
//         <AxisBottom scale={xScale} top={height - 25} hideTicks hideAxisLine />
//       </Group>
//     </svg>
//   )
// }

// const Doghnut = ({ width, height }: ChartCore) => {
//   const half = width / 2
//   // const { showTooltip, tooltipData, tooltipLeft, tooltipTop } = useTooltip();
//   const [active, setActive] = useState<(typeof products)[1] | null>(null)

//   const totalPrice = products.reduce((acc, cur) => {
//     return cur.price * cur.totalSale + acc
//   }, 0)

//   return (
//     <svg width={width} height={height}>
//       {/* <rect width={width} height={height} fill="red" /> */}
//       <Group top={width / 2} left={height / 2}>
//         <Pie
//           data={products}
//           pieValue={(d) => d.totalSale * d.price}
//           outerRadius={half}
//           innerRadius={(d) => {
//             return half - (d.data.id === active?.id ? 20 : 15)
//           }}
//           cornerRadius={1}
//           padAngle={0.05}
//         >
//           {(pie) => {
//             return pie.arcs.map((arc) => {
//               const path = pie.path(arc) as string
//               return (
//                 <Group
//                   onMouseEnter={() => setActive(arc.data)}
//                   onMouseLeave={() => setActive(null)}
//                   className={`u_${arc.data.color}`}
//                   key={arc.data.id}
//                 >
//                   <path d={path} fill="var(--color-shared-9)" />
//                 </Group>
//               )
//             })
//           }}
//         </Pie>
//         <VisxText textAnchor="middle" fontSize={25}>
//           {active == null ? 'Total' : active.category}
//         </VisxText>
//         <VisxText textAnchor="middle" dy={20} fontSize={15} color="var(--B11)" fontWeight="500">
//           {`${active == null ? totalPrice : active.price * active.totalSale}$`}
//         </VisxText>
//       </Group>
//     </svg>
//   )
// }

// export const SalesCharts = () => {
//   return (
//     <Grid cols={{ default: '1fr', lg: '1.3fr 1.7fr' }} gap="4">
//       <section className="l_box">
//         <Heading size="3" as="h3">
//           Generated Leads
//         </Heading>
//         <Text size="3" color="b" low>
//           Monthly Report
//         </Text>

//         <Flex items="end" justify="between" gap="5">
//           <div>
//             <div>
//               <Flex items="center" gap="1">
//                 <Dollar width="20" />
//                 <Text color="b" size="3">
//                   All Price in dollar
//                 </Text>
//               </Flex>
//               <Text color="b" size="4" low>
//                 Money You gain this Week
//               </Text>
//             </div>
//             <Text size="8" weight="7">
//               $14,599
//             </Text>
//             <Text as="div" weight="5" size="4" color="d" low>
//               <span>+15%</span>
//               <ArrowDown direction="right-top" width="20" />
//             </Text>
//           </div>
//           <Doghnut width={150} height={150} />
//         </Flex>
//       </section>
//       <section className="l_box fl-1">
//         <Heading size="3" as="h3">
//           Generated Leads
//         </Heading>
//         <Text size="3" color="b" low>
//           Monthly Report
//         </Text>

//         <Flex items="end" justify="between" gap="5">
//           <ParentSize debounceTime={10}>{({ width, height }) => <BarChart width={width} height={150} />}</ParentSize>
//         </Flex>
//       </section>
//     </Grid>
//   )
// }

const data = [
  { month: 'Jan', value: 2.3 },
  { month: 'Feb', value: 3.1 },
  { month: 'Mar', value: 4.0 },
  { month: 'Apr', value: 10.1 },
  { month: 'May', value: 4.0 },
  { month: 'Jun', value: 3.6 },
  { month: 'Jul', value: 3.2 },
  { month: 'Aug', value: 2.3 },
  { month: 'Sep', value: 1.4 },
  { month: 'Oct', value: 0.8 },
  { month: 'Nov', value: 0.5 },
  { month: 'Dec', value: 0.2 },
]

const bestSellingData = [
  { month: 'Jan', electronics: 42, clothing: 38, home: 25, sports: 30, books: 20 },
  { month: 'Feb', electronics: 45, clothing: 42, home: 28, sports: 32, books: 22 },
  { month: 'Mar', electronics: 48, clothing: 45, home: 30, sports: 35, books: 24 },
  { month: 'Apr', electronics: 52, clothing: 48, home: 35, sports: 38, books: 28 },
  { month: 'May', electronics: 58, clothing: 50, home: 38, sports: 40, books: 30 },
  { month: 'Jun', electronics: 55, clothing: 52, home: 40, sports: 42, books: 32 },
  { month: 'Jul', electronics: 60, clothing: 54, home: 42, sports: 45, books: 34 },
  { month: 'Aug', electronics: 65, clothing: 58, home: 45, sports: 48, books: 36 },
  { month: 'Sep', electronics: 62, clothing: 55, home: 43, sports: 46, books: 33 },
  { month: 'Oct', electronics: 58, clothing: 52, home: 40, sports: 44, books: 31 },
  { month: 'Nov', electronics: 64, clothing: 56, home: 44, sports: 47, books: 35 },
  { month: 'Dec', electronics: 70, clothing: 60, home: 48, sports: 50, books: 38 },
]

export const SalesCharts = () => {
  return (
    <Grid gap="4" cols={{ default: '1fr', md: '1fr 1fr' }}>
      <Paper flow="8" className="l_box">
        <Heading weight="5">Best Selling By Category</Heading>
        <ResponsiveContainer width="100%" aspect={2 / 1}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--B5)" vertical={false} />
            <XAxis
              dataKey="month"
              angle={-45}
              textAnchor="end"
              fontSize={12}
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'var(--B11)' }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              fontSize={12}
              tick={{ fill: 'var(--B11)' }}
              tickFormatter={(value) => `$${value}k`}
            />
            <Tooltip formatter={(value: number) => [`${value}%`, 'Value']} cursor={{ fill: 'transparent' }} />
            <Bar
              dataKey="value"
              fill="#4ade80"
              label={{
                position: 'top',
                formatter: (value: number) => `${value}%`,
                fill: 'var(--B11)',
                fontSize: 14,
              }}
            >
              {data.map((entry, index) => (
                <Cell key={`bar-${index}`} fill={entry.month === 'Apr' ? 'var(--Su9)' : 'var(--B7)'} radius={10} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Paper>
      <Paper flow="8" className="l_box">
        <Heading size="7" weight="5">
          Best Selling By Category
        </Heading>
        <ResponsiveContainer width="100%" aspect={2 / 1}>
          <LineChart data={bestSellingData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--B5)" />
            <XAxis
              dataKey="month"
              angle={-45}
              textAnchor="end"
              fontSize={12}
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'var(--B11)' }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              fontSize={12}
              tick={{ fill: 'var(--B11)' }}
              tickFormatter={(value) => `$${value}k`}
            />
            <Tooltip formatter={(value: number) => [`$${value}k`, 'Sales']} cursor={{ stroke: 'var(--B6)' }} />
            <Legend iconType="circle" verticalAlign="top" height={36} />
            <Line type="monotone" dataKey="electronics" stroke="#3b82f6" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="clothing" stroke="#ef4444" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="home" stroke="#22c55e" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="sports" stroke="#f59e0b" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="books" stroke="#8b5cf6" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </Paper>
    </Grid>
  )
}
