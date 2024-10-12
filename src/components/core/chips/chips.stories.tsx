import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { Chips, Flex } from '..'

export default {
  title: 'Components/Core/Chips',
  component: Chips,
  args: {
    children: 'Hello World',
  },
} as ComponentMeta<typeof Chips>

const Template: ComponentStory<typeof Chips> = (args) => <Chips {...args} />

export const ChipsSolidColor = () => (
  <Flex gap="xs">
    <Chips color="danger" variant="solid">
      Hello
    </Chips>
    <Chips color="warning" variant="solid">
      Hello
    </Chips>
    <Chips color="success" variant="solid">
      Hello
    </Chips>
    <Chips color="yellow" variant="solid">
      Hello
    </Chips>
    <Chips color="purple" variant="solid">
      Hello
    </Chips>
    <Chips color="indigo" variant="solid">
      Hello
    </Chips>
    <Chips color="mint" variant="solid">
      Hello
    </Chips>
    <Chips color="slate" variant="solid">
      Hello
    </Chips>
  </Flex>
)

export const ChipsOutlineColor = () => (
  <Flex gap="xs">
    <Chips color="danger" variant="outline">
      Hello
    </Chips>
    <Chips color="warning" variant="outline">
      Hello
    </Chips>
    <Chips color="success" variant="outline">
      Hello
    </Chips>
    <Chips color="yellow" variant="outline">
      Hello
    </Chips>
    <Chips color="purple" variant="outline">
      Hello
    </Chips>
    <Chips color="indigo" variant="outline">
      Hello
    </Chips>
    <Chips color="mint" variant="outline">
      Hello
    </Chips>
    <Chips color="slate" variant="outline">
      Hello
    </Chips>
  </Flex>
)

export const ChipsSoftColor = () => (
  <Flex gap="xs">
    <Chips color="danger" variant="soft">
      Hello
    </Chips>
    <Chips color="warning" variant="soft">
      Hello
    </Chips>
    <Chips color="success" variant="soft">
      Hello
    </Chips>
    <Chips color="yellow" variant="soft">
      Hello
    </Chips>
    <Chips color="purple" variant="soft">
      Hello
    </Chips>
    <Chips color="indigo" variant="soft">
      Hello
    </Chips>
    <Chips color="mint" variant="soft">
      Hello
    </Chips>
    <Chips color="slate" variant="soft">
      Hello
    </Chips>
  </Flex>
)

export const ChipsVariant = () => (
  <Flex gap="xs">
    <Chips variant="solid">Hello</Chips>
    <Chips variant="soft">Hello</Chips>
    <Chips variant="outline">Hello</Chips>
  </Flex>
)

export const ChipsSize = () => (
  <Flex gap="xs">
    <Chips size="sm" variant="outline">
      Hello
    </Chips>
    <Chips size="lg" variant="outline">
      Hello
    </Chips>
    <Chips size="md" variant="outline">
      Hello
    </Chips>
  </Flex>
)

export const ChipsCorner = () => (
  <Flex gap="xs">
    <Chips corner="sharp" variant="outline">
      Hello
    </Chips>
    <Chips corner="2xs" variant="outline">
      Hello
    </Chips>
    <Chips corner="xs" variant="outline">
      Hello
    </Chips>
    <Chips corner="sm" variant="outline">
      Hello
    </Chips>
    <Chips corner="lg" variant="outline">
      Hello
    </Chips>
    <Chips corner="md" variant="outline">
      Hello
    </Chips>
    <Chips corner="lg" variant="outline">
      Hello
    </Chips>
    <Chips corner="xl" variant="outline">
      Hello
    </Chips>
    <Chips corner="2xl" variant="outline">
      Hello
    </Chips>
    <Chips corner="full" variant="outline">
      Hello
    </Chips>
  </Flex>
)

export const Playground = Template.bind({})
