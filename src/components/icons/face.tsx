import type { SVGProps } from 'react'

const Face = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M9 10h0m6 0h0m-5.5 5a3.5 3.5 0 0 0 5 0m6.5-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
)

export default Face
