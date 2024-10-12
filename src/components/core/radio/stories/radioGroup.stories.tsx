import React from 'react'
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
    size: 'sm',
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

export const HorizontalRadioGroup = Template.bind({})
HorizontalRadioGroup.args = {}

export const VerticalRadioGroup = Template.bind({})
VerticalRadioGroup.args = {
  direction: 'column',
}
export const VerticalRadioGroupLongText = Template.bind({})
VerticalRadioGroupLongText.args = {
  direction: 'column',
  children: (
    <>
      <Radio label="M" value="m" id="men" checked />
      <Radio
        label="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo facere debitis corrupti? Iusto dignissimos voluptatem, eos enim doloribus earum laudantium ipsam nulla error ullam molestiae, possimus nihil minus voluptatibus ipsa."
        value="mme"
        id="women"
      />
    </>
  ),
}

export const GroupRadioDangerColor = Template.bind({})
GroupRadioDangerColor.args = {
  direction: 'column',
  color: 'danger',
}

export const GroupRadioSuccessColor = Template.bind({})
GroupRadioSuccessColor.args = {
  direction: 'column',
  color: 'success',
}

export const GroupRadioWarningColor = Template.bind({})
GroupRadioWarningColor.args = {
  direction: 'column',
  color: 'warning',
}
export const GroupRadioSecondaryColor = Template.bind({})
GroupRadioSecondaryColor.args = {
  direction: 'column',
  color: 'indigo',
}

export const GroupRadWithoutTitle = Template.bind({})
GroupRadWithoutTitle.args = {
  showLabel: false,
}

export const GroupRadWithTitle = Template.bind({})
GroupRadWithTitle.args = {
  showLabel: true,
  label: 'Event Type',
}

export const VerticalRadioGroupArabicText = Template.bind({})
VerticalRadioGroupArabicText.args = {
  direction: 'column',
  children: (
    <>
      <Radio label="ذكر" value="m" id="men" checked />
      <Radio label="انثى" value="mme" id="women" />
    </>
  ),
}

export const HorizontalRadioGroupArabicText = Template.bind({})
HorizontalRadioGroupArabicText.args = {
  direction: 'row',
  children: (
    <>
      <Radio label="ذكر" value="m" id="men" checked />
      <Radio label="انثى" value="mme" id="women" />
    </>
  ),
}
