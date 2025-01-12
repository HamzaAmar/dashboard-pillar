import { Button, Flex, InputPassword, FormController, Paper } from '@pillar-ui/core'

const resetPassword = () => {
  return (
    <Paper as="form" flow="5">
      <input name="username" type="hidden" autoComplete="username" />
      <FormController label="Old Password">
        <InputPassword name="old-password" autoComplete="current-password" />
      </FormController>
      <FormController label="New Password">
        <InputPassword name="new-password" autoComplete="new-password" />
      </FormController>
      <Flex justify="end">
        <Button>Update</Button>
      </Flex>
    </Paper>
  )
}

export default resetPassword
