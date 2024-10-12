import type { SVGProps } from 'react'

const zoomin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="m18 19-2-2V5c0-1.1.9-2 2-2a2 2 0 0 1 2 2v12l-2 2Zm0 0H5a2 2 0 1 1 0-4h4a2 2 0 1 0 0-4H6m10-4h4" />
  </svg>
)

export default zoomin
