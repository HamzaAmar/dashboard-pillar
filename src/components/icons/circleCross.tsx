import type { SVGProps } from 'react'

const circleCross = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m10 10 4 4m0-4-4 4m11-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
)

export default circleCross
