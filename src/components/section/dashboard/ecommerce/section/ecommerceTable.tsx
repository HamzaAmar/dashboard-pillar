import type { ProductsModel } from '@api/ecommerce/products/products.type'
import { UserModel } from '@api/user/user.type'
import { Table } from '@components/composition'
import { Avatar, Chips, Flex, Grid, Heading, IconButton, Text } from '@components/core'
import { Dots, Star } from '@components/icons'
import { useLoaderData } from 'react-router-dom'

const BestSeller = () => {
  const { users } = useLoaderData() as {
    products: ProductsModel[]
    users: UserModel[]
  }
  // const [current, setCurrent] = useState(1);
  return (
    <section aria-labelledby="best-seller-id" className="u_flex-1 l_box l_flow-md">
      <Flex as="header">
        <Heading id="best-seller-id" as="h3" size="xs">
          Best Seller
        </Heading>
      </Flex>
      <Table>
        <thead>
          <Table.Row type="head">
            <Table.Column as="th">Products</Table.Column>
            <Table.Column as="th">Price</Table.Column>
            <Table.Column as="th">Category</Table.Column>
            <Table.Column as="th">Rating</Table.Column>
            <Table.Column as="th">Orders</Table.Column>
          </Table.Row>
        </thead>
        <tbody>
          {users.map(({ slug, avatar, name }) => (
            <Table.Row key={slug}>
              <Table.Column>
                <Flex gap="sm">
                  <Avatar
                    title={`${name} profile's Picture`}
                    variant="image"
                    image={`${avatar}`}
                    size="md"
                    corner="sm"
                  />
                  <div className="u_leading-sm">
                    <Heading as="h4" size="2xs" truncate="multiline" numberLine={1} weight="medium">
                      {name}
                    </Heading>
                    <Text size="xs" color="slate" contrast="low">
                      28 Jul 2022
                    </Text>
                  </div>
                </Flex>
              </Table.Column>
              <Table.Column>Price</Table.Column>
              <Table.Column>Category</Table.Column>
              <Table.Column>Rating</Table.Column>
              <Table.Column>Rating</Table.Column>
            </Table.Row>
          ))}
        </tbody>
      </Table>
    </section>
  )
}

const BestSelling = () => {
  const { products } = useLoaderData() as {
    products: ProductsModel[]
    users: UserModel[]
  }
  return (
    <section aria-labelledby="best-selling-id" className="u_flex-1 l_box l_flow-md">
      <Flex as="header">
        <Heading id="best-selling-id" as="h3" size="xs">
          Best Selling Products
        </Heading>
      </Flex>
      <Table>
        <thead>
          <Table.Row type="head">
            <Table.Column as="th">Products</Table.Column>
            <Table.Column as="th">Price</Table.Column>
            <Table.Column as="th">Category</Table.Column>
            <Table.Column as="th">Rating</Table.Column>
            <Table.Column as="th">Orders</Table.Column>
            <Table.Column as="th">Actions</Table.Column>
          </Table.Row>
        </thead>
        <tbody>
          {products.map(({ id, color, heroImage, title, price, rating }) => (
            <Table.Row key={id}>
              <Table.Column>
                <Flex gap="sm">
                  <Avatar
                    title={`${color} ${title}`}
                    variant="image"
                    image={`/images/products/${heroImage}`}
                    size="md"
                    corner="sharp"
                  />
                  <div className="u_leading-sm">
                    <Heading as="h4" size="2xs" truncate="multiline" numberLine={1} weight="medium">
                      {title}
                    </Heading>
                    <Text size="xs" color="slate" contrast="low">
                      28 Jul 2022
                    </Text>
                  </div>
                </Flex>
              </Table.Column>
              <Table.Column weight="medium">
                <Chips variant="soft" size="lg">
                  {price.price}
                </Chips>
              </Table.Column>
              <Table.Column>Category</Table.Column>
              <Table.Column>
                <Flex gap="2xs">
                  <Star fill="var(--orange-8)" stroke="var(--orange-8)" width="20" />

                  <Text weight="bold" as="span" size="xs">
                    ({rating})
                  </Text>
                </Flex>
              </Table.Column>
              <Table.Column weight="medium">#${id}</Table.Column>
              <Table.Column weight="medium">
                <IconButton icon={<Dots />} title="more Info" size="sm" />
              </Table.Column>
            </Table.Row>
          ))}
        </tbody>
      </Table>
    </section>
  )
}

export const EcommerceTables = () => {
  return (
    <Grid columns="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="sm">
      <BestSelling />
      <BestSeller />
    </Grid>
  )
}
