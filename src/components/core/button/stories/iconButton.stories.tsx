import { Menu } from '@components/icons'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { IconButton } from '..'

export default {
  title: 'Components/Core/IconButton',
  component: IconButton,
  args: {
    icon: <Menu />,
    title: 'Menu Toggle',
  },
} as ComponentMeta<typeof IconButton>

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />

export const SmallIconButton = Template.bind({})
SmallIconButton.args = {
  size: 'sm',
}

export const MediumIconButton = Template.bind({})

export const LargeIconButton = Template.bind({})
LargeIconButton.args = {
  size: 'lg',
}

export const IconButtonRed = Template.bind({})
IconButtonRed.args = {
  color: 'danger',
}

export const IconButtonOrange = Template.bind({})
IconButtonOrange.args = {
  color: 'warning',
}

export const IconButtonPrimary = Template.bind({})
IconButtonPrimary.args = {
  color: 'primary',
}
