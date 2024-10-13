import { Avatar, Button, Chips, Flex, IconButton, Rating, Text } from '@pillar-ui/core'
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
      direction={variant === 'horizontal' ? 'row' : 'col'}
      as="article"
      gap="4"
      className="product-card l_box"
    >
      <header className="product-card--header">
        <img className="product-card--image" src={`/images/products/${heroImage[0]}`} alt="" />
        <IconButton className="product-card--heart-icon" icon={<Heart />} title="Add to Favorites" variant="soft" />
      </header>

      <div className="l_flow-md">
        <div className="product-card--main">
          <Text color="b" weight="5">
            {title}
          </Text>

          <Flex items="center" gap="1">
            <Rating rating={rating} />
            <Text color="b" low size="3">
              ({numberRating})
            </Text>
          </Flex>

          <Flex items="center" gap="4">
            <Text weight="5" size="4" as="span">
              {formatPrice({ number: priceOrPriceWithDiscount })}
            </Text>

            {price.discount && (
              <>
                <Text color="b" decoration="through" low size="3" as="span">
                  {formatPrice({ number: price.price })}
                </Text>
                <Text color="su" low weight="5" size="3" as="span">
                  {price.discount}% Discount
                </Text>
              </>
            )}
          </Flex>
          {variant === 'horizontal' && (
            <Text size="4" color="b" low truncate="2">
              {description}
            </Text>
          )}
        </div>
        <Flex as="footer" direction="col" className="product-card--footer l_flow-md">
          <Flex items="center" gap="3">
            <Avatar image={user.avatar} title={user.name} />
            <Flex direction="col" gap="1">
              <Text color="b" low size="4">
                {user.name}
              </Text>
              <Flex wrap gap="3">
                <Chips color="w" variant="soft">
                  Best Seller
                </Chips>
                <Chips color="se" variant="soft">
                  Free Shipping
                </Chips>
              </Flex>
            </Flex>
          </Flex>

          {variant === 'vertical' && (
            <Button className="product-card--add-cart" icon={<Cart />} variant="solid" color="p" fluid>
              Add To Card
            </Button>
          )}
        </Flex>
      </div>
    </Flex>
  )
}

export default product
