import type { Color } from '@type/utils'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

type Size = 'sm' | 'md' | 'lg'
type Direction = 'row' | 'column'

interface SharedProps {
  color?: Color
  size?: Size
}

interface RadioGroupBase {
  direction?: Direction
  showLabel?: boolean
  label: string
}
interface RadioGroup {
  children: ReactNode
  id?: string
  name?: string
}

export interface RadioProps extends Omit<ComponentPropsWithoutRef<'input'>, 'size'> {
  label: string
  color?: Color
  size?: Size
}

export interface RadioGroupProps extends RadioGroup, SharedProps, RadioGroupBase {}

export interface RadioProviderProps extends Omit<RadioGroup, 'id'>, SharedProps {}

export type RadioGroupContextProps = Omit<RadioProviderProps, 'children'>

export interface CustomRadioProps extends RadioProps {
  children: ReactNode
  direction?: 'column' | 'row'
  showLabel?: boolean
}
