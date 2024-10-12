import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Checkbox, Flex } from '..'

export default {
  title: 'Components/Core/Checkbox',
  component: Checkbox,
  args: {
    label: 'Hello',
  },
} as ComponentMeta<typeof Checkbox>

export const CheckboxColor = () => {
  return (
    <Flex gap="sm">
      <Checkbox defaultChecked name="hello" label="Hello" color="danger" />
      <Checkbox defaultChecked name="hello" label="Hello" color="success" />
      <Checkbox defaultChecked name="hello" label="Hello" color="warning" />
      <Checkbox defaultChecked name="hello" label="Hello" color="indigo" />
      <Checkbox defaultChecked name="hello" label="Hello" color="mint" />
      <Checkbox defaultChecked name="hello" label="Hello" color="purple" />
      <Checkbox defaultChecked name="hello" label="Hello" color="yellow" />
      <Checkbox defaultChecked name="hello" label="Hello" color="slate" />
    </Flex>
  )
}

export const CheckboxSize = () => {
  return (
    <Flex gap="sm">
      <Checkbox size="sm" name="hello" label="Hello" color="success" />
      <Checkbox size="md" name="hello" label="Hello" color="warning" />
      <Checkbox size="lg" name="hello" label="Hello" color="indigo" />
    </Flex>
  )
}

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />

export const Playground = Template.bind({})
