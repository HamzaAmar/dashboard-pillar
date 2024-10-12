import { BarStack } from '@visx/shape'
import { SeriesPoint } from '@visx/shape/lib/types'
import { Group } from '@visx/group'
import { AxisBottom } from '@visx/axis'
import cityTemperature, { CityTemperature } from '@visx/mock-data/lib/mocks/cityTemperature'
import { scaleBand, scaleLinear, scaleOrdinal } from '@visx/scale'
import { timeParse, timeFormat } from 'd3-time-format'
import { useTooltip, useTooltipInPortal, defaultStyles } from '@visx/tooltip'
import { LegendOrdinal } from '@visx/legend'
import { localPoint } from '@visx/event'

type CityName = 'New York' | 'San Francisco' | 'Austin'

type TooltipData = {
  bar: SeriesPoint<CityTemperature>
  key: CityName
  index: number
  height: number
  width: number
  x: number
  y: number
  color: string
}

export type BarStackProps = {
  width: number
  height: number
  margin?: { top: number; right: number; bottom: number; left: number }
  events?: boolean
}

const red = 'var(--red-9)'
const green = 'var(--green-9)'
export const mint = 'var(--mint-9)'
export const background = 'var(--slate-3)'

const defaultMargin = { top: 40, right: 0, bottom: 0, left: 0 }
const tooltipStyles = {
  ...defaultStyles,
  backgroundColor: 'var(--slate-5)',
}

const data = cityTemperature.slice(0, 7)
const keys = Object.keys(data[0]).filter((d) => d !== 'date') as CityName[]

const temperatureTotals = data.reduce((allTotals, currentDate) => {
  const totalTemperature = keys.reduce((dailyTotal, k) => {
    dailyTotal += Number(currentDate[k])
    return dailyTotal
  }, 0)
  allTotals.push(totalTemperature)
  return allTotals
}, [] as number[])

const parseDate = timeParse('%Y-%m-%d')
const format = timeFormat('%b %d')
const formatDate = (date: string) => format(parseDate(date) as Date)

// accessors
const getDate = (d: CityTemperature) => d.date

// scales
const dateScale = scaleBand<string>({
  domain: data.map(getDate),
  padding: 0.5,
})
const temperatureScale = scaleLinear<number>({
  domain: [0, Math.max(...temperatureTotals)],
  nice: true,
})
const colorScale = scaleOrdinal<CityName, string>({
  domain: keys,
  range: [red, green, mint],
})

let tooltipTimeout: number

export default function Example({ width, height, events = false, margin = defaultMargin }: BarStackProps) {
  const { tooltipOpen, tooltipLeft, tooltipTop, tooltipData, hideTooltip, showTooltip } = useTooltip<TooltipData>()

  const { containerRef, TooltipInPortal } = useTooltipInPortal({
    // TooltipInPortal is rendered in a separate child of <body /> and positioned
    // with page coordinates which should be updated on scroll. consider using
    // Tooltip or TooltipWithBounds if you don't need to render inside a Portal
    scroll: true,
  })

  if (width < 10) return null
  // bounds
  const xMax = width
  const yMax = height - margin.top - 30

  dateScale.rangeRound([0, xMax])
  temperatureScale.range([yMax, 0])

  return width < 10 ? null : (
    <div
      style={{
        position: 'relative',
        width: 'fit-content',
      }}
    >
      <svg ref={containerRef} width={width} height={height}>
        <rect x={0} y={0} width={width} height={height} fill="var(--slate-1)" rx={14} />
        {/* <Grid
          top={margin.top}
          left={margin.left}
          xScale={dateScale}
          yScale={temperatureScale}
          width={xMax}
          height={yMax}
          stroke="var(--opacity-6)"
          xOffset={dateScale.bandwidth() / 2}
        /> */}
        <Group top={margin.top}>
          <BarStack<CityTemperature, CityName>
            data={data}
            keys={keys}
            x={getDate}
            xScale={dateScale}
            yScale={temperatureScale}
            color={colorScale}
            radius="10"
            r="10"
          >
            {(barStacks) =>
              barStacks.map((barStack) =>
                barStack.bars.map((bar) => (
                  <rect
                    key={`bar-stack-${barStack.index}-${bar.index}`}
                    x={bar.x}
                    y={bar.y}
                    height={bar.height}
                    width={bar.width}
                    fill={bar.color}
                    onClick={() => {
                      if (events) alert(`clicked: ${JSON.stringify(bar)}`)
                    }}
                    onMouseLeave={() => {
                      tooltipTimeout = window.setTimeout(() => {
                        hideTooltip()
                      }, 300)
                    }}
                    onMouseMove={(event) => {
                      if (tooltipTimeout) clearTimeout(tooltipTimeout)
                      // TooltipInPortal expects coordinates to be relative to containerRef
                      // localPoint returns coordinates relative to the nearest SVG, which
                      // is what containerRef is set to in this example.
                      const eventSvgCoords = localPoint(event)
                      const left = bar.x + bar.width / 2
                      showTooltip({
                        tooltipData: bar,
                        tooltipTop: eventSvgCoords?.y,
                        tooltipLeft: left,
                      })
                    }}
                  />
                ))
              )
            }
          </BarStack>
        </Group>
        <AxisBottom
          top={yMax + margin.top}
          scale={dateScale}
          tickFormat={formatDate}
          stroke={'var(--slate-9)'}
          tickStroke={'var(--slate-9)'}
          tickLabelProps={() => ({
            fill: 'var(--slate-9)',
            fontSize: 14,
            textAnchor: 'middle',
          })}
          hideTicks
          hideAxisLine
        />
      </svg>
      <div
        style={{
          position: 'absolute',
          top: margin.top / 2 - 10,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          fontSize: '14px',
        }}
      >
        <LegendOrdinal scale={colorScale} direction="row" labelMargin="0 15px 0 0" />
      </div>

      {tooltipOpen && tooltipData && (
        <TooltipInPortal top={tooltipTop} left={tooltipLeft} style={tooltipStyles}>
          <div style={{ color: colorScale(tooltipData.key) }}>
            <strong>{tooltipData.key}</strong>
          </div>
          <div>{tooltipData.bar.data[tooltipData.key]}℉</div>
          <div>
            <small>{formatDate(getDate(tooltipData.bar.data))}</small>
          </div>
        </TooltipInPortal>
      )}
    </div>
  )
}
