import { Flex } from '@pillar-ui/core'
import type { ComponentMeta } from '@storybook/react'
import Dropzone from './dropzone'

export default {
  title: 'Components/Composition/Dropzone',
  component: Dropzone,
} as ComponentMeta<typeof Dropzone>

export const DropzoneColor = () => {
  return (
    <Flex direction="col" gap="4">
      <Dropzone />
      <Dropzone color="d" />
      <Dropzone color="w" />
      <Dropzone color="b" />
      <Dropzone color="se" />
      <Dropzone color="su" />
    </Flex>
  )
}

export const DropzoneCorner = () => {
  return (
    <Flex wrap gap="4">
      <Dropzone corner="0" />
      <Dropzone corner="1" />
      <Dropzone corner="2" />
      <Dropzone corner="3" />
      <Dropzone corner="4" />
      <Dropzone corner="full" />
    </Flex>
  )
}
