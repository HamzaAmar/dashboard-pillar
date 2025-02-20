import { Logo } from '@components/common'
import { Button, Flex, FormController, Heading, Input, Paper, Text } from '@pillar-ui/core'
import { Envelop } from '@pillar-ui/icons'
import { Form } from 'react-router-dom'

export const ForgetPassword = () => {
  return (
    <Flex items="center" justify="center" className="auth-container">
      <Paper flow="5" className="auth l_box">
        <Logo width="120" />

        <div>
          <Heading weight="5">Forget Password</Heading>
          <Text color="b" low size="3">
            New Email Will send to you email (Please check you email)
          </Text>
        </div>

        <Paper flow="5" as={Form} method="post">
          <FormController required label="Email">
            <Input name="email" />
          </FormController>
          <Button variant="solid" icon={<Envelop />} fluid>
            Forget Password
          </Button>
        </Paper>
      </Paper>
    </Flex>
  )
}
