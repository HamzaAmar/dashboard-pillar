import { Flex } from '@components/core'
import * as TabsRadix from '@radix-ui/react-tabs'

import type { TabContentProps, TabListProps, TabProps, TabTriggerProps } from './tab.type'

export const List = ({ title, className, children, ...rest }: TabListProps) => {
  return (
    <TabsRadix.List className="tabs--list u_flex u_spacing-sm" aria-label={title} {...rest}>
      {children}
    </TabsRadix.List>
  )
}

export const Trigger = ({ children, variant = 'link', ...rest }: TabTriggerProps) => {
  return (
    <TabsRadix.Trigger className={`tabs--trigger tabs--trigger__${variant}`} {...rest}>
      {children}
    </TabsRadix.Trigger>
  )
}

export const Content = ({ children, ...rest }: TabContentProps) => {
  return (
    <TabsRadix.Content className="tabs--content" {...rest}>
      {children}
    </TabsRadix.Content>
  )
}

export const Tabs = ({ children, size = 'full', color = 'primary', ...rest }: TabProps) => {
  return (
    <Flex direction="column" gap="sm" as={TabsRadix.Root} className={`tabs tabs__${size} u_${color}`} {...rest}>
      {children}
    </Flex>
  )
}

Tabs.Content = Content
Tabs.Trigger = Trigger
Tabs.List = List
