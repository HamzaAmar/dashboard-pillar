import { CircleCheck } from '@components/icons'
import { classnames } from '@utils/classnames'
import Flex from '../flex'
import { useRadio } from './context'
import type { CustomRadioProps } from './radio.type'

const CustomRadio = (props: CustomRadioProps) => {
  const provider = useRadio()
  const {
    label,
    id,
    color = provider.color || 'primary',
    size = provider.size || 'md',
    name = provider.name,
    showLabel = false,
    direction = 'column',
    className,
    children,
    ...rest
  } = props

  const idOrLabel = id || label

  const labelDirection = direction === 'column' ? { direction: 'column' as 'column' } : {}

  // const radioClassName = classnames(`custom-radio u_circle`)
  return (
    <Flex
      as="label"
      className={`radio-container radio--${size} u_${color}`}
      htmlFor={idOrLabel}
      {...labelDirection}
      gap="xs"
      items="center"
    >
      <input type="radio" name={name} className="radio" id={idOrLabel} {...rest} />
      <span className={`custom-radio-content ${className}`}>
        {children}
        <CircleCheck className="custom-radio--check-icon" width={20} />
      </span>
      <span {...classnames(`radio__label`, { 'u_sr-only': !showLabel })}>{label}</span>
    </Flex>
  )
}

export default CustomRadio
