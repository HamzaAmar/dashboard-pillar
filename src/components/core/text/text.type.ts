import type { Color } from '@type/utils'
import type { ReactNode } from 'react'

export type TextSize = '3xs' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'

type Contrast = 'low' | 'high'
type FontStyle = 'italic' | 'oblique'
type Align = 'start' | 'center' | 'end'
type Decoration = 'line-through' | 'underline' | 'overline'
export type Leading = 'none' | 'sm' | 'md' | 'lg'
export type HTMLTextElements = 'span' | 'p' | 'label' | 'small' | 'em' | 'i' | 'strong' | 'b' | 'i' | 'time'

type Transform = 'uppercase' | 'lowercase' | 'capitalize'
type Weight = 'thin' | 'extra-light' | 'light' | 'normal' | 'medium' | 'semi-bold' | 'bold' | 'extra-bold' | 'black'

interface TextBaseProps {
  size?: TextSize
  className?: string
  align?: Align
  transform?: Transform
  children?: ReactNode
  weight?: Weight
  color?: Color
  contrast?: Contrast
  fontStyle?: FontStyle
  decoration?: Decoration
  leading?: Leading
}

export interface MultiLineTextTruncate extends TextBaseProps {
  truncate?: 'multiline'
  numberLine: number
}

interface SingleLineTextTruncate extends TextBaseProps {
  truncate?: 'singleline'
}

export type TextProps = MultiLineTextTruncate | SingleLineTextTruncate
