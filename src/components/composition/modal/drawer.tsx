import { Flex, Heading, IconButton } from '@components/core'
import { Cross } from '@components/icons'
import * as DialogRadix from '@radix-ui/react-dialog'

import type { DrawerDialogProps } from './modal.type'

export const Drawer = ({ trigger, children, title, position = 'right', size = 'md' }: DrawerDialogProps) => {
  return (
    <DialogRadix.Root>
      <DialogRadix.Trigger asChild>{trigger}</DialogRadix.Trigger>
      <DialogRadix.Portal>
        <DialogRadix.Overlay className="modal--overlay" />
        <DialogRadix.Content className={`modal--content drawer drawer__${position} drawer__${size} l_box l_flow-md`}>
          <Flex className="drawer-content--header" justify="between" items="center">
            <DialogRadix.Title asChild>
              <Heading size="sm" weight="medium">
                {title}
              </Heading>
            </DialogRadix.Title>
            <DialogRadix.Close asChild>
              <IconButton className="dialog--button-cross" icon={<Cross />} title="Close Dialog" />
            </DialogRadix.Close>
          </Flex>

          <div className="modal--content-children l_flow-md">{children}</div>
        </DialogRadix.Content>
      </DialogRadix.Portal>
    </DialogRadix.Root>
  )
}
