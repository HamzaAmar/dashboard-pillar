import { Avatar } from '..'
import { ComponentMeta, ComponentStory } from '@storybook/react'

const members = [
  <Avatar variant="image" image="https://picsum.photos/id/120/50/50" title="hello" />,
  <Avatar variant="image" image="https://picsum.photos/id/121/50/50" title="hello" />,
  <Avatar variant="image" image="https://picsum.photos/id/122/50/50" title="hello" />,
  <Avatar variant="image" image="https://picsum.photos/id/123/50/50" title="hello" />,
  <Avatar variant="image" image="https://picsum.photos/id/124/50/50" title="hello" />,
]

export default {
  title: 'Components/Core/AvatarGroup',
  component: Avatar.Group,
  args: {
    children: members,
    size: 'sm',
  },
} as ComponentMeta<typeof Avatar.Group>

const AvatarGroupTemplate: ComponentStory<typeof Avatar.Group> = (args) => <Avatar.Group {...args} />

export const NormalAvatarGroupTemplate = AvatarGroupTemplate.bind({})
NormalAvatarGroupTemplate.args = {
  limit: 2,
}

export const GridAvatarGroup = AvatarGroupTemplate.bind({})
GridAvatarGroup.args = {
  variant: 'grid',
}

export const GridAvatarGroupLotOfImages = AvatarGroupTemplate.bind({})
GridAvatarGroupLotOfImages.args = {
  size: 'sm',
  children: [...members, ...members, ...members, ...members, ...members, ...members, ...members, ...members],
  variant: 'grid',
}
export const GridAvatarGroupLotOfImagesWithMax = AvatarGroupTemplate.bind({})
GridAvatarGroupLotOfImagesWithMax.args = {
  ...GridAvatarGroupLotOfImages.args,
  limit: 10,
}
