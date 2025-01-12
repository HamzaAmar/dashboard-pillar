import {} from '@components/composition'
import { useLoaderData } from 'react-router-dom'

import type { OrderModel, OrderStatusUnion } from '@api/ecommerce/orders/orders.type'
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
  TableRow,
  TableColumn,
  Color,
  Paper,
} from '@pillar-ui/core'
import { Pen, Trash } from '@components/icons'
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
  const data = useLoaderData() as OrderModel[]
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
          <TableRow type="head">
            <TableColumn as="th">Order ID</TableColumn>
            <TableColumn as="th">Customer Name </TableColumn>
            <TableColumn as="th">Date</TableColumn>
            <TableColumn as="th">Total</TableColumn>
            <TableColumn as="th">Payment Status</TableColumn>
            <TableColumn as="th">View Details</TableColumn>
            <TableColumn as="th">Action</TableColumn>
          </TableRow>
        </thead>
        <tbody>
          {data.map(({ id, customer, total, status, date }) => (
            <TableRow key={id}>
              <TableColumn weight="5">#{id}</TableColumn>
              <TableColumn>{customer.name}</TableColumn>
              <TableColumn>
                <Text weight="5" size="3">
                  {formatDate(date)}
                </Text>
              </TableColumn>
              {/* TODO: Get The currency also from the back */}
              <TableColumn weight="5">{total ? `${total} $` : '_'} </TableColumn>
              <TableColumn>
                <Chips color={statusColor[status]} variant="soft">
                  {status}
                </Chips>
              </TableColumn>
              <TableColumn>
                <Button size="3" variant="soft" corner="full">
                  View Details
                </Button>
              </TableColumn>
              <TableColumn>
                <Flex gap="1">
                  <IconButton variant="soft" color="d" size="3" icon={<Trash />} title="delete Order" />
                  <IconButton size="3" variant="soft" color="i" icon={<Pen />} title="delete Order" />
                </Flex>
              </TableColumn>
            </TableRow>
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
