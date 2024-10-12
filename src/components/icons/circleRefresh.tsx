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
    <path d="M12 16a4 4 0 1 0-4-4v1m-2-1 2 2 2-2m11 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
)

export default circleRefresh
