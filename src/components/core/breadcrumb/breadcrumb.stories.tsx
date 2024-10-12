import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Breadcrumb } from '.'

export default {
  title: 'Components/Core/Breadcrumb',
  component: Breadcrumb,
  subcomponents: { BreadcrumbItem: Breadcrumb.Item },
} as ComponentMeta<typeof Breadcrumb>

const Template: ComponentStory<typeof Breadcrumb> = (args) => <Breadcrumb {...args} />
