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
} from '@components/core'
import { Facebook, Github, Gmail, Twitter } from '@components/icons'
import { Preview } from '@components/section'
import { Form, Link } from 'react-router-dom'
import { signIN } from './bestPractice.docs'

function MediaButton({ title, icon }: any) {
  const lowercaseTitle = title.toLowerCase()
  return (
    <Flex gap="md" as="button" items="center" className={`auth-button auth-button__${lowercaseTitle}`}>
      <span>{icon}</span>
      <Text size="sm" className="u_sr-only">
        {title}
      </Text>
    </Flex>
  )
}

const FormLayout = () => {
  return (
    <section className="l_flow-md">
      <Flex justify="between" items="center">
        <Heading size="sm">Form Elements</Heading>

        <Breadcrumb size="md">
          <Breadcrumb.Item link="../../">Home</Breadcrumb.Item>
          <Breadcrumb.Item link="../..">Form</Breadcrumb.Item>
          <Breadcrumb.Item link="./" current>
            Form Layout
          </Breadcrumb.Item>
        </Breadcrumb>
      </Flex>

      <Preview title="Input Mask" description="Show alert only with message Props" code={signIN}>
        <Flex items="center" justify="center" className="auth-container">
          <div className="auth l_box l_flow-md">
            <Logo width="120" />

            <div>
              <Heading size="xs" weight="medium">
                Welcome to Adminstor{' '}
              </Heading>
              <Text color="slate" contrast="low" size="xs">
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

              <Flex justify="between" items="center" gap="sm">
                <Checkbox name="checkbox" label="Rememeber Me" />

                <Button size="sm" variant="link" as={Link} to="/forgetPassword">
                  Forget Password
                </Button>
              </Flex>

              <Button id="sign-in" variant="solid" size="lg" fluid>
                Sign in
              </Button>
            </Form>

            <div>
              <Text color="slate" contrast="low" as="span" size="sm">
                New on our platform?
              </Text>
              <Button variant="link" as={Link} to="/register">
                Create Account
              </Button>
            </div>

            <Separator position="center">
              <Text color="slate" contrast="low">
                or
              </Text>
            </Separator>

            <Flex items="center" justify="center" gap="sm">
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
              <Heading size="xs" weight="medium">
                Welcome to Adminstor{' '}
              </Heading>
              <Text color="slate" contrast="low" size="xs">
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

              <Button id="sign-up" variant="solid" size="lg" fluid>
                Sign Up
              </Button>
            </Form>

            <div>
              <Text color="slate" contrast="low" as="span" size="sm">
                You already have an account?
              </Text>
              <Button variant="link" as={Link} to="/register">
                Sign in
              </Button>
            </div>

            <Separator position="center">
              <Text color="slate" contrast="low">
                or
              </Text>
            </Separator>

            <Flex items="center" justify="center" gap="sm">
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
          <Heading size="sm" weight="medium" id="shipping-billing-address" as="h2">
            Add You Address (Shipping, Billing) Info
          </Heading>
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
          <Button>hello</Button>
        </Form>
      </Preview>
    </section>
  )
}

export default FormLayout
