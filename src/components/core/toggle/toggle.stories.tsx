import { ComponentMeta, ComponentStory } from '@storybook/react'
import Toggle from '.'

export default {
  title: 'Components/Core/Toggle',
  component: Toggle,
  args: {
    label: 'Helllo',
  },
} as ComponentMeta<typeof Toggle>

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />

export const Playground = Template.bind({})
