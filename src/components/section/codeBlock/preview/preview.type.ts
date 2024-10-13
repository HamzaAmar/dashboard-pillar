import type { FlexProps } from '@pillar-ui/core'
import type { CSSProperties, ReactNode } from 'react'

export interface PreviewProps extends FlexProps {
  children: ReactNode
  title: string
  description: string
  code?: string
  full?: boolean
  style?: CSSProperties
}
