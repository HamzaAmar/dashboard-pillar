import { Cross } from '@components/icons'
import * as DialogRadix from '@radix-ui/react-dialog'
import { Flex, IconButton } from '../../core'

import type { DialogProps } from './modal.type'

export const DialogRoot = ({ trigger, children, description, title, size = 'md' }: DialogProps) => {
  return (
    <DialogRadix.Root>
      <DialogRadix.Trigger asChild>{trigger}</DialogRadix.Trigger>
      <DialogRadix.Portal>
        <DialogRadix.Overlay className="modal--overlay" />
        <DialogRadix.Content className={`dialog modal--content l_box l_flow-md modal__${size}`}>
          <Flex justify="between" items="center">
            <DialogRadix.Title>{title}</DialogRadix.Title>

            <DialogRadix.Close asChild>
              <IconButton className="dialog--button-cross" icon={<Cross />} title="Close Dialog" />
            </DialogRadix.Close>
          </Flex>
          <div className="modal--content-children l_flow-md">
            {description && <DialogRadix.Description>{description}</DialogRadix.Description>}
            {children}
          </div>
        </DialogRadix.Content>
      </DialogRadix.Portal>
    </DialogRadix.Root>
  )
}

export const Dialog = ({ trigger, title, description, children, size = 'md' }: DialogProps) => {
  return (
    <DialogRoot size={size} trigger={trigger} title={title} description={description}>
      {children}
    </DialogRoot>
  )
}
