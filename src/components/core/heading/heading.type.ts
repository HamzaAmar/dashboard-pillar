import type { ReactNode } from 'react'

type Color = 'indigo' | 'purple' | 'red' | 'orange' | 'slate' | 'mint'
type Contrast = 'low' | 'high'
type Size = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
type Heading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type Align = 'start' | 'end' | 'center' | 'justify'
type Transform = 'uppercase' | 'lowercase' | 'capitalize'
type Weight = 'thin' | 'extra-light' | 'light' | 'normal' | 'medium' | 'semi-bold' | 'bold' | 'extra-bold' | 'black'
export type Leading = 'none' | 'sm' | 'md' | 'lg'
type FontStyle = 'italic' | 'oblique'
type Decoration = 'line-through' | 'underline' | 'overline'

export interface HeadingBaseProps {
  children: ReactNode
  size?: Size
  as?: Heading
  className?: string
  align?: Align
  transform?: Transform
  weight?: Weight
  color?: Color
  contrast?: Contrast
  fontStyle?: FontStyle
  decoration?: Decoration
  leading?: Leading
  id?: string
}

export interface MultiLineHeadingTruncate extends HeadingBaseProps {
  truncate?: 'multiline'
  numberLine: number
}

interface SingleLineHeadingTruncate extends HeadingBaseProps {
  truncate?: 'singleline'
}

export type HeadingProps = MultiLineHeadingTruncate | SingleLineHeadingTruncate
