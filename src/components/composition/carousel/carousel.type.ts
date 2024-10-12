import { Gap } from '@type/utils'
import type { EmblaOptionsType } from 'embla-carousel-react'
import { ReactNode } from 'react'

type Orientation = 'vertical' | 'horizontal'

export interface CarouselProps extends EmblaOptionsType {
  content?: string[]
  children?: ReactNode
  options?: EmblaOptionsType
  withControls?: boolean
  withIndicators?: boolean
  orientation?: Orientation
  perView?: number
  gap?: Gap
}
