import {
  Breadcrumb,
  Button,
  Flex,
  FormController,
  Heading,
  Input,
  InputPassword,
  Checkbox,
  FormGroup,
  Grid,
} from '@components/core'

export const Component = () => {
  return (
    <section className="l_flow-md">
      <Flex justify="between" items="center">
        <Heading size="sm">Form Elements</Heading>

        <Breadcrumb size="md">
          <Breadcrumb.Item link="../../">Home</Breadcrumb.Item>
          <Breadcrumb.Item link="../..">Form</Breadcrumb.Item>
          <Breadcrumb.Item link="./" current>
            Form Layout
          </Breadcrumb.Item>
        </Breadcrumb>
      </Flex>

      <Grid columns="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="sm">
        <article className="u_flex-1 l_box l_flow-md">
          <Heading size="xs" weight="medium">
            Form Grid Layout
          </Heading>
          <form className="l_flow-md">
            <FormController label="Name">
              <Input name="name" />
            </FormController>
            <FormController label="Email">
              <Input type="email" name="name" />
            </FormController>
            <FormController label="Password">
              <InputPassword name="name" />
            </FormController>

            <Checkbox label="Remember Me" name="hello" />
            <Flex gap="sm">
              <Button variant="solid">Register</Button>
              <Button color="slate" variant="soft">
                Login
              </Button>
            </Flex>
          </form>
        </article>
        <article className="u_flex-1 l_box l_flow-md">
          <Heading size="xs" weight="medium">
            Form Grid Layout
          </Heading>
          <form className="l_flow-md">
            <FormController label="Name">
              <Input name="name" />
            </FormController>
            <FormController label="Email">
              <Input type="email" name="name" />
            </FormController>
            <FormGroup fluid title="Address" direction="row">
              <FormController label="Zip code">
                <Input type="tel" name="zip-code" />
              </FormController>
              <FormController label="City">
                <Input name="password" />
              </FormController>
            </FormGroup>

            <Checkbox label="Remember Me" name="hello" />
            <Flex gap="sm">
              <Button variant="solid">Register</Button>
              <Button color="slate" variant="soft">
                Login
              </Button>
            </Flex>
          </form>
        </article>
      </Grid>
    </section>
  )
}

Component.displayName = 'FormLayoutDoc'
