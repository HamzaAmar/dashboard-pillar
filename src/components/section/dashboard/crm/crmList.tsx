import { Avatar, Button, Chips, Flex, Heading, IconButton, Paper, Rating, Table, Text } from '@pillar-ui/core'
import { DotsHorizontal, Plus, Search } from '@pillar-ui/icons'
import { CompanyDTO } from './crm.type'

const statusColors = {
  Customer: 'su',
  Churned: 'd',
} as const

const companyData: CompanyDTO[] = [
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

export const CRMTable = () => {
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
