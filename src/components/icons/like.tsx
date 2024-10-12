import type { SVGProps } from 'react'

const like = ({ direction = 'top', ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M7 11v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h3Zm0 0a4 4 0 0 0 4-4V6a2 2 0 1 1 4 0v5h3a2 2 0 0 1 2 2l-1 5c-.1.6-.4 1.1-.8 1.5-.3.4-.8.5-1.2.5h-7a3 3 0 0 1-3-3" />
    </svg>
  )
}

export default like
