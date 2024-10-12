import type { FlexProps } from '@components/core/flex/flex.type'
import type { CSSProperties, ReactNode } from 'react'

export interface PreviewProps extends FlexProps {
  children: ReactNode
  title: string
  description: string
  code?: string
  full?: boolean
  direction?: 'row' | 'column'
  style?: CSSProperties
}
