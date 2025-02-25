import {
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  Flex,
  Grid,
  Heading,
  IconButton,
  Paper,
  Table,
  Text,
  Chips,
  Button,
  Rating,
} from '@pillar-ui/core'
import { DotsHorizontal, Plus, Search } from '@pillar-ui/icons'
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as LineTooltip,
  Legend as LineLegend,
} from 'recharts'

// Metrics data
const metrics = [
  { title: 'Total Customers', value: '254,244', change: '+0.05%', trend: 'up' },
  { title: 'Total Revenue', value: '$1.465M', change: '-0.01%', trend: 'down' },
  { title: 'Conversion Ratio', value: '26.97%', change: '+2.96%', trend: 'up' },
  { title: 'Total Deals', value: '12,644', change: '+1.34%', trend: 'up' },
]

// Sample data for Project Analysis Chart
const projectAnalysisData = [
  { month: 'Jan', revenue: 1500 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 1900 },
  { month: 'May', revenue: 2400 },
  { month: 'Jun', revenue: 2800 },
  { month: 'Jul', revenue: 2500 },
  { month: 'Aug', revenue: 2700 },
]

// Sample data for Leads by Channel Pie Chart
const channelData = [
  { name: 'Direct', value: 300, color: '#4caf50' },
  { name: 'Referral', value: 200, color: '#2196f3' },
  { name: 'Social', value: 250, color: '#ff9800' },
  { name: 'Organic', value: 250, color: '#9c27b0' },
]

// Sample data for Tasks
const tasks = [
  { id: 1, title: 'Sales Accounting', status: 'completed' },
  { id: 2, title: 'Meeting with Sales Team', status: 'not_started' },
  { id: 3, title: 'Added New Customers', status: 'completed' },
  { id: 4, title: 'Customers Meeting', status: 'in_progress' },
]

interface CompanyData {
  company: string
  website: string
  status: 'Customer' | 'Churned'
  aboutCategory: string
  aboutDescription: string
  rating: number
  logo: string
}

const companyData: CompanyData[] = [
  {
    company: 'Linear',
    website: 'linear.app',
    status: 'Customer',
    aboutCategory: 'Developer Tools',
    aboutDescription: "The issue tracking tool you'll enjoy using.",
    rating: 4,
    logo: '/linear_logo.png',
  },
  {
    company: 'Stripe',
    website: 'stripe.com',
    status: 'Churned',
    aboutCategory: 'Financial Tools',
    aboutDescription: 'Payment processing platform for the Internet.',
    rating: 2,
    logo: '/stripe_logo.png',
  },
  {
    company: 'Webflow',
    website: 'webflow.com',
    status: 'Customer',
    aboutCategory: 'Web Development',
    aboutDescription: 'Create a custom website + no-code website builder.',
    rating: 0,
    logo: '/webflow_logo.png',
  },
  {
    company: 'Intercom',
    website: 'intercom.com',
    status: 'Customer',
    aboutCategory: 'Customer Engagement',
    aboutDescription: 'Build lasting customer relationships with Intercom.',
    rating: 0,
    logo: '/intercom_logo.png',
  },
  {
    company: 'Basecamp',
    website: 'basecamp.com',
    status: 'Churned',
    aboutCategory: 'Project Management',
    aboutDescription: 'Project management and team communication',
    rating: 0,
    logo: '/basecamp_logo.png',
  },
]

const statusColors = {
  Customer: 'su',
  Churned: 'd',
} as const

