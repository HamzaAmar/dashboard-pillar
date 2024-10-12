import { Button, Flex, Input, Textarea, FormController } from '@components/core'

const PersonalDetail = () => {
  return (
    <form className="l_flow-md">
      <FormController label="Title">
        <Input name="title" />
      </FormController>
      <FormController label="Company Name">
        <Input name="company-name" />
      </FormController>
      <FormController label="Description">
        <Textarea rows={5} name="description" />
      </FormController>
      <Flex justify="end">
        <Button>Update</Button>
      </Flex>
    </form>
  )
}

export default PersonalDetail
