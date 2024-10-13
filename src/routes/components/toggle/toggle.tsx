import { Breadcrumb, BreadcrumbItem, Flex, Grid, Heading, Switch } from '@pillar-ui/core'
import { Preview } from '@components/section'
import * as docs from './toggle.docs'

const toggle = () => {
  return (
    <section aria-labelledby="toggle--page-id" className="l_flow-lg">
      <Flex items="center" wrap justify="between">
        <Heading as="h1" id="toggle--page-id" size="3">
          Switch Docs Page
        </Heading>
        <Breadcrumb size="4">
          <BreadcrumbItem link="../../..">Home</BreadcrumbItem>
          <BreadcrumbItem link="../..">Components</BreadcrumbItem>
          <BreadcrumbItem link="../">Base UI</BreadcrumbItem>
          <BreadcrumbItem link="./" current>
            Switch
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Grid grid="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="4">
        <Preview title="Small Switch Color" description="Show alert only with message Props" code={docs.toggleColor}>
          <Flex wrap gap="5" items="center">
            <Switch label="hello" defaultPressed color="d" />
            <Switch label="hello" defaultPressed color="su" />
            <Switch label="hello" defaultPressed color="se" />
            <Switch label="hello" defaultPressed color="i" />
            <Switch label="hello" defaultPressed color="b" />
            <Switch label="hello" defaultPressed color="w" />
          </Flex>
        </Preview>

        <Preview
          title="Medium Switch Default Check"
          description="Default check is Boolean value default to false"
          code={docs.toggleSize}
        >
          <Flex wrap gap="5" items="center">
            <Switch label="hello" size="5" color="d" />
            <Switch label="hello" size="5" color="su" />
            <Switch label="hello" size="5" color="se" />
            <Switch label="hello" size="5" color="i" />
            <Switch label="hello" size="5" color="b" />
            <Switch label="hello" size="5" color="w" />
          </Flex>
        </Preview>

        <Preview
          title="Switch Disabled"
          description="Disabled is Boolean value default to false"
          code={docs.toggleDisabled}
        >
          <Flex wrap gap="5" items="center">
            <Switch label="hello" disabled color="d" />
            <Switch label="hello" disabled color="su" />
            <Switch label="hello" disabled color="se" />
            <Switch label="hello" disabled color="i" />
            <Switch label="hello" disabled color="b" />
            <Switch label="hello" disabled color="w" />
          </Flex>
        </Preview>

        <Preview
          title="Switch Size"
          description="Switch Button Size Default Value SM Possible Values (xs , sm, md , lg, xl)"
          code={docs.toggleSize}
        >
          <Flex wrap gap="5" items="center">
            <Switch label="hello" />
            <Switch label="hello" size="4" />
            <Switch label="hello" size="5" />
            <Switch label="hello" size="6" />
            <Switch label="hello" size="7" />
          </Flex>
        </Preview>
      </Grid>
    </section>
  )
}

export default toggle
