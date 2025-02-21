import { useLoaderData } from 'react-router-dom'
import type { OrderDTO, OrderStatusUnion } from '@api/ecommerce/orders/orders.type'
import {
  Breadcrumb,
  Button,
  Chips,
  Flex,
  Heading,
  IconButton,
  Text,
  Table,
  Pagination,
  BreadcrumbItem,
  Color,
  Paper,
} from '@pillar-ui/core'
import { Pencil, Trash } from '@pillar-ui/icons'
import { formatDate } from '@utils/date'

const statusColor: Record<OrderStatusUnion, Color> = {
  pending: 'i',
  refund: 'd',
  canceled: 'd',
  shipped: 'su',
  complete: 'se',
  'partially-shipped': 'p',
  'awaiting-pickup': 'w',
  paid: 'su',
  'awaiting-shipping': 'se',
}

const Orders = () => {
  const data = useLoaderData() as OrderDTO[]
  return (
    <Paper as="section" flow="5">
      <Flex justify="between" items="center">
        <Heading weight="5" size="4">
          Products Details
        </Heading>
        <Breadcrumb size="5">
          <BreadcrumbItem href="../../">Home</BreadcrumbItem>
          <BreadcrumbItem href="../..">E-commerce</BreadcrumbItem>
          <BreadcrumbItem href="../" current>
            Orders
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>

      <Table variant="head-color" color="p">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name </th>
            <th>Date</th>
            <th>Total</th>
            <th>Payment Status</th>
            <th>View Details</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, customer, total, status, date }) => (
            <tr key={id}>
              <td>#{id}</td>
              <td>{customer.name}</td>
              <td>
                <Text weight="5" size="3">
                  {formatDate(date)}
                </Text>
              </td>
              {/* TODO: Get The currency also from the back */}
              <td>{total ? `${total} $` : '_'} </td>
              <td>
                <Chips color={statusColor[status]} variant="soft">
                  {status}
                </Chips>
              </td>
              <td>
                <Button size="3" variant="soft" corner="full">
                  View Details
                </Button>
              </td>
              <td>
                <Flex gap="1">
                  <IconButton variant="soft" color="d" size="3" icon={<Trash />} title="delete Order" />
                  <IconButton size="3" variant="soft" color="i" icon={<Pencil />} title="delete Order" />
                </Flex>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Flex justify="center">
        <Pagination title="ecoomerce pagination" current={1} count={5} />
      </Flex>
    </Paper>
  )
}

export default Orders
