import { Button, Flex, InputPassword, FormController } from '@pillar-ui/core'

const resetPassword = () => {
  return (
    <form className="l_flow-md">
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
    </form>
  )
}

export default resetPassword
