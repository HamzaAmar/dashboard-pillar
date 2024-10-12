import type { SVGProps } from 'react'

const ship = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M2 20a2 2 0 0 0 2 1 2 2 0 0 0 2-1 2 2 0 0 1 2-1 2 2 0 0 1 2 1 2 2 0 0 0 2 1 2 2 0 0 0 2-1 2 2 0 0 1 2-1 2 2 0 0 1 2 1 2 2 0 0 0 2 1 2 2 0 0 0 2-1M4 18l-1-5h18l-2 4M5 13V7h8l4 6M7 7V3H6" />
  </svg>
)

export default ship
