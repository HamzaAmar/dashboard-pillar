import type { SVGProps } from 'react'

const forms = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M12 3a3 3 0 0 0-3 3m0 0v12M9 6a3 3 0 0 0-3-3m3 15a3 3 0 0 0 3 3m-3-3a3 3 0 0 1-3 3m7-14h7a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-7M5 7H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1m12-5h0m-4 0h0" />
  </svg>
)

export default forms
