import { Chips, Flex, Paper, Text } from '@pillar-ui/core'

interface MetricCardProps {
  title: string
  value: string | number
  change: string
  icon: React.ReactNode
  color: string
}

export const MetricCard = ({ title, value, change, icon, color }: MetricCardProps) => (
  <Paper className="l_box">
    <Paper flow="3">
      <Flex justify="between" items="center">
        <Text color="b" low>
          {title}
        </Text>
        <div className={`p-2 rounded-full bg-${color}-100`}>{icon}</div>
      </Flex>
      <Flex items="center" gap="2">
        <Text size="6" weight="7">
          {value}
        </Text>
        <Chips variant="soft" color={parseFloat(change) >= 0 ? 'su' : 'd'} size="2">
          {change}%
        </Chips>
      </Flex>
    </Paper>
  </Paper>
)
