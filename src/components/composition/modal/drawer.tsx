import { Flex, Heading, IconButton, Paper } from '@pillar-ui/core'
import { Cross } from '@components/icons'
import * as DialogRadix from '@radix-ui/react-dialog'

import type { DrawerDialogProps } from './modal.type'

export const Drawer = ({ trigger, children, title, position = 'right', size = '5' }: DrawerDialogProps) => {
  return (
    <DialogRadix.Root>
      <DialogRadix.Trigger asChild>{trigger}</DialogRadix.Trigger>
      <DialogRadix.Portal>
        <DialogRadix.Overlay className="modal--overlay" />
        <DialogRadix.Content className={`modal--content drawer drawer__${position} drawer__${size} l_box`}>
          <Flex className="drawer-content--header" justify="between" items="center">
            <DialogRadix.Title asChild>
              <Heading size="4" weight="5">
                {title}
              </Heading>
            </DialogRadix.Title>
            <DialogRadix.Close asChild>
              <IconButton className="dialog--button-cross" icon={<Cross />} title="Close Dialog" />
            </DialogRadix.Close>
          </Flex>

          <Paper flow="5" className="modal--content-children">
            {children}
          </Paper>
        </DialogRadix.Content>
      </DialogRadix.Portal>
    </DialogRadix.Root>
  )
}
