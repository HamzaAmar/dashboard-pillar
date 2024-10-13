import { getProducts } from '@api/ecommerce'
import { USERS_LIST } from '@api/user/users.data'
import { Review } from '@components/composition'
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
  Rating,
  BreadcrumbItem,
} from '@pillar-ui/core'
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
        <Heading size="4">Products Details</Heading>
        <Breadcrumb size="4">
          <BreadcrumbItem link="../../">Home</BreadcrumbItem>
          <BreadcrumbItem link="../..">E-commerce</BreadcrumbItem>
          <BreadcrumbItem link="../">Products</BreadcrumbItem>
          <BreadcrumbItem link="./" current>
            134443
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Grid grid="minmax(0, .9fr) minmax(0, 1fr)" className="sm_grid-one" gap="5">
        <Grid gap="4" grid="repeat(5,1fr) / 400px auto">
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
          <Heading as="h2" weight="5" size="4">
            {product.title}
          </Heading>
          <Rating rating={product.rating} />

          <Text size="4" color="b" low>
            {product.description}
          </Text>
          <div className="l_flow-md">
            <Text color="su" low weight="5" size="4" as="span">
              {product.price.discount}% Discount
            </Text>
            <Flex items="center" gap="4">
              {product.price.discount && (
                <Text weight="5" as="span">
                  Price: {priceOrPriceWithDiscount}
                </Text>
              )}

              {product.price.discount && (
                <Text color="b" decoration="through" low size="4" as="span">
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

            <Heading size="3" as="h3">
              Free Shipping{' '}
            </Heading>
            <Text color="b" low size="4">
              All Our products benifits free shipping To all over the ground The estimate day to ship the product is 7
              day to the farest country from our stock
            </Text>
          </div>
          <Flex gap="1" wrap>
            <RadioGroup direction="row" showLabel label="Shoes Availible Sizes" color="b">
              {product.sizes.map((size) => (
                <CustomRadio key={size} name="size" label={`shoes size ${size}`}>
                  <Button as="span" color="b" variant="outline">
                    {size}
                  </Button>
                </CustomRadio>
              ))}
            </RadioGroup>
          </Flex>
          <Flex gap="5" wrap>
            <Button corner="full" fluid size="6" icon={<Cart />}>
              Add To Cart
            </Button>
            <Button corner="full" fluid size="6" variant="outline" color="b" icon={<Heart />}>
              Favorite
            </Button>
          </Flex>
        </div>
      </Grid>
      <section className="l_flow-md">
        <Heading as="h2" size="3">
          You May also like
        </Heading>
      </section>
      <div className="l_flow-md">
        {product.reviews.map((review) => {
          return <Review {...review} />
        })}
        <Flex gap="4" as="form">
          <Avatar image={user.avatar} title={user.name} />
          <div className="l_flow-md" style={{ flex: 1 }}>
            <FormController hideLabel label="Review">
              <Textarea name="review" fluid placeholder="Type Your Review" />
            </FormController>
            <Flex justify="end">
              <Button size="6" variant="solid">
                Add Review
              </Button>
            </Flex>
          </div>
        </Flex>
      </div>
    </section>
  )
}
