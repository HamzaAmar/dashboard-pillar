import { ReactNode } from 'react'

export interface MetricCardProps {
  title: string
  value: string | number
  change: number
  data: { value: number }[]
  icon: ReactNode
  color: string
  areaColor: string
}
