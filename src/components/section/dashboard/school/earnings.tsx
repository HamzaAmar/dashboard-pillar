import React, { useState } from 'react'
import { Paper, Flex, Heading, Text, IconButton, Grid } from '@pillar-ui/core'
import { DotsHorizontal } from '@pillar-ui/icons'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
  Label,
} from 'recharts'
import { EARNING_MONTH } from './school.data'

// Define type for chart data

interface GenderData {
  name: string
  value: number
  color: string
}

const StatsCards = () => {
  return (
    <Grid cols={{ default: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }} gap="4" className="u_padding-3">
      <Paper className="l_box">
        <Text size="3" color="b" low>
          Students
        </Text>
        <Text size="7" weight="7">
          1260
        </Text>
      </Paper>
      <Paper className="l_box">
        <Text size="3" color="b" low>
          Teachers
        </Text>
        <Text size="7" weight="7">
          224
        </Text>
      </Paper>
      <Paper className="l_box">
        <Text size="3" color="b" low>
          Parents
        </Text>
        <Text size="7" weight="7">
          840
        </Text>
      </Paper>
      <Paper className="l_box">
        <Text size="3" color="b" low>
          Earnings
        </Text>
        <Text size="7" weight="7">
          $54000
        </Text>
      </Paper>
    </Grid>
  )
}

const EarningsChartCard = () => {
  return (
    <Paper flow="6" className="l_box">
      <Flex justify="between" items="center" className="u_padding-block-4 u_padding-inline-3">
        <Flex direction="col" gap="1">
          <Heading size="4" weight="6" as="h2">
            Earnings
          </Heading>
        </Flex>
        <IconButton variant="text" icon={<DotsHorizontal />} title="More options" size="4" />
      </Flex>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={EARNING_MONTH} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <pattern id="earnings" patternUnits="userSpaceOnUse" width="4" height="4">
              <path d="M 0 0 L 4 4 M -1 3 L 1 5 M 3 -1 L 5 1" stroke="var(--Se9)" strokeWidth="1" />
            </pattern>

            <pattern id="expanse" patternUnits="userSpaceOnUse" width="6" height="6">
              <path d="M 0 6 L 6 0" stroke="var(--P9)" strokeWidth="1" />
              <path d="M 3 9 L 9 3" stroke="var(--P9)" strokeWidth="3" />
              <path d="M -3 3 L 3 -3" stroke="var(--P9)" strokeWidth="3" />
            </pattern>
          </defs>
          <CartesianGrid stroke="var(--B5)" strokeDasharray="5 5" />
          <XAxis axisLine={false} dataKey="month" tickLine={false} fontSize={12} stroke="var(--B11)" />
          <YAxis
            axisLine={false}
            tickFormatter={(value) => `$${value / 1000}k`}
            stroke="var(--B11)"
            fontSize={12}
            tickLine={false}
            width={35}
          />
          <Tooltip formatter={(value) => `$${value}`} />
          <Legend iconType="circle" iconSize={16} align="right" />
          <Bar
            stroke="var(--Se9)"
            dataKey="earnings"
            fill="url(#earnings)"
            radius={[16, 16, 16, 16]}
            barSize={16}
            name="Earnings"
          />
          <Bar
            dataKey="expanse"
            stroke="var(--P9)"
            fill="url(#expanse)"
            radius={[16, 16, 16, 16]}
            barSize={16}
            name="Expanse"
          />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  )
}

const genderData: GenderData[] = [
  { name: 'Male', value: 55, color: 'var(--P9)' },
  { name: 'Female', value: 45, color: 'var(--Se9)' },
]

const GenderDonutChartCard = () => {
  const [label, setLabel] = useState('Total')

  function onPieEnter(value: string) {
    setLabel(value)
  }

  return (
    <Paper className="l_box" p="3" width="100%">
      <Flex justify="between" items="center" className="u_padding-block-2 u_padding-inline-3">
        <Heading size="4" weight="6">
          Students
        </Heading>
        <IconButton variant="text" icon={<DotsHorizontal />} title="More options" size="4" />
      </Flex>

      <Paper>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart accessibilityLayer>
            <Pie
              data={genderData}
              cx="50%"
              cy="50%"
              innerRadius="50%"
              outerRadius="80%"
              strokeWidth={3}
              paddingAngle={0}
              dataKey="value"
              onMouseLeave={() => onPieEnter('Total')}
            >
              {genderData.map((entry, index) => (
                <Cell
                  onMouseEnter={() => onPieEnter(entry.name)}
                  key={`cell-${index}`}
                  stroke={entry.color}
                  fill={entry.color}
                />
              ))}
              <Label
                value={label}
                position="center"
                fill="var(--B12)"
                style={{ fontSize: '24px', filter: 'drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25))', fontWeight: '500' }}
              />
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <Flex gap="6" justify="center">
          <Flex gap="3" items="center">
            <Paper width="20px" ratio="1" background="P9" corner="2" />
            <div>
              <Heading size="3" weight="6" color="p" low>
                55%
              </Heading>
              <Text size="3" color="b" low>
                Male
              </Text>
            </div>
          </Flex>
          <Flex gap="3" items="center">
            <Paper width="20px" ratio="1" background="Se9" corner="2" />
            <div>
              <Heading size="3" weight="6" color="se" low>
                45%
              </Heading>
              <Text size="3" color="b" low>
                Female
              </Text>
            </div>
          </Flex>
        </Flex>
      </Paper>
    </Paper>
  )
}

export const Earnings = () => {
  return (
    <Flex direction="col" gap="5" className="u_padding-3">
      <StatsCards />
      <Grid gap="4" cols={{ default: '1fr', md: '2fr 1fr' }}>
        <EarningsChartCard />
        <GenderDonutChartCard />
      </Grid>
    </Flex>
  )
}
