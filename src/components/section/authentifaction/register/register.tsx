import { Logo } from '@components/common'
import { Button, Flex, FormController, Heading, Input, InputPassword, Separator, Text } from '@pillar-ui/core'
import { Facebook, Github, Gmail, Twitter } from '@components/icons'
import { Form, Link } from 'react-router-dom'

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

const Login = () => {
  // const action = useActionData()
  return (
    <Flex items="center" justify="center" className="auth-container">
      <div className="auth l_box l_flow-md">
        <Logo width="120" />

        <div>
          <Heading size="3" weight="5">
            Welcome to Adminstor
          </Heading>
          <Text color="b" low size="3">
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

          <Button variant="solid" size="6" fluid>
            Sign in
          </Button>
        </Form>

        <Flex gap="1" items="center">
          <Text color="b" low as="span" size="4">
            Already have an account?
          </Text>
          <Button variant="link" as={Link} to="/login">
            Login Instead
          </Button>
        </Flex>

        <Separator position="center">
          <Text color="b" low>
            or
          </Text>
        </Separator>

        <Flex items="center" justify="center" gap="5">
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
