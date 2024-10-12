import type { SVGProps } from 'react'

const pointer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M6 18 18 6m0 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM8 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
  </svg>
)

export default pointer
