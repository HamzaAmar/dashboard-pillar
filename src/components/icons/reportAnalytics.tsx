import type { SVGProps } from 'react'

const reportAnalytics = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5l2 2h2l2-2M9 5l2-2h2l2 2M9 17v-5m3 5v-1m3 1v-3" />
  </svg>
)

export default reportAnalytics
