import type { CryptoPrices } from '@api/crypto'
import { Color } from '@pillar-ui/core'
import type { ReactNode } from 'react'

export type StatusUnion = 'positive' | 'negative' | 'equal'
export interface Hello {
  color: Color
  icon: ReactNode
}
export type StatusObjRecord = Record<StatusUnion, Hello>

interface Count {
  previous: number
  current: number
}

export interface EcommerceDashboardArticleProps {
  count: Count
  title: string
}

export interface StoreVisitProgressProps {
  color?: Color
  value: number
  title: string
}

export interface CryptoCurrencyItemProps extends CryptoPrices {}

export interface PagesProps {
  title: string
  description: string
  href: string
  image: string
}
