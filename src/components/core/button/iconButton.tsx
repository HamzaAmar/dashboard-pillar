import { ForwardRefComponent } from '@type/polymorphic.type'
import { classnames } from '@utils/classnames'
import { forwardRef } from 'react'
import Flex from '../flex'
import type { IconButtonProps } from './button.type'

const iconButton = forwardRef(
  (
    {
      icon,
      title,
      corner = 'xs',
      color = 'primary',
      size = 'md',
      variant = 'transparent',
      className,
      as: Tag = 'button',
      ...rest
    },
    forwardedRef
  ) => {
    const iconButtonClassname = classnames(
      `icon-button icon-button__${size} icon-button__${variant} u_corner--${corner} u_${color}`,
      className
    )

    return (
      <Flex
        as={Tag}
        items="center"
        justify="center"
        inline
        aria-label={title}
        {...iconButtonClassname}
        ref={forwardedRef}
        {...rest}
      >
        {icon}
      </Flex>
    )
  }
) as ForwardRefComponent<'button', IconButtonProps>

iconButton.displayName = 'Icon Button'

export default iconButton
