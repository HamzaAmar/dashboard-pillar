import { Logo } from '@components/common'
import { Button, Flex, FormController, Heading, Input, InputPassword, Paper, Separator, Text } from '@pillar-ui/core'
import { Facebook, Github, Gmail, Twitter } from '@components/icons'
import { Form, Link } from 'react-router-dom'

export const Login = () => {
  return (
    <Flex items="center" justify="center" className="auth-container">
      <Paper flow="5" className="auth l_box">
        <Logo width="120" />

        <div>
          <Heading size="3" weight="5">
            Welcome to Adminstor
          </Heading>
          <Text color="b" low size="3">
            Login in to you account.
          </Text>
        </div>

        <Paper flow="5" as={Form} method="post">
          <FormController required label="Email">
            <Input name="email" type="email" autoComplete="email" />
          </FormController>
          <FormController required label="Password">
            <InputPassword name="new-password" autoComplete="new-password" />
          </FormController>

          <Button variant="solid" size="6" fluid>
            Sign in
          </Button>
        </Paper>

        <Flex gap="3" items="center">
          <Text color="b" low as="span" size="4">
            If you don't have an account?
          </Text>
          <Button variant="link" as={Link} to="/pages/register">
            Register Instead
          </Button>
        </Flex>

        <Separator position="center">
          <Text color="b" low>
            or
          </Text>
        </Separator>

        <Flex items="center" justify="center" gap="5">
          <Button color="p" icon={<Facebook width="1rem" />}>
            Facebook
          </Button>
          <Button color="i" icon={<Twitter width="1rem" />}>
            Twitter
          </Button>
          <Button color="d" icon={<Gmail width="1rem" />}>
            Gmail
          </Button>
          <Button color="b" icon={<Github width="1rem" />}>
            Github
          </Button>
        </Flex>
      </Paper>
    </Flex>
  )
}
