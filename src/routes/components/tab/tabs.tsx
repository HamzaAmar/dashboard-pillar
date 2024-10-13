import { Breadcrumb, BreadcrumbItem, Flex, Grid, Heading, Text, Tabs } from '@pillar-ui/core'
import { Home, User } from '@components/icons'
import { Preview } from '@components/section'
import * as docs from './tabs.docs'

export const Component = () => {
  return (
    <section aria-labelledby="status--page-id" className="l_flow-lg">
      <Flex items="center" wrap justify="between">
        <Heading as="h1" id="status--page-id" size="3">
          Tab Docs Page
        </Heading>
        <Breadcrumb size="4">
          <BreadcrumbItem link="../../..">Home</BreadcrumbItem>
          <BreadcrumbItem link="../..">Components</BreadcrumbItem>
          <BreadcrumbItem link="../">Composite</BreadcrumbItem>
          <BreadcrumbItem link="./" current>
            Tab
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      {/* <Grid grid="1fr" className="md_grid-one" gap="5">
        <Preview
          title="Tab Variants"
          description="variant props default to link possible other values (solid ,outline, soft, link)"
          code={docs.tabVariant}
        >
          <Grid grid="1fr 1fr" className="sm_grid-one" gap="5">
            <NormalTab variant="solid" />
            <NormalTab variant="outline" />
            <NormalTab variant="soft" />
            <NormalTab />
          </Grid>
        </Preview>

        <Preview
          title="Tab Color"
          description="color props default to primary possible other values (warning, secondary, slate, yellow, danger, indigo, primary, purple)"
          code={docs.tabColor}
        >
          <Grid grid="1fr 1fr" className="sm_grid-one" gap="5">
            <NormalTab color="d" variant="solid" />
            <NormalTab color="i" variant="outline" />
            <NormalTab variant="soft" />
            <NormalTab color="se" />
            <NormalTab color="b" variant="outline" />
            <NormalTab color="yellow" variant="soft" />
            <NormalTab color="w" />
          </Grid>
        </Preview>

        <Preview
          title="Tab Size"
          description="size props default to link possible other values (solid ,outline, soft, link)"
          code={docs.tabSize}
        >
          <Grid grid="1fr 1fr" className="sm_grid-one" gap="5">
            <NormalTab size="4" />
            <NormalTab size="5" />
            <NormalTab size="6" />
            <NormalTab />
          </Grid>
        </Preview>
        <Preview title="Tab Icons" description="Custom Tab to Allow icons in tab list trigger " code={docs.tabIcon}>
          <Tabs size="6" defaultValue="one">
            <Tabs className="">
              <Tabs.Trigger value="one">
                <Home width="20" />
                <Text className="u_sr-only" size="3">
                  Home
                </Text>
              </Tabs.Trigger>
              <Tabs.Trigger value="two">
                <Flex items="center" gap="1">
                  <Home width="20" />
                  <Text size="3">Home</Text>
                </Flex>
              </Tabs.Trigger>
              <Tabs.Trigger value="three">
                <Flex items="center" gap="1">
                  <Text size="3">User</Text>
                  <User width="20" />
                </Flex>
              </Tabs.Trigger>
            </Tabs>
            <Tabs.Content value="one">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, ipsam consectetur et impedit hic
              molestiae libero, perferendis iure pariatur, quidem obcaecati dolore blanditiis? Ut, vero similique.
              Numquam ipsam saepe hic!
            </Tabs.Content>
            <Tabs.Content value="two">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nihil, corporis quaerat eaque aut
              nostrum nemo ex ipsum numquam nesciunt tenetur rem. Voluptas rem vitae excepturi perferendis facere quo
              sunt.
            </Tabs.Content>
            <Tabs.Content value="three">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum obcaecati expedita provident optio
              placeat officia nihil voluptates? Possimus esse, facilis corporis ipsa fuga recusandae ipsum, non nostrum
              voluptatibus aliquam sint.
            </Tabs.Content>
          </Tabs>
        </Preview>
      </Grid> */}
    </section>
  )
}
