import type { SVGProps } from 'react'

const accordion = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M4 4v0m4 0v0m4 0v0m4 0v0m4 0v0M4 20v0m4 0v0m4 0v0m4 0v0m4 0v0m0-4v0m0-4v0m0-4v0M4 16v0m0-4v0m0-4v0m4 0h8v8H8V8Z" />
  </svg>
)

export default accordion
