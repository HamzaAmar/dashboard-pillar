import type { SliderProps } from '@radix-ui/react-slider'
import type { Color, Corner } from '@type/utils'
import type { ReactNode } from 'react'

type Variant = 'solid' | 'outline'

type Size = 'sm' | 'md' | 'lg'

export interface SliderRootProps extends SliderProps {
  color?: Color
  size?: Size
  sliderPrefix?: ReactNode
  SliderSuffix?: ReactNode
}

export interface SliderThumbProps {
  size?: Size
  variant?: Variant
  corner?: Corner
  label: string
}

export interface SliderTrackProps {
  size?: Size
  variant?: Variant
  corner?: Corner
}

export interface SliderRootTest extends Omit<SliderRootProps, 'children'> {}
