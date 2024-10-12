import { Breadcrumb, Flex, Grid, Heading } from '@components/core'
import { Preview } from '@components/section'
import { NormalTableExample } from './tables.data'
import * as docs from './table.docs'

const tables = () => {
  return (
    <section aria-labelledby="table--page-id" className="l_flow-lg">
      <Flex items="center" wrap justify="between">
        <Heading as="h1" id="table--page-id" size="xs">
          Table Docs Page
        </Heading>
        <Breadcrumb size="sm">
          <Breadcrumb.Item link="../../..">Home</Breadcrumb.Item>
          <Breadcrumb.Item link="../..">Components</Breadcrumb.Item>
          <Breadcrumb.Item link="../">Composite</Breadcrumb.Item>
          <Breadcrumb.Item link="./" current>
            Table
          </Breadcrumb.Item>
        </Breadcrumb>
      </Flex>
      <Grid columns="1fr" className="md_grid-one" gap="md">
        <Preview
          title="Table Variant"
          description="variant props default to default possible values(stripper, default , soft, head-color)"
          code={docs.tableVariant}
        >
          <Grid columns="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="sm">
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
          <Flex direction="column" gap="sm">
            <Grid columns="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="sm">
              <NormalTableExample color="danger" variant="striped" />
              <NormalTableExample color="success" variant="striped" />
              <NormalTableExample color="purple" variant="striped" />
              <NormalTableExample color="yellow" variant="striped" />
              <NormalTableExample color="indigo" variant="striped" />
            </Grid>

            <Grid columns="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="sm">
              <NormalTableExample color="danger" />
              <NormalTableExample color="success" />
              <NormalTableExample color="purple" />
              <NormalTableExample color="yellow" />
              <NormalTableExample color="indigo" />
            </Grid>
            <Grid columns="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="sm">
              <NormalTableExample variant="soft" color="danger" />
              <NormalTableExample variant="soft" color="success" />
              <NormalTableExample variant="soft" color="purple" />
              <NormalTableExample variant="soft" color="yellow" />
              <NormalTableExample variant="soft" color="indigo" />
              <NormalTableExample variant="soft" />
            </Grid>
            <Grid columns="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="sm">
              <NormalTableExample variant="head-color" color="danger" />
              <NormalTableExample variant="head-color" color="success" />
              <NormalTableExample variant="head-color" color="purple" />
              <NormalTableExample variant="head-color" color="yellow" />
              <NormalTableExample variant="head-color" color="indigo" />
              <NormalTableExample variant="head-color" />
            </Grid>
          </Flex>
        </Preview>

        <Preview title="Table Sizes" description="default md possible values (sm, md, lg)" code={docs.tableSize}>
          <Grid columns="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="sm">
            <NormalTableExample size="sm" />
            <NormalTableExample />
            <NormalTableExample size="lg" />
          </Grid>
        </Preview>
      </Grid>
    </section>
  )
}

export default tables
