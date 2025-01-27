import type { SVGProps } from 'react'

const github = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6 0-1.2-.5-2.3-1.3-3.2.4-1 .4-2.2-.1-3.2 0 0-1.1-.3-3.5 1.3a13 13 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1c-.5 1-.5 2.2-.1 3.2-.8.9-1.3 2-1.3 3.2 0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
  </svg>
)

export default github
