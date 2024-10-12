import * as React from 'react'
import type { SVGProps } from 'react'

const Eye = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="m3 3 18 18M11 11a2 2 0 1 0 2 2M9 5h3c4 0 7 2 10 7l-3 3m-2 2-5 2c-4 0-7-2-10-7l5-5" />
  </svg>
)

export default Eye
