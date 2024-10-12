import { Logo } from '@components/common'
import { Button, Flex, FormController, Heading, Input, Separator, Text } from '@components/core'
import { Facebook, Github, Gmail, Mail, Twitter } from '@components/icons'

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

const forgetPassword = () => {
  return (
    <Flex items="center" justify="center" className="auth-container">
      <div className="auth l_box l_flow-md">
        <Logo width="120" />

        <div>
          <Heading size="xs" weight="medium">
            Forget Password
          </Heading>
          <Text color="slate" contrast="low" size="xs">
            New Email Will send to you email (Please check you email)
          </Text>
        </div>

        <form className="l_flow-md">
          <FormController required label="Email">
            <Input name="email" />
          </FormController>
          <Button variant="solid" icon={<Mail />} size="lg" fluid>
            Send
          </Button>
        </form>

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

export default forgetPassword
