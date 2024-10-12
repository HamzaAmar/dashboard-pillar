import type { SVGProps } from 'react'

const shieldCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m9 12 2 2 4-4m-3-7a12 12 0 0 0 8.5 3A12 12 0 0 1 12 21 12 12 0 0 1 3.5 6c3.1.1 6.2-1 8.5-3Z" />
  </svg>
)

export default shieldCheck
