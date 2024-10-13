import type { ReactNode } from 'react'
import type { AlertDialogProps as AlertDialogPropsRoot } from '@radix-ui/react-alert-dialog'
import type { DialogProps as RadixDialogProps } from '@radix-ui/react-dialog'
import { ButtonProps, Size } from '@pillar-ui/core'

type DSize = Size | 'full'

export interface AlertDialogRootProps extends AlertDialogPropsRoot {
  children: ReactNode
  trigger: ReactNode
  size?: DSize
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
  size?: DSize
}
export interface DrawerDialogProps extends RadixDialogProps {
  trigger: ReactNode
  children: ReactNode
  title: ReactNode
  position?: 'top' | 'bottom' | 'left' | 'right'
  size?: DSize
}
