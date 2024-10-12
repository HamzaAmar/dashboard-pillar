import { Avatar, Flex } from '@components/core'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Core/Avatar',
  component: Avatar,
  args: {
    title: 'Hamza Miloud Amar',
  },
  argTypes: {
    if: {
      icon: { arg: 'variant', eq: 'icon' },
      image: { arg: 'variant', eq: 'image' },
    },
  },
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const AvatarCorner = () => {
  return (
    <Flex items="center" gap="sm">
      <Avatar corner="sharp" size="xl" variant="image" title="Hamza Miloud Amar" />
      <Avatar corner="2xs" size="xl" variant="image" title="Nabil Labil" />
      <Avatar corner="xs" size="xl" variant="image" title="Kmal Sifoun" />
      <Avatar corner="sm" size="xl" variant="image" title="Kmal Sifoun" />
      <Avatar corner="md" size="xl" variant="image" title="Kmal Sifoun" />
      <Avatar corner="lg" size="xl" variant="image" title="Kmal Sifoun" />
      <Avatar corner="xl" size="xl" variant="image" title="Kmal Sifoun" />
      <Avatar corner="2xl" size="xl" variant="image" title="Kmal Sifoun" />
      <Avatar corner="full" size="xl" variant="image" title="Kmal Sifoun" />
    </Flex>
  )
}

export const AvatarColor = () => {
  return (
    <Flex items="center" gap="sm">
      <Avatar corner="sharp" color="danger" variant="image" title="Hamza Miloud Amar" />
      <Avatar corner="2xs" color="success" variant="image" title="Nabil Labil" />
      <Avatar corner="xs" color="warning" variant="image" title="Kmal Sifoun" />
      <Avatar corner="sm" color="indigo" variant="image" title="Kmal Sifoun" />
      <Avatar corner="md" color="yellow" variant="image" title="Kmal Sifoun" />
      <Avatar corner="lg" color="mint" variant="image" title="Kmal Sifoun" />
      <Avatar corner="xl" color="purple" variant="image" title="Kmal Sifoun" />
      <Avatar corner="2xl" color="slate" variant="image" title="Kmal Sifoun" />
      <Avatar corner="full" color="danger" variant="image" title="Kmal Sifoun" />
    </Flex>
  )
}

export const AvatarSize = () => {
  return (
    <Flex items="center" gap="sm">
      <Avatar size="2xs" color="success" variant="image" title="Nabil Labil" />
      <Avatar size="xs" color="warning" variant="image" title="Kmal Sifoun" />
      <Avatar size="sm" color="indigo" variant="image" title="Kmal Sifoun" />
      <Avatar size="md" color="yellow" variant="image" title="Kmal Sifoun" />
      <Avatar size="lg" color="mint" variant="image" title="Kmal Sifoun" />
      <Avatar size="xl" color="purple" variant="image" title="Kmal Sifoun" />
      <Avatar size="2xl" color="slate" variant="image" title="Kmal Sifoun" />
    </Flex>
  )
}

export const AvatarSizeImage = () => {
  return (
    <Flex items="center" gap="sm">
      <Avatar
        image="https://picsum.photos/id/150/150/150"
        size="2xs"
        color="success"
        variant="image"
        title="Nabil Labil"
      />
      <Avatar
        image="https://picsum.photos/id/151/150/150"
        size="xs"
        color="warning"
        variant="image"
        title="Kmal Sifoun"
      />
      <Avatar
        image="https://picsum.photos/id/152/150/150"
        size="sm"
        color="indigo"
        variant="image"
        title="Kmal Sifoun"
      />
      <Avatar
        image="https://picsum.photos/id/153/150/150"
        size="md"
        color="yellow"
        variant="image"
        title="Kmal Sifoun"
      />
      <Avatar image="https://picsum.photos/id/154/150/150" size="lg" color="mint" variant="image" title="Kmal Sifoun" />
      <Avatar
        image="https://picsum.photos/id/155/150/150"
        size="xl"
        color="purple"
        variant="image"
        title="Kmal Sifoun"
      />
      <Avatar
        image="https://picsum.photos/id/156/150/150"
        size="2xl"
        color="slate"
        variant="image"
        title="Kmal Sifoun"
      />
    </Flex>
  )
}

export const Playground = Template.bind({})
