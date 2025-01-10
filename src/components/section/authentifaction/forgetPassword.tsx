import { Logo } from '@components/common'
import { Button, Flex, FormController, Heading, Input, Paper, Separator, Text } from '@pillar-ui/core'
import { Facebook, Github, Gmail, Mail, Twitter } from '@components/icons'
import { Form } from 'react-router-dom'

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

export const ForgetPassword = () => {
  return (
    <Flex items="center" justify="center" className="auth-container">
      <Paper flow="5" className="auth l_box">
        <Logo width="120" />

        <div>
          <Heading size="3" weight="5">
            Forget Password
          </Heading>
          <Text color="b" low size="3">
            New Email Will send to you email (Please check you email)
          </Text>
        </div>

        <Paper flow="5" as={Form} method="post">
          <FormController required label="Email">
            <Input name="email" />
          </FormController>
          <Button variant="solid" icon={<Mail />} size="6" fluid>
            Forget Password
          </Button>
        </Paper>

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
