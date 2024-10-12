import { useId } from 'react'
import { useRadio } from './context'
import type { RadioProps } from './radio.type'

const Radio = (props: RadioProps) => {
  const provider = useRadio()
  const {
    label,
    id,
    color = provider.color || 'primary',
    size = provider.size || 'md',
    name = provider.name,
    ...rest
  } = props
  const fallbackId = useId()

  const idOrLabel = id || fallbackId

  // const radioClassName = classnames(`custom-radio u_circle`)
  return (
    <label className={`radio-container radio--${size} u_${color}`} htmlFor={idOrLabel} aria-disabled={props.disabled}>
      <input type="radio" name={name} className="radio u_sr-only" id={idOrLabel} {...rest} />
      <span className="custom-radio u_circle" />
      <span className="radio__label">{label}</span>
    </label>
  )
}

export default Radio
