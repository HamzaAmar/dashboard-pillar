import { Avatar, Button, Chips, Flex, IconButton, Text } from '@components/core'
import { Rating } from '@components/composition'
import { Cart, Heart } from '@components/icons'
import { formatPrice } from '@utils/formatNumber'

import type { ProductCardProps } from '../card.type'

// TODO: Add it to global utils
export const getDiscountPrice = (price: number, discount?: number) => {
  return discount ? price - Math.floor(price / discount) : price
}

const product = ({
  title,
  rating,
  user,
  numberRating,
  price,
  heroImage,
  variant = 'vertical',
  description,
}: ProductCardProps) => {
  const priceOrPriceWithDiscount = price.discount ? getDiscountPrice(price.price, price.discount) : price.price

  return (
    <Flex
      data-variant={variant}
      direction={variant === 'horizontal' ? 'row' : 'column'}
      as="article"
      gap="sm"
      className="product-card l_box"
    >
      <header className="product-card--header">
        <img className="product-card--image" src={`/images/products/${heroImage[0]}`} alt="" />
        <IconButton className="product-card--heart-icon" icon={<Heart />} title="Add to Favorites" variant="soft" />
      </header>

      <div className="l_flow-md">
        <div className="product-card--main">
          <Text color="slate" weight="medium">
            {title}
          </Text>

          <Flex items="center" gap="2xs">
            <Rating rating={rating} />
            <Text color="slate" contrast="low" size="xs">
              ({numberRating})
            </Text>
          </Flex>

          <Flex items="center" gap="sm">
            <Text weight="medium" size="sm" as="span">
              {formatPrice({ number: priceOrPriceWithDiscount })}
            </Text>

            {price.discount && (
              <>
                <Text color="slate" decoration="line-through" contrast="low" size="xs" as="span">
                  {formatPrice({ number: price.price })}
                </Text>
                <Text color="green" contrast="low" weight="medium" size="xs" as="span">
                  {price.discount}% Discount
                </Text>
              </>
            )}
          </Flex>
          {variant === 'horizontal' && (
            <Text size="sm" color="slate" contrast="low" numberLine={2} truncate="multiline">
              {description}
            </Text>
          )}
        </div>
        <Flex as="footer" direction="column" className="product-card--footer l_flow-md">
          <Flex items="center" gap="xs">
            <Avatar variant="image" image={user.avatar} title={user.name} />
            <Flex direction="column" gap="2xs">
              <Text color="slate" contrast="low" size="sm">
                {user.name}
              </Text>
              <Flex wrap gap="xs">
                <Chips color="warning" variant="soft">
                  Best Seller
                </Chips>
                <Chips color="purple" variant="soft">
                  Free Shipping
                </Chips>
              </Flex>
            </Flex>
          </Flex>

          {variant === 'vertical' && (
            <Button className="product-card--add-cart" icon={<Cart />} variant="solid" color="primary" fluid>
              Add To Card
            </Button>
          )}
        </Flex>
      </div>
    </Flex>
  )
}

export default product
