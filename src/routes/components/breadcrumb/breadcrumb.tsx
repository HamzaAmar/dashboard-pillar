import { Breadcrumb, BreadcrumbItem, Flex, Grid, Heading } from '@pillar-ui/core'
import * as Icons from '@components/icons'
import { Preview } from '@components/section'
import * as docs from './breadcrumb.docs'

export const Component = () => {
  return (
    <section aria-labelledby="breadcrumb--page-id" className="l_flow-lg">
      <Flex items="center" wrap justify="between">
        <Heading as="h1" id="breadcrumb--page-id" size="3">
          Breadcrumb Docs Page
        </Heading>
        <Breadcrumb size="4">
          <BreadcrumbItem link="../../..">Home</BreadcrumbItem>
          <BreadcrumbItem link="../..">Components</BreadcrumbItem>
          <BreadcrumbItem link="../">Base UI</BreadcrumbItem>
          <BreadcrumbItem link="./" current>
            Breadcrumb
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Grid grid="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="4">
        <Preview title="Default Breadcrumb" description="default Breadcrumb" code={docs.defaultBreadcrumb}>
          <Flex direction="col" gap="1">
            <Breadcrumb>
              <BreadcrumbItem link="../..">components</BreadcrumbItem>
              <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
              <BreadcrumbItem link="./" current>
                breadcrumb
              </BreadcrumbItem>
            </Breadcrumb>
          </Flex>
        </Preview>

        <Preview
          title="Separator Breadcrumb"
          description="for separator props you can use a string or an icon"
          code={docs.customSeparatorBreadcrumb}
        >
          <Flex direction="col" gap="1">
            <Breadcrumb separator="-">
              <BreadcrumbItem link="../..">components</BreadcrumbItem>
              <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
              <BreadcrumbItem link="./" current>
                breadcrumb
              </BreadcrumbItem>
            </Breadcrumb>

            <Breadcrumb separator="*">
              <BreadcrumbItem link="../..">components</BreadcrumbItem>
              <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
              <BreadcrumbItem link="./" current>
                breadcrumb
              </BreadcrumbItem>
            </Breadcrumb>

            <Breadcrumb separator={<Icons.Minus width={10} />}>
              <BreadcrumbItem link="../..">components</BreadcrumbItem>
              <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
              <BreadcrumbItem link="./" current>
                breadcrumb
              </BreadcrumbItem>
            </Breadcrumb>
          </Flex>
        </Preview>

        <Preview
          title="Icon Breadcrumb"
          description="for separator props you can use a string or an icon"
          code={docs.breadcrumbWithIcon}
        >
          <Flex direction="col" gap="1">
            <Breadcrumb>
              <BreadcrumbItem link="../../..">
                Home
                <Icons.Home width={16} />
              </BreadcrumbItem>

              <BreadcrumbItem link="../..">
                components
                <Icons.Component width={16} />
              </BreadcrumbItem>

              <BreadcrumbItem link="../">
                base-ui
                <Icons.Home width={16} />
              </BreadcrumbItem>
              <BreadcrumbItem link="./" current>
                breadcrumb
                <Icons.Link width={16} />
              </BreadcrumbItem>
            </Breadcrumb>

            <Breadcrumb>
              <BreadcrumbItem link="../../..">
                <Icons.Home width={16} />
                Home
              </BreadcrumbItem>

              <BreadcrumbItem link="../..">
                <Icons.Component width={16} />
                components
              </BreadcrumbItem>

              <BreadcrumbItem link="../">
                <Icons.Home width={16} />
                base-ui
              </BreadcrumbItem>
              <BreadcrumbItem link="./" current>
                <Icons.Link width={16} />
                breadcrumb
              </BreadcrumbItem>
            </Breadcrumb>
          </Flex>
        </Preview>
        <Preview
          title="Size Breadcrumb"
          description="Size Props have 3 value default to sm  other possible value (md, lg)"
          code={docs.sizeBreadcrumb}
        >
          <Flex direction="col" gap="1">
            <Breadcrumb separator="-">
              <BreadcrumbItem link="../..">components</BreadcrumbItem>
              <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
              <BreadcrumbItem link="./" current>
                breadcrumb
              </BreadcrumbItem>
            </Breadcrumb>

            <Breadcrumb size="5" separator="/">
              <BreadcrumbItem link="../..">components</BreadcrumbItem>
              <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
              <BreadcrumbItem link="./" current>
                breadcrumb
              </BreadcrumbItem>
            </Breadcrumb>

            <Breadcrumb size="6">
              <BreadcrumbItem link="../..">components</BreadcrumbItem>
              <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
              <BreadcrumbItem link="./" current>
                breadcrumb
              </BreadcrumbItem>
            </Breadcrumb>
          </Flex>
        </Preview>
      </Grid>
    </section>
  )
}

Component.displayName = 'BreadcrumbDocs'
