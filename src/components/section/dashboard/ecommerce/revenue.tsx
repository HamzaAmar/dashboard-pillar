import React from 'react'
import { Avatar, Paper, Text, Flex, Chips, Grid } from '@pillar-ui/core'
import { Settings } from '@pillar-ui/icons'
import { formatPrice } from '@utils/formatNumber'

interface DealCardProps {
  label: string
  value: string
  icon?: React.ReactNode
}

const DealCard = ({ label, value, icon }: DealCardProps) => (
  <Paper flow="2" className="l_box">
    <Flex items="center" gap="2">
      <Text size="2" color="b" low>
        {label}
      </Text>
      {icon}
    </Flex>
    <Text weight="6">{value}</Text>
  </Paper>
)

interface MetricChipProps {
  label: string
  value: string
  change: string
}

const MetricChip = ({ label, value, change }: MetricChipProps) => (
  <div className="l_box">
    <Flex gap="2">
      <Text size="2" color="b" low>
        {label}
      </Text>
      <Chips size="2" color={parseFloat(change) > 0 ? 'su' : 'd'}>
        {change}%
      </Chips>
    </Flex>
    <Text weight="6">{value}</Text>
  </div>
)

interface SalesPersonProps {
  avatar: string
  revenue: string
  percentage: string
}

const SalesPerson: React.FC<SalesPersonProps> = ({ avatar, revenue, percentage }) => (
  <Grid
    cols={{ default: 'auto 1fr auto' }}
    as={Paper}
    width={`${percentage}%`}
    items="center"
    corner="full"
    background="B1"
    gap="1"
  >
    <Avatar variant="outline" src={avatar} size="1" />
    <Text style={{ flex: 1 }} size="2" weight="5">
      ${revenue}
    </Text>
    <Text size="1" color="b" low>
      {percentage}%
    </Text>
  </Grid>
)

export const RevenueMetrics = () => {
  return (
    <Paper className="l_box">
      <Paper flow="4">
        <Flex gap="4" justify="between" items="center" wrap>
          <Paper flow="1">
            <Text size="4" color="b" low>
              Revenue
            </Text>
            <Flex items="center" gap="3">
              <Text leading="2" size="8" weight="7">
                {formatPrice({ number: 528976.82 })}
              </Text>
              <Chips color="d" size="2">
                -2.76%
              </Chips>
              <Chips variant="soft" color="d">
                {formatPrice({ number: 25000 })} / mo
              </Chips>
            </Flex>
            <Text size="3" color="b" low>
              vs prev. $591,614.73 Jun 1 - Aug 21, 2023
            </Text>
          </Paper>

          <Flex wrap gap="4">
            <DealCard label="Best deal" value="$42,300" icon={<Settings width={16} />} />
            <MetricChip label="Deals" value="< 5" change="+7.9" />
            <MetricChip label="Win rate" value="12%" change="+1.2" />
          </Flex>
        </Flex>
        <Flex as={Paper} background="B6" p="1" corner="full" justify="between" gap="1">
          <SalesPerson avatar="https://i.pravatar.cc/150?img=1" revenue="209,633" percentage="30" />
          <SalesPerson avatar="https://i.pravatar.cc/150?img=2" revenue="156,841" percentage="28" />
          <SalesPerson avatar="https://i.pravatar.cc/150?img=3" revenue="117,115" percentage="22" />
          <SalesPerson avatar="https://i.pravatar.cc/150?img=4" revenue="45,386" percentage="20" />
        </Flex>
      </Paper>
    </Paper>
  )
}
