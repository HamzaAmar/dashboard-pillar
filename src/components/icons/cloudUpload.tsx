import type { SVGProps } from 'react'

const cloudUpload = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    fill="none"
    {...props}
  >
    <path d="m7 18-3-1-2-3 2-4 3-1 2-3a6 6 0 0 1 5-1l2 1 1 1 1 2v2h1a4 4 0 1 1 0 7h-1m-9-3 3-3m0 0 3 3m-3-3v9" />
  </svg>
)

export default cloudUpload
