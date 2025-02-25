import type { Color } from '@pillar-ui/core'
import type { ReactNode } from 'react'

export interface MetricCardProps {
  title: string
  value: string | number
  change: number
  data: { value: number }[]
  icon: ReactNode
  color: string
  areaColor: string
}

export interface AssignmentProps {
  category: string
  description: string
  progress: number
  tasks: string
  color: Color
}
