import type { Color, Corner, Size } from '@type/utils'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import type { BadgeProps } from '../badge/badge.type'

type AvatarShared = {
  size?: Size
  corner?: Corner
  color?: Color
}

export type AvatarBaseProps = {
  title?: string
  children?: ReactNode
} & AvatarShared &
  ComponentPropsWithoutRef<'img'>

export type AvatarImageProps = {
  variant: 'image'
  image?: string
} & AvatarBaseProps

export type AvatarIconProps = {
  variant: 'icon'
  icon?: ReactNode
} & AvatarBaseProps

export type AvatarProps = AvatarIconProps | AvatarImageProps

type Direction = 'start-start' | 'start-end' | 'end-start' | 'end-end'

export type AvatarBadgeProps = {
  position?: Direction
} & BadgeProps

export interface AvatarGroupProps extends AvatarShared {
  limit?: number
  variant?: 'stack' | 'grid'
  children: ReactNode
}

export interface AvatarGroContextProps extends AvatarShared {}
export interface AvatarGroupProviderProps extends AvatarGroContextProps {
  children: ReactNode
}
