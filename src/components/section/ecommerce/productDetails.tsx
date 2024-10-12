import { getProducts } from '@api/ecommerce'
import { USERS_LIST } from '@api/user/users.data'
import { Rating, Review } from '@components/composition'
import {
  Avatar,
  Breadcrumb,
  Button,
  CustomRadio,
  Flex,
  FormController,
  Grid,
  Heading,
  RadioGroup,
  Text,
  Textarea,
} from '@components/core'
import { Cart, Heart } from '@components/icons'
import { formatPrice } from '@utils/formatNumber'
import { getDiscountPrice } from '@utils/price'

const user = USERS_LIST[0]

const product = getProducts()[8]

export const ProductDetailsSection = () => {
  const priceOrPriceWithDiscount = product.price.discount
    ? getDiscountPrice({
        price: product.price.price,
        discount: product.price.discount,
      })
    : product.price.price
  return (
    <section className="l_flow-lg">
      <Flex wrap justify="between">
        <Heading size="sm">Products Details</Heading>
        <Breadcrumb size="sm">
          <Breadcrumb.Item link="../../">Home</Breadcrumb.Item>
          <Breadcrumb.Item link="../..">E-commerce</Breadcrumb.Item>
          <Breadcrumb.Item link="../">Products</Breadcrumb.Item>
          <Breadcrumb.Item link="./" current>
            134443
          </Breadcrumb.Item>
        </Breadcrumb>
      </Flex>
      <Grid columns="minmax(0, .9fr) minmax(0, 1fr)" className="sm_grid-one" gap="md">
        <Grid gap="sm" columns="repeat(5,1fr)" rows="400px auto">
          <div className="product-image--wrapper product-image--wrapper-hero">
            <img className="product-image" src={`/images/products/${product.heroImage[0]}`} alt="" />
          </div>
          {Array.from({ length: 5 }, (_, index) => (
            <div className="product-image--wrapper">
              <img className="product-image" key={index} src={`/images/products/${product.heroImage[0]}`} alt="" />
            </div>
          ))}
        </Grid>
        <div className="l_flow-sm">
          <Heading as="h2" weight="medium" size="sm">
            {product.title}
          </Heading>
          <Rating rating={product.rating} />

          <Text size="sm" color="slate" contrast="low">
            {product.description}
          </Text>
          <div className="l_flow-md">
            <Text color="green" contrast="low" weight="medium" size="sm" as="span">
              {product.price.discount}% Discount
            </Text>
            <Flex items="center" gap="sm">
              {product.price.discount && (
                <Text weight="medium" as="span">
                  Price: {priceOrPriceWithDiscount}
                </Text>
              )}

              {product.price.discount && (
                <Text color="slate" decoration="line-through" contrast="low" size="sm" as="span">
                  {formatPrice({ number: product.price.price })}
                </Text>
              )}
            </Flex>
            <div>
              <RadioGroup label="product Color" direction="row" name="product-color" showLabel>
                <CustomRadio label="indigo">
                  <div className="product--color u_indigo" />
                </CustomRadio>
                <CustomRadio label="red">
                  <div className="product--color u_red" />
                </CustomRadio>
                <CustomRadio label="orange">
                  <div className="product--color u_orange" />
                </CustomRadio>
                <CustomRadio label="yellow">
                  <div className="product--color u_yellow" />
                </CustomRadio>
                <CustomRadio label="green">
                  <div className="product--color u_green" />
                </CustomRadio>
              </RadioGroup>
            </div>

            <Heading size="xs" as="h3">
              Free Shipping{' '}
            </Heading>
            <Text color="slate" contrast="low" size="sm">
              All Our products benifits free shipping To all over the ground The estimate day to ship the product is 7
              day to the farest country from our stock
            </Text>
          </div>
          <Flex gap="2xs" wrap>
            <RadioGroup direction="row" showLabel label="Shoes Availible Sizes" color="slate">
              {product.sizes.map((size) => (
                <CustomRadio key={size} name="size" label={`shoes size ${size}`}>
                  <Button as="span" color="slate" variant="outline">
                    {size}
                  </Button>
                </CustomRadio>
              ))}
            </RadioGroup>
          </Flex>
          <Flex gap="md" wrap>
            <Button corner="full" fluid size="lg" icon={<Cart />}>
              Add To Cart
            </Button>
            <Button corner="full" fluid size="lg" variant="outline" color="slate" icon={<Heart />}>
              Favorite
            </Button>
          </Flex>
        </div>
      </Grid>
      <section className="l_flow-md">
        <Heading as="h2" size="xs">
          You May also like
        </Heading>
      </section>
      <div className="l_flow-md">
        {product.reviews.map((review) => {
          return <Review {...review} />
        })}
        <Flex gap="sm" as="form">
          <Avatar image={user.avatar} variant="image" title={user.name} />
          <div className="l_flow-md" style={{ flex: 1 }}>
            <FormController hideLabel label="Review">
              <Textarea name="review" fluid placeholder="Type Your Review" />
            </FormController>
            <Flex justify="end">
              <Button size="lg" variant="solid">
                Add Review
              </Button>
            </Flex>
          </div>
        </Flex>
      </div>
    </section>
  )
}
