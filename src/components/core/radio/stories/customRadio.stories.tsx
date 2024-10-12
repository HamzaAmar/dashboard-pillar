import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Radio, RadioGroup } from '..'

export default {
  title: 'COMPONENTS/CORE/RadioGroup',
  component: RadioGroup,
  args: {
    children: (
      <>
        <Radio label="M" value="m" id="men" checked />
        <Radio label="Mme" value="mme" id="women" />
      </>
    ),
    name: 'gender',
    title: 'Choose Your Gender',
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof RadioGroup>

const Template: ComponentStory<typeof RadioGroup> = (args) => <RadioGroup {...args} />
