import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button, Flex } from '../..'

export default {
  title: 'Components/Core/Button',
  component: Button,
  args: {
    children: 'Submit',
  },
} as ComponentMeta<typeof Button>

export const ButtonSolidColor = () => {
  return (
    <Flex wrap gap="md" items="center">
      <Button variant="solid">Update Profile</Button>
      <Button variant="solid" color="danger">
        Hey
      </Button>
      <Button variant="solid" color="warning">
        Add Cart
      </Button>
      <Button variant="solid" color="success">
        Review
      </Button>
      <Button variant="solid" color="indigo">
        Like
      </Button>
      <Button variant="solid" color="purple">
        Send
      </Button>
      <Button variant="solid" color="yellow">
        Yellow
      </Button>
      <Button variant="solid" color="slate">
        Slate
      </Button>
    </Flex>
  )
}

export const ButtonOutlineolor = () => {
  return (
    <Flex wrap gap="md" items="center">
      <Button variant="outline">Update Profile</Button>
      <Button variant="outline" color="danger">
        Hey
      </Button>
      <Button variant="outline" color="warning">
        Add Cart
      </Button>
      <Button variant="outline" color="success">
        Review
      </Button>
      <Button variant="outline" color="indigo">
        Like
      </Button>
      <Button variant="outline" color="purple">
        Send
      </Button>
      <Button variant="outline" color="yellow">
        Yellow
      </Button>
      <Button variant="outline" color="slate">
        Slate
      </Button>
    </Flex>
  )
}

export const ButtonSoftColor = () => {
  return (
    <Flex wrap gap="md" items="center">
      <Button variant="soft">Update Profile</Button>
      <Button variant="soft" color="danger">
        Hey
      </Button>
      <Button variant="soft" color="warning">
        Add Cart
      </Button>
      <Button variant="soft" color="success">
        Review
      </Button>
      <Button variant="soft" color="indigo">
        Like
      </Button>
      <Button variant="soft" color="purple">
        Send
      </Button>
      <Button variant="soft" color="yellow">
        Yellow
      </Button>
      <Button variant="soft" color="slate">
        Slate
      </Button>
    </Flex>
  )
}

export const ButtonCorner = () => {
  return (
    <Flex wrap gap="md" items="center">
      <Button corner="sharp" variant="solid">
        Update Profile
      </Button>
      <Button corner="2xs" variant="solid" color="danger">
        Hey
      </Button>
      <Button corner="xs" variant="solid" color="warning">
        Add Cart
      </Button>
      <Button corner="sm" variant="solid" color="success">
        Review
      </Button>
      <Button corner="md" variant="solid" color="indigo">
        Like
      </Button>
      <Button corner="lg" variant="solid" color="purple">
        Send
      </Button>
      <Button corner="xl" variant="solid" color="yellow">
        Yellow
      </Button>
      <Button corner="2xl" variant="solid" color="slate">
        Slate
      </Button>
      <Button corner="full" variant="solid" color="slate">
        Slate
      </Button>
    </Flex>
  )
}

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Playground = Template.bind({})
