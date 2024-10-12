import { Button, Flex, Text } from '@components/core'
import { Check, Cross, Info, Warning } from '@components/icons'
import type { StatusProps } from './status.type'

const statusObj = {
  info: {
    icon: <Info width={32} />,
    color: 'indigo',
  },
  danger: {
    icon: <Cross width={32} />,
    color: 'danger',
  },
  success: {
    icon: <Check width={32} />,
    color: 'success',
  },
  warning: {
    icon: <Warning width={32} />,
    color: 'warning',
  },
}

const danger = ({ title, description, status }: StatusProps) => {
  return (
    <Flex className="status l_box l_flow-sm" direction="column" justify="center" items="center">
      <div className={`danger-icon-wrapper u_${statusObj[status].color}`}>{statusObj[status].icon}</div>
      <Text size="xl" weight="bold">
        {title}
      </Text>
      <Text size="sm" color="slate" contrast="low">
        {description}
      </Text>
      <Flex gap="sm">
        <Button variant="solid">OK</Button>
        <Button variant="soft" color="slate" icon={<Cross />}>
          Cancel
        </Button>
      </Flex>
    </Flex>
  )
}

export default danger
