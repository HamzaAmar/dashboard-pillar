import { Breadcrumb, Flex, Grid, Heading, Radio, RadioGroup } from '@components/core'
import { Preview } from '@components/section'
import * as docs from './radio.docs'

const RadioPage = () => {
  return (
    <section aria-labelledby="radio--page-id" className="l_flow-lg">
      <Flex items="center" wrap justify="between">
        <Heading as="h1" id="radio--page-id" size="xs">
          Radio Docs Page
        </Heading>
        <Breadcrumb size="sm">
          <Breadcrumb.Item link="../../..">Home</Breadcrumb.Item>
          <Breadcrumb.Item link="../..">Components</Breadcrumb.Item>
          <Breadcrumb.Item link="../">Base UI</Breadcrumb.Item>
          <Breadcrumb.Item link="./" current>
            Radio
          </Breadcrumb.Item>
        </Breadcrumb>
      </Flex>
      <Grid columns="minmax(0,1fr ) minmax(0,1fr )" className="md_grid-one" gap="sm">
        <Preview title="Radio Color" description="Show alert only with message Props" code={docs.radioButtonColor}>
          <Flex wrap gap="md" items="center">
            <Radio color="danger" label="danger" />
            <Radio color="success" label="success" />
            <Radio color="purple" label="purple" />
            <Radio color="indigo" label="indigo" />
            <Radio color="slate" label="slate" />
            <Radio color="warning" label="warning" />
          </Flex>
        </Preview>

        <Preview
          title="Radio Default Check"
          description="Default check is Boolean value default to false"
          code={docs.defaultCheckedRadio}
        >
          <Flex wrap gap="md" items="center">
            <Radio defaultChecked color="danger" label="danger" />
            <Radio defaultChecked color="success" label="success" />
            <Radio defaultChecked color="purple" label="purple" />
            <Radio defaultChecked color="indigo" label="indigo" />
            <Radio defaultChecked color="slate" label="slate" />
            <Radio defaultChecked color="warning" label="warning" />
          </Flex>
        </Preview>

        <Preview
          title="Radio Disabled"
          description="Disabled is Boolean value default to false"
          code={docs.radioButtonDisabled}
        >
          <Flex wrap gap="md" items="center">
            <Radio disabled defaultChecked color="danger" label="danger" />
            <Radio disabled color="success" label="success" />
            <Radio disabled color="purple" label="purple" />
            <Radio disabled color="indigo" label="indigo" />
            <Radio disabled color="slate" label="slate" />
            <Radio disabled defaultChecked color="warning" label="warning" />
          </Flex>
        </Preview>

        <Preview title="Radio Size" description="Show alert only with message Props" code={docs.radioButtonSize}>
          <Flex wrap gap="md" items="center">
            <Radio size="sm" label="danger" />
            <Radio label="danger" />
            <Radio size="lg" label="success" />
          </Flex>
        </Preview>

        <Preview
          title="Radio Group"
          description="Radio Group Direction Horizontal Default"
          code={docs.radioButtonGroup}
        >
          <RadioGroup label="Rating" color="danger" name="hello">
            <Radio defaultChecked label="Bad" />
            <Radio defaultChecked label="Poor" />
            <Radio defaultChecked label="Medium" />
            <Radio defaultChecked label="Nice" />
            <Radio defaultChecked label="Excellent" />
          </RadioGroup>
        </Preview>

        <Preview title="Radio Group" description="Radio Group Direction Vertical" code={docs.radioButtonGroupVertical}>
          <RadioGroup direction="column" label="Rating" color="danger" name="components">
            <Radio defaultChecked label="High Order components" />
            <Radio defaultChecked label="Render Props Component" />
            <Radio defaultChecked label="Compound Component" />
            <Radio defaultChecked label="Functional Component Powered By Hooks" />
          </RadioGroup>
        </Preview>
      </Grid>
    </section>
  )
}

export default RadioPage
