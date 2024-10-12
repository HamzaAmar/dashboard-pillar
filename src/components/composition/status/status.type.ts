import { Color } from '@type/utils'

export interface ErrorProps {
  variant?: 'gradient' | 'outline' | 'solid'
  color?: Color
}

export interface StatusProps {
  status: 'danger' | 'warning' | 'success' | 'info'
  title: string
  description: string
}
