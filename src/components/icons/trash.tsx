import type { SVGProps } from 'react'

const trash = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path
      d="M10 11v6m4-6v6M4 7h16m-1 0-1 12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 7h14Zm-4 0V4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3h6Z"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default trash
