import type { SVGProps } from 'react'

const switches = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M2 12h2m0 0a2 2 0 1 0 4 0m-4 0a2 2 0 1 1 4 0m12 0h2m-2 0a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0m-8 0h8" />
  </svg>
)

export default switches
