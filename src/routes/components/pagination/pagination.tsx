import { Pagination } from '@components/composition'
import { Breadcrumb, Flex, Grid, Heading } from '@components/core'
// import { Pagination } from '@components/composition'
import { Preview } from '@components/section'
import * as docs from './pagination.docs'

const pagination = () => {
  return (
    <section aria-labelledby="pagination--page-id" className="l_flow-lg">
      <Flex items="center" wrap justify="between">
        <Heading as="h1" id="pagination--page-id" size="xs">
          Pagination Docs Page
        </Heading>
        <Breadcrumb size="sm">
          <Breadcrumb.Item link="../../..">Home</Breadcrumb.Item>
          <Breadcrumb.Item link="../..">Components</Breadcrumb.Item>
          <Breadcrumb.Item link="../">Composite</Breadcrumb.Item>
          <Breadcrumb.Item link="./" current>
            Pagination
          </Breadcrumb.Item>
        </Breadcrumb>
      </Flex>
      <Grid columns="1fr 1fr" gap="sm" className="md_grid-one">
        <Preview
          direction="column"
          title="Default Pagination"
          description="Default Pagination required property count  and current (page) "
          code={docs.defaultPagination}
        >
          <Pagination title="hello" count={10} current={1} />
        </Preview>
        <Preview
          direction="column"
          title="Pagination Variant"
          description="default outline possible values(outline, soft , solid)"
          code={docs.VariantPagination}
        >
          <Pagination color="slate" title="hello" count={10} current={1} />
          <Pagination color="slate" variant="soft" title="hello" count={10} current={1} />
          <Pagination color="slate" variant="solid" title="hello" count={10} current={1} />
        </Preview>
        <Preview
          direction="column"
          title="pagination Corner"
          description="default radius possible values (sharp, radius, circle)"
          code={docs.CornerPagination}
        >
          <Pagination corner="sharp" title="hello" count={10} current={1} />
          <Pagination corner="2xs" title="hello" count={10} current={1} />
          <Pagination corner="xs" title="hello" count={10} current={1} />
          <Pagination corner="sm" title="hello" count={10} current={1} />
          <Pagination corner="lg" title="hello" count={10} current={1} />
          <Pagination corner="xl" title="hello" count={10} current={1} />
          <Pagination corner="2xl" title="hello" count={10} current={1} />
          <Pagination corner="full" title="hello" count={10} current={1} />
        </Preview>
        <Preview
          direction="column"
          title="Pagination Size"
          description="default md Possible values (xs, sm, md, lg, xl)"
          code={docs.SizePagination}
        >
          <Pagination size="xs" title="hello" count={10} current={1} />
          <Pagination size="sm" title="hello" count={10} current={1} />
          <Pagination size="md" title="hello" count={10} current={1} />
          <Pagination size="lg" title="hello" count={10} current={1} />
          <Pagination size="xl" title="hello" count={10} current={1} />
        </Preview>
        <Preview
          direction="column"
          title="Pagination Color"
          code={docs.ColorPagination}
          description="default slate possible values(red, danger, success, green , warning, orange , purple , indigo, primary, mint, yellow, slate)"
        >
          <Pagination color="slate" title="hello" count={10} current={1} />
          <Pagination color="red" title="hello" count={10} current={1} />
          <Pagination color="green" title="hello" count={10} current={1} />
          <Pagination color="yellow" title="hello" count={10} current={1} />
          <Pagination color="purple" title="hello" count={10} current={1} />
          <Pagination color="orange" title="hello" count={10} current={1} />
          <Pagination color="indigo" title="hello" count={10} current={1} />
          <Pagination color="mint" title="hello" count={10} current={1} />
        </Preview>
      </Grid>
    </section>
  )
}

export default pagination
