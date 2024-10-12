import type { SVGProps } from 'react'

const template = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M14 12h6m-6 4h6m-6 4h6M5 4h14c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1H5a1 1 0 0 1-1-1V5c0-.6.4-1 1-1Zm0 8h4c.6 0 1 .4 1 1v6c0 .6-.4 1-1 1H5a1 1 0 0 1-1-1v-6c0-.6.4-1 1-1Z" />
  </svg>
)

export default template
