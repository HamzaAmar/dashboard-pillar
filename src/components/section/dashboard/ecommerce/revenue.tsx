import React from 'react'
import { Avatar, Paper, Text, Flex, Button, Chips, Grid } from '@pillar-ui/core'
import { Settings, ChevronRight } from '@pillar-ui/icons'
import { formatPrice } from '@utils/formatNumber'

interface TopSaleProps {
  count: number
  name: string
  icon?: string
}

const TopSale: React.FC<TopSaleProps> = ({ count, name, icon }) => (
  <Flex items="center" gap="2" className="p-2 bg-gray-50 rounded-lg">
    <Text weight="6">{count}</Text>
    {icon && <img src="/api/placeholder/16/16" alt={name} className="w-4 h-4" />}
    <Text low>{name}</Text>
    <ChevronRight width={16} className="ml-auto text-gray-400" />
  </Flex>
)

interface DealCardProps {
  label: string
  value: string
  icon?: React.ReactNode
}

const DealCard = ({ label, value, icon }: DealCardProps) => (
  <Flex direction="col" gap="1" className="p-3 bg-black text-white rounded-lg">
    <Text size="2" low>
      {label}
    </Text>
    <Flex items="center" gap="2">
      <Text weight="6">{value}</Text>
      {icon}
    </Flex>
  </Flex>
)

interface MetricChipProps {
  label: string
  value: string
  change: string
}

const MetricChip = ({ label, value, change }: MetricChipProps) => (
  <Flex direction="col" className="px-3 py-2 border rounded-lg">
    <Text size="2" low>
      {label}
    </Text>
    <Flex items="start" gap="2">
      <Text weight="6">{value}</Text>
      <Text size="2" color={parseFloat(change) > 0 ? 'su' : 'd'}>
        {change}%
      </Text>
    </Flex>
  </Flex>
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

        <Flex gap="3">
          <TopSale count={72} name="Mikasa" icon="/mikasa-icon.png" />
          <DealCard label="Best deal" value="$42,300" icon={<Settings width={16} />} />
          <MetricChip label="Deals" value="< 5" change="+7.9" />
          <MetricChip label="Win rate" value="12%" change="+1.2" />
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
