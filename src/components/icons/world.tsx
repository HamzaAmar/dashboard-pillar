import type { SVGProps } from 'react'

const world = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M4 9h16M4 15h16M12 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 0 18m8-9a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
)

export default world
