import { Breadcrumb, BreadcrumbItem, Color, Flex, Grid, GridItem, Heading } from '@pillar-ui/core'
import { Preview } from '@components/section'
import * as docs from './layout.docs'

const Box = ({
  color = 'b',
  content = 'Hello',
  className,
}: {
  color?: Color
  content?: string
  className?: string
}) => {
  return (
    <div className={`u_${color} ${className}`} style={{ padding: '.5rem', background: 'var(--color-shared-8)' }}>
      {content}
    </div>
  )
}

const layout = () => {
  return (
    <section aria-labelledby="avatar--page-id" className="l_flow-lg">
      <Flex items="center" wrap justify="between">
        <Heading as="h1" id="avatar--page-id" size="3">
          Layout Docs Page
        </Heading>
        <Breadcrumb size="4">
          <BreadcrumbItem link="../../..">Home</BreadcrumbItem>
          <BreadcrumbItem link="../..">Components</BreadcrumbItem>
          <BreadcrumbItem link="../">Base UI</BreadcrumbItem>
          <BreadcrumbItem link="./" current>
            Layout
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Grid grid="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="4">
        <Preview
          title="Flex Layout"
          description="Default Flex with small gap gap possibles values(xs,sm,md,lg,xl)"
          direction="col"
          code={docs.defaultFlex}
        >
          <Flex gap="4">
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
          </Flex>
        </Preview>
        <Preview
          title="centered flex"
          description="Make the flex item center in horizontal and vertical direction with justify (justify-content), items (align-items) props"
          direction="col"
          code={docs.centeredFlex}
        >
          <Flex gap="4" items="center" justify="center">
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
          </Flex>
        </Preview>
        <Preview title="title Alert" description="Flex Justify Between" direction="col" code={docs.justifyBetweenFlex}>
          <Flex gap="4" items="center" justify="between">
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
          </Flex>
        </Preview>
        <Preview title="Justify Around" description="Justify Flex Around" direction="col" code={docs.justifyAroundFlex}>
          <Flex gap="4" items="center" justify="around">
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
          </Flex>
        </Preview>

        <Preview title="Justify Evenly" description="Justify Flex Evenly" direction="col" code={docs.justifyEvenlyFlex}>
          <Flex gap="4" items="center" justify="evenly">
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
          </Flex>
        </Preview>

        <Preview
          title="Flex Wrap"
          description="Flex Wrap To make item wrap when more content exist"
          direction="col"
          code={docs.wrapFlex}
        >
          <Flex gap="4" wrap>
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
          </Flex>
        </Preview>
        <Preview
          title="Flex Grow"
          description="For Equal column size use u_flex-1 (flex-1, flex-2 , flex-auto, flex-none)"
          direction="col"
          code={docs.flexGrowEqual}
        >
          <Flex gap="4" wrap>
            <Box className="u_flex-1" />
            <Box className="u_flex-1" />
            <Box className="u_flex-1" />
            <Box className="u_flex-1" />
          </Flex>
        </Preview>
        <Preview
          title="Flex Grow"
          description="For Different class we have only 1 and 2 for more advanced please check Grid"
          direction="col"
          code={docs.flexGrowDifferent}
        >
          <Flex gap="4" wrap>
            <Box className="u_flex-1" />
            <Box className="u_flex-2" />
            <Box className="u_flex-1" />
          </Flex>
        </Preview>
        <Preview
          title="Flex Direction Column"
          description="Flex direction default value is row possible values(row , column)"
          direction="col"
          code={docs.flexDirectionCol}
        >
          <Flex gap="4" direction="col">
            <Box className="u_flex-1" />
            <Box className="u_flex-2" />
            <Box className="u_flex-1" />
          </Flex>
        </Preview>
        <Preview
          title="Flex Direction Nested"
          description="We can use nested flex to make any layout we need but Prefer to use grid for complex layout"
          direction="col"
          code={docs.flexNested}
        >
          <Flex gap="4" direction="col">
            <Box className="u_flex-1" content="header" />
            <Flex gap="4">
              <Box className="u_flex-1" content="sidebar" />
              <Box className="u_flex-2" content="main" />
              <Box className="u_flex-1" content="sidebar" />
            </Flex>
            <Box className="u_flex-1" content="footer" />
          </Flex>
        </Preview>
        <Preview
          title="Grid grid"
          description="grid 2 equal columns 1fr 1fr equal in css ( grid-template-columns:1fr 1fr)"
          direction="col"
          code={docs.gridTwoColumns}
        >
          <Grid grid="1fr 1fr" gap="4">
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
          </Grid>
        </Preview>
        <Preview
          title="Grid grid More Detail"
          description="the value of the columns props accept every value that grid-template-columns accept px fr auto rem em ch and so one choose the best value for you need"
          direction="col"
          code={docs.gridColumnsDifferentValues}
        >
          <Grid grid=".5fr 2fr auto 100px" gap="4">
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
          </Grid>
        </Preview>
        <Preview
          title="Complex Grid"
          description="Show layout with message and title"
          direction="col"
          code={docs.gridLayoutTemplate}
        >
          <Grid grid="100px 1fr 100px x 2rem minmax(6rem, 1fr) 2rem" gap="4">
            <GridItem placement="1/4" style={{ background: 'var(--slate-8)' }}>
              Header
            </GridItem>
            <GridItem placement="span 1" style={{ background: 'var(--slate-8)' }}>
              sidebar
            </GridItem>
            <GridItem placement="span 1" style={{ background: 'var(--slate-8)' }}>
              main
            </GridItem>
            <GridItem placement="span 1" style={{ background: 'var(--slate-8)' }}>
              sidebar
            </GridItem>
            <GridItem placement="span 3" style={{ background: 'var(--slate-8)' }}>
              Footer
            </GridItem>
          </Grid>
        </Preview>
        <Preview
          title="Complex Grid Two"
          description="Show layout with message and title"
          direction="col"
          code={docs.gridLayoutTwoTemplate}
        >
          <Grid grid="100px 1fr 100px / 2rem minmax(6rem, 1fr) 2rem" gap="4">
            <GridItem placement="2/4" style={{ background: 'var(--slate-8)' }}>
              Header
            </GridItem>
            <GridItem placement="span 1 x 1 / span 3" style={{ background: 'var(--slate-8)' }}>
              sidebar
            </GridItem>
            <GridItem placement="2 / 3" style={{ background: 'var(--slate-8)' }}>
              main
            </GridItem>
            <GridItem placement="3 / 4" style={{ background: 'var(--slate-8)' }}>
              sidebar
            </GridItem>
            <GridItem placement="2 / span 2" style={{ background: 'var(--slate-8)' }}>
              Footer
            </GridItem>
          </Grid>
        </Preview>
      </Grid>
    </section>
  )
}

export default layout
