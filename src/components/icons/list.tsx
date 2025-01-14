import type { SVGProps } from 'react'

const layer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M13 5h8m-8 4h5m-5 6h8m-8 4h5M4 4h4c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V5c0-.6.4-1 1-1Zm0 10h4c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1v-4c0-.6.4-1 1-1Z" />
  </svg>
)

export default layer
