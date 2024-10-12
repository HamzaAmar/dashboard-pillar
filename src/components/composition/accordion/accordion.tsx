import React from 'react'
import * as AccordionRadix from '@radix-ui/react-accordion'
import { ChevronDown } from '@components/icons'
import { classnames } from '@utils/classnames'
import { Flex, Text } from '@components/core'

import type { ForwardRefComponent } from '@type/polymorphic.type'
import type { AccordionContentProps, AccordionItemProps, AccordionProps, AccordionTriggerProps } from './accordion.type'

export const Trigger = React.forwardRef(
  ({ children, className, icon = <ChevronDown width={16} aria-hidden />, ...props }, forwardedRef) => (
    <AccordionRadix.Header className="accordion--header">
      <Flex
        justify="between"
        items="center"
        as={AccordionRadix.Trigger}
        {...classnames('accordion--trigger', className)}
        {...props}
        ref={forwardedRef}
      >
        <Text size="sm" weight="medium">
          {children}
        </Text>
        {icon}
      </Flex>
    </AccordionRadix.Header>
  )
) as ForwardRefComponent<'button', AccordionTriggerProps>

export const Content = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <AccordionRadix.Content {...classnames('accordion--content', className)} {...props} ref={forwardedRef}>
    <Text size="sm" color="slate" contrast="low">
      {children}
    </Text>
  </AccordionRadix.Content>
)) as ForwardRefComponent<'div', AccordionContentProps>

export const Item = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <AccordionRadix.Item {...classnames('accordion--item', className)} {...props} ref={forwardedRef}>
    {children}
  </AccordionRadix.Item>
)) as ForwardRefComponent<'div', AccordionItemProps>

export const Accordion = ({ children, variant = 'default', color = 'primary', ...rest }: AccordionProps) => {
  return (
    <AccordionRadix.Root
      collapsible
      className={`accordion accordion__${variant}  accordion__${color}`}
      type="single"
      {...rest}
    >
      {children}
    </AccordionRadix.Root>
  )
}

Accordion.Trigger = Trigger
Accordion.Item = Item
Accordion.Content = Content
