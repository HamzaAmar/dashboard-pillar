import { classnames } from '@utils/classnames'
import Flex from '../flex'
import { RadioProvider } from './context'
import type { RadioGroupProps } from './radio.type'

const radioGroup = ({ direction = 'column', children, label, showLabel, id, ...rest }: RadioGroupProps) => {
  /*TODO: ADD ERROR ACCESSIBILITY  */

  return (
    <fieldset role="radiogroup" className="form-group--container">
      <legend {...classnames('form-group--legend', { 'u_sr-only': !showLabel })}>{label}</legend>

      {/*
       TODO: ADD DEFAULT  TO RADIO GROUP 
      */}

      <Flex wrap gap="sm" className="form-group" items="start" direction={direction}>
        <RadioProvider {...rest}>{children}</RadioProvider>
      </Flex>
    </fieldset>
  )
}

export default radioGroup
