import { USERS_LIST } from '@api/user/users.data'
import { Button, Flex, Input, FormController, Textarea } from '@components/core'
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
    <form className="l_flow-md">
      <FormController label="Name">
        <Input name="name" autoComplete="name" defaultValue={fields.name} />
      </FormController>
      <Flex className="account-settings--form-field" gap="sm">
        <FormController className="u_flex-1" label="Phone Number">
          <Input autoComplete="tel" defaultValue={fields.number} name="phone" type="tel" />
        </FormController>
        <FormController className="u_flex-1" label="Email Address">
          <Input autoComplete="street-address" defaultValue={fields.address} name="email" type="email" />
        </FormController>
      </Flex>
      <FormController label="Description">
        <Textarea defaultValue={fields.description} rows={5} name="description" />
      </FormController>
      <Flex justify="end">
        <Button>Update</Button>
      </Flex>
    </form>
  )
}

export default PersonalDetail
