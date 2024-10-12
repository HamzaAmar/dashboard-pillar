import { Flex } from '@components/core'
import { Plus } from '@components/icons'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Accordion } from '.'

export default {
  default: 'Components/Composition/Accordion',
  component: Accordion,
  args: {
    rating: 1,
  },
} as ComponentMeta<typeof Accordion>

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />

export const AccordionWithLabelAndSize = () => {
  return (
    <Flex direction="column" gap="md">
      <Accordion>
        <Accordion.Item value="hello">
          <Accordion.Trigger>SHow More Info</Accordion.Trigger>
          <Accordion.Content>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum natus voluptas optio dolorem esse autem
            maxime magni omnis aliquid at. Ipsa vero tempore ipsum libero ad ex obcaecati, non autem.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="nice">
          <Accordion.Trigger>Help You here</Accordion.Trigger>
          <Accordion.Content>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum natus voluptas optio dolorem esse autem
            maxime magni omnis aliquid at. Ipsa vero tempore ipsum libero ad ex obcaecati, non autem.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </Flex>
  )
}

export const AccordionCustomIcon = () => {
  return (
    <Flex direction="column" gap="md">
      <Accordion>
        <Accordion.Item value="hello">
          <Accordion.Trigger icon={<Plus width={16} />}>SHow More Info</Accordion.Trigger>
          <Accordion.Content>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum natus voluptas optio dolorem esse autem
            maxime magni omnis aliquid at. Ipsa vero tempore ipsum libero ad ex obcaecati, non autem.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="nice">
          <Accordion.Trigger icon={<Plus width={16} />}>Help You here</Accordion.Trigger>
          <Accordion.Content>
            {' '}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum natus voluptas optio dolorem esse autem
            maxime magni omnis aliquid at. Ipsa vero tempore ipsum libero ad ex obcaecati, non autem.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </Flex>
  )
}

export const AccordionVariant = () => {
  return (
    <Flex direction="column" gap="md">
      <Accordion variant="contained">
        <Accordion.Item value="hello">
          <Accordion.Trigger icon={<Plus width={16} />}>SHow More Info</Accordion.Trigger>
          <Accordion.Content>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum natus voluptas optio dolorem esse autem
            maxime magni omnis aliquid at. Ipsa vero tempore ipsum libero ad ex obcaecati, non autem.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="nice">
          <Accordion.Trigger icon={<Plus width={16} />}>Help You here</Accordion.Trigger>
          <Accordion.Content>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum natus voluptas optio dolorem esse autem
            maxime magni omnis aliquid at. Ipsa vero tempore ipsum libero ad ex obcaecati, non autem.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
      <Accordion variant="filled">
        <Accordion.Item value="hello">
          <Accordion.Trigger icon={<Plus width={16} />}>SHow More Info</Accordion.Trigger>
          <Accordion.Content>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum natus voluptas optio dolorem esse autem
            maxime magni omnis aliquid at. Ipsa vero tempore ipsum libero ad ex obcaecati, non autem.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="nice">
          <Accordion.Trigger icon={<Plus width={16} />}>Help You here</Accordion.Trigger>
          <Accordion.Content>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum natus voluptas optio dolorem esse autem
            maxime magni omnis aliquid at. Ipsa vero tempore ipsum libero ad ex obcaecati, non autem.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
      <Accordion variant="separate">
        <Accordion.Item value="hello">
          <Accordion.Trigger icon={<Plus width={16} />}>SHow More Info</Accordion.Trigger>
          <Accordion.Content>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum natus voluptas optio dolorem esse autem
            maxime magni omnis aliquid at. Ipsa vero tempore ipsum libero ad ex obcaecati, non autem.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="nice">
          <Accordion.Trigger icon={<Plus width={16} />}>Help You here</Accordion.Trigger>
          <Accordion.Content>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum natus voluptas optio dolorem esse autem
            maxime magni omnis aliquid at. Ipsa vero tempore ipsum libero ad ex obcaecati, non autem.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
      <Accordion>
        <Accordion.Item value="hello">
          <Accordion.Trigger icon={<Plus width={16} />}>SHow More Info</Accordion.Trigger>
          <Accordion.Content>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum natus voluptas optio dolorem esse autem
            maxime magni omnis aliquid at. Ipsa vero tempore ipsum libero ad ex obcaecati, non autem.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="nice">
          <Accordion.Trigger icon={<Plus width={16} />}>Help You here</Accordion.Trigger>
          <Accordion.Content>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum natus voluptas optio dolorem esse autem
            maxime magni omnis aliquid at. Ipsa vero tempore ipsum libero ad ex obcaecati, non autem.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </Flex>
  )
}

export const Playground = Template.bind({})
