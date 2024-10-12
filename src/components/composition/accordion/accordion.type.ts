import type {
  AccordionContentProps as RadixAccordionContentProps,
  AccordionTriggerProps as RadixAccordionTriggerProps,
  AccordionItemProps as RadixAccordionItemProps,
} from '@radix-ui/react-accordion'
import type { Color } from '@type/utils'
import type { ReactElement, ReactNode } from 'react'

type Variant = 'filled' | 'separate' | 'contained' | 'default'

export interface AccordionContentProps extends RadixAccordionContentProps {}
export interface AccordionTriggerProps extends RadixAccordionTriggerProps {
  icon?: ReactElement
}
export interface AccordionItemProps extends RadixAccordionItemProps {}
export interface AccordionProps {
  variant?: Variant
  color?: Color
  children: ReactNode
}
