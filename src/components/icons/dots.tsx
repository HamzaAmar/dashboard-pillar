import type { SVGProps } from 'react'

type Direction = 'vertical' | 'horizontal'
interface DotsProps extends SVGProps<SVGSVGElement> {
  direction?: Direction
}

const directions: Record<Direction, string> = {
  horizontal: 'rotate(0)',
  vertical: 'rotate(90)',
}

const dots = ({ direction = 'horizontal', ...props }: DotsProps) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      transform={directions[direction]}
      d="M5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm7 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm7 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
  </svg>
)

export default dots
