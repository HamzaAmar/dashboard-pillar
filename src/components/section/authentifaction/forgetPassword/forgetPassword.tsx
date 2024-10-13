import { Logo } from '@components/common'
import { Button, Flex, FormController, Heading, Input, Separator, Text } from '@pillar-ui/core'
import { Facebook, Github, Gmail, Mail, Twitter } from '@components/icons'

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

const forgetPassword = () => {
  return (
    <Flex items="center" justify="center" className="auth-container">
      <div className="auth l_box l_flow-md">
        <Logo width="120" />

        <div>
          <Heading size="3" weight="5">
            Forget Password
          </Heading>
          <Text color="b" low size="3">
            New Email Will send to you email (Please check you email)
          </Text>
        </div>

        <form className="l_flow-md">
          <FormController required label="Email">
            <Input name="email" />
          </FormController>
          <Button variant="solid" icon={<Mail />} size="6" fluid>
            Send
          </Button>
        </form>

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
  )
}

export default forgetPassword
