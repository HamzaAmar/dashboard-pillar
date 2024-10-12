import { Breadcrumb, Flex, Grid, Heading } from '@components/core'
import { Accordion } from '@components/composition'
import { Preview } from '@components/section'
import * as docs from './accordion.docs'
import { ArrowDown, ChevronDown, Plus } from '@components/icons'

export const Component = () => {
  return (
    <section aria-labelledby="accordion--page-id" className="l_flow-lg">
      <Flex items="center" wrap justify="between">
        <Heading as="h1" id="accordion--page-id" size="xs">
          Accordion Docs Page
        </Heading>
        <Breadcrumb size="sm">
          <Breadcrumb.Item link="../../..">Home</Breadcrumb.Item>
          <Breadcrumb.Item link="../..">Components</Breadcrumb.Item>
          <Breadcrumb.Item link="../">Composite</Breadcrumb.Item>
          <Breadcrumb.Item link="./" current>
            Accordion
          </Breadcrumb.Item>
        </Breadcrumb>
      </Flex>

      <Grid columns="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="sm">
        <Preview
          title="Accordion Variant"
          description="default is default possible values(contained, filled, separate, default)"
          code={docs.accordionVariant}
        >
          <Flex direction="column" gap="md" items="center">
            <Accordion variant="contained">
              <Accordion.Item value="hello">
                <Accordion.Trigger icon={<Plus width={16} />}>Show More Info</Accordion.Trigger>
                <Accordion.Content>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum natus voluptas optio dolorem esse
                  autem maxime magni omnis aliquid at. Ipsa vero tempore ipsum libero ad ex obcaecati, non autem.
                </Accordion.Content>
              </Accordion.Item>
              <Accordion.Item value="nice">
                <Accordion.Trigger icon={<Plus width={16} />}>Help You here</Accordion.Trigger>
                <Accordion.Content>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum natus voluptas optio dolorem esse
                  autem maxime magni omnis aliquid at. Ipsa vero tempore ipsum libero ad ex obcaecati, non autem.
                </Accordion.Content>
              </Accordion.Item>
            </Accordion>
            <Accordion variant="filled">
              <Accordion.Item value="hello">
                <Accordion.Trigger icon={<Plus width={16} />}>Show More Info</Accordion.Trigger>
                <Accordion.Content>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum natus voluptas optio dolorem esse
                  autem maxime magni omnis aliquid at. Ipsa vero tempore ipsum libero ad ex obcaecati, non autem.
                </Accordion.Content>
              </Accordion.Item>
              <Accordion.Item value="nice">
                <Accordion.Trigger icon={<Plus width={16} />}>Help You here</Accordion.Trigger>
                <Accordion.Content>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum natus voluptas optio dolorem esse
                  autem maxime magni omnis aliquid at. Ipsa vero tempore ipsum libero ad ex obcaecati, non autem.
                </Accordion.Content>
              </Accordion.Item>
            </Accordion>
            <Accordion variant="separate">
              <Accordion.Item value="hello">
                <Accordion.Trigger icon={<Plus width={16} />}>Show More Info</Accordion.Trigger>
                <Accordion.Content>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum natus voluptas optio dolorem esse
                  autem maxime magni omnis aliquid at. Ipsa vero tempore ipsum libero ad ex obcaecati, non autem.
                </Accordion.Content>
              </Accordion.Item>
              <Accordion.Item value="nice">
                <Accordion.Trigger icon={<Plus width={16} />}>Help You here</Accordion.Trigger>
                <Accordion.Content>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum natus voluptas optio dolorem esse
                  autem maxime magni omnis aliquid at. Ipsa vero tempore ipsum libero ad ex obcaecati, non autem.
                </Accordion.Content>
              </Accordion.Item>
            </Accordion>
            <Accordion>
              <Accordion.Item value="hello">
                <Accordion.Trigger icon={<Plus width={16} />}>Show More Info</Accordion.Trigger>
                <Accordion.Content>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum natus voluptas optio dolorem esse
                  autem maxime magni omnis aliquid at. Ipsa vero tempore ipsum libero ad ex obcaecati, non autem.
                </Accordion.Content>
              </Accordion.Item>
              <Accordion.Item value="nice">
                <Accordion.Trigger icon={<Plus width={16} />}>Help You here</Accordion.Trigger>
                <Accordion.Content>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum natus voluptas optio dolorem esse
                  autem maxime magni omnis aliquid at. Ipsa vero tempore ipsum libero ad ex obcaecati, non autem.
                </Accordion.Content>
              </Accordion.Item>
            </Accordion>
          </Flex>
        </Preview>

        <Preview title="Custom Icon" description="You can change Accordion Custom Icon" code={docs.accordionCustomIcon}>
          <Flex wrap gap="md" items="center">
            <Accordion>
              <Accordion.Item value="hello">
                <Accordion.Trigger icon={<ChevronDown width={16} />}>Show More Info</Accordion.Trigger>
                <Accordion.Content>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum natus voluptas optio dolorem esse
                  autem maxime magni omnis aliquid at. Ipsa vero tempore ipsum libero ad ex obcaecati, non autem.
                </Accordion.Content>
              </Accordion.Item>
              <Accordion.Item value="nice">
                <Accordion.Trigger icon={<ChevronDown width={16} />}>Help You here</Accordion.Trigger>
                <Accordion.Content>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum natus voluptas optio dolorem esse
                  autem maxime magni omnis aliquid at. Ipsa vero tempore ipsum libero ad ex obcaecati, non autem.
                </Accordion.Content>
              </Accordion.Item>
            </Accordion>

            <Accordion>
              <Accordion.Item value="hello">
                <Accordion.Trigger icon={<ArrowDown width={16} />}>Show More Info</Accordion.Trigger>
                <Accordion.Content>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum natus voluptas optio dolorem esse
                  autem maxime magni omnis aliquid at. Ipsa vero tempore ipsum libero ad ex obcaecati, non autem.
                </Accordion.Content>
              </Accordion.Item>
              <Accordion.Item value="nice">
                <Accordion.Trigger icon={<ChevronDown width={16} />}>Help You here</Accordion.Trigger>
                <Accordion.Content>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum natus voluptas optio dolorem esse
                  autem maxime magni omnis aliquid at. Ipsa vero tempore ipsum libero ad ex obcaecati, non autem.
                </Accordion.Content>
              </Accordion.Item>
              <Accordion.Item value="world">
                <Accordion.Trigger icon={<Plus width={16} />}>Help You here</Accordion.Trigger>
                <Accordion.Content>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum natus voluptas optio dolorem esse
                  autem maxime magni omnis aliquid at. Ipsa vero tempore ipsum libero ad ex obcaecati, non autem.
                </Accordion.Content>
              </Accordion.Item>
            </Accordion>
          </Flex>
        </Preview>
      </Grid>
    </section>
  )
}

Component.displayName = 'Accordion Docs'
