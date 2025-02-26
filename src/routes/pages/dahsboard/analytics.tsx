import { type ReactNode } from 'react'
import { Paper, Grid, Text, Flex, Heading, Button, Color, IconButton, Chips, Avatar, Table } from '@pillar-ui/core'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, AreaChart, Area } from 'recharts'
import {
  Plus,
  ArrowCircleDown,
  CloudDownload,
  Eye,
  HeartRateMonitor,
  Filter,
  Settings,
  DotsVertical,
  Trash,
  Send,
} from '@pillar-ui/icons'

interface Customer {
  id: string
  name: string
  username: string
  avatar: string
  paymentMethod: 'visa' | 'mastercard' | 'paypal'
  cardLastFour: string
  categories: string[]
  clickthrough: number
}

const customers: Customer[] = [
  {
    id: '1',
    name: 'Alice Smith',
    username: '@alicesmith',
    avatar: '/api/placeholder/32/32',
    paymentMethod: 'visa',
    cardLastFour: '18',
    categories: ['Arts', 'Business', 'Travel'],
    clickthrough: 40,
  },
  {
    id: '2',
    name: 'Bob Johnson',
    username: '@bobjohnson',
    avatar: '/api/placeholder/32/32',
    paymentMethod: 'mastercard',
    cardLastFour: '99',
    categories: ['Books', 'Computers'],
    clickthrough: 10,
  },
  {
    id: '3',
    name: 'Clara Garcia',
    username: '@claragarcia',
    avatar: '/api/placeholder/32/32',
    paymentMethod: 'paypal',
    cardLastFour: '14',
    categories: ['Kitchen', 'Books'],
    clickthrough: 80,
  },
  {
    id: '4',
    name: 'David Brown',
    username: '@davidbrown',
    avatar: '/api/placeholder/32/32',
    paymentMethod: 'paypal',
    cardLastFour: '50',
    categories: ['Beauty', 'Apparel', 'Sale'],
    clickthrough: 60,
  },
  {
    id: '5',
    name: 'Emma Lee',
    username: '@emmalee',
    avatar: '/api/placeholder/32/32',
    paymentMethod: 'mastercard',
    cardLastFour: '19',
    categories: ['Furniture'],
    clickthrough: 40,
  },
]

const PAYMENT_IMAGE = {
  visa: '/images/payment/visa.svg',
  mastercard: '/images/payment/masterCard.svg',
  paypal: '/images/payment/paypal.svg',
}

const categoryColors: Record<string, Color> = {
  Arts: 'p',
  Business: 'w',
  Travel: 'd',
  Books: 'i',
  Computers: 'se',
  Kitchen: 'w',
  Beauty: 'b',
  Apparel: 'w',
  Sale: 'd',
  Furniture: 'su',
}

const CustomerList = () => {
  return (
    <Paper flow="6" className="l_box">
      <Flex justify="between" items="center" className="mb-6">
        <Flex gap="2" items="center">
          <Heading size="6">Your Customers</Heading>
          <Chips variant="soft" size="2" color="d">
            4 New
          </Chips>
        </Flex>

        <Flex gap="3">
          <Button variant="solid" icon={<Plus />}>
            Add User
          </Button>
          <Button variant="soft" icon={<Filter />}>
            Filter
          </Button>
          <IconButton size="4" variant="soft" icon={<Settings />} title="Settings" />
        </Flex>
      </Flex>

      <Table>
        <thead>
          <tr>
            <th>User</th>
            <th>Payment</th>
            <th>Category</th>
            <th>Clickthrough Percentage</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>
                <Flex gap="3" items="center">
                  <Avatar src={customer.avatar} size="3" title={customer.name} />
                  <Flex direction="col">
                    <Text weight="6">{customer.name}</Text>
                    <Text size="3" color="b" low>
                      {customer.username}
                    </Text>
                  </Flex>
                </Flex>
              </td>
              <td>
                <Flex gap="2" items="center">
                  <img src={PAYMENT_IMAGE[customer.paymentMethod]} alt="Visa" width="40" />
                  <Text size="3" color="b" low>
                    Ends in ****{customer.cardLastFour}
                  </Text>
                </Flex>
              </td>
              <td>
                <Flex gap="2" wrap>
                  {customer.categories.map((category) => (
                    <Chips key={category} variant="soft" color={categoryColors[category]} size="2">
                      {category}
                    </Chips>
                  ))}
                </Flex>
              </td>
              <td>
                <Flex gap="3" items="center">
                  <div className="w-24 bg-gray-100 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${customer.clickthrough}%` }} />
                  </div>
                  <Text size="3">{customer.clickthrough}%</Text>
                </Flex>
              </td>
              <td>
                <Flex gap="2" justify="end">
                  <IconButton variant="soft" size="3" icon={<Trash />} title="Delete" />
                  <IconButton variant="soft" size="3" icon={<Send />} title="Download" />
                  <IconButton variant="text" size="3" icon={<DotsVertical />} title="More options" />
                </Flex>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Paper>
  )
}

