// Disabled State Label And Box

import { Check, Minus } from '@components/icons'
import { classnames } from '@utils/classnames'
import { useEffect, useRef, forwardRef } from 'react'

import type { CheckboxProps } from './checkbox.type'

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const { name, label, size = 'md', color = 'primary', showLabel, isIndeterminate, checked, ...rest } = props

  const checkboxRef = useRef<HTMLInputElement>(null)

  const checkboxIcon =
    isIndeterminate && props.checked == null ? (
      <Minus aria-hidden="true" focusable="false" className="checkbox--check" />
    ) : (
      <Check aria-hidden="true" focusable="false" className="checkbox--check" />
    )

  useEffect(() => {
    if (checkboxRef.current) {
      if (isIndeterminate) {
        checkboxRef.current.indeterminate = Boolean(isIndeterminate)
      }
    }
  }, [isIndeterminate])

  return (
    <label className={`checkbox checkbox__${size} u_${color}`} data-disabled={props.disabled}>
      <input
        type="checkbox"
        ref={checkboxRef}
        className="u_sr-only checkbox--element"
        name={name}
        aria-checked={isIndeterminate && 'mixed'}
        {...rest}
      />
      <span className="checkbox--indicator">{checkboxIcon}</span>
      <div {...classnames('checkbox--label', { 'u_sr-only': showLabel })}>{label}</div>
    </label>
  )
})

export default Checkbox
