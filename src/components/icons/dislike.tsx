import * as React from 'react'

function dislike(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M7 13V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h3Zm0 0a4 4 0 0 1 4 4v1a2 2 0 1 0 4 0v-5h3a2 2 0 0 0 2-2l-1-5c-.1-.6-.4-1.1-.8-1.5-.3-.4-.8-.5-1.2-.5h-7a3 3 0 0 0-3 3" />
    </svg>
  )
}

export default dislike
