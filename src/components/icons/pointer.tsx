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
    <path d="m14 14 4 4M6 6l4 12h1l2-5 5-2h0v-1L6 6Z" />
  </svg>
)

export default pointer
