import type { SVGProps } from 'react'

interface ArrowProps extends SVGProps<SVGSVGElement> {
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

const caret = ({ direction = 'bottom', ...rest }: ArrowProps) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    transform={`rotate(${rotation[direction]})`}
    style={{ transform: `rotate(${rotation[direction]}deg)` }}
    fill="none"
    {...rest}
  >
    <path d="m6 9 6 6 6-6H6Z" />
  </svg>
)

export default caret
