import { Breadcrumb, BreadcrumbItem, Flex, Grid, Heading } from '@pillar-ui/core'
import { Preview } from '@components/section'
import { NormalTableExample } from './tables.data'
import * as docs from './table.docs'

const tables = () => {
  return (
    <section aria-labelledby="table--page-id" className="l_flow-lg">
      <Flex items="center" wrap justify="between">
        <Heading as="h1" id="table--page-id" size="3">
          Table Docs Page
        </Heading>
        <Breadcrumb size="4">
          <BreadcrumbItem link="../../..">Home</BreadcrumbItem>
          <BreadcrumbItem link="../..">Components</BreadcrumbItem>
          <BreadcrumbItem link="../">Composite</BreadcrumbItem>
          <BreadcrumbItem link="./" current>
            Table
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Grid grid="1fr" className="md_grid-one" gap="5">
        <Preview
          title="Table Variant"
          description="variant props default to default possible values(stripper, default , soft, head-color)"
          code={docs.tableVariant}
        >
          <Grid grid="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="4">
            <NormalTableExample variant="striped" />
            <NormalTableExample />
            <NormalTableExample variant="soft" />
            <NormalTableExample variant="head-color" />
          </Grid>
        </Preview>

        <Preview
          title="Table Color"
          description="Progress bar color default is primary possible values(danger, success, mint, yellow, purple, indigo, warning, slate)"
          code={docs.tableColor}
        >
          <Flex direction="col" gap="4">
            <Grid grid="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="4">
              <NormalTableExample color="d" variant="striped" />
              <NormalTableExample color="su" variant="striped" />
              <NormalTableExample color="se" variant="striped" />
              <NormalTableExample color="i" variant="striped" />
            </Grid>

            <Grid grid="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="4">
              <NormalTableExample color="d" />
              <NormalTableExample color="su" />
              <NormalTableExample color="se" />
              <NormalTableExample color="i" />
            </Grid>
            <Grid grid="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="4">
              <NormalTableExample variant="soft" color="d" />
              <NormalTableExample variant="soft" color="su" />
              <NormalTableExample variant="soft" color="se" />
              <NormalTableExample variant="soft" color="i" />
              <NormalTableExample variant="soft" />
            </Grid>
            <Grid grid="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="4">
              <NormalTableExample variant="head-color" color="d" />
              <NormalTableExample variant="head-color" color="su" />
              <NormalTableExample variant="head-color" color="se" />
              <NormalTableExample variant="head-color" color="i" />
              <NormalTableExample variant="head-color" />
            </Grid>
          </Flex>
        </Preview>

        <Preview title="Table Sizes" description="default md possible values (sm, md, lg)" code={docs.tableSize}>
          <Grid grid="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="4">
            <NormalTableExample size="4" />
            <NormalTableExample />
            <NormalTableExample size="6" />
          </Grid>
        </Preview>
      </Grid>
    </section>
  )
}

export default tables
