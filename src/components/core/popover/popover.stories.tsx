import { Warning } from '@components/icons'
import type { ComponentMeta } from '@storybook/react'
import { IconButton } from '../button'
import { Heading } from '..'
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
        <Heading size="sm">Hello world</Heading>
      </Popover>
      <Popover trigger={<IconButton icon={<Warning width={16} />} title="open popover" />} placement="top-center">
        <Heading size="sm">Hello world</Heading>
      </Popover>
      <Popover trigger={<IconButton icon={<Warning width={16} />} title="open popover" />} placement="top-end">
        <Heading size="sm">Hello world</Heading>
      </Popover>

      <Popover trigger={<IconButton icon={<Warning width={16} />} title="open popover" />} placement="right-start">
        <Heading size="sm">Hello world</Heading>
      </Popover>
      <Popover trigger={<IconButton icon={<Warning width={16} />} title="open popover" />} placement="right-center">
        <Heading size="sm">Hello world</Heading>
      </Popover>
      <Popover trigger={<IconButton icon={<Warning width={16} />} title="open popover" />} placement="right-end">
        <Heading size="sm">Hello world</Heading>
      </Popover>

      <Popover trigger={<IconButton icon={<Warning width={16} />} title="open popover" />} placement="bottom-start">
        <Heading size="sm">Hello world</Heading>
      </Popover>
      <Popover trigger={<IconButton icon={<Warning width={16} />} title="open popover" />} placement="bottom-center">
        <Heading size="sm">Hello world</Heading>
      </Popover>
      <Popover trigger={<IconButton icon={<Warning width={16} />} title="open popover" />} placement="bottom-end">
        <Heading size="sm">Hello world</Heading>
      </Popover>
      <Popover trigger={<IconButton icon={<Warning width={16} />} title="open popover" />} placement="left-start">
        <Heading size="sm">Hello world</Heading>
      </Popover>
      <Popover trigger={<IconButton icon={<Warning width={16} />} title="open popover" />} placement="left-center">
        <Heading size="sm">Hello world</Heading>
      </Popover>
      <Popover trigger={<IconButton icon={<Warning width={16} />} title="open popover" />} placement="left-end">
        <Heading size="sm">Hello world</Heading>
      </Popover>
    </div>
  )
}
