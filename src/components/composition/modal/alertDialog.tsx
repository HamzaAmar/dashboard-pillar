import * as AlertDialogRadix from '@radix-ui/react-alert-dialog'
import { Flex, Button, Text, Heading } from '../../core'

import type { AlertDialogActionButtonProps, AlertDialogProps, AlertDialogRootProps } from './modal.type'

export const AlertDialog = ({ children, trigger, size = 'md', ...rest }: AlertDialogRootProps) => {
  return (
    <AlertDialogRadix.Root {...rest}>
      <AlertDialogRadix.Trigger asChild>{trigger}</AlertDialogRadix.Trigger>
      <AlertDialogRadix.Portal>
        <AlertDialogRadix.Overlay className="modal--overlay" />
        <AlertDialogRadix.Content className={`dialog modal--content modal__${size} l_box l_flow-md`}>
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
        <Heading size="sm" contrast="low" color="slate">
          {title}
        </Heading>
      </AlertDialogRadix.Title>
      <AlertDialogRadix.Description asChild>
        <Text size="xs" contrast="low" color="slate">
          {description}
        </Text>
      </AlertDialogRadix.Description>
      <Flex gap="sm" justify="end">
        <AlertDialogRadix.Action asChild>
          <Button variant="solid" color="primary">
            {actionTitle}
          </Button>
        </AlertDialogRadix.Action>
        <AlertDialogRadix.Cancel asChild>
          <Button variant="soft" color="danger">
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
      <Heading as="h2" size="sm">
        {children}
      </Heading>
    </AlertDialogRadix.Title>
  )
}
export const Description = ({ children }: any) => {
  return (
    <AlertDialogRadix.Description asChild>
      <Text size="sm" color="slate" contrast="low">
        {children}
      </Text>
    </AlertDialogRadix.Description>
  )
}

export const CancelButton = ({ children, ...rest }: AlertDialogActionButtonProps) => {
  return (
    <AlertDialogRadix.Cancel asChild>
      <Button variant="solid" color="purple" {...rest}>
        {children}
      </Button>
    </AlertDialogRadix.Cancel>
  )
}
export const ActionButton = ({ children, ...rest }: AlertDialogActionButtonProps) => {
  return (
    <AlertDialogRadix.Action asChild>
      <Button variant="soft" color="danger" {...rest}>
        {children}
      </Button>
    </AlertDialogRadix.Action>
  )
}

AlertDialog.Title = Title
AlertDialog.Description = Description
AlertDialog.CancelButton = CancelButton
AlertDialog.ActionButton = ActionButton
