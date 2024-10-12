import type { SVGProps } from 'react'

const layoutGrid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M9 4H5L4 5v4l1 1h4l1-1V5L9 4ZM19 4h-4l-1 1v4l1 1h4l1-1V5l-1-1ZM9 14H5l-1 1v4l1 1h4l1-1v-4l-1-1ZM19 14h-4l-1 1v4l1 1h4l1-1v-4l-1-1Z" />{' '}
  </svg>
)

export default layoutGrid
