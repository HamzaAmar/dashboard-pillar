import { classnames } from '@utils/classnames'
import { forwardRef } from 'react'

import type { CSSProperties } from 'react'
import type { GridItemProps, GridProps } from './grid.type'
import type { ForwardRefComponent } from '@type/polymorphic.type'

const getStyles = (obj?: Record<string, string | undefined>) => {
  if (!obj) return
  const newObj: Record<string, string> = {}
  for (let [key, value] of Object.entries(obj)) {
    if (value) {
      newObj[`--${key}`] = value
    }
  }
  return newObj as CSSProperties
}

const GridItem = forwardRef((props, ref) => {
  const { column, row, area, children, style, className, as: Tag = 'div' } = props

  const gridClassName = classnames('grid--item', {
    className: Boolean(className),
    style: Boolean(style),
  })

  const regularStyle = getStyles({ column, row, area })

  return (
    <Tag
      style={{
        ...regularStyle,
        ...style,
      }}
      {...gridClassName}
      ref={ref}
    >
      {children}
    </Tag>
  )
}) as ForwardRefComponent<'div', GridItemProps>

const grid = forwardRef(({ gap, columns, rows, items, justify, areas, children, style, className }, forwardedRef) => {
  const gridClassName = classnames('grid', {
    [`u_justify-${justify}`]: !!justify,
    [`u_items-${items}`]: !!items,
    [`grid__${gap}`]: Boolean(gap),
    [className!]: Boolean(className),
  })

  const regularStyle = getStyles({ columns, rows, areas })

  return (
    <div
      style={{
        ...regularStyle,
        ...style,
      }}
      {...gridClassName}
      ref={forwardedRef}
    >
      {children}
    </div>
  )
}) as ForwardRefComponent<'div', GridProps> & { Item: typeof GridItem }
grid.Item = GridItem

export default grid
