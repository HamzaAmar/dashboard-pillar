import { Table, Pagination } from '@components/composition'
import { useLoaderData } from 'react-router-dom'

import type { OrderModel, OrderStatusUnion } from '@api/ecommerce/orders/orders.type'
import { Breadcrumb, Button, Chips, Flex, Heading, IconButton, Text } from '@components/core'
import { Pen, Trash } from '@components/icons'
import type { ChipsColor } from '@components/core/chips'
import { formatDate } from '@utils/date'

const statusColor: Record<OrderStatusUnion, ChipsColor> = {
  pending: 'indigo',
  refund: 'danger',
  canceled: 'danger',
  shipped: 'success',
  complete: 'mint',
  'partially-shipped': 'purple',
  'awaiting-pickup': 'yellow',
  paid: 'success',
  'awaiting-shipping': 'mint',
}

const Orders = () => {
  const data = useLoaderData() as OrderModel[]
  return (
    <section className="l_flow-md">
      <Flex justify="between" items="center">
        <Heading weight="medium" size="sm">
          Products Details
        </Heading>
        <Breadcrumb size="md">
          <Breadcrumb.Item link="../../">Home</Breadcrumb.Item>
          <Breadcrumb.Item link="../..">E-commerce</Breadcrumb.Item>
          <Breadcrumb.Item link="../" current>
            Orders
          </Breadcrumb.Item>
        </Breadcrumb>
      </Flex>

      <Table variant="head-color" color="primary">
        <thead>
          <Table.Row type="head">
            <Table.Column as="th">Order ID</Table.Column>
            <Table.Column as="th">Customer Name </Table.Column>
            <Table.Column as="th">Date</Table.Column>
            <Table.Column as="th">Total</Table.Column>
            <Table.Column as="th">Payment Status</Table.Column>
            <Table.Column as="th">View Details</Table.Column>
            <Table.Column as="th">Action</Table.Column>
          </Table.Row>
        </thead>
        <tbody>
          {data.map(({ id, customer, total, status, date }) => (
            <Table.Row key={id}>
              <Table.Column weight="medium">#{id}</Table.Column>
              <Table.Column>{customer.name}</Table.Column>
              <Table.Column>
                <Text weight="medium" size="xs">
                  {formatDate(date)}
                </Text>
              </Table.Column>
              {/* TODO: Get The currency also from the back */}
              <Table.Column weight="medium">{total ? `${total} $` : '_'} </Table.Column>
              <Table.Column>
                <Chips color={statusColor[status]} variant="soft">
                  {status}
                </Chips>
              </Table.Column>
              <Table.Column>
                <Button size="xs" variant="soft" corner="full">
                  View Details
                </Button>
              </Table.Column>
              <Table.Column>
                <Flex gap="2xs">
                  <IconButton variant="soft" color="danger" size="xs" icon={<Trash />} title="delete Order" />
                  <IconButton size="xs" variant="soft" color="indigo" icon={<Pen />} title="delete Order" />
                </Flex>
              </Table.Column>
            </Table.Row>
          ))}
        </tbody>
      </Table>
      <Flex justify="center">
        <Pagination title="ecoomerce pagination" current={1} count={5} />
      </Flex>
    </section>
  )
}

export default Orders
