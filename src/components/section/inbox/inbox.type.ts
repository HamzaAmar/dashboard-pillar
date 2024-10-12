import { InboxType } from '@api/inbox/message.type'
import type { ReactNode } from 'react'

export interface InboxNavItemProps {
  title: string
  href: InboxType
  children?: ReactNode
  icon?: ReactNode
  handleTrue: () => void
}

export interface InboxNavType extends Omit<InboxNavItemProps, 'children' | 'handleTrue'> {
  id: string
}
