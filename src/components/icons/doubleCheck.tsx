import * as React from 'react'

function check(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      strokeWidth="2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="m7 12 5 5L22 7M2 12l5 5m5-5 5-5" />
    </svg>
  )
}

export default check
