import type { SVGProps } from 'react'

const userX = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2m2-12 4 4m0-4-4 4m-4-6a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
  </svg>
)

export default userX
