import { Button, Flex, Text } from '@pillar-ui/core'
import { Check, Cross, SquareInfo, SquareHelp } from '@pillar-ui/icons'
import type { StatusProps } from './status.type'

const statusObj = {
  info: {
    icon: <SquareInfo width={32} />,
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
    icon: <SquareHelp width={32} />,
    color: 'warning',
  },
}

const danger = ({ title, description, status }: StatusProps) => {
  return (
    <Flex className="status l_box" gap="5" direction="col" justify="center" items="center">
      <div className={`danger-icon-wrapper u_${statusObj[status].color}`}>{statusObj[status].icon}</div>
      <Text size="7" weight="7">
        {title}
      </Text>
      <Text size="4" color="b" low>
        {description}
      </Text>
      <Flex gap="4">
        <Button variant="solid">OK</Button>
        <Button variant="soft" color="b" icon={<Cross />}>
          Cancel
        </Button>
      </Flex>
    </Flex>
  )
}

export default danger
