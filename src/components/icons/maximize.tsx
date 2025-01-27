import type { SVGProps } from 'react'

const maximize = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M16 4h4m0 0v4m0-4-6 6M8 20H4m0 0v-4m0 4 6-6m6 6h4m0 0v-4m0 4-6-6M8 4H4m0 0v4m0-4 6 6" />
  </svg>
)

export default maximize
