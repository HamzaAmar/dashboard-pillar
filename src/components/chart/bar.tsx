import { useMemo } from 'react'
import { Bar } from '@visx/shape'
import { Group } from '@visx/group'
import letterFrequency, { LetterFrequency } from '@visx/mock-data/lib/mocks/letterFrequency'
import { scaleBand, scaleLinear } from '@visx/scale'
import { AxisBottom, AxisLeft } from '@visx/axis'

const data = letterFrequency
const verticalMargin = 50

// accessors
const getLetter = (d: LetterFrequency) => d.letter
// const letters = data.map(getLetter);
const getLetterFrequency = (d: LetterFrequency) => Number(d.frequency) * 100
const letterFrequencies = data.map(getLetterFrequency)

export type BarsProps = {
  width: number
  height: number
  events?: boolean
}

const alpha = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
]

export default function Example({ width, height, events = false }: BarsProps) {
  // bounds
  const xMax = width
  const yMax = height - verticalMargin

  // scales, memoize for performance
  const xScale = useMemo(
    () =>
      scaleBand<string>({
        // domain: data.map(getLetter),
        domain: alpha,
        range: [0, xMax],
        padding: 0.6,
        paddingOuter: 1,
      }),
    [xMax]
  )

  const yScale = useMemo(
    () =>
      scaleLinear<number>({
        range: [yMax, 0],
        round: true,
        domain: [0, Math.max(...data.map(getLetterFrequency))],
      }),
    [yMax]
  )

  const yAxisScale = scaleLinear({
    domain: [0, Math.max(...letterFrequencies)],
    range: [yMax, 0],
    nice: true,
  })

  return width < 10 ? null : (
    <svg width={width} height={height}>
      <rect width={width} height={height} fill="var(--B2)" rx={14} />
      <Group top={verticalMargin / 2}>
        {data.map((d) => {
          const letter = getLetter(d)
          const barWidth = xScale.bandwidth()
          const barHeight = yMax - (yScale(getLetterFrequency(d)) ?? 0)
          const barX = xScale(letter)
          const barY = yMax - barHeight
          return (
            <Bar
              key={`bar-${letter}`}
              x={barX}
              y={barY}
              width={barWidth}
              height={barHeight}
              fill="rgba(23, 233, 217, .5)"
              onClick={() => {
                if (events) alert(`clicked: ${JSON.stringify(Object.values(d))}`)
              }}
            />
          )
        })}
        <AxisBottom left={12} top={yMax} scale={xScale} numTicks={alpha.length} />
        <AxisLeft left={20} scale={yAxisScale} />
      </Group>
    </svg>
  )
}
