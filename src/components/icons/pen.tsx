import * as React from 'react'

const pen = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="m13.5 6.5 4 4M4 20h4L18.5 9.5a2.8 2.8 0 0 0-4-4L4 16v4Z" />
  </svg>
)

export default pen
