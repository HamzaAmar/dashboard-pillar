import { Button, Flex, Input, Textarea, FormController, Paper } from '@pillar-ui/core'

const PersonalDetail = () => {
  return (
    <Paper as="form" flow="5" className="l_flow-md">
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
    </Paper>
  )
}

export default PersonalDetail
