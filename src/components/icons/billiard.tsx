import type { SVGProps } from 'react'

const billiard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" />
  </svg>
)

export default billiard
