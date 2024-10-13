import { Breadcrumb, BreadcrumbItem, Flex, Grid, Heading, Spinner } from '@pillar-ui/core'
import { Preview } from '@components/section'
import * as docs from './spinner.docs'

const spinner = () => {
  return (
    <section aria-labelledby="spinner--page-id" className="l_flow-lg">
      <Flex items="center" wrap justify="between">
        <Heading as="h1" id="spinner--page-id" size="3">
          Spinner Docs Page
        </Heading>
        <Breadcrumb size="4">
          <BreadcrumbItem link="../../..">Home</BreadcrumbItem>
          <BreadcrumbItem link="../..">Components</BreadcrumbItem>
          <BreadcrumbItem link="../">Base UI</BreadcrumbItem>
          <BreadcrumbItem link="./" current>
            Spinner
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Grid grid="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="4">
        <Preview
          title="Small Spinner Color"
          description="Progress bar color default is primary possible values(danger, success, mint, yellow, purple, indigo, warning, slate)"
          code={docs.spinnerColor}
        >
          <Flex wrap gap="5" items="center">
            <Spinner color="d" />
            <Spinner color="su" />
            <Spinner color="se" />
            <Spinner color="i" />
            <Spinner color="b" />
            <Spinner color="w" />
          </Flex>
        </Preview>

        <Preview
          title="Invert Spinner Color"
          description="Boolean Value default false when its is true it invert the color"
          code={docs.spinnerColorInvert}
        >
          <Flex wrap gap="5" items="center">
            <Spinner invert color="d" />
            <Spinner invert color="su" />
            <Spinner invert color="se" />
            <Spinner invert color="i" />
            <Spinner invert color="b" />
            <Spinner invert color="w" />
          </Flex>
        </Preview>

        <Preview
          title="Medium Spinner Default Check"
          description="Default check is Boolean value default to false"
          code={docs.spinnerMediumSize}
        >
          <Flex wrap gap="5" items="center">
            <Spinner size="5" color="d" />
            <Spinner size="5" color="su" />
            <Spinner size="5" color="se" />
            <Spinner size="5" color="i" />
            <Spinner size="5" color="b" />
            <Spinner size="5" color="w" />
          </Flex>
        </Preview>

        <Preview
          title="Large Spinner Disabled"
          description="Disabled is Boolean value default to false"
          code={docs.spinnerLargeSize}
        >
          <Flex wrap gap="5" items="center">
            <Spinner size="6" color="d" />
            <Spinner size="6" color="su" />
            <Spinner size="6" color="se" />
            <Spinner size="6" color="i" />
            <Spinner size="6" color="b" />
            <Spinner size="6" color="w" />
          </Flex>
        </Preview>

        <Preview title="Spinner Size" description="Show alert only with message Props" code={docs.spinnerSize}>
          <Flex wrap gap="5" items="center">
            <Spinner size="4" />
            <Spinner />
            <Spinner size="6" />
          </Flex>
        </Preview>
      </Grid>
    </section>
  )
}

export default spinner
