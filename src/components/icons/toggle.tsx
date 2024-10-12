import type { SVGProps } from 'react'

const template = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M8 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    <path d="M16 6H8a6 6 0 1 0 0 12h8a6 6 0 0 0 0-12Z" />
  </svg>
)

export default template
