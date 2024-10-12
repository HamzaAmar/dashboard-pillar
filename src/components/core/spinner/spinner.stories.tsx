import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Spinner } from '..'

export default {
  title: 'Components/Core/Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />

export const Playground = Template.bind({})
