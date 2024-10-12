import { Warning } from '@components/icons'
import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { IconButton } from '../button'
import { Tooltip } from '.'

export default {
  title: 'Components/Core/Tooltip',
  component: Tooltip,
  args: {
    label: 'Helllo',
  },
} as ComponentMeta<typeof Tooltip>

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
      <Tooltip title="Warning" placement="top-start">
        <IconButton icon={<Warning width={16} />} title="open popover" />
      </Tooltip>
      <Tooltip title="Warning" placement="top-center">
        <IconButton icon={<Warning width={16} />} title="open popover" />
      </Tooltip>
      <Tooltip title="Warning" placement="top-end">
        <IconButton icon={<Warning width={16} />} title="open popover" />
      </Tooltip>

      <Tooltip title="Warning" placement="right-start">
        <IconButton icon={<Warning width={16} />} title="open popover" />
      </Tooltip>
      <Tooltip title="Warning" placement="right-center">
        <IconButton icon={<Warning width={16} />} title="open popover" />
      </Tooltip>
      <Tooltip title="Warning" placement="right-end">
        <IconButton icon={<Warning width={16} />} title="open popover" />
      </Tooltip>

      <Tooltip title="Warning" placement="bottom-start">
        <IconButton icon={<Warning width={16} />} title="open popover" />
      </Tooltip>
      <Tooltip title="Warning" placement="bottom-center">
        <IconButton icon={<Warning width={16} />} title="open popover" />
      </Tooltip>
      <Tooltip title="Warning" placement="bottom-end">
        <IconButton icon={<Warning width={16} />} title="open popover" />
      </Tooltip>
      <Tooltip title="Warning" placement="left-start">
        <IconButton icon={<Warning width={16} />} title="open popover" />
      </Tooltip>
      <Tooltip title="Warning" placement="left-center">
        <IconButton icon={<Warning width={16} />} title="open popover" />
      </Tooltip>
      <Tooltip title="Warning" placement="left-end">
        <IconButton icon={<Warning width={16} />} title="open popover" />
      </Tooltip>
    </div>
  )
}

const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />
export const Playground = Template.bind({})
