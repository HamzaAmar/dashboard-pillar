import {
  Breadcrumb,
  BreadcrumbItem,
  Flex,
  Grid,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@pillar-ui/core'
import { Preview } from '@components/section'
import * as docs from './accordion.docs'
import { ArrowDown, ChevronDown, Plus } from '@components/icons'

export const Component = () => {
  return (
    <section aria-labelledby="accordion--page-id" className="l_flow-lg">
      <Flex items="center" wrap justify="between">
        <Heading as="h1" id="accordion--page-id" size="3">
          Accordion Docs Page
        </Heading>
        <Breadcrumb size="4">
          <BreadcrumbItem link="../../..">Home</BreadcrumbItem>
          <BreadcrumbItem link="../..">Components</BreadcrumbItem>
          <BreadcrumbItem link="../">Composite</BreadcrumbItem>
          <BreadcrumbItem link="./" current>
            Accordion
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>

      <Grid grid="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="4">
        <Preview
          title="Accordion Variant"
          description="default is default possible values(contained, filled, separate, default)"
          code={docs.accordionVariant}
        >
          <Flex direction="col" gap="5" items="center">
            <Accordion variant="solid">
              <AccordionItem value="hello">
                <AccordionButton icon={<Plus width={16} />}>Show More Info</AccordionButton>
                <AccordionPanel>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum natus voluptas optio dolorem esse
                  autem maxime magni omnis aliquid at. Ipsa vero tempore ipsum libero ad ex obcaecati, non autem.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem value="nice">
                <AccordionButton icon={<Plus width={16} />}>Help You here</AccordionButton>
                <AccordionPanel>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum natus voluptas optio dolorem esse
                  autem maxime magni omnis aliquid at. Ipsa vero tempore ipsum libero ad ex obcaecati, non autem.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Accordion variant="mixed">
              <AccordionItem value="hello">
                <AccordionButton icon={<Plus width={16} />}>Show More Info</AccordionButton>
                <AccordionPanel>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum natus voluptas optio dolorem esse
                  autem maxime magni omnis aliquid at. Ipsa vero tempore ipsum libero ad ex obcaecati, non autem.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem value="nice">
                <AccordionButton icon={<Plus width={16} />}>Help You here</AccordionButton>
                <AccordionPanel>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum natus voluptas optio dolorem esse
                  autem maxime magni omnis aliquid at. Ipsa vero tempore ipsum libero ad ex obcaecati, non autem.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Accordion variant="soft">
              <AccordionItem value="hello">
                <AccordionButton icon={<Plus width={16} />}>Show More Info</AccordionButton>
                <AccordionPanel>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum natus voluptas optio dolorem esse
                  autem maxime magni omnis aliquid at. Ipsa vero tempore ipsum libero ad ex obcaecati, non autem.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem value="nice">
                <AccordionButton icon={<Plus width={16} />}>Help You here</AccordionButton>
                <AccordionPanel>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum natus voluptas optio dolorem esse
                  autem maxime magni omnis aliquid at. Ipsa vero tempore ipsum libero ad ex obcaecati, non autem.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Accordion>
              <AccordionItem value="hello">
                <AccordionButton icon={<Plus width={16} />}>Show More Info</AccordionButton>
                <AccordionPanel>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum natus voluptas optio dolorem esse
                  autem maxime magni omnis aliquid at. Ipsa vero tempore ipsum libero ad ex obcaecati, non autem.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem value="nice">
                <AccordionButton icon={<Plus width={16} />}>Help You here</AccordionButton>
                <AccordionPanel>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum natus voluptas optio dolorem esse
                  autem maxime magni omnis aliquid at. Ipsa vero tempore ipsum libero ad ex obcaecati, non autem.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Flex>
        </Preview>

        <Preview title="Custom Icon" description="You can change Accordion Custom Icon" code={docs.accordionCustomIcon}>
          <Flex wrap gap="5" items="center">
            <Accordion>
              <AccordionItem value="hello">
                <AccordionButton icon={<ChevronDown width={16} />}>Show More Info</AccordionButton>
                <AccordionPanel>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum natus voluptas optio dolorem esse
                  autem maxime magni omnis aliquid at. Ipsa vero tempore ipsum libero ad ex obcaecati, non autem.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem value="nice">
                <AccordionButton icon={<ChevronDown width={16} />}>Help You here</AccordionButton>
                <AccordionPanel>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum natus voluptas optio dolorem esse
                  autem maxime magni omnis aliquid at. Ipsa vero tempore ipsum libero ad ex obcaecati, non autem.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <Accordion>
              <AccordionItem value="hello">
                <AccordionButton icon={<ArrowDown width={16} />}>Show More Info</AccordionButton>
                <AccordionPanel>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum natus voluptas optio dolorem esse
                  autem maxime magni omnis aliquid at. Ipsa vero tempore ipsum libero ad ex obcaecati, non autem.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem value="nice">
                <AccordionButton icon={<ChevronDown width={16} />}>Help You here</AccordionButton>
                <AccordionPanel>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum natus voluptas optio dolorem esse
                  autem maxime magni omnis aliquid at. Ipsa vero tempore ipsum libero ad ex obcaecati, non autem.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem value="world">
                <AccordionButton icon={<Plus width={16} />}>Help You here</AccordionButton>
                <AccordionPanel>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum natus voluptas optio dolorem esse
                  autem maxime magni omnis aliquid at. Ipsa vero tempore ipsum libero ad ex obcaecati, non autem.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Flex>
        </Preview>
      </Grid>
    </section>
  )
}

Component.displayName = 'Accordion Docs'
