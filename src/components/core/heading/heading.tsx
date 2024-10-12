import { CSSProperties, forwardRef } from 'react'
import { classnames } from '@utils/classnames'

import type { HeadingProps, MultiLineHeadingTruncate } from './heading.type'
import { ForwardRefComponent } from '@type/polymorphic.type'

const heading = forwardRef((props, forwardedRef) => {
  let {
    as: Comp = 'h1',
    size = 'md',
    truncate,
    weight,
    className,
    children,
    transform,
    align,
    decoration,
    color,
    leading,
    contrast = 'high',
    ...rest
  } = props

  const contrastLvl = contrast === 'high' ? 12 : 11

  /* 
      Every className that is Prefixed with u_ is a utility class and you can find it in 
      /src/scss/utilities folder
  */
  let styleOnlyExistOnTruncateMultiLine = {}
  const colorStyle = color ? { '--color-heading': `var(--color-${color}-${contrastLvl})` } : {}

  if (truncate === 'multiline') {
    const { numberLine, ...restProps } = rest as MultiLineHeadingTruncate
    styleOnlyExistOnTruncateMultiLine = { '--line-numbers': numberLine }
    rest = restProps
  }

  const classNameStyle = classnames(`heading heading__${size}`, {
    [`u_${truncate}`]: Boolean(truncate),
    [`${className}`]: Boolean(className),
    [`u_transform__${transform}`]: Boolean(transform),
    [`u_align__${align}`]: Boolean(align),
    [`u_font-${weight}`]: Boolean(weight),
    [`u_decoration__${decoration}`]: Boolean(decoration),
    [`u_leading__${leading}`]: Boolean(leading),
  })
  return (
    <Comp
      style={{ ...styleOnlyExistOnTruncateMultiLine, ...colorStyle } as CSSProperties}
      {...classNameStyle}
      {...rest}
      ref={forwardedRef}
    >
      {children}
    </Comp>
  )
}) as ForwardRefComponent<'h1', HeadingProps>

export default heading
