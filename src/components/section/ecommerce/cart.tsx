import { useState } from 'react'
import {
  Avatar,
  Breadcrumb,
  Button,
  Flex,
  Grid,
  Heading,
  Table,
  IconButton,
  InputNumber,
  Text,
  TableRow,
  TableColumn,
  BreadcrumbItem,
  Paper,
} from '@pillar-ui/core'
import { getDiscountPrice } from '@utils/price'
import { ArrowDown, Card, CircleCheck, Trash } from '@components/icons'
import { formatPrice } from '@utils/formatNumber'
import { Link } from 'react-router-dom'
import { getProducts, ProductCore } from '@api/ecommerce'

const CartRow = ({ quantity, price, heroImage, title }: ProductCore) => {
  const [productQuantity, setProductQuantity] = useState(quantity)

  function increaseQuantity(event: React.ChangeEvent<HTMLInputElement>) {
    setProductQuantity(+event.target.value)
  }

  return (
    <TableRow type="head">
      <TableColumn>
        <Flex gap="4">
          <Avatar corner="3" src={`/images/products/${heroImage[0]}`} title="helo" />
          <div>
            <Text size="4" weight="5">
              {title}
            </Text>
            <Text color="b" low size="4" as="span">
              color :
            </Text>
            <Text size="4" weight="5" as="span">
              Red
            </Text>
          </div>
        </Flex>
      </TableColumn>
      <TableColumn weight="5">{getDiscountPrice({ price: price.price, discount: price.discount ?? 0 })}</TableColumn>
      <TableColumn>
        <InputNumber
          aria-label="product-quantity"
          value={productQuantity}
          onChange={increaseQuantity}
          min={1}
          size="4"
        />
      </TableColumn>
      <TableColumn weight="5">{formatPrice({ number: price.price * productQuantity })}</TableColumn>
      <TableColumn>
        <IconButton variant="soft" color="d" icon={<Trash />} title="remove Product" />
      </TableColumn>
    </TableRow>
  )
}

function TableCart() {
  return (
    <Table>
      <TableRow type="head">
        <TableColumn as="th">Product</TableColumn>
        <TableColumn as="th">Price</TableColumn>
        <TableColumn as="th">Quantity</TableColumn>
        <TableColumn as="th">Total</TableColumn>
        <TableColumn as="th">Actions</TableColumn>
      </TableRow>
      {getProducts({ pageSize: 8 }).map((product) => (
        <CartRow {...product} />
      ))}
    </Table>
  )
}

const cart = () => {
  return (
    <Paper as="section" flow="5">
      <Flex justify="between" items="center">
        <Heading weight="5" size="4">
          Cart
        </Heading>
        <Breadcrumb size="5">
          <BreadcrumbItem href="../../">Home</BreadcrumbItem>
          <BreadcrumbItem href="../..">E-commerce</BreadcrumbItem>
          <BreadcrumbItem href="./" current>
            Cart
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Grid cols={{ default: '1fr', lg: '1fr 350px' }} gap="5" className="md_grid-one">
        <Paper flow="5">
          <TableCart />
          <Flex justify="between" items="center">
            <Button as={Link} to="../products" color="b" variant="solid" icon={<ArrowDown direction="left" />}>
              Back To Shopping
            </Button>
            <Button as={Link} to="../checkout" variant="solid" icon={<Card />}>
              Checkout
            </Button>
          </Flex>
        </Paper>
        <Paper as="article" flow="5" className="cart--aside">
          <Paper flow="5" className="l_box">
            <Heading as="h2" size="3">
              ACCEPTED PAYMENT METHODS
            </Heading>

            <Flex wrap gap="3">
              <img src="/images/payment/masterCard.svg" width="60" alt="master card logo" />
              <img src="/images/payment/visa.svg" width="60" alt="visa" />
              <img src="/images/payment/paypal.svg" width="120" alt="paypal" />
            </Flex>
            <Flex items="start" gap="3">
              <CircleCheck width="32" stroke="var(--indigo-8)" />
              <div>
                <Heading as="h2" size="3">
                  Buyer Protection
                </Heading>
                <Text size="3" color="b" low>
                  Get full refund if the item is not as described or if is not delivered
                </Text>
              </div>
            </Flex>
          </Paper>
          <Paper as="article" flow="4" className="cart-summary l_box">
            <Heading as="h2" size="3">
              Order Summary
            </Heading>
            <div className="cart-summary--list">
              <Flex as={Text} color="b" low size="4" justify="between">
                <span>Products Price:</span> <span>$ 1,857</span>
              </Flex>
              <Flex as={Text} color="b" low size="4" justify="between">
                <span>Discount:</span> <span>$ 1,857</span>
              </Flex>
              <Flex as={Text} color="b" low size="4" justify="between">
                <span>Chipping:</span> <span>$ 1,857</span>
              </Flex>
              <Flex as={Text} color="b" low size="4" justify="between">
                <span>Tax:</span> <span>$ 1,857</span>
              </Flex>

              <Flex size="4" as={Text} justify="between" weight="5">
                <span>Total:</span> <span>$ 1,857</span>
              </Flex>
            </div>
          </Paper>
        </Paper>
      </Grid>
    </Paper>
  )
}

export default cart
