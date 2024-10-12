import type { SVGProps } from 'react'

const floatLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M14 7h6m-6 4h6M4 15h16M4 19h16M5 5h4l1 1v4l-1 1H5l-1-1V6l1-1Z" />
  </svg>
)

export default floatLeft
