import { Logo } from '@components/common'
import {
  Breadcrumb,
  Flex,
  Heading,
  Input,
  FormController,
  Text,
  InputPassword,
  Button,
  Checkbox,
  Separator,
  FormGroup,
  Textarea,
  BreadcrumbItem,
} from '@pillar-ui/core'
import { Facebook, Github, Gmail, Twitter } from '@components/icons'
import { Preview } from '@components/section'
import { Form, Link } from 'react-router-dom'
import { signIN } from './bestPractice.docs'

function MediaButton({ title, icon }: any) {
  const lowercaseTitle = title.toLowerCase()
  return (
    <Flex gap="5" as="button" items="center" className={`auth-button auth-button__${lowercaseTitle}`}>
      <span>{icon}</span>
      <Text size="4" className="u_sr-only">
        {title}
      </Text>
    </Flex>
  )
}

const FormLayout = () => {
  return (
    <section className="l_flow-md">
      <Flex justify="between" items="center">
        <Heading size="4">Form Elements</Heading>

        <Breadcrumb size="5">
          <BreadcrumbItem link="../../">Home</BreadcrumbItem>
          <BreadcrumbItem link="../..">Form</BreadcrumbItem>
          <BreadcrumbItem link="./" current>
            Form Layout
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>

      <Preview title="Input Mask" description="Show alert only with message Props" code={signIN}>
        <Flex items="center" justify="center" className="auth-container">
          <div className="auth l_box l_flow-md">
            <Logo width="120" />

            <div>
              <Heading size="3" weight="5">
                Welcome to Adminstor{' '}
              </Heading>
              <Text color="b" low size="3">
                Get your Free account now.
              </Text>
            </div>

            <Form action="/pages/login" method="post" className="l_flow-lg">
              <FormController required label="Email">
                <Input name="email" type="email" autoComplete="username" />
              </FormController>
              <FormController required label="Password">
                <InputPassword name="current-password" autoComplete="current-password" />
              </FormController>

              <Flex justify="between" items="center" gap="4">
                <Checkbox name="checkbox" label="Rememeber Me" />

                <Button size="4" variant="link" as={Link} to="/forgetPassword">
                  Forget Password
                </Button>
              </Flex>

              <Button id="sign-in" variant="solid" size="6" fluid>
                Sign in
              </Button>
            </Form>

            <div>
              <Text color="b" low as="span" size="4">
                New on our platform?
              </Text>
              <Button variant="link" as={Link} to="/register">
                Create Account
              </Button>
            </div>

            <Separator position="center">
              <Text color="b" low>
                or
              </Text>
            </Separator>

            <Flex items="center" justify="center" gap="4">
              <MediaButton title="Facebook" icon={<Facebook width="1rem" />} />
              <MediaButton title="Twitter" icon={<Twitter width="1rem" />} />
              <MediaButton title="Gmail" icon={<Gmail width="1rem" />} />
              <MediaButton title="Github" icon={<Github width="1rem" />} />
            </Flex>
          </div>
        </Flex>
      </Preview>
      <Preview title="Input Mask" description="Show alert only with message Props" code={signIN}>
        <Flex items="center" justify="center" className="auth-container">
          <div className="auth l_box l_flow-md">
            <Logo width="120" />

            <div>
              <Heading size="3" weight="5">
                Welcome to Adminstor{' '}
              </Heading>
              <Text color="b" low size="3">
                Get your Free account now.
              </Text>
            </div>

            <Form action="/pages/register" method="post" className="l_flow-md">
              <FormController required label="Name">
                <Input name="name" autoComplete="name" type="text" />
              </FormController>
              <FormController required label="Email">
                <Input name="email" type="email" autoComplete="username" />
              </FormController>
              <FormController required label="Password">
                <InputPassword name="new-password" autoComplete="new-password" />
              </FormController>

              <Checkbox name="checkbox" label="Rememeber Me" />

              <Button id="sign-up" variant="solid" size="6" fluid>
                Sign Up
              </Button>
            </Form>

            <div>
              <Text color="b" low as="span" size="4">
                You already have an account?
              </Text>
              <Button variant="link" as={Link} to="/register">
                Sign in
              </Button>
            </div>

            <Separator position="center">
              <Text color="b" low>
                or
              </Text>
            </Separator>

            <Flex items="center" justify="center" gap="4">
              <MediaButton title="Facebook" icon={<Facebook width="1rem" />} />
              <MediaButton title="Twitter" icon={<Twitter width="1rem" />} />
              <MediaButton title="Gmail" icon={<Gmail width="1rem" />} />
              <MediaButton title="Github" icon={<Github width="1rem" />} />
            </Flex>
          </div>
        </Flex>
      </Preview>
      <Preview title="Address Form" description="Show alert only with message Props" code={signIN}>
        <Form aria-labelledby="shipping-billing-address" className="l_flow-lg">
          <Heading size="4" weight="5" id="shipping-billing-address" as="h2">
            Add You Address (Shipping, Billing) Info
          </Heading>
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
          <Button>hello</Button>
        </Form>
      </Preview>
    </section>
  )
}

export default FormLayout
