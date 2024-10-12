import type { SVGProps } from 'react'

const latterCase = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M3 19V9a3 3 0 1 1 7 0v10m-7-6h7m11-1v7m0-3a3 3 0 1 1-7 0 3 3 0 0 1 7 0Z" />
  </svg>
)

export default latterCase
