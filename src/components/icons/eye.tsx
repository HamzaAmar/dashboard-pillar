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
    <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    <path d="M22 12c-2.7 4.7-6 7-10 7s-7.3-2.3-10-7c2.7-4.7 6-7 10-7s7.3 2.3 10 7Z" />
  </svg>
)

export default Eye
