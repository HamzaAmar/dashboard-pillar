import type { SVGProps } from 'react'

const bell = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M13 12a3 3 0 1 0 0-7H7v7m6 0H7m6 0h1a3 3 0 1 1 0 7H7v-7" />
  </svg>
)

export default bell
