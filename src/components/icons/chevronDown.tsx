import type { SVGProps } from 'react'

interface ChevronProps extends SVGProps<SVGSVGElement> {
  direction?: keyof typeof rotation
}

const rotation = {
  left: '90',
  right: '-90',
  top: '180',
  bottom: '0',
  'left-top': '135',
  'left-bottom': '45',
  'right-top': '-135',
  'right-bottom': '-45',
} as const

const chevronDown = ({ direction = 'bottom', ...rest }: ChevronProps) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    transform={`rotate(${rotation[direction]})`}
    style={{ transform: `rotate(${rotation[direction]}deg)` }}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    {...rest}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
)

export default chevronDown
