import type { ReactNode } from 'react'

export interface PostProps {
  children: ReactNode
  user?: {
    name: string
    avatar?: string
  }
}
