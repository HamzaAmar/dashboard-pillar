import { Logo } from '@components/common'
import { Button, Flex, FormController, Heading, Input, InputPassword, Separator, Text } from '@components/core'
import { Facebook, Github, Gmail, Twitter } from '@components/icons'
import { Form, Link } from 'react-router-dom'

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

const Login = () => {
  // const action = useActionData()
  return (
    <Flex items="center" justify="center" className="auth-container">
      <div className="auth l_box l_flow-md">
        <Logo width="120" />

        <div>
          <Heading size="xs" weight="medium">
            Welcome to Adminstor
          </Heading>
          <Text color="slate" contrast="low" size="xs">
            Get your Free account now.
          </Text>
        </div>

        <Form method="post" className="l_flow-md">
          <FormController required label="Name">
            <Input name="name" autoComplete="name" />
          </FormController>
          <FormController required label="Email">
            <Input name="email" type="email" autoComplete="email" />
          </FormController>
          <FormController required label="Password">
            <InputPassword name="new-password" autoComplete="new-password" />
          </FormController>

          <Button variant="solid" size="lg" fluid>
            Sign in
          </Button>
        </Form>

        <Flex gap="2xs" items="center">
          <Text color="slate" contrast="low" as="span" size="sm">
            Already have an account?
          </Text>
          <Button variant="link" as={Link} to="/login">
            Login Instead
          </Button>
        </Flex>

        <Separator position="center">
          <Text color="slate" contrast="low">
            or
          </Text>
        </Separator>

        <Flex items="center" justify="center" gap="md">
          <MediaButton title="Facebook" icon={<Facebook width="1rem" />} />
          <MediaButton title="Twitter" icon={<Twitter width="1rem" />} />
          <MediaButton title="Gmail" icon={<Gmail width="1rem" />} />
          <MediaButton title="Github" icon={<Github width="1rem" />} />
        </Flex>
      </div>
    </Flex>
  )
}

export default Login
