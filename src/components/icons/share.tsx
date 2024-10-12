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
    <path d="m9 11 6-4m-6 6 6 4m-6-5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm12-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm0 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>
)

export default shieldCheck
