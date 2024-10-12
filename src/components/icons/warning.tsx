import * as React from 'react'

function warning(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path
        d="M12 8v4m0 4h0m9-4a9 9 0 11-18 0 9 9 0 0118 0z"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default warning
