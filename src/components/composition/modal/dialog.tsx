import { Cross } from '@components/icons'
import * as DialogRadix from '@radix-ui/react-dialog'
import { Flex, IconButton, Paper } from '@pillar-ui/core'

import type { DialogProps } from './modal.type'

export const DialogRoot = ({ trigger, children, description, title, size = '5' }: DialogProps) => {
  return (
    <DialogRadix.Root>
      <DialogRadix.Trigger asChild>{trigger}</DialogRadix.Trigger>
      <DialogRadix.Portal>
        <DialogRadix.Overlay className="modal--overlay" />
        <DialogRadix.Content className={`dialog modal--content l_box modal__${size}`}>
          <Flex justify="between" items="center">
            <DialogRadix.Title>{title}</DialogRadix.Title>

            <DialogRadix.Close asChild>
              <IconButton className="dialog--button-cross" icon={<Cross />} title="Close Dialog" />
            </DialogRadix.Close>
          </Flex>
          <Paper flow="5" className="modal--content-children">
            {description && <DialogRadix.Description>{description}</DialogRadix.Description>}
            {children}
          </Paper>
        </DialogRadix.Content>
      </DialogRadix.Portal>
    </DialogRadix.Root>
  )
}

export const Dialog = ({ trigger, title, description, children, size = '5' }: DialogProps) => {
  return (
    <DialogRoot size={size} trigger={trigger} title={title} description={description}>
      {children}
    </DialogRoot>
  )
}
