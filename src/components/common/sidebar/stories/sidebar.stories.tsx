import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Sidebar } from '..'

export default {
  title: 'Components/Common/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />

export const NormalSidebar = Template.bind({})
NormalSidebar.args = {}
