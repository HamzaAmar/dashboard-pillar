import { Flex } from '@components/core'
import type { ComponentMeta } from '@storybook/react'
import Dropzone from './dropzone'

export default {
  title: 'Components/Composition/Dropzone',
  component: Dropzone,
} as ComponentMeta<typeof Dropzone>

export const DropzoneColor = () => {
  return (
    <Flex direction="column" gap="sm">
      <Dropzone />
      <Dropzone color="red" />
      <Dropzone color="orange" />
      <Dropzone color="slate" />
      <Dropzone color="purple" />
      <Dropzone color="yellow" />
      <Dropzone color="mint" />
      <Dropzone color="green" />
    </Flex>
  )
}

export const DropzoneCorner = () => {
  return (
    <Flex wrap gap="sm">
      <Dropzone corner="sharp" />
      <Dropzone corner="2xs" />
      <Dropzone corner="xs" />
      <Dropzone corner="sm" />
      <Dropzone corner="md" />
      <Dropzone corner="xl" />
      <Dropzone corner="2xl" />
      <Dropzone corner="full" />
    </Flex>
  )
}
