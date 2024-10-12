import type { SVGProps } from 'react'

const help = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M12 17v0m0-3.5a1.5 1.5 0 0 1 1-1.5 2.6 2.6 0 1 0-3-4m11 4a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
)

export default help
