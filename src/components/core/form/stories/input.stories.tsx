import { Input } from '..'

import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { User } from '@components/icons'
import { Flex } from '@components/core'

export default {
  title: 'Components/core/form/Input',
  component: Input,
  args: {
    'aria-label': 'Nice',
    placeholder: 'Type your Name',
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const FilledInput = () => {
  return (
    <Flex gap="sm" direction="column">
      <Input aria-label="hello" autoFocus placeholder="Focus" variant="filled" />
      <Input aria-label="hello" placeholder="Normal" variant="filled" />
      <Input aria-label="hello" disabled placeholder="Disabled" variant="filled" />
      <Input aria-label="hello" readOnly placeholder="readOnly" variant="filled" />
      <Input aria-label="hello" isInvalid placeholder="Error" variant="filled" />
      <Input aria-label="hello" suffixInput={<User width="16" />} placeholder="Error" variant="filled" />
      <Input aria-label="hello" prefixInput={<User width="16" />} placeholder="Placeholder" variant="filled" />
      <Input
        aria-label="hello"
        prefixInput={'https://'}
        suffixInput=".com"
        defaultValue="Default Value"
        variant="filled"
      />
    </Flex>
  )
}
export const OutlineInput = () => {
  return (
    <Flex gap="sm" direction="column">
      <Input autoFocus placeholder="Focus" />
      <Input placeholder="Normal" />
      <Input disabled placeholder="Disabled" />
      <Input readOnly placeholder="readOnly" />
      <Input isInvalid placeholder="isInvalid" />
      <Input suffixInput={<User width="16" />} placeholder="Error" />
      <Input prefixInput={<User width="16" />} placeholder="Placeholder" />
      <Input prefixInput={'https://'} suffixInput=".com" defaultValue="Default Value" />
    </Flex>
  )
}
export const BorderedInput = () => {
  return (
    <Flex gap="sm" direction="column">
      <Input variant="bordered" autoFocus placeholder="Focus" />
      <Input variant="bordered" placeholder="Normal" />
      <Input variant="bordered" disabled placeholder="Disabled" />
      <Input variant="bordered" readOnly placeholder="readOnly" />
      <Input variant="bordered" isInvalid placeholder="isInvalid" />
      <Input variant="bordered" suffixInput={<User width="16" />} placeholder="Error" />
      <Input variant="bordered" prefixInput={<User width="16" />} placeholder="Placeholder" />
      <Input variant="bordered" prefixInput={'https://'} suffixInput=".com" defaultValue="Default Value" />
    </Flex>
  )
}

export const CornerInput = () => {
  return (
    <Flex gap="sm" direction="column">
      <Input corner="sharp" placeholder="sharp" />
      <Input corner="2xs" placeholder="2xs" />
      <Input corner="xs" placeholder="xs" />
      <Input corner="sm" placeholder="sm" />
      <Input corner="md" placeholder="md" />
      <Input corner="lg" placeholder="lg" />
      <Input corner="xl" placeholder="xl" />
      <Input corner="2xl" placeholder="2xl" />
      <Input corner="full" placeholder="full" />
    </Flex>
  )
}

export const SizeInput = () => {
  return (
    <Flex gap="sm" direction="column">
      <Input size="sm" placeholder="Small(sm)" />
      <Input placeholder="Medium (md default You don't need it)" />
      <Input size="lg" placeholder="Large(lg)" />
    </Flex>
  )
}

export const Playground = Template.bind({})
