import type { Color, Size } from '@type/utils'
import type { ComponentPropsWithoutRef } from 'react'

type State = 'idle' | 'checked' | 'indeterminate'

export interface ToggleProps extends Omit<ComponentPropsWithoutRef<'button'>, 'size'> {
  state?: State
  color?: Color
  label: string
  pressed?: boolean
  size?: Size
  defaultPressed?: boolean
  onPressedChange?: (x: boolean) => void
}
