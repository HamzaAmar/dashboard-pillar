import { Flex, Grid, Paper, Text } from '@pillar-ui/core'
import { Area, AreaChart, ResponsiveContainer } from 'recharts'
import { METRICS } from './school.data'
import { MetricCardProps } from './school.type'

export function MetricCard({ title, value, change, data, icon, color, areaColor }: MetricCardProps) {
  const isPositive = change > 0

  return (
    <Paper className="metric-card" border corner="4" background="B2">
      <Paper flow="4" p="4">
        <Flex items="center" justify="between">
          <Paper className="F-c" p="3" corner="full" style={{ background: areaColor }}>
            {icon}
          </Paper>
          <Text size="3" color={isPositive ? 'su' : 'd'} low>
            {isPositive ? '+' : ''}
            {change}% last month
          </Text>
        </Flex>
        <div>
          <Text weight="5">{title}</Text>
          <Text leading="1" size="8" weight="6">
            {value.toLocaleString()}
          </Text>
        </div>
      </Paper>
      <Paper height="40px">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart margin={{ top: 0, right: 0, left: 0, bottom: 0 }} data={data}>
            <Area type="monotone" dataKey="value" stroke={color} fill={areaColor} strokeWidth={2} dot={false} />
          </AreaChart>
        </ResponsiveContainer>
      </Paper>
    </Paper>
  )
}

export const MetricList = () => {
  return (
    <Grid gap="4" cols={{ default: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}>
      {METRICS.map((metric) => (
        <MetricCard key={metric.title} {...metric} />
      ))}
    </Grid>
  )
}
