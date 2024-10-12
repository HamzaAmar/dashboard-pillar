import type { Color } from '@type/utils'

type Size = 'sm' | 'md' | 'lg'

export interface SpinnerProps {
  color?: Color
  size?: Size
  invert?: boolean
}
