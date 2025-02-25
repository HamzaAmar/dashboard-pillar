import React from 'react'
import { Paper, Flex, Heading, Text, IconButton, Grid } from '@pillar-ui/core'
import { DotsHorizontal } from '@pillar-ui/icons'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
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
          {/* <Select
            size="4"
            defaultValue="2023"
            options={[
              { label: '2023', value: '2023' },
              { label: '2022', value: '2022' },
              { label: '2021', value: '2021' },
            ]}
          /> */}
        </Flex>
        <IconButton variant="text" icon={<DotsHorizontal />} title="More options" size="4" />
      </Flex>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={EARNING_MONTH} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <XAxis axisLine={false} dataKey="month" tickLine={false} fontSize={12} stroke="var(--B11)" />
          <YAxis
            axisLine={false}
            tickFormatter={(value) => `$${value / 1000}k`}
            stroke="var(--B11)"
            fontSize={12}
            tickLine={false}
          />
          <Tooltip formatter={(value) => `$${value}`} />
          <Legend iconType="circle" iconSize={16} align="right" />
          <Bar dataKey="earnings" fill="var(--B11)" radius={[16, 16, 0, 0]} barSize={12} name="Earnings" />
          <Bar dataKey="expanse" fill="var(--I11)" radius={[16, 16, 0, 0]} barSize={12} name="Expanse" />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  )
}

const GenderDonutChartCard = () => {
  const genderData: GenderData[] = [
    { name: 'Male', value: 55, color: 'var(--P9)' },
    { name: 'Female', value: 45, color: 'var(--Se9)' },
  ]

  return (
    <Paper className="l_box" p="3" width="100%">
      <Flex justify="between" items="center" className="u_padding-block-2 u_padding-inline-3">
        <Heading size="4" weight="6">
          Students
        </Heading>
        <IconButton variant="text" icon={<DotsHorizontal />} title="More options" size="4" />
      </Flex>

      <Flex direction="col" items="center" justify="center" className="u_padding-3" style={{ height: '280px' }}>
        <ResponsiveContainer width="100%" height="80%">
          <PieChart>
            <Pie
              data={genderData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              labelLine={false}
            >
              {genderData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <Flex gap="6" justify="center">
          <Flex direction="col" items="center">
            <Heading size="3" weight="6" color="p">
              55%
            </Heading>
            <Text size="3" color="b">
              Male
            </Text>
          </Flex>
          <Flex direction="col" items="center">
            <Heading size="3" weight="6" color="i">
              45%
            </Heading>
            <Text size="3" color="b">
              Female
            </Text>
          </Flex>
        </Flex>
      </Flex>
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
