import type { ProductDTO } from '@api/ecommerce/products/products.type'
import { UserModel } from '@api/user/user.type'
import { Avatar, Chips, Flex, Heading, IconButton, Text, Table, Paper } from '@pillar-ui/core'
import { DotsHorizontal, Star } from '@pillar-ui/icons'
import { useLoaderData } from 'react-router-dom'

const ChipsColor = {
  Kids: 'd',
  Women: 'se',
  Men: 'i',
  Sport: 'su',
  Walking: 'w',
} as const

const BestSelling = () => {
  const { products } = useLoaderData() as {
    products: ProductDTO[]
    users: UserModel[]
  }
  return (
    <Paper as="section" flow="5" aria-labelledby="best-selling-id" className="l_box">
      <Flex as="header">
        <Heading id="best-selling-id" as="h3" size="5">
          Best Selling Products
        </Heading>
      </Flex>
      <Table>
        <thead>
          <tr>
            <th>Products</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Rating</th>
            <th>Orders</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map(({ id, color, heroImage, title, price, rating, category, quantity }) => (
            <tr key={id}>
              <td>
                <Flex gap="4">
                  <Avatar title={`${color} ${title}`} src={`/images/products/${heroImage}`} size="5" corner="3" />
                  <div className="u_leading-sm">
                    <Heading as="h4" size="4" truncate="1" weight="5">
                      {title}
                    </Heading>
                    <Text size="3" color="b" low>
                      28 Jul 2022
                    </Text>
                  </div>
                </Flex>
              </td>
              <td>
                <Text size="3">{price.price} $</Text>
              </td>
              <td>
                <Text size="3">{quantity}</Text>
              </td>
              <td>
                <Chips variant="soft" color={ChipsColor[category]}>
                  {category}
                </Chips>
              </td>
              <td>
                <Flex gap="1">
                  <Star fill="var(--W8)" stroke="var(--W8)" width="20" />
                  <Text weight="7" as="span" size="3">
                    ({rating})
                  </Text>
                </Flex>
              </td>
              <td>#${id}</td>
              <td>
                <IconButton variant="text" icon={<DotsHorizontal />} title="more Info" size="4" />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Paper>
  )
}

export const EcommerceTables = () => {
  return <BestSelling />
}
