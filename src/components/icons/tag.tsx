import type { SVGProps } from 'react'

const tag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M8.5 9.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    <path d="M4 7v3.9c0 .5.2 1 .6 1.4l8.1 8.1a2 2 0 0 0 2.9 0l4.8-4.8a2 2 0 0 0 0-2.9l-8.1-8.1a2 2 0 0 0-1.4-.6H7a3 3 0 0 0-3 3Z" />
  </svg>
)

export default tag
