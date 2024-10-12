import { Logo } from '@components/common'
import {
  Button,
  Checkbox,
  Flex,
  FormController,
  Heading,
  Input,
  InputPassword,
  Separator,
  Text,
} from '@components/core'
import { Facebook, Github, Gmail, Twitter } from '@components/icons'
import { Link } from 'react-router-dom'

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

const login = () => {
  return (
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

        <form className="l_flow-md">
          <FormController required label="Email">
            <Input name="email" />
          </FormController>
          <FormController required label="Password">
            <InputPassword name="password" />
          </FormController>

          {/*  */}

          <Checkbox name="checkbox" label="Rememeber Me" />

          <Button variant="solid" size="lg" fluid>
            Sign in
          </Button>
        </form>

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
  )
}

export default login