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
  BreadcrumbItem,
} from '@pillar-ui/core'

export const Component = () => {
  return (
    <section className="l_flow-md">
      <Flex justify="between" items="center">
        <Heading size="4">Form Elements</Heading>

        <Breadcrumb size="5">
          <BreadcrumbItem link="../../">Home</BreadcrumbItem>
          <BreadcrumbItem link="../..">Form</BreadcrumbItem>
          <BreadcrumbItem link="./" current>
            Form Layout
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>

      <Grid grid="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="4">
        <article className="u_flex-1 l_box l_flow-md">
          <Heading size="3" weight="5">
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
            <Flex gap="4">
              <Button variant="solid">Register</Button>
              <Button color="b" variant="soft">
                Login
              </Button>
            </Flex>
          </form>
        </article>
        <article className="u_flex-1 l_box l_flow-md">
          <Heading size="3" weight="5">
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
            <Flex gap="4">
              <Button variant="solid">Register</Button>
              <Button color="b" variant="soft">
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
