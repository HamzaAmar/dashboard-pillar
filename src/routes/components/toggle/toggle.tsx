import { Breadcrumb, Flex, Grid, Heading, Toggle } from '@components/core'
import { Preview } from '@components/section'
import * as docs from './toggle.docs'

const toggle = () => {
  return (
    <section aria-labelledby="toggle--page-id" className="l_flow-lg">
      <Flex items="center" wrap justify="between">
        <Heading as="h1" id="toggle--page-id" size="xs">
          Toggle Docs Page
        </Heading>
        <Breadcrumb size="sm">
          <Breadcrumb.Item link="../../..">Home</Breadcrumb.Item>
          <Breadcrumb.Item link="../..">Components</Breadcrumb.Item>
          <Breadcrumb.Item link="../">Base UI</Breadcrumb.Item>
          <Breadcrumb.Item link="./" current>
            Toggle
          </Breadcrumb.Item>
        </Breadcrumb>
      </Flex>
      <Grid columns="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="sm">
        <Preview title="Small Toggle Color" description="Show alert only with message Props" code={docs.toggleColor}>
          <Flex wrap gap="md" items="center">
            <Toggle label="hello" defaultPressed color="danger" />
            <Toggle label="hello" defaultPressed color="success" />
            <Toggle label="hello" defaultPressed color="purple" />
            <Toggle label="hello" defaultPressed color="indigo" />
            <Toggle label="hello" defaultPressed color="slate" />
            <Toggle label="hello" defaultPressed color="warning" />
          </Flex>
        </Preview>

        <Preview
          title="Medium Toggle Default Check"
          description="Default check is Boolean value default to false"
          code={docs.toggleSize}
        >
          <Flex wrap gap="md" items="center">
            <Toggle label="hello" size="md" color="danger" />
            <Toggle label="hello" size="md" color="success" />
            <Toggle label="hello" size="md" color="purple" />
            <Toggle label="hello" size="md" color="indigo" />
            <Toggle label="hello" size="md" color="slate" />
            <Toggle label="hello" size="md" color="warning" />
          </Flex>
        </Preview>

        <Preview
          title="Toggle Disabled"
          description="Disabled is Boolean value default to false"
          code={docs.toggleDisabled}
        >
          <Flex wrap gap="md" items="center">
            <Toggle label="hello" disabled color="danger" />
            <Toggle label="hello" disabled color="success" />
            <Toggle label="hello" disabled color="purple" />
            <Toggle label="hello" disabled color="indigo" />
            <Toggle label="hello" disabled color="slate" />
            <Toggle label="hello" disabled color="warning" />
          </Flex>
        </Preview>

        <Preview
          title="Toggle Size"
          description="Toggle Button Size Default Value SM Possible Values (xs , sm, md , lg, xl)"
          code={docs.toggleSize}
        >
          <Flex wrap gap="md" items="center">
            <Toggle label="hello" />
            <Toggle label="hello" size="sm" />
            <Toggle label="hello" size="md" />
            <Toggle label="hello" size="lg" />
            <Toggle label="hello" size="xl" />
          </Flex>
        </Preview>
      </Grid>
    </section>
  )
}

export default toggle
