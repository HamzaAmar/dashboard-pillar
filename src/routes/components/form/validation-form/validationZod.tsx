import { Button, Checkbox, Flex, FormController, FormGroup, Heading, Input, InputPassword } from '@pillar-ui/core'
import { FormEvent } from 'react'

const validationZod = () => {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formTarget = event.target as HTMLFormElement
    const formData = new FormData(formTarget)
    Object.fromEntries(formData)
  }
  return (
    <article className="u_flex-1 l_box l_flow-md">
      <Heading size="3" weight="5">
        Form Grid Layout
      </Heading>
      <form method="post" onSubmit={handleSubmit} className="l_flow-md">
        <FormController label="Name">
          <Input name="name" />
        </FormController>
        <FormController label="Email">
          <Input type="email" name="name" />
        </FormController>
        <FormController label="password">
          <InputPassword name="password" />
        </FormController>
        <FormGroup fluid title="Address" direction="row">
          <FormController label="Zip code">
            <Input type="tel" name="zip-code" />
          </FormController>
          <FormController label="City">
            <Input name="city" />
          </FormController>
        </FormGroup>

        <Checkbox label="Remember Me" name="rememberMe" />
        <Flex gap="4">
          <Button variant="solid">Register</Button>
          <Button color="b" variant="soft">
            Login
          </Button>
        </Flex>
      </form>
    </article>
  )
}

export default validationZod
