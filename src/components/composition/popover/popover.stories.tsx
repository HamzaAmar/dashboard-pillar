import { Warning } from '@components/icons'
import type { ComponentMeta } from '@storybook/react'
import { Heading, IconButton } from '@pillar-ui/core'
import { Popover } from '.'

export default {
  title: 'Components/Core/Popover',
} as ComponentMeta<typeof Popover>

export const Placement = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        placeItems: 'center',
      }}
    >
      <Popover trigger={<IconButton icon={<Warning width={16} />} title="open popover" />} placement="top-start">
        <Heading size="4">Hello world</Heading>
      </Popover>
      <Popover trigger={<IconButton icon={<Warning width={16} />} title="open popover" />} placement="top-center">
        <Heading size="4">Hello world</Heading>
      </Popover>
      <Popover trigger={<IconButton icon={<Warning width={16} />} title="open popover" />} placement="top-end">
        <Heading size="4">Hello world</Heading>
      </Popover>

      <Popover trigger={<IconButton icon={<Warning width={16} />} title="open popover" />} placement="right-start">
        <Heading size="4">Hello world</Heading>
      </Popover>
      <Popover trigger={<IconButton icon={<Warning width={16} />} title="open popover" />} placement="right-center">
        <Heading size="4">Hello world</Heading>
      </Popover>
      <Popover trigger={<IconButton icon={<Warning width={16} />} title="open popover" />} placement="right-end">
        <Heading size="4">Hello world</Heading>
      </Popover>

      <Popover trigger={<IconButton icon={<Warning width={16} />} title="open popover" />} placement="bottom-start">
        <Heading size="4">Hello world</Heading>
      </Popover>
      <Popover trigger={<IconButton icon={<Warning width={16} />} title="open popover" />} placement="bottom-center">
        <Heading size="4">Hello world</Heading>
      </Popover>
      <Popover trigger={<IconButton icon={<Warning width={16} />} title="open popover" />} placement="bottom-end">
        <Heading size="4">Hello world</Heading>
      </Popover>
      <Popover trigger={<IconButton icon={<Warning width={16} />} title="open popover" />} placement="left-start">
        <Heading size="4">Hello world</Heading>
      </Popover>
      <Popover trigger={<IconButton icon={<Warning width={16} />} title="open popover" />} placement="left-center">
        <Heading size="4">Hello world</Heading>
      </Popover>
      <Popover trigger={<IconButton icon={<Warning width={16} />} title="open popover" />} placement="left-end">
        <Heading size="4">Hello world</Heading>
      </Popover>
    </div>
  )
}
