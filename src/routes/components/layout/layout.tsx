import { Breadcrumb, Flex, Grid, Heading } from '@components/core'
import { Preview } from '@components/section'
import type { Color } from '@type/utils'
import * as docs from './layout.docs'

const Box = ({
  color = 'slate',
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
        <Heading as="h1" id="avatar--page-id" size="xs">
          Layout Docs Page
        </Heading>
        <Breadcrumb size="sm">
          <Breadcrumb.Item link="../../..">Home</Breadcrumb.Item>
          <Breadcrumb.Item link="../..">Components</Breadcrumb.Item>
          <Breadcrumb.Item link="../">Base UI</Breadcrumb.Item>
          <Breadcrumb.Item link="./" current>
            Layout
          </Breadcrumb.Item>
        </Breadcrumb>
      </Flex>
      <Grid columns="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="sm">
        <Preview
          title="Flex Layout"
          description="Default Flex with small gap gap possibles values(xs,sm,md,lg,xl)"
          direction="column"
          code={docs.defaultFlex}
        >
          <Flex gap="sm">
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
          direction="column"
          code={docs.centeredFlex}
        >
          <Flex gap="sm" items="center" justify="center">
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
          </Flex>
        </Preview>
        <Preview
          title="title Alert"
          description="Flex Justify Between"
          direction="column"
          code={docs.justifyBetweenFlex}
        >
          <Flex gap="sm" items="center" justify="between">
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
          </Flex>
        </Preview>
        <Preview
          title="Justify Around"
          description="Justify Flex Around"
          direction="column"
          code={docs.justifyAroundFlex}
        >
          <Flex gap="sm" items="center" justify="around">
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
          </Flex>
        </Preview>

        <Preview
          title="Justify Evenly"
          description="Justify Flex Evenly"
          direction="column"
          code={docs.justifyEvenlyFlex}
        >
          <Flex gap="sm" items="center" justify="evenly">
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
          direction="column"
          code={docs.wrapFlex}
        >
          <Flex gap="sm" wrap>
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
          direction="column"
          code={docs.flexGrowEqual}
        >
          <Flex gap="sm" wrap>
            <Box className="u_flex-1" />
            <Box className="u_flex-1" />
            <Box className="u_flex-1" />
            <Box className="u_flex-1" />
          </Flex>
        </Preview>
        <Preview
          title="Flex Grow"
          description="For Different class we have only 1 and 2 for more advanced please check Grid"
          direction="column"
          code={docs.flexGrowDifferent}
        >
          <Flex gap="sm" wrap>
            <Box className="u_flex-1" />
            <Box className="u_flex-2" />
            <Box className="u_flex-1" />
          </Flex>
        </Preview>
        <Preview
          title="Flex Direction Column"
          description="Flex direction default value is row possible values(row , column)"
          direction="column"
          code={docs.flexDirectionCol}
        >
          <Flex gap="sm" direction="column">
            <Box className="u_flex-1" />
            <Box className="u_flex-2" />
            <Box className="u_flex-1" />
          </Flex>
        </Preview>
        <Preview
          title="Flex Direction Nested"
          description="We can use nested flex to make any layout we need but Prefer to use grid for complex layout"
          direction="column"
          code={docs.flexNested}
        >
          <Flex gap="sm" direction="column">
            <Box className="u_flex-1" content="header" />
            <Flex gap="sm">
              <Box className="u_flex-1" content="sidebar" />
              <Box className="u_flex-2" content="main" />
              <Box className="u_flex-1" content="sidebar" />
            </Flex>
            <Box className="u_flex-1" content="footer" />
          </Flex>
        </Preview>
        <Preview
          title="Grid Columns"
          description="grid 2 equal columns 1fr 1fr equal in css ( grid-template-columns:1fr 1fr)"
          direction="column"
          code={docs.gridTwoColumns}
        >
          <Grid columns="1fr 1fr" gap="sm">
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
          </Grid>
        </Preview>
        <Preview
          title="Grid columns More Detail"
          description="the value of the columns props accept every value that grid-template-columns accept px fr auto rem em ch and so one choose the best value for you need"
          direction="column"
          code={docs.gridColumnsDifferentValues}
        >
          <Grid columns=".5fr 2fr auto 100px" gap="sm">
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
          direction="column"
          code={docs.gridLayoutTemplate}
        >
          <Grid columns="100px 1fr 100px" rows="2rem minmax(6rem, 1fr) 2rem" gap="sm">
            <Grid.Item column="1/4" style={{ background: 'var(--slate-8)' }}>
              Header
            </Grid.Item>
            <Grid.Item column="span 1" style={{ background: 'var(--slate-8)' }}>
              sidebar
            </Grid.Item>
            <Grid.Item column="span 1" style={{ background: 'var(--slate-8)' }}>
              main
            </Grid.Item>
            <Grid.Item column="span 1" style={{ background: 'var(--slate-8)' }}>
              sidebar
            </Grid.Item>
            <Grid.Item column="span 3" style={{ background: 'var(--slate-8)' }}>
              Footer
            </Grid.Item>
          </Grid>
        </Preview>
        <Preview
          title="Complex Grid Two"
          description="Show layout with message and title"
          direction="column"
          code={docs.gridLayoutTwoTemplate}
        >
          <Grid columns="100px 1fr 100px" rows="2rem minmax(6rem, 1fr) 2rem" gap="sm">
            <Grid.Item column="2/4" style={{ background: 'var(--slate-8)' }}>
              Header
            </Grid.Item>
            <Grid.Item column="span 1" row="1 / span 3" style={{ background: 'var(--slate-8)' }}>
              sidebar
            </Grid.Item>
            <Grid.Item column="2 / 3" style={{ background: 'var(--slate-8)' }}>
              main
            </Grid.Item>
            <Grid.Item column="3 / 4" style={{ background: 'var(--slate-8)' }}>
              sidebar
            </Grid.Item>
            <Grid.Item column="2 / span 2" style={{ background: 'var(--slate-8)' }}>
              Footer
            </Grid.Item>
          </Grid>
        </Preview>
      </Grid>
    </section>
  )
}

export default layout
