import { NormalTab, Tabs } from '@components/composition'
import { Breadcrumb, Flex, Grid, Heading, Text } from '@components/core'
import { Home, User } from '@components/icons'
import { Preview } from '@components/section'
import * as docs from './tabs.docs'

export const Component = () => {
  return (
    <section aria-labelledby="status--page-id" className="l_flow-lg">
      <Flex items="center" wrap justify="between">
        <Heading as="h1" id="status--page-id" size="xs">
          Tab Docs Page
        </Heading>
        <Breadcrumb size="sm">
          <Breadcrumb.Item link="../../..">Home</Breadcrumb.Item>
          <Breadcrumb.Item link="../..">Components</Breadcrumb.Item>
          <Breadcrumb.Item link="../">Composite</Breadcrumb.Item>
          <Breadcrumb.Item link="./" current>
            Tab
          </Breadcrumb.Item>
        </Breadcrumb>
      </Flex>
      <Grid columns="1fr" className="md_grid-one" gap="md">
        <Preview
          title="Tab Variants"
          description="variant props default to link possible other values (solid ,outline, soft, link)"
          code={docs.tabVariant}
        >
          <Grid columns="1fr 1fr" className="sm_grid-one" gap="md">
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
          <Grid columns="1fr 1fr" className="sm_grid-one" gap="md">
            <NormalTab color="danger" variant="solid" />
            <NormalTab color="indigo" variant="outline" />
            <NormalTab variant="soft" />
            <NormalTab color="purple" />
            <NormalTab color="slate" variant="outline" />
            <NormalTab color="yellow" variant="soft" />
            <NormalTab color="warning" />
          </Grid>
        </Preview>

        <Preview
          title="Tab Size"
          description="size props default to link possible other values (solid ,outline, soft, link)"
          code={docs.tabSize}
        >
          <Grid columns="1fr 1fr" className="sm_grid-one" gap="md">
            <NormalTab size="sm" />
            <NormalTab size="md" />
            <NormalTab size="lg" />
            <NormalTab />
          </Grid>
        </Preview>
        <Preview title="Tab Icons" description="Custom Tab to Allow icons in tab list trigger " code={docs.tabIcon}>
          <Tabs size="lg" defaultValue="one">
            <Tabs.List className="">
              <Tabs.Trigger value="one">
                <Home width="20" />
                <Text className="u_sr-only" size="xs">
                  Home
                </Text>
              </Tabs.Trigger>
              <Tabs.Trigger value="two">
                <Flex items="center" gap="2xs">
                  <Home width="20" />
                  <Text size="xs">Home</Text>
                </Flex>
              </Tabs.Trigger>
              <Tabs.Trigger value="three">
                <Flex items="center" gap="2xs">
                  <Text size="xs">User</Text>
                  <User width="20" />
                </Flex>
              </Tabs.Trigger>
            </Tabs.List>
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
      </Grid>
    </section>
  )
}
