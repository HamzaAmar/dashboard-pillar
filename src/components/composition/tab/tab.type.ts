import type { TabsListProps, TabsContentProps, TabsProps, TabsTriggerProps } from '@radix-ui/react-tabs'

export type Size = 'sm' | 'md' | 'lg' | 'full'
export type Variant = 'solid' | 'outline' | 'soft' | 'link'
type Color = 'primary' | 'indigo' | 'success' | 'warning' | 'danger' | 'purple' | 'slate' | 'yellow'

export interface StorybookTabProps {
  variant?: Variant
  size?: Size
  color?: Color
}

export interface TabListProps extends TabsListProps {}
export interface TabContentProps extends TabsContentProps {}
export interface TabProps extends TabsProps {
  size?: Size
  color?: Color
}
export interface TabTriggerProps extends TabsTriggerProps {
  variant?: Variant
}
