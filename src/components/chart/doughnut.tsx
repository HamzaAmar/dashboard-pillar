import { useState } from 'react'
import Pie, { ProvidedProps, PieArcDatum } from '@visx/shape/lib/shapes/Pie'
import { scaleOrdinal } from '@visx/scale'
import { Group } from '@visx/group'

import browserUsage, { BrowserUsage as Browsers } from '@visx/mock-data/lib/mocks/browserUsage'
import { animated, useTransition, interpolate, SpringValues } from '@react-spring/web'
import { Color } from '@pillar-ui/core'

// data and types
type BrowserNames = keyof Browsers

interface BrowserUsage {
  label: BrowserNames
  usage: number
}

// const letters: LetterFrequency[] = letterFrequency.slice(0, 4);
const browserNames = Object.keys(browserUsage[0]).filter((k) => k !== 'date') as BrowserNames[]
const browsers: BrowserUsage[] = browserNames.map((name) => ({
  label: name,
  usage: Number(browserUsage[0][name]),
}))

// accessor functions
const usage = (d: BrowserUsage) => d.usage
// const frequency = (d: LetterFrequency) => d.frequency;

// color scales
const getBrowserColor = scaleOrdinal({
  domain: browserNames,
  range: [
    'var(--color-shared-11)',
    'var(--color-shared-10)',
    'var(--color-shared-9)',
    'var(--color-shared-8)',
    'var(--color-shared-7)',
    'var(--color-shared-6)',
    'var(--color-shared-5)',
  ],
})

const defaultMargin = { top: 20, right: 20, bottom: 20, left: 20 }

export type PieProps = {
  width: number
  height: number
  margin?: typeof defaultMargin
  animate?: boolean
  color?: Color
}

export default function Example({ width, height, margin = defaultMargin, animate = true, color = 'p' }: PieProps) {
  const [selectedBrowser, setSelectedBrowser] = useState<string | null>(null)

  if (width < 10) return null

  const innerWidth = width - margin.left - margin.right
  const innerHeight = height - margin.top - margin.bottom
  const radius = Math.min(innerWidth, innerHeight) / 2
  const centerY = innerHeight / 2
  const centerX = innerWidth / 2
  const donutThickness = 50

  return (
    <svg className={`u_${color}`} width={width} height={height}>
      <rect rx={14} width={width} height={height} fill="white" />
      <Group top={centerY + margin.top} left={centerX + margin.left}>
        <Pie
          data={selectedBrowser ? browsers.filter(({ label }) => label === selectedBrowser) : browsers}
          pieValue={usage}
          outerRadius={radius}
          innerRadius={radius - donutThickness}
          cornerRadius={3}
          // padAngle={0.005}
          padAngle={0.005}
        >
          {(pie) => (
            <AnimatedPie<BrowserUsage>
              {...pie}
              animate={animate}
              getKey={(arc) => arc.data.label}
              onClickDatum={({ data: { label } }) =>
                animate && setSelectedBrowser(selectedBrowser && selectedBrowser === label ? null : label)
              }
              getColor={(arc) => getBrowserColor(arc.data.label)}
            />
          )}
        </Pie>
      </Group>
      {animate && (
        <text
          textAnchor="end"
          x={width - 16}
          y={height - 16}
          fill="white"
          fontSize={11}
          fontWeight={300}
          pointerEvents="none"
        >
          Click segments to update
        </text>
      )}
    </svg>
  )
}

// react-spring transition definitions
type AnimatedStyles = { startAngle: number; endAngle: number; opacity: number }

const fromLeaveTransition = ({ endAngle }: PieArcDatum<any>) => ({
  // enter from 360° if end angle is > 180°
  startAngle: endAngle > Math.PI ? 2 * Math.PI : 0,
  endAngle: endAngle > Math.PI ? 2 * Math.PI : 0,
  opacity: 0,
})
const enterUpdateTransition = ({ startAngle, endAngle }: PieArcDatum<any>) => ({
  startAngle,
  endAngle,
  opacity: 1,
})

type AnimatedPieProps<Datum> = ProvidedProps<Datum> & {
  animate?: boolean
  getKey: (d: PieArcDatum<Datum>) => string
  getColor: (d: PieArcDatum<Datum>) => string
  onClickDatum: (d: PieArcDatum<Datum>) => void
  delay?: number
}

function AnimatedPie<Datum>({ animate, arcs, path, getKey, getColor, onClickDatum }: AnimatedPieProps<Datum>) {
  const transitions = useTransition<PieArcDatum<Datum>, AnimatedStyles>(arcs, {
    from: animate ? fromLeaveTransition : enterUpdateTransition,
    enter: enterUpdateTransition,
    update: enterUpdateTransition,
    leave: animate ? fromLeaveTransition : enterUpdateTransition,
    keys: getKey,
  })
  return transitions((props, arc, { key }) => {
    const [centroidX, centroidY] = path.centroid(arc)
    const hasSpaceForLabel = arc.endAngle - arc.startAngle >= 0.1
    props = props as SpringValues<{ opacity: number; endAngle: number; startAngle: number }>
    return (
      <g key={key}>
        <animated.path
          // compute interpolated path d attribute from intermediate angle values
          d={interpolate([props.startAngle, props.endAngle], (startAngle, endAngle) =>
            path({
              ...arc,
              startAngle,
              endAngle,
            })
          )}
          fill={getColor(arc)}
          onClick={() => onClickDatum(arc)}
          onTouchStart={() => onClickDatum(arc)}
        />
        {hasSpaceForLabel && (
          <g>
            <text
              fill="white"
              x={centroidX}
              y={centroidY}
              dy=".33em"
              fontSize={9}
              textAnchor="middle"
              pointerEvents="none"
            >
              {getKey(arc)}
            </text>
          </g>
        )}
      </g>
    )
  })
}
