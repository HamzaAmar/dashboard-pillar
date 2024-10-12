import type { ReactNode } from 'react'

export interface SidebarItemProps {
  children?: ReactNode
  title: string
  icon?: ReactNode
  isShrink?: boolean
  open?: boolean
}
