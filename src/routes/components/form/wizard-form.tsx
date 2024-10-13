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
  Table,
  TableColumn,
  TableRow,
  StepperStep,
} from '@pillar-ui/core'
import { Form } from 'react-router-dom'
import { useStepper } from '@hooks/useStepper'
import { Dots, Star } from '@components/icons'
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
        <Heading size="3">Best Selling Products</Heading>
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
          {products.map(({ id, heroImage, title, price, rating }) => (
            <TableRow key={id}>
              <TableColumn>
                <Flex gap="4">
                  <Avatar image={`/images/products/${heroImage}`} size="5" title="Hamza" corner="0" />
                  <div className="u_leading-sm">
                    <Heading size="1" truncate="1" weight="5">
                      {title}
                    </Heading>
                    <Text size="3" color="b" low>
                      28 Jul 2022
                    </Text>
                  </div>
                </Flex>
              </TableColumn>
              <TableColumn weight="medium">
                <Chips variant="soft" size="6">
                  {price.price}
                </Chips>
              </TableColumn>
              <TableColumn>Category</TableColumn>
              <TableColumn>
                <Flex gap="1">
                  <Star fill="var(--orange-8)" stroke="var(--orange-8)" width="20" />

                  <Text weight="7" as="span" size="3">
                    ({rating})
                  </Text>
                </Flex>
              </TableColumn>
              <TableColumn weight="medium">#${id}</TableColumn>
              <TableColumn weight="medium">
                <IconButton icon={<Dots />} title="more Info" size="4" />
              </TableColumn>
            </TableRow>
          ))}
        </tbody>
        <tfoot>
          <TableRow>
            <TableColumn className="l_flow-md" style={{ textAlign: 'end' }} colSpan={6}>
              <Flex gap="4" justify="end">
                <Text weight="5" size="4" as="span">
                  subTotal : {`  `}
                </Text>
                $1005
              </Flex>
              <Flex gap="4" justify="end">
                <Text weight="5" size="4" as="span">
                  Taxes : {`  `}
                </Text>
                $10
              </Flex>
              <Flex gap="4" justify="end">
                <Text weight="5" size="4" as="span">
                  Shipping : {`  `}
                </Text>
                $35
              </Flex>
              <Flex gap="4" justify="end">
                <Text weight="5" size="4" as="span">
                  Total : {`  `}
                </Text>
                $1050
              </Flex>
            </TableColumn>
          </TableRow>
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
          <Heading as="h2" size="4">
            Checkout Form
          </Heading>
          <Text size="3" color="b" low>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam quo totam perferendis expedita tenetur
            voluptas quod odio velit. Incidunt reprehenderit possimus odit blanditiis similique aspernatur itaque ut
            eligendi aliquam natus?
          </Text>
        </div>
        <Stepper completeComponent={<CompleteComponent />} setActive={setActive} active={active}>
          <StepperStep title="User Info">
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
          </StepperStep>

          <StepperStep title="Address Info">
            <FormGroup title="Shipping Address">
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
            <FormGroup title="Billing Address">
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
          </StepperStep>
          <StepperStep title="Payment Method">
            <FormController required label="Email">
              <Input name="email" type="email" autoComplete="username" />
            </FormController>
            <FormController required label="Credit Card Name">
              <Input name="cc-name" autoComplete="cc-name" />
            </FormController>
            <FormController required label="Credit Card Number">
              <Input ref={cardRef} name="cc-number" inputMode="numeric" autoComplete="cc-number" />
            </FormController>
            <Grid gap="5" grid="2fr 1fr">
              <FormController required label="Credit Card Date">
                <Input name="cc-exp" autoComplete="cc-exp" />
              </FormController>
              <FormController required label="Security Code">
                <Input name="cc-exp" autoComplete="cc-exp" />
              </FormController>
            </Grid>
          </StepperStep>
        </Stepper>
      </div>
      <Flex items="center" justify="center" gap="4">
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
