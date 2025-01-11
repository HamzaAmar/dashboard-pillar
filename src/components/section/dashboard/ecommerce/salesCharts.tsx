import { Flex, Grid, Heading, Text } from '@pillar-ui/core'
import { ArrowDown, Dollar } from '@components/icons'
import { ParentSize } from '@visx/responsive'
import { AxisBottom } from '@visx/axis'
import { Group } from '@visx/group'
import { scaleBand, scaleLinear } from '@visx/scale'
import { Bar, Pie } from '@visx/shape'
import { Text as VisxText } from '@visx/text'
// import { useTooltip } from "@visx/tooltip";
import { useMemo, useState } from 'react'

export interface ChartCore {
  width: number
  height: number
}

const productsSalesDays = [
  { id: 1, day: 'Mon', price: 2200 },
  { id: 2, day: 'Thu', price: 22000 },
  { id: 3, day: 'Wed', price: 15233 },
  { id: 4, day: 'Tes', price: 12222 },
  { id: 5, day: 'Fri', price: 12223 },
  { id: 6, day: 'Sat', price: 21453 },
  { id: 7, day: 'Sun', price: 21453 },
]

const products = [
  { id: 1, category: 'Shoes', totalSale: 120, price: 100, color: 'red' },
  { id: 2, category: 'Pen', totalSale: 22000, price: 1.2, color: 'green' },
  { id: 3, category: 'Book', totalSale: 1200, price: 20, color: 'yellow' },
  { id: 4, category: 'Jeans', totalSale: 200, price: 50, color: 'purple' },
]

const BarChart = ({ width, height }: ChartCore) => {
  const days = productsSalesDays.map((d) => d.day)
  const prices = productsSalesDays.map((d) => d.price)

  const xScale = useMemo(
    () =>
      scaleBand<string>({
        range: [0, width],
        round: true,
        domain: days,
        padding: 0.6,
      }),
    [width, days]
  )
  const yScale = useMemo(
    () =>
      scaleLinear<number>({
        range: [0, height],
        round: true,
        domain: [0, Math.max(...prices)],
      }),
    [height, prices]
  )

  return (
    <svg width={width} height={height}>
      <rect width={width} height={height} fill="none" />
      <Group height={height - 20}>
        {productsSalesDays.map((d) => {
          const day = d.day
          const barHeight = yScale(d.price)

          const barWidth = xScale.bandwidth()
          const barY = height - barHeight
          const barX = xScale(d.day)

          return (
            <Bar key={`bar-${day}`} x={barX} y={barY} width={barWidth} height={barHeight} fill="var(--P9)" rx={5} />
          )
        })}
        <AxisBottom scale={xScale} top={height - 25} hideTicks hideAxisLine />
      </Group>
    </svg>
  )
}

const Doghnut = ({ width, height }: ChartCore) => {
  const half = width / 2
  // const { showTooltip, tooltipData, tooltipLeft, tooltipTop } = useTooltip();
  const [active, setActive] = useState<(typeof products)[1] | null>(null)

  const totalPrice = products.reduce((acc, cur) => {
    return cur.price * cur.totalSale + acc
  }, 0)

  return (
    <svg width={width} height={height}>
      {/* <rect width={width} height={height} fill="red" /> */}
      <Group top={width / 2} left={height / 2}>
        <Pie
          data={products}
          pieValue={(d) => d.totalSale * d.price}
          outerRadius={half}
          innerRadius={(d) => {
            return half - (d.data.id === active?.id ? 20 : 15)
          }}
          cornerRadius={1}
          padAngle={0.05}
        >
          {(pie) => {
            return pie.arcs.map((arc) => {
              const path = pie.path(arc) as string
              return (
                <Group
                  onMouseEnter={() => setActive(arc.data)}
                  onMouseLeave={() => setActive(null)}
                  className={`u_${arc.data.color}`}
                  key={arc.data.id}
                >
                  <path d={path} fill="var(--color-shared-9)" />
                </Group>
              )
            })
          }}
        </Pie>
        <VisxText textAnchor="middle" fontSize={25}>
          {active == null ? 'Total' : active.category}
        </VisxText>
        <VisxText textAnchor="middle" dy={20} fontSize={15} color="var(--B11)" fontWeight="500">
          {`${active == null ? totalPrice : active.price * active.totalSale}$`}
        </VisxText>
      </Group>
    </svg>
  )
}

export const SalesCharts = () => {
  return (
    <Grid cols={{ default: '1fr', lg: '1.3fr 1.7fr' }} gap="4">
      <section className="l_box">
        <Heading size="3" as="h3">
          Generated Leads
        </Heading>
        <Text size="3" color="b" low>
          Monthly Report
        </Text>

        <Flex items="end" justify="between" gap="5">
          <div>
            <div>
              <Flex items="center" gap="1">
                <Dollar width="20" />
                <Text color="b" size="3">
                  All Price in dollar
                </Text>
              </Flex>
              <Text color="b" size="4" low>
                Money You gain this Week
              </Text>
            </div>
            <Text size="8" weight="7">
              $14,599
            </Text>
            <Text as="div" weight="5" size="4" color="d" low>
              <span>+15%</span>
              <ArrowDown direction="right-top" width="20" />
            </Text>
          </div>
          <Doghnut width={150} height={150} />
        </Flex>
      </section>
      <section className="l_box u_flex-1">
        <Heading size="3" as="h3">
          Generated Leads
        </Heading>
        <Text size="3" color="b" low>
          Monthly Report
        </Text>

        <Flex items="end" justify="between" gap="5">
          <ParentSize debounceTime={10}>{({ width, height }) => <BarChart width={width} height={150} />}</ParentSize>
        </Flex>
      </section>
    </Grid>
  )
}
