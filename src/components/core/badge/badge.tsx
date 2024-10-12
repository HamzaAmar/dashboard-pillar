import { ForwardRefComponent } from '@type/polymorphic.type'
import { classnames } from '@utils/classnames'
import { forwardRef } from 'react'
import { BadgeProps } from './badge.type'

const badge = forwardRef((props, forwardedRef) => {
  const { variant = 'number', color = 'primary', size = 'sm', pulse, as: Tag = 'span', className, ...rest } = props
  let content

  const badgeClassName = classnames(`badge badge__${variant} badge__${size} u_${color} u_center`, {
    className: !!className,
  })

  /*
   I make this because dot Variant those not have value and max props and we need this condition
   statement for typescript Look for discriminated union I use Props.variant === 'numeric' does not support
   for destructring with default value
  */
  if (props.variant === 'number') {
    const { max, number } = props
    // const isZeroOrLess =
    content = max <= number ? max - 1 + '+' : number
  } else if (props.variant === 'icon') {
    content = props.icon
  }
  return (
    <Tag {...badgeClassName} data-animate={pulse} ref={forwardedRef} {...rest}>
      {content}
    </Tag>
  )
}) as ForwardRefComponent<'span', BadgeProps>

export default badge
