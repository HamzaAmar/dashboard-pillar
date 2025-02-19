import { Home, Bell, Messages, UserCircle } from '@pillar-ui/icons'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SidebarItem, Sidebar } from '..'

export default {
  title: 'Components/Common/SidebarItem',
  component: SidebarItem,
  args: {
    title: 'Home Page',
  },
} as ComponentMeta<typeof SidebarItem>

const Template: ComponentStory<typeof SidebarItem> = (args) => (
  <ul>
    <SidebarItem {...args} />
  </ul>
)

export const NormalSidebarItem = Template.bind({})
export const NestedSidebarItem = Template.bind({})

NestedSidebarItem.args = {
  icon: <Home width={30} />,
  children: (
    <ul>
      <SidebarItem icon={<Bell width={30} />} title="Notification" />
      <SidebarItem icon={<Messages width={30} />} title="Messages" />
      <SidebarItem icon={<UserCircle width={30} />} title="Profile" />
    </ul>
  ),
}
