import type { Color, Corner } from '@type/utils'
import type { ReactNode } from 'react'

type Size = 'sm' | 'md' | 'lg'
type Variant = 'solid' | 'soft' | 'outline'
export type ChipsColor = Color

export interface ChipsProps {
  variant?: Variant
  size?: Size
  color?: ChipsColor
  corner?: Corner
  children: ReactNode
}
