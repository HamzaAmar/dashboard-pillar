import type { SVGProps } from 'react'

const circleRefresh = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    fill="none"
    {...props}
  >
    <path d="M4 6h5.5M4 10h5.5M4 14h5.5M4 18h5.5m5-12H20m-5.5 4H20m-5.5 4H20m-5.5 4H20" />
  </svg>
)

export default circleRefresh
