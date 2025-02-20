import { Logo } from '@components/common'
import {
  Button,
  Flex,
  FormController,
  Heading,
  Input,
  InputPassword,
  Paper,
  Separator,
  Text,
  Link as PillarLink,
} from '@pillar-ui/core'
import { Facebook, Github, Gmail, Twitter } from '@pillar-ui/icons'
import { Form, Link } from 'react-router-dom'

export const Register = () => {
  return (
    <Flex items="center" justify="center" className="auth-container">
      <Paper flow="5" className="auth l_box">
        <Logo width="120" />

        <div>
          <Heading weight="5">Welcome to Adminstor</Heading>
          <Text color="b" low size="3">
            Get your Free account now.
          </Text>
        </div>

        <Paper as={Form} flow="5" method="post">
          <FormController required label="Name">
            <Input name="name" autoComplete="name" />
          </FormController>
          <FormController required label="Email">
            <Input name="email" type="email" autoComplete="email" />
          </FormController>
          <FormController required label="Password">
            <InputPassword name="new-password" autoComplete="new-password" />
          </FormController>

          <Button variant="solid" fluid>
            Sign in
          </Button>
        </Paper>

        <Flex gap="3" items="center">
          <Text color="b" low as="span" size="4">
            Already have an account?
          </Text>

          <PillarLink color="b" as={Link} to="/pages/register">
            Login Instead
          </PillarLink>
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
