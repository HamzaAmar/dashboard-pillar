import type { SVGProps } from 'react'

const adjustment = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M6 12a2 2 0 1 0 0-4m0 4a2 2 0 1 1 0-4m0 4v8M6 8V4m6 14a2 2 0 1 0 0-4m0 4a2 2 0 1 1 0-4m0 4v2m0-6V4m6 5a2 2 0 1 0 0-4m0 4a2 2 0 1 1 0-4m0 4v11m0-15V4" />
  </svg>
)

export default adjustment
