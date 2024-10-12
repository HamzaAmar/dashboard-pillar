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
    <path d="m7 8-4 4 4 4m10-8 4 4-4 4M14 4l-4 16" />
  </svg>
)

export default circleRefresh
