import { Breadcrumb, BreadcrumbItem, Flex, Grid, Heading, Pagination } from '@pillar-ui/core'
// import { Pagination } from '@components/composition'
import { Preview } from '@components/section'
import * as docs from './pagination.docs'

const pagination = () => {
  return (
    <section aria-labelledby="pagination--page-id" className="l_flow-lg">
      <Flex items="center" wrap justify="between">
        <Heading as="h1" id="pagination--page-id" size="3">
          Pagination Docs Page
        </Heading>
        <Breadcrumb size="4">
          <BreadcrumbItem link="../../..">Home</BreadcrumbItem>
          <BreadcrumbItem link="../..">Components</BreadcrumbItem>
          <BreadcrumbItem link="../">Composite</BreadcrumbItem>
          <BreadcrumbItem link="./" current>
            Pagination
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Grid grid="1fr 1fr" gap="4" className="md_grid-one">
        <Preview
          direction="col"
          title="Default Pagination"
          description="Default Pagination required property count  and current (page) "
          code={docs.defaultPagination}
        >
          <Pagination title="hello" count={10} current={1} />
        </Preview>
        <Preview
          direction="col"
          title="Pagination Variant"
          description="default outline possible values(outline, soft , solid)"
          code={docs.VariantPagination}
        >
          <Pagination color="b" title="hello" count={10} current={1} />
          <Pagination color="b" variant="soft" title="hello" count={10} current={1} />
          <Pagination color="b" variant="solid" title="hello" count={10} current={1} />
        </Preview>
        <Preview
          direction="col"
          title="pagination Corner"
          description="default radius possible values (sharp, radius, circle)"
          code={docs.CornerPagination}
        >
          <Pagination corner="0" title="hello" count={10} current={1} />
          <Pagination corner="1" title="hello" count={10} current={1} />
          <Pagination corner="2" title="hello" count={10} current={1} />
          <Pagination corner="3" title="hello" count={10} current={1} />
          <Pagination corner="5" title="hello" count={10} current={1} />
          <Pagination corner="full" title="hello" count={10} current={1} />
        </Preview>
        <Preview
          direction="col"
          title="Pagination Size"
          description="default md Possible values (xs, sm, md, lg, xl)"
          code={docs.SizePagination}
        >
          <Pagination size="3" title="hello" count={10} current={1} />
          <Pagination size="4" title="hello" count={10} current={1} />
          <Pagination size="5" title="hello" count={10} current={1} />
          <Pagination size="6" title="hello" count={10} current={1} />
          <Pagination size="7" title="hello" count={10} current={1} />
        </Preview>
        <Preview
          direction="col"
          title="Pagination Color"
          code={docs.ColorPagination}
          description="default slate possible values(red, danger, success, green , warning, orange , purple , indigo, primary, mint, yellow, slate)"
        >
          <Pagination color="b" title="hello" count={10} current={1} />
          <Pagination color="d" title="hello" count={10} current={1} />
          <Pagination color="su" title="hello" count={10} current={1} />
          <Pagination color="se" title="hello" count={10} current={1} />
          <Pagination color="w" title="hello" count={10} current={1} />
          <Pagination color="i" title="hello" count={10} current={1} />
        </Preview>
      </Grid>
    </section>
  )
}

export default pagination
