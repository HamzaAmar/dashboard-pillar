import { ReactElement, ReactNode } from 'react'

type Size = 'sm' | 'md' | 'lg'

export interface BreadcrumbProps {
  children: ReactNode
  separator?: string | ReactElement
  size?: Size
}

export interface BreadcrumbItemProps extends BreadcrumbProps {
  link: string
  current?: boolean
  icon?: ReactNode
}

export interface BreadcrumbContextType extends Omit<BreadcrumbProps, 'children'> {}

export interface BreadcrumbProviderProps extends BreadcrumbProps {}
