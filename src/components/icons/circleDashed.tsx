import type { SVGProps } from 'react'

const circleDashed = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M8.6 3.7a9 9 0 0 0-3 2m-2 2.9A9 9 0 0 0 3 12m.7 3.4a9 9 0 0 0 2 3m2.9 2a9 9 0 0 0 3.4.6m3.4-.7a9 9 0 0 0 3-2m2-2.9A9 9 0 0 0 21 12m-.7-3.4a9 9 0 0 0-2-3m-2.9-2A9 9 0 0 0 12 3" />
  </svg>
)

export default circleDashed
