// this classnames is a little bit different than the the classic one it return obj not a string
import { CSSProperties, forwardRef } from 'react'
import { classnames } from '@utils/classnames'
import type { TextProps, MultiLineTextTruncate } from './text.type'
import { ForwardRefComponent } from '@type/polymorphic.type'

const text = forwardRef((props, forwardedRef) => {
  let {
    as: Comp = 'p',
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

  const classNameStyle = classnames(`text u_size-${size}`, {
    [`u_${truncate}`]: Boolean(truncate),
    [`${className}`]: Boolean(className),
    [`u_transform__${transform}`]: Boolean(transform),
    [`u_align__${align}`]: Boolean(align),
    [`u_font-${weight}`]: Boolean(weight),
    [`u_decoration__${decoration}`]: Boolean(decoration),
    [`u_leading__${leading}`]: Boolean(leading),
  })

  let styleOnlyExistOnTruncateMultiLine = {}
  const colorStyle = color ? { '--color-text': `var(--${color}-${contrastLvl})` } : {}

  if (truncate === 'multiline') {
    const { numberLine, ...restProps } = rest as MultiLineTextTruncate
    styleOnlyExistOnTruncateMultiLine = { '--line-numbers': numberLine }
    rest = restProps
  }
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
}) as ForwardRefComponent<'p', TextProps>

text.displayName = 'Text'

export default text
