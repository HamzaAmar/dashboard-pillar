import type { Color } from '@type/utils'
import type { ReactNode } from 'react'

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type BadgeBase = {
  color?: Color
  size?: Size
  pulse?: boolean
}

type NumberBadgeProps = {
  variant: 'number'
  max: number
  number: number
} & BadgeBase

type DotBadgeProps = {
  variant: 'dot'
} & BadgeBase

type IconBadgeProps = {
  variant: 'icon'
  icon: ReactNode
} & BadgeBase

export type BadgeProps = NumberBadgeProps | DotBadgeProps | IconBadgeProps //  For More Info About This Pattern Learn More about Discriminated unions
