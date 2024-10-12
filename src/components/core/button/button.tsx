import type { ForwardRefComponent } from '@type/polymorphic.type'
import { classnames } from '@utils/classnames'
import { forwardRef } from 'react'
import Spinner from '../spinner'
import { ButtonProps } from './button.type'

const button = forwardRef((props, forwardedRef) => {
  const {
    color = 'primary',
    size = 'md',
    variant = 'solid',
    corner = 'xs',
    children,
    state = 'idle',
    icon,
    iconPosition = 'start',
    as: Comp = 'button',
    fluid,
    className,
    ...rest
  } = props
  const leftIcon = icon && iconPosition === 'start' ? icon : null
  const rightIcon = icon && iconPosition === 'end' ? icon : null
  const loading = state === 'loading' ? { disabled: true } : {}
  const loadingUI =
    state === 'loading' ? (
      <div className="loading-container">
        <Spinner />
      </div>
    ) : null

  const buttonClassNames = classnames(`btn btn__${size} u_${color} btn__${variant} u_corner--${corner}`, {
    fluid__button: fluid,
    [className!]: Boolean(className),
  })

  const buttonFluidClassName = classnames('btn--wrapper', {
    'btn--wrapper__fluid': fluid,
  })

  const buttonState = props.disabled ? 'disabled' : props.state === 'loading' ? 'loading' : 'idle'

  return (
    // I add Button Wrapper For to add Cursor disabled when the button is pointer event none
    <div {...buttonFluidClassName} data-state={buttonState}>
      <Comp {...buttonClassNames} {...loading} {...rest} ref={forwardedRef}>
        {leftIcon}
        {children}
        {rightIcon}
        {loadingUI}
      </Comp>
    </div>
  )
}) as ForwardRefComponent<'button', ButtonProps>

export default button
