import type { SVGProps } from 'react'

const notFound = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 7v4a1 1 0 0 0 1 1h3m0-5v10M17 7v4a1 1 0 0 0 1 1h3m0-5v10M10 8v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1Z" />
    </svg>
  )
}

export default notFound
