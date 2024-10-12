import type { SVGProps } from 'react'

const stack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m4 12 8 4 8-4M4 16l8 4 8-4M12 4 4 8l8 4 8-4-8-4Z" />
  </svg>
)

export default stack
