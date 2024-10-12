import { Breadcrumb, Flex, Grid, Heading } from '@components/core'
import * as Icons from '@components/icons'
import { Preview } from '@components/section'
import * as docs from './breadcrumb.docs'

export const Component = () => {
  return (
    <section aria-labelledby="breadcrumb--page-id" className="l_flow-lg">
      <Flex items="center" wrap justify="between">
        <Heading as="h1" id="breadcrumb--page-id" size="xs">
          Breadcrumb Docs Page
        </Heading>
        <Breadcrumb size="sm">
          <Breadcrumb.Item link="../../..">Home</Breadcrumb.Item>
          <Breadcrumb.Item link="../..">Components</Breadcrumb.Item>
          <Breadcrumb.Item link="../">Base UI</Breadcrumb.Item>
          <Breadcrumb.Item link="./" current>
            Breadcrumb
          </Breadcrumb.Item>
        </Breadcrumb>
      </Flex>
      <Grid columns="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="sm">
        <Preview title="Default Breadcrumb" description="default Breadcrumb" code={docs.defaultBreadcrumb}>
          <Flex direction="column" gap="2xs">
            <Breadcrumb>
              <Breadcrumb.Item link="../..">components</Breadcrumb.Item>
              <Breadcrumb.Item link="../">base-ui</Breadcrumb.Item>
              <Breadcrumb.Item link="./" current>
                breadcrumb
              </Breadcrumb.Item>
            </Breadcrumb>
          </Flex>
        </Preview>

        <Preview
          title="Separator Breadcrumb"
          description="for separator props you can use a string or an icon"
          code={docs.customSeparatorBreadcrumb}
        >
          <Flex direction="column" gap="2xs">
            <Breadcrumb separator="-">
              <Breadcrumb.Item link="../..">components</Breadcrumb.Item>
              <Breadcrumb.Item link="../">base-ui</Breadcrumb.Item>
              <Breadcrumb.Item link="./" current>
                breadcrumb
              </Breadcrumb.Item>
            </Breadcrumb>

            <Breadcrumb separator="*">
              <Breadcrumb.Item link="../..">components</Breadcrumb.Item>
              <Breadcrumb.Item link="../">base-ui</Breadcrumb.Item>
              <Breadcrumb.Item link="./" current>
                breadcrumb
              </Breadcrumb.Item>
            </Breadcrumb>

            <Breadcrumb separator={<Icons.Minus width={10} />}>
              <Breadcrumb.Item link="../..">components</Breadcrumb.Item>
              <Breadcrumb.Item link="../">base-ui</Breadcrumb.Item>
              <Breadcrumb.Item link="./" current>
                breadcrumb
              </Breadcrumb.Item>
            </Breadcrumb>
          </Flex>
        </Preview>

        <Preview
          title="Icon Breadcrumb"
          description="for separator props you can use a string or an icon"
          code={docs.breadcrumbWithIcon}
        >
          <Flex direction="column" gap="2xs">
            <Breadcrumb>
              <Breadcrumb.Item link="../../..">
                Home
                <Icons.Home width={16} />
              </Breadcrumb.Item>

              <Breadcrumb.Item link="../..">
                components
                <Icons.Component width={16} />
              </Breadcrumb.Item>

              <Breadcrumb.Item link="../">
                base-ui
                <Icons.Home width={16} />
              </Breadcrumb.Item>
              <Breadcrumb.Item link="./" current>
                breadcrumb
                <Icons.Link width={16} />
              </Breadcrumb.Item>
            </Breadcrumb>

            <Breadcrumb>
              <Breadcrumb.Item link="../../..">
                <Icons.Home width={16} />
                Home
              </Breadcrumb.Item>

              <Breadcrumb.Item link="../..">
                <Icons.Component width={16} />
                components
              </Breadcrumb.Item>

              <Breadcrumb.Item link="../">
                <Icons.Home width={16} />
                base-ui
              </Breadcrumb.Item>
              <Breadcrumb.Item link="./" current>
                <Icons.Link width={16} />
                breadcrumb
              </Breadcrumb.Item>
            </Breadcrumb>
          </Flex>
        </Preview>
        <Preview
          title="Size Breadcrumb"
          description="Size Props have 3 value default to sm  other possible value (md, lg)"
          code={docs.sizeBreadcrumb}
        >
          <Flex direction="column" gap="2xs">
            <Breadcrumb separator="-">
              <Breadcrumb.Item link="../..">components</Breadcrumb.Item>
              <Breadcrumb.Item link="../">base-ui</Breadcrumb.Item>
              <Breadcrumb.Item link="./" current>
                breadcrumb
              </Breadcrumb.Item>
            </Breadcrumb>

            <Breadcrumb size="md" separator="/">
              <Breadcrumb.Item link="../..">components</Breadcrumb.Item>
              <Breadcrumb.Item link="../">base-ui</Breadcrumb.Item>
              <Breadcrumb.Item link="./" current>
                breadcrumb
              </Breadcrumb.Item>
            </Breadcrumb>

            <Breadcrumb size="lg">
              <Breadcrumb.Item link="../..">components</Breadcrumb.Item>
              <Breadcrumb.Item link="../">base-ui</Breadcrumb.Item>
              <Breadcrumb.Item link="./" current>
                breadcrumb
              </Breadcrumb.Item>
            </Breadcrumb>
          </Flex>
        </Preview>
      </Grid>
    </section>
  )
}

Component.displayName = 'BreadcrumbDocs'
