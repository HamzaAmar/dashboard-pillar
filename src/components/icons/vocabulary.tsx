import type { SVGProps } from 'react'

const template = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 5a2 2 0 0 0-2-2H4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h6a2 2 0 0 1 2 2m0-16a2 2 0 0 1 2-2h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-6a2 2 0 0 0-2 2m0-16v16M7 7h1m-1 4h1m8-4h1m-1 4h1m-1 4h1" />
  </svg>
)

export default template
