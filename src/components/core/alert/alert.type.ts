import type { ReactNode } from 'react'
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type Variant = 'fill' | 'outline' | 'soft'
type Type = 'success' | 'warning' | 'danger' | 'info'

export interface AlertProps {
  size?: Size
  type?: Type
  title?: string
  message: string
  variant?: Variant
  showIcon?: boolean
  inline?: boolean
}

export type IconsType = Record<Type, ReactNode>
