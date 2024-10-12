import type { SVGProps } from 'react'

const rotation = {
  top: '0',
  bottom: '180',
} as const

interface InfoProps extends SVGProps<SVGSVGElement> {
  direction?: keyof typeof rotation
}

const info = ({ direction = 'top', ...rest }: InfoProps) => (
  <svg
    fill="none"
    stroke="currentColor"
    transform={`rotate(${rotation[direction]})`}
    style={{ transform: `rotate(${rotation[direction]}deg)` }}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...rest}
  >
    <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13h0" />
    <path d="M11 12h1v4h1" />
  </svg>
)

export default info
