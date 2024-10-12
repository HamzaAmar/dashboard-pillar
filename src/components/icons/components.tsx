import * as React from 'react'

function cross(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="m3 12 3 3 3-3-3-3-3 3ZM15 12l3 3 3-3-3-3-3 3ZM9 6l3 3 3-3-3-3-3 3ZM9 18l3 3 3-3-3-3-3 3Z" />
    </svg>
  )
}

export default cross
