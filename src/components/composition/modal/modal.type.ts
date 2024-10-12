import type { ReactNode } from 'react'
import type { ButtonProps } from '../../core/button/button.type'
import type { AlertDialogProps as AlertDialogPropsRoot } from '@radix-ui/react-alert-dialog'
import type { DialogProps as RadixDialogProps } from '@radix-ui/react-dialog'

type Size = 'sm' | 'md' | 'lg' | 'full'

export interface AlertDialogRootProps extends AlertDialogPropsRoot {
  children: ReactNode
  trigger: ReactNode
  size?: Size
}

export interface AlertDialogProps extends Omit<AlertDialogRootProps, 'children'> {
  cancelTitle?: string
  actionTitle?: string
  title?: string
  description: string
}

export interface AlertDialogActionButtonProps extends ButtonProps {
  children: ReactNode
}

export interface DialogProps {
  title: string
  description?: string
  trigger: ReactNode
  children?: ReactNode
  size?: Size
}
export interface DrawerDialogProps extends RadixDialogProps {
  trigger: ReactNode
  children: ReactNode
  title: ReactNode
  position?: 'top' | 'bottom' | 'left' | 'right'
  size?: Size
}
