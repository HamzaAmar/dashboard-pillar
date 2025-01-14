import type { ProductsModel } from '@api/ecommerce/products/products.type'
import { UserModel } from '@api/user/user.type'
import {
  Avatar,
  Chips,
  Flex,
  Grid,
  Heading,
  IconButton,
  Text,
  Table,
  TableRow,
  TableColumn,
  Paper,
} from '@pillar-ui/core'
import { Dots, Star } from '@components/icons'
import { useLoaderData } from 'react-router-dom'

const BestSeller = () => {
  const { users } = useLoaderData() as {
    products: ProductsModel[]
    users: UserModel[]
  }
  // const [current, setCurrent] = useState(1);
  return (
    <Paper as="section" aria-labelledby="best-seller-id" className="fl-1 l_box">
      <Flex as="header">
        <Heading id="best-seller-id" as="h3" size="3">
          Best Seller
        </Heading>
      </Flex>
      <Table>
        <thead>
          <TableRow type="head">
            <TableColumn as="th">Products</TableColumn>
            <TableColumn as="th">Price</TableColumn>
            <TableColumn as="th">Category</TableColumn>
            <TableColumn as="th">Rating</TableColumn>
            <TableColumn as="th">Orders</TableColumn>
          </TableRow>
        </thead>
        <tbody>
          {users.map(({ slug, avatar, name }) => (
            <TableRow key={slug}>
              <TableColumn>
                <Flex gap="4">
                  <Avatar title={`${name} profile's Picture`} src={`${avatar}`} size="5" corner="3" />
                  <div className="u_leading-sm">
                    <Heading as="h4" size="1" truncate="1" weight="5">
                      {name}
                    </Heading>
                    <Text size="3" color="b" low>
                      28 Jul 2022
                    </Text>
                  </div>
                </Flex>
              </TableColumn>
              <TableColumn>Price</TableColumn>
              <TableColumn>Category</TableColumn>
              <TableColumn>Rating</TableColumn>
              <TableColumn>Rating</TableColumn>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Paper>
  )
}

const BestSelling = () => {
  const { products } = useLoaderData() as {
    products: ProductsModel[]
    users: UserModel[]
  }
  return (
    <Paper as="section" aria-labelledby="best-selling-id" className="fl-1 l_box">
      <Flex as="header">
        <Heading id="best-selling-id" as="h3" size="3">
          Best Selling Products
        </Heading>
      </Flex>
      <Table>
        <thead>
          <TableRow type="head">
            <TableColumn as="th">Products</TableColumn>
            <TableColumn as="th">Price</TableColumn>
            <TableColumn as="th">Category</TableColumn>
            <TableColumn as="th">Rating</TableColumn>
            <TableColumn as="th">Orders</TableColumn>
            <TableColumn as="th">Actions</TableColumn>
          </TableRow>
        </thead>
        <tbody>
          {products.map(({ id, color, heroImage, title, price, rating }) => (
            <TableRow key={id}>
              <TableColumn>
                <Flex gap="4">
                  <Avatar title={`${color} ${title}`} src={`/images/products/${heroImage}`} size="5" corner="0" />
                  <div className="u_leading-sm">
                    <Heading as="h4" size="1" truncate="1" weight="5">
                      {title}
                    </Heading>
                    <Text size="3" color="b" low>
                      28 Jul 2022
                    </Text>
                  </div>
                </Flex>
              </TableColumn>
              <TableColumn>
                <Chips variant="soft" size="6">
                  {price.price}
                </Chips>
              </TableColumn>
              <TableColumn>Category</TableColumn>
              <TableColumn>
                <Flex gap="1">
                  <Star fill="var(--W8)" stroke="var(--W8)" width="20" />

                  <Text weight="7" as="span" size="3">
                    ({rating})
                  </Text>
                </Flex>
              </TableColumn>
              <TableColumn>#${id}</TableColumn>
              <TableColumn>
                <IconButton icon={<Dots />} title="more Info" size="4" />
              </TableColumn>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Paper>
  )
}

export const EcommerceTables = () => {
  return (
    <Grid cols={{ default: 'minmax(0,1fr) minmax(0,1fr)' }} className="md_grid-one" gap="4">
      <BestSelling />
      <BestSeller />
    </Grid>
  )
}
