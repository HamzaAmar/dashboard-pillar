import type { SVGProps } from 'react'

const cart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M6 17a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h11M6 17V3H4m13 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM6 5l14 1-1 7H6" />
  </svg>
)

export default cart