const CRMTable = () => {
  return (
    <Paper as="section" aria-labelledby="company-table-id" className="l_box">
      <Flex as="header" justify="between" items="center" className="u_padding-block-4">
        <Flex gap="3" items="center">
          <Chips variant="outline">All time X</Chips>
          <Chips variant="outline">US, AU, +4 X</Chips>
          <Chips variant="outline">More filters</Chips>
        </Flex>
        <Flex gap="3" items="center">
          <Button icon={<Plus />}>Add customer</Button>
          <IconButton size="4" variant="text" icon={<Search />} title="Search" />
        </Flex>
      </Flex>

      <Table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Status</th>
            <th>About</th>
            <th>Rating</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {companyData.map((data, index) => (
            <tr key={index}>
              <td>
                <Flex gap="3" items="center">
                  <Avatar src={data.logo} size="4" title={`${data.company} Logo`} corner="1" />
                  <div>
                    <Heading as="h4" size="4" weight="5">
                      {data.company}
                    </Heading>
                    <Text size="3" color="b" low>
                      {data.website}
                    </Text>
                  </div>
                </Flex>
              </td>
              <td>
                <Chips variant="soft" color={statusColors[data.status]}>
                  {data.status}
                </Chips>
              </td>
              <td>
                <div>
                  <Text weight="6" size="3">
                    {data.aboutCategory}
                  </Text>
                  <Text size="3" color="b" low>
                    {data.aboutDescription}
                  </Text>
                </div>
              </td>
              <td>
                <Flex gap="1">
                  {data.rating ? (
                    <Rating rating={data.rating} hideTitle />
                  ) : (
                    <Text fontStyle="italic" size="3" color="b" low>
                      (Not Yet Rated)
                    </Text>
                  )}
                </Flex>
              </td>
              <td align="right">
                <IconButton variant="text" icon={<DotsHorizontal />} title="More actions" size="4" />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Paper>
  )
}

// Sample data for Leads
const leads = [
  {
    id: 1,
    name: 'Socrates Itumay',
    email: 'socratesitumay@gmail.com',
    revenue: '1835',
    status: 'Hot',
    avatar: 'https://example.com/avatar1.jpg',
  },
  {
    id: 2,
    name: 'Json Taylor',
    email: 'json241@gmail.com',
    revenue: '28',
    status: 'Warm',
    avatar: 'https://example.com/avatar2.jpg',
  },
  {
    id: 3,
    name: 'Suzika Stallone',
    email: 'suzikastallone@gmail.com',
    revenue: '2844',
    status: 'Hot',
    avatar: 'https://example.com/avatar3.jpg',
  },
  // Add more leads as needed
]

// Sample data for Leads Overview Radar Chart
const radarData = [
  {
    label: 'Engagement',
    value: 80,
  },
  {
    label: 'Conversion',
    value: 70,
  },
  {
    label: 'Revenue',
    value: 90,
  },
  {
    label: 'Lead Quality',
    value: 75,
  },
  {
    label: 'Follow-up',
    value: 85,
  },
]

export const Component = () => {
  return (
    <Paper flow="7">
      <Flex items="center" justify="between">
        <Heading size="7" weight="5">
          CRM Dashboard
        </Heading>
        <Breadcrumb>
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem href="/crm" current>
            CRM
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>

      {/* Metrics */}
      <Grid cols={{ default: '1fr', md: 'repeat(4, 1fr)' }} gap="4">
        {metrics.map((metric) => (
          <Paper className="l_box" key={metric.title}>
            <Flex direction="col" gap="3">
              <Text color="b" low>
                {metric.title}
              </Text>
              <Flex justify="between" items="center">
                <Text size="7" weight="7">
                  {metric.value}
                </Text>
                <Text color={metric.trend === 'up' ? 'su' : 'd'} size="3">
                  {metric.change}
                </Text>
              </Flex>
            </Flex>
          </Paper>
        ))}
      </Grid>

      {/* Analysis Charts */}
      <Grid cols={{ default: '1fr', lg: '2fr 1fr' }} gap="4">
        <Paper className="l_box">
          <Heading size="4">Project Analysis</Heading>
          <ResponsiveContainer width="100%" aspect={2}>
            <LineChart data={projectAnalysisData}>
              <XAxis dataKey="month" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
              <LineLegend />
              <LineTooltip />
            </LineChart>
          </ResponsiveContainer>
        </Paper>

        <Paper className="l_box">
          <Heading size="4">Leads by Channel</Heading>
          <ResponsiveContainer width="100%" aspect={1}>
            <PieChart>
              <Pie data={channelData} innerRadius="60%" outerRadius="80%" paddingAngle={5} dataKey="value">
                {channelData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Paper>
      </Grid>

      {/* Tasks and Leads */}
      <Grid cols={{ default: '1fr', lg: '1fr 2fr' }} gap="4">
        <Paper className="l_box" flow="4">
          <Heading size="4">Tasks</Heading>
          {tasks.map((task) => (
            <Flex key={task.id} justify="between" items="center">
              <Flex gap="2" items="center">
                <Chips color={task.status === 'completed' ? 'su' : 'w'}>{task.status}</Chips>
                <Text>{task.title}</Text>
              </Flex>
              <IconButton icon={<DotsHorizontal />} title="More options" />
            </Flex>
          ))}
        </Paper>

        <Paper className="l_box">
          <Heading size="4">Top Leads</Heading>
          <Table>
            <thead>
              <tr>
                <td>Lead</td>
                <td>Email</td>
                <td>Revenue</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id}>
                  <td>
                    <Flex gap="2" items="center">
                      <Avatar src={lead.avatar} size="6" />
                      <Text>{lead.name}</Text>
                    </Flex>
                  </td>
                  <td>{lead.email}</td>
                  <td>${lead.revenue}</td>
                  <td>
                    <Chips color={lead.status === 'Hot' ? 'su' : 'w'}>{lead.status}</Chips>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Paper>
      </Grid>

      {/* Leads Overview Radar Chart */}
      <Paper className="l_box" flow="4">
        <Heading size="4">Leads Overview</Heading>
        <ResponsiveContainer width="100%" aspect={1}>
          <RadarChart data={[radarData]}>
            <PolarGrid stroke="var(--B5)" />
            <PolarAngleAxis dataKey="label" />
            <Radar dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            <Tooltip />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </Paper>

      <CRMTable />
    </Paper>
  )
}
