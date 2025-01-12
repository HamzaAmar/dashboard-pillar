import { USERS_LIST } from '@api/user/users.data'
import { Button, Flex, Input, FormController, Textarea, Paper } from '@pillar-ui/core'
import { useState } from 'react'

const me = USERS_LIST[0]

const PersonalDetail = () => {
  const [fields] = useState({
    name: me.name,
    number: me.phone,
    address: me.email,
    description: me.description,
  })
  return (
    <Paper as="form" flow="5">
      <FormController label="Name">
        <Input name="name" autoComplete="name" defaultValue={fields.name} />
      </FormController>
      <Flex className="account-settings--form-field" gap="4">
        <FormController className="fl-1" label="Phone Number">
          <Input autoComplete="tel" defaultValue={fields.number} name="phone" type="tel" />
        </FormController>
        <FormController className="fl-1" label="Email Address">
          <Input autoComplete="street-address" defaultValue={fields.address} name="email" type="email" />
        </FormController>
      </Flex>
      <FormController label="Description">
        <Textarea defaultValue={fields.description} rows={5} name="description" />
      </FormController>
      <Flex justify="end">
        <Button>Update</Button>
      </Flex>
    </Paper>
  )
}

export default PersonalDetail
