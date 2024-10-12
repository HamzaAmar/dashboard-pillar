import type { SVGProps } from 'react'

const dots = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M17 8a3 3 0 0 0-3-2h-4a3 3 0 1 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1-3-2m5-13v3m0 12v3" />
  </svg>
)

export default dots
