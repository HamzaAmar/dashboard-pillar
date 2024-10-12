import type { SVGProps } from 'react'

const video = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="m15 10 4.6-2.3a1 1 0 0 1 1.4 1v6.7a1 1 0 0 1-1.4.9L15 14v-4ZM13 6H5a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Z" />
  </svg>
)

export default video
