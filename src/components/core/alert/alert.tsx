import { Cross, Info, Alert as AlertIcon, CircleCross, CircleCheck } from '@components/icons'
import useBoolean from '@hooks/useBoolean'
import { Flex, Text, IconButton } from '..'

import type { AlertProps, IconsType } from './alert.type'

const icons: IconsType = {
  info: <Info width="16" />,
  danger: <CircleCross width="16" />,
  success: <CircleCheck width="16" />,
  warning: <AlertIcon type="circle" width="16" />,
}

const Alert = ({ type = 'danger', showIcon, message, title, inline, variant = 'outline' }: AlertProps) => {
  const { state, handleTrue } = useBoolean(false)

  const inlineText = !inline ? ({ direction: 'column' } as { direction: 'column' }) : {}

  if (state) {
    return null
  }
  return (
    <Flex gap="sm" justify="between" items="start" className={`alert alert__${variant} u_${type}`} role="alert">
      <Flex items="center" gap="sm">
        {showIcon && <span className="u_items-self">{icons[type]}</span>}
        <Flex {...inlineText} justify="center">
          {Boolean(title) && (
            <Text size="sm" weight="medium" className="u_leading__normal">
              {title}
              {'   '}
            </Text>
          )}
          <Text as="span" size="xs">
            {' '}
            {message}
          </Text>
        </Flex>
      </Flex>
      <IconButton size="xs" onClick={handleTrue} icon={<Cross />} title="close title" />
    </Flex>
  )
}

export default Alert
