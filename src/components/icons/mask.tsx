import type { SVGProps } from 'react'

const mask = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M15 13h0m3 0h0m-3 4h3m-9-1H7a4 4 0 0 1-4-4L2 6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2M6 8h0m3 0h0m-3 4h2m5-3h7a2 2 0 0 1 2 2l-1 6a4 4 0 0 1-4 4h-1a4 4 0 0 1-4-4l-1-6a2 2 0 0 1 2-2Z" />
  </svg>
)

export default mask
