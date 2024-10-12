import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Logo } from '..'

export default {
  title: 'Components/Common/logo',
  component: Logo,
  args: {
    width: '40px',
  },
} as ComponentMeta<typeof Logo>

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />

export const NormalLogo = Template.bind({})
export const ShrinkLogo = Template.bind({})
ShrinkLogo.args = {
  isShrink: true,
}
