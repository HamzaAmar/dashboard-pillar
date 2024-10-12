import type { ReactNode } from 'react'
import type { Placement } from '../popover/popover.type'
import type { TooltipProviderProps } from '@radix-ui/react-tooltip'

export interface TooltipProps extends TooltipProviderProps {
  children: ReactNode
  title: string
  placement?: Placement
}
