import { Breadcrumb, BreadcrumbItem, Flex, Grid, Heading, Radio, RadioGroup } from '@pillar-ui/core'
import { Preview } from '@components/section'
import * as docs from './radio.docs'

const RadioPage = () => {
  return (
    <section aria-labelledby="radio--page-id" className="l_flow-lg">
      <Flex items="center" wrap justify="between">
        <Heading as="h1" id="radio--page-id" size="3">
          Radio Docs Page
        </Heading>
        <Breadcrumb size="4">
          <BreadcrumbItem link="../../..">Home</BreadcrumbItem>
          <BreadcrumbItem link="../..">Components</BreadcrumbItem>
          <BreadcrumbItem link="../">Base UI</BreadcrumbItem>
          <BreadcrumbItem link="./" current>
            Radio
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Grid grid="minmax(0,1fr ) minmax(0,1fr )" className="md_grid-one" gap="4">
        <Preview title="Radio Color" description="Show alert only with message Props" code={docs.radioButtonColor}>
          <Flex wrap gap="5" items="center">
            <Radio color="d" label="danger" />
            <Radio color="su" label="success" />
            <Radio color="se" label="purple" />
            <Radio color="i" label="indigo" />
            <Radio color="b" label="slate" />
            <Radio color="w" label="warning" />
          </Flex>
        </Preview>

        <Preview
          title="Radio Default Check"
          description="Default check is Boolean value default to false"
          code={docs.defaultCheckedRadio}
        >
          <Flex wrap gap="5" items="center">
            <Radio defaultChecked color="d" label="danger" />
            <Radio defaultChecked color="su" label="success" />
            <Radio defaultChecked color="se" label="purple" />
            <Radio defaultChecked color="i" label="indigo" />
            <Radio defaultChecked color="b" label="slate" />
            <Radio defaultChecked color="w" label="warning" />
          </Flex>
        </Preview>

        <Preview
          title="Radio Disabled"
          description="Disabled is Boolean value default to false"
          code={docs.radioButtonDisabled}
        >
          <Flex wrap gap="5" items="center">
            <Radio disabled defaultChecked color="d" label="danger" />
            <Radio disabled color="su" label="success" />
            <Radio disabled color="se" label="purple" />
            <Radio disabled color="i" label="indigo" />
            <Radio disabled color="b" label="slate" />
            <Radio disabled defaultChecked color="w" label="warning" />
          </Flex>
        </Preview>

        <Preview title="Radio Size" description="Show alert only with message Props" code={docs.radioButtonSize}>
          <Flex wrap gap="5" items="center">
            <Radio size="4" label="danger" />
            <Radio label="danger" />
            <Radio size="6" label="success" />
          </Flex>
        </Preview>

        <Preview
          title="Radio Group"
          description="Radio Group Direction Horizontal Default"
          code={docs.radioButtonGroup}
        >
          <RadioGroup label="Rating" color="d" name="hello">
            <Radio defaultChecked label="Bad" />
            <Radio defaultChecked label="Poor" />
            <Radio defaultChecked label="Medium" />
            <Radio defaultChecked label="Nice" />
            <Radio defaultChecked label="Excellent" />
          </RadioGroup>
        </Preview>

        <Preview title="Radio Group" description="Radio Group Direction Vertical" code={docs.radioButtonGroupVertical}>
          <RadioGroup direction="col" label="Rating" color="d" name="components">
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