// Sample data for the chart
const chartData = Array.from({ length: 31 }, (_, i) => ({
  day: i + 1,
  value: 500 + Math.sin(i / 5) * 300 + Math.random() * 100,
}))

interface CardProps {
  title: string
  value: string
  change: string
  icon: ReactNode
}

const Card = ({ title, value, change, icon }: CardProps) => (
  <Paper flow="5" className="l_box">
    <Flex justify="between" items="center">
      <Text color="b" size="4" low>
        {title}
      </Text>
      {icon}
    </Flex>
    <Flex items="center" gap="2">
      <Text size="6" weight="7">
        {value}
      </Text>
      <Chips variant="soft" color={change.startsWith('+') ? 'su' : 'd'} size="3">
        {change}
      </Chips>
    </Flex>
  </Paper>
)

const SalesMetricsDashboard = () => {
  return (
    <Grid cols={{ default: '1fr', md: '2fr 1fr' }} gap="4">
      <Paper className="l_box">
        <Paper flow="4">
          <Flex justify="between" items="center">
            <Text color="b" low size="3">
              All Time High
              <Text as="span" size="4" weight="6">
                {' '}
                98.78%{' '}
              </Text>
              Total Sales
            </Text>
            <Button size="3" variant="soft" icon={<CloudDownload width={16} />}>
              Download Report +8.9%
            </Button>
          </Flex>
          <div style={{ height: '250px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="gradientArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--D9)" stopOpacity={0.9} />
                    <stop offset="100%" stopColor="var(--D9)" stopOpacity={0.5} />
                  </linearGradient>
                </defs>
                <XAxis
                  height={20}
                  domain={[0, 5, 10, 15, 20, 25, 30, 35]}
                  dataKey="day"
                  stroke="var(--B11)"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis width={35} stroke="var(--B11)" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  }}
                />
                <Area
                  dot={{ r: 3, fill: 'var(--D9)' }}
                  type="monotone"
                  dataKey="value"
                  stroke="var(--D9)"
                  fill="url(#gradientArea)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Paper>
      </Paper>

      <Paper flow="4">
        <Card
          title="Total Visitors"
          value="4,818"
          change="+44.2%"
          icon={<Eye className="text-blue-500" width={20} />}
        />
        <Card title="Engagement Rate" value="118,818" change="-2.8%" icon={<ArrowCircleDown width={20} />} />
        <Card
          title="Conversion Rate"
          value="12,158,187"
          change="+8%"
          icon={<HeartRateMonitor className="text-yellow-500" width={20} />}
        />
      </Paper>
    </Grid>
  )
}

interface MetricCardProps {
  title: string
  value: string | number
  change: string
  description: string
  color: string
  data: number[]
}

const MetricCard = ({ title, value, change, description, color, data }: MetricCardProps) => {
  const chartData = data.map((value, index) => ({ value, index }))

  return (
    <Paper className="l_box">
      <Paper flow="4">
        <Paper flow="2">
          <div>
            <Text size="3" color="b" low>
              {title}
            </Text>
            <Text size="2" color="b" low>
              {description}
            </Text>
          </div>
          <Flex justify="between" items="center">
            <Text leading="2" size="7" weight="6">
              {value}
            </Text>
            <Text color={parseFloat(change) >= 0 ? 'su' : 'd'} low size="3">
              {change}
            </Text>
          </Flex>
        </Paper>

        <div style={{ height: '60px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 8, right: 20, left: 20, bottom: 8 }}>
              <Bar dataKey="value" fill={color} barSize={8} radius={[8, 8, 8, 8]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Paper>
    </Paper>
  )
}

const metrics = [
  {
    title: 'Website Traffic',
    value: '91.6K',
    change: '+32.40%',
    description: 'Number of the visitors on the website.',
    color: 'var(--I8)',
    data: [30, 40, 35, 50, 49, 45, 52],
  },
  {
    title: 'Conversion Rate',
    value: '12.56%',
    change: '-4.40%',
    description: 'Number of the visitors turned into user.',
    color: 'var(--Su8)',
    data: [20, 25, 30, 35, 30, 35, 40],
  },
  {
    title: 'Bounce Rate',
    value: '45.33%',
    change: '+32.40%',
    description: 'Number of the visitors went without visiting.',
    color: 'var(--W8)',
    data: [25, 35, 45, 40, 45, 40, 50],
  },
  {
    title: 'Session Duration',
    value: '2.30 hrs',
    change: '+32.40%',
    description: 'Amount of time users used the website.',
    color: 'var(--D8)',
    data: [20, 30, 40, 35, 30, 35, 45],
  },
]

export const Component = () => {
  return (
    <Paper flow="7">
      <Heading size="7" weight="5">
        Analytics Overview
      </Heading>

      <Grid cols={{ default: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap="4">
        {metrics.map((metric, index) => (
          <MetricCard
            key={index}
            title={metric.title}
            value={metric.value}
            change={metric.change}
            description={metric.description}
            color={metric.color}
            data={metric.data}
          />
        ))}
      </Grid>

      <SalesMetricsDashboard />
      <CustomerList />
    </Paper>
  )
}
