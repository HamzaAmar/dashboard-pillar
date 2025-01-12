import * as AlertDialogRadix from '@radix-ui/react-alert-dialog'
import { Flex, Button, Text, Heading, Paper } from '@pillar-ui/core'

import type { AlertDialogActionButtonProps, AlertDialogProps, AlertDialogRootProps } from './modal.type'

export const AlertDialog = ({ children, trigger, size = '5', ...rest }: AlertDialogRootProps) => {
  return (
    <AlertDialogRadix.Root {...rest}>
      <AlertDialogRadix.Trigger asChild>{trigger}</AlertDialogRadix.Trigger>
      <AlertDialogRadix.Portal>
        <AlertDialogRadix.Overlay className="modal--overlay" />
        <AlertDialogRadix.Content className={`dialog modal--content modal__${size} l_box`}>
          {children}
        </AlertDialogRadix.Content>
      </AlertDialogRadix.Portal>
    </AlertDialogRadix.Root>
  )
}

export const CustomAlertDialog = ({
  trigger,
  cancelTitle = 'Cancel',
  actionTitle = 'Yes',
  title = 'Are you absolutely sure?',
  description,
}: AlertDialogProps) => {
  return (
    <AlertDialog trigger={trigger}>
      <AlertDialogRadix.Title asChild>
        <Heading size="4" low color="b">
          {title}
        </Heading>
      </AlertDialogRadix.Title>
      <AlertDialogRadix.Description asChild>
        <Text size="3" low color="b">
          {description}
        </Text>
      </AlertDialogRadix.Description>
      <Flex gap="4" justify="end">
        <AlertDialogRadix.Action asChild>
          <Button variant="solid" color="p">
            {actionTitle}
          </Button>
        </AlertDialogRadix.Action>
        <AlertDialogRadix.Cancel asChild>
          <Button variant="soft" color="d">
            {cancelTitle}
          </Button>
        </AlertDialogRadix.Cancel>
      </Flex>
    </AlertDialog>
  )
}

export const Title = ({ children }: any) => {
  return (
    <AlertDialogRadix.Title>
      <Heading as="h2" size="4">
        {children}
      </Heading>
    </AlertDialogRadix.Title>
  )
}
export const Description = ({ children }: any) => {
  return (
    <AlertDialogRadix.Description asChild>
      <Text size="4" color="b" low>
        {children}
      </Text>
    </AlertDialogRadix.Description>
  )
}

export const CancelButton = ({ children, ...rest }: AlertDialogActionButtonProps) => {
  return (
    <AlertDialogRadix.Cancel asChild>
      <Button variant="solid" color="se" {...rest}>
        {children}
      </Button>
    </AlertDialogRadix.Cancel>
  )
}
export const ActionButton = ({ children, ...rest }: AlertDialogActionButtonProps) => {
  return (
    <AlertDialogRadix.Action asChild>
      <Button variant="soft" color="d" {...rest}>
        {children}
      </Button>
    </AlertDialogRadix.Action>
  )
}

AlertDialog.Title = Title
AlertDialog.Description = Description
AlertDialog.CancelButton = CancelButton
AlertDialog.ActionButton = ActionButton
