import { useState } from 'react'
import { Table } from '@components/composition'
import { Avatar, Breadcrumb, Button, Flex, Grid, Heading, IconButton, InputNumber, Text } from '@components/core'
import { getDiscountPrice } from '@utils/price'
import { ArrowDown, Card, CircleCheck, Trash } from '@components/icons'
import { formatPrice } from '@utils/formatNumber'
import { Link } from 'react-router-dom'
import { getProducts } from '@api/ecommerce'

const CartRow = ({ quantity, price, heroImage, title }: any) => {
  const [productQuantity, setProductQuantity] = useState(quantity)

  function increaseQuantity(event: React.ChangeEvent<HTMLInputElement>) {
    setProductQuantity(event.target.value)
  }

  return (
    <Table.Row type="head">
      <Table.Column>
        <Flex gap="sm">
          <Avatar corner="sm" variant="image" image={`/images/products/${heroImage[0]}`} title="helo" />
          <div>
            <Text size="sm" weight="medium">
              {title}
            </Text>
            <Text color="slate" contrast="low" size="sm" as="span">
              color :
            </Text>{' '}
            <Text size="sm" weight="medium" as="span">
              Red
            </Text>
          </div>
        </Flex>
      </Table.Column>
      <Table.Column weight="medium">{getDiscountPrice({ price: price.price, discount: price.discount })}</Table.Column>
      <Table.Column>
        <InputNumber
          aria-label="product-quantity"
          value={productQuantity}
          onChange={increaseQuantity}
          min={1}
          size="sm"
        />
      </Table.Column>
      <Table.Column weight="medium">{formatPrice({ number: price.price * productQuantity ?? 1 })}</Table.Column>
      <Table.Column>
        <IconButton variant="soft" color="danger" icon={<Trash />} title="remove Product" />
      </Table.Column>
    </Table.Row>
  )
}

function TableCart() {
  return (
    <Table>
      <Table.Row type="head">
        <Table.Column as="th">Product</Table.Column>
        <Table.Column as="th">Price</Table.Column>
        <Table.Column as="th">Quantity</Table.Column>
        <Table.Column as="th">Total</Table.Column>
        <Table.Column as="th">Actions</Table.Column>
      </Table.Row>
      {getProducts({ pageSize: 8 }).map((product) => (
        <CartRow {...product} />
      ))}
    </Table>
  )
}

const cart = () => {
  return (
    <section className="l_flow-md">
      <Flex justify="between" items="center">
        <Heading weight="medium" size="sm">
          Cart
        </Heading>
        <Breadcrumb size="md">
          <Breadcrumb.Item link="../../">Home</Breadcrumb.Item>
          <Breadcrumb.Item link="../..">E-commerce</Breadcrumb.Item>
          <Breadcrumb.Item link="./" current>
            Cart
          </Breadcrumb.Item>
        </Breadcrumb>
      </Flex>
      <Grid columns="1fr 350px" gap="md" className="md_grid-one">
        <div className="l_flow-md">
          <TableCart />
          <Flex justify="between" items="center">
            <Button as={Link} to="../products" color="slate" variant="solid" icon={<ArrowDown direction="left" />}>
              Back To Shopping
            </Button>
            <Button as={Link} to="../checkout" variant="solid" icon={<Card />}>
              Checkout
            </Button>
          </Flex>
        </div>
        <div className="cart--aside l_flow-sm">
          <article className="l_box l_flow-md">
            <Heading as="h2" size="xs">
              ACCEPTED PAYMENT METHODS
            </Heading>

            <Flex wrap gap="xs">
              <img src="/images/payment/masterCard.svg" width="60" alt="master card logo" />
              <img src="/images/payment/visa.svg" width="60" alt="visa" />
              <img src="/images/payment/paypal.svg" width="120" alt="paypal" />
            </Flex>
            <Flex items="start" gap="xs">
              <CircleCheck width="32" stroke="var(--indigo-8)" />
              <div>
                <Heading as="h2" size="xs">
                  Buyer Protection
                </Heading>
                <Text size="xs" color="slate" contrast="low">
                  Get full refund if the item is not as described or if is not delivered
                </Text>
              </div>
            </Flex>
          </article>
          <article className="cart-summary l_flow-md l_box">
            <Heading as="h2" size="xs">
              Order Summary
            </Heading>
            <div className="cart-summary--list">
              <Flex as={Text} color="slate" contrast="low" size="sm" justify="between">
                <span>Products Price:</span> <span>$ 1,857</span>
              </Flex>
              <Flex as={Text} color="slate" contrast="low" size="sm" justify="between">
                <span>Discount:</span> <span>$ 1,857</span>
              </Flex>
              <Flex as={Text} color="slate" contrast="low" size="sm" justify="between">
                <span>Chipping:</span> <span>$ 1,857</span>
              </Flex>
              <Flex as={Text} color="slate" contrast="low" size="sm" justify="between">
                <span>Tax:</span> <span>$ 1,857</span>
              </Flex>

              <Flex size="sm" as={Text} justify="between" weight="medium">
                <span>Total:</span> <span>$ 1,857</span>
              </Flex>
            </div>
          </article>
        </div>
      </Grid>
    </section>
  )
}

export default cart
