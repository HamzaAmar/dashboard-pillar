import * as React from 'react'

function cross(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="m12 6 4 6 5-4-2 10H5L3 8l5 4 4-6Z" />
    </svg>
  )
}

export default cross
