import type { SVGProps } from 'react'

const loader = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M12 6V3m4 5 2-2m0 6h3m-5 4 2 2m-6 0v3m-4-5-2 2m0-6H3m5-4L6 6" />
  </svg>
)

export default loader
