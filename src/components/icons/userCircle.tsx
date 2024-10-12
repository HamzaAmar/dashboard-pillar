import type { SVGProps } from 'react'

const userCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M6.2 18.8A4 4 0 0 1 10 16h4a4 4 0 0 1 3.8 2.9M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-6-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>
)

export default userCircle
