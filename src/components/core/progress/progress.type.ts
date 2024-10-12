import type { Color } from '@type/utils'
import { ReactNode } from 'react'

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface ProgressCoreProps {
  color?: Color
  size?: Size
  showValue?: boolean
  label: string
  value: number
}

export interface ProgressBarStackItemProps extends Omit<ProgressCoreProps, 'size'> {
  children: ReactNode
}
export interface ProgressBarStackProps {
  children: ReactNode
  size?: Size
  label: string
}

export interface ProgressBarProps extends ProgressCoreProps {}
export interface ProgressCircleProps extends ProgressCoreProps {}
