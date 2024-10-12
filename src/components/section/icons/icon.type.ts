import type { ReactElement } from 'react'

export interface IconData {
  slug: string
  icon: ReactElement
  title: string
  code: string
}

export type IconsDataProps = IconData[]
export type IconProps = Omit<IconData, 'slug'>
