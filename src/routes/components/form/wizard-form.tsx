import { useRef, useState, type FormEvent } from 'react'
import {
  Button,
  Flex,
  FormController,
  FormGroup,
  Grid,
  Heading,
  Input,
  Stepper,
  Text,
  Textarea,
  Checkbox,
  Chips,
  IconButton,
  Avatar,
} from '@components/core'
import { Form } from 'react-router-dom'
import { useStepper } from '@hooks/useStepper'
import { Dots, Star } from '@components/icons'
import { Table } from '@components/composition'
import { getProducts } from '@api/ecommerce'

const initialVal = {
  phone: '',
  creditCard: '',
  birthday: '12/12/2020',
  releaseTime: '',
}
const CompleteComponent = () => {
  const products = getProducts({ pageSize: 5 })
  return (
    <section className="l_box u_flex-1 l_box l_flow-md">
      <Flex as="header">
        <Heading size="xs">Best Selling Products</Heading>
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
          {products.map(({ id, heroImage, title, price, rating }) => (
            <Table.Row key={id}>
              <Table.Column>
                <Flex gap="sm">
                  <Avatar
                    variant="image"
                    image={`/images/products/${heroImage}`}
                    size="md"
                    title="Hamza"
                    corner="sharp"
                  />
                  <div className="u_leading-sm">
                    <Heading size="2xs" truncate="multiline" numberLine={1} weight="medium">
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
        <tfoot>
          <Table.Row>
            <Table.Column className="l_flow-md" style={{ textAlign: 'end' }} colSpan={6}>
              <Flex gap="sm" justify="end">
                <Text weight="medium" size="sm" as="span">
                  subTotal : {`  `}
                </Text>
                $1005
              </Flex>
              <Flex gap="sm" justify="end">
                <Text weight="medium" size="sm" as="span">
                  Taxes : {`  `}
                </Text>
                $10
              </Flex>
              <Flex gap="sm" justify="end">
                <Text weight="medium" size="sm" as="span">
                  Shipping : {`  `}
                </Text>
                $35
              </Flex>
              <Flex gap="sm" justify="end">
                <Text weight="medium" size="sm" as="span">
                  Total : {`  `}
                </Text>
                $1050
              </Flex>
            </Table.Column>
          </Table.Row>
        </tfoot>
      </Table>
    </section>
  )
}

export const Component = () => {
  const [value, setValue] = useState(initialVal)

  const cardRef = useRef(null)

  function handleChange(event: FormEvent<HTMLInputElement>) {
    const { name, value } = event.currentTarget
    setValue((values) => ({
      ...values,
      [name]: value,
    }))
  }
  const { active, handleNext, handlePrev, setActive } = useStepper(3)
  return (
    <Form method="post" className="l_flow-lg l_box">
      <div className="l_flow-md">
        <div style={{ maxWidth: '80ch' }}>
          <Heading as="h2" size="sm">
            Checkout Form
          </Heading>
          <Text size="xs" color="slate" contrast="low">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam quo totam perferendis expedita tenetur
            voluptas quod odio velit. Incidunt reprehenderit possimus odit blanditiis similique aspernatur itaque ut
            eligendi aliquam natus?
          </Text>
        </div>
        <Stepper completeComponent={<CompleteComponent />} setActive={setActive} active={active}>
          <Stepper.Step title="User Info">
            <div className="l_flow-md">
              <FormController label="Name" required>
                <Input name="name" autoComplete="name" />
              </FormController>
              <FormController label="Email" required>
                <Input name="email" type="email" autoComplete="username" />
              </FormController>
              <FormController label="Phone" required>
                <Input name="phone" type="tel" autoComplete="tel" />
              </FormController>
            </div>
          </Stepper.Step>

          <Stepper.Step title="Address Info">
            <FormGroup showLabel title="Shipping Address">
              <FormController required label="address">
                <Textarea name="shipping-address" autoComplete="shipping street-address"></Textarea>
              </FormController>
              <FormController required label="country">
                <Input name="shipping-country" autoComplete="country-name" />
              </FormController>
              <FormController required label="State">
                <Input name="shipping-state" autoComplete="address-level1" />
              </FormController>
              <FormController required label="city">
                <Input name="shipping-city" autoComplete="address-level2" />
              </FormController>
              <FormController required label="Code Postal">
                <Input name="shipping-postal-code" autoComplete="postal-code" />
              </FormController>
            </FormGroup>
            <FormGroup showLabel title="Billing Address">
              <Checkbox name="" label="Same As Shipping" />
              <FormController required label="address">
                <Textarea name="billing-address" autoComplete="billing street-address"></Textarea>
              </FormController>
              <FormController required label="country">
                <Input name="country" autoComplete="country-name" />
              </FormController>
              <FormController required label="State">
                <Input name="state" autoComplete="address-level1" />
              </FormController>
              <FormController required label="city">
                <Input name="city" autoComplete="address-level2" />
              </FormController>
              <FormController required label="Code Postal">
                <Input name="postal-code" autoComplete="postal-code" />
              </FormController>
            </FormGroup>
          </Stepper.Step>
          <Stepper.Step title="Payment Method">
            <FormController required label="Email">
              <Input name="email" type="email" autoComplete="username" />
            </FormController>
            <FormController required label="Credit Card Name">
              <Input name="cc-name" autoComplete="cc-name" />
            </FormController>
            <FormController required label="Credit Card Number">
              <Input ref={cardRef} name="cc-number" inputMode="numeric" autoComplete="cc-number" />
            </FormController>
            <Grid gap="md" columns="2fr 1fr">
              <FormController required label="Credit Card Date">
                <Input name="cc-exp" autoComplete="cc-exp" />
              </FormController>
              <FormController required label="Security Code">
                <Input name="cc-exp" autoComplete="cc-exp" />
              </FormController>
            </Grid>
          </Stepper.Step>
        </Stepper>
      </div>
      <Flex items="center" justify="center" gap="sm">
        <Button onClick={handleNext} type="button">
          Next
        </Button>
        <Button type="button" onClick={handlePrev} variant="soft" disabled={active === 1}>
          Back
        </Button>
      </Flex>
    </Form>
  )
}

Component.displayName = 'WizardFormDoc'
