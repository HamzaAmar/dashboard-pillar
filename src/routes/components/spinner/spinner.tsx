import { Breadcrumb, Flex, Grid, Heading, Spinner } from '@components/core'
import { Preview } from '@components/section'
import * as docs from './spinner.docs'

const spinner = () => {
  return (
    <section aria-labelledby="spinner--page-id" className="l_flow-lg">
      <Flex items="center" wrap justify="between">
        <Heading as="h1" id="spinner--page-id" size="xs">
          Spinner Docs Page
        </Heading>
        <Breadcrumb size="sm">
          <Breadcrumb.Item link="../../..">Home</Breadcrumb.Item>
          <Breadcrumb.Item link="../..">Components</Breadcrumb.Item>
          <Breadcrumb.Item link="../">Base UI</Breadcrumb.Item>
          <Breadcrumb.Item link="./" current>
            Spinner
          </Breadcrumb.Item>
        </Breadcrumb>
      </Flex>
      <Grid columns="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="sm">
        <Preview
          title="Small Spinner Color"
          description="Progress bar color default is primary possible values(danger, success, mint, yellow, purple, indigo, warning, slate)"
          code={docs.spinnerColor}
        >
          <Flex wrap gap="md" items="center">
            <Spinner color="danger" />
            <Spinner color="success" />
            <Spinner color="purple" />
            <Spinner color="indigo" />
            <Spinner color="slate" />
            <Spinner color="warning" />
          </Flex>
        </Preview>

        <Preview
          title="Invert Spinner Color"
          description="Boolean Value default false when its is true it invert the color"
          code={docs.spinnerColorInvert}
        >
          <Flex wrap gap="md" items="center">
            <Spinner invert color="danger" />
            <Spinner invert color="success" />
            <Spinner invert color="purple" />
            <Spinner invert color="indigo" />
            <Spinner invert color="slate" />
            <Spinner invert color="warning" />
          </Flex>
        </Preview>

        <Preview
          title="Medium Spinner Default Check"
          description="Default check is Boolean value default to false"
          code={docs.spinnerMediumSize}
        >
          <Flex wrap gap="md" items="center">
            <Spinner size="md" color="danger" />
            <Spinner size="md" color="success" />
            <Spinner size="md" color="purple" />
            <Spinner size="md" color="indigo" />
            <Spinner size="md" color="slate" />
            <Spinner size="md" color="warning" />
          </Flex>
        </Preview>

        <Preview
          title="Large Spinner Disabled"
          description="Disabled is Boolean value default to false"
          code={docs.spinnerLargeSize}
        >
          <Flex wrap gap="md" items="center">
            <Spinner size="lg" color="danger" />
            <Spinner size="lg" color="success" />
            <Spinner size="lg" color="purple" />
            <Spinner size="lg" color="indigo" />
            <Spinner size="lg" color="slate" />
            <Spinner size="lg" color="warning" />
          </Flex>
        </Preview>

        <Preview title="Spinner Size" description="Show alert only with message Props" code={docs.spinnerSize}>
          <Flex wrap gap="md" items="center">
            <Spinner size="sm" />
            <Spinner />
            <Spinner size="lg" />
          </Flex>
        </Preview>
      </Grid>
    </section>
  )
}

export default spinner
