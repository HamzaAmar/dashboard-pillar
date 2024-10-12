import { classnames } from '@utils/classnames'
import { Flex } from '..'

import type { FormGroupProps } from './form.type'

const formGroup = ({ title, showLabel, direction = 'column', children, fluid, hideBorder }: FormGroupProps) => {
  return (
    <fieldset
      {...classnames('form-group--container', {
        'form-group--hide-border ': hideBorder,
      })}
    >
      <legend {...classnames('form-group--legend', { 'u_sr-only': !showLabel })}>{title}</legend>
      <Flex
        wrap
        gap="sm"
        {...classnames('form-group', { 'form-group--fluid': fluid })}
        items="start"
        direction={direction}
      >
        {children}
      </Flex>
    </fieldset>
  )
}

export default formGroup
