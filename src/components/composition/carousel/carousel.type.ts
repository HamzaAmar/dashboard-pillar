import type { Size } from '@pillar-ui/core'
import type { EmblaOptionsType } from 'embla-carousel-react'
import type { ReactNode } from 'react'

type Orientation = 'vertical' | 'horizontal'

export interface CarouselProps extends EmblaOptionsType {
  content?: string[]
  children?: ReactNode
  options?: EmblaOptionsType
  withControls?: boolean
  withIndicators?: boolean
  orientation?: Orientation
  perView?: number
  gap?: Size
}
