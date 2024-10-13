import { Button, Flex } from '@pillar-ui/core'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Drawer } from '..'

export default {
  default: 'Components/Composition/Drawer',
  component: Drawer,
  args: {
    rating: 1,
  },
} as ComponentMeta<typeof Drawer>

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />

export const NormalDrawer = () => {
  return (
    <Flex direction="col" gap="5">
      <Drawer title="Filter" trigger={<Button>RIght</Button>}>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
      </Drawer>
      <Drawer title="Filter" position="left" trigger={<Button>Left</Button>}>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
      </Drawer>
      <Drawer title="Filter" position="top" trigger={<Button>Top</Button>}>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
      </Drawer>
      <Drawer title="Filter" position="bottom" trigger={<Button>Bottom</Button>}>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
      </Drawer>
    </Flex>
  )
}

export const DrawerSize = () => {
  return (
    <Flex direction="col" gap="5">
      <Drawer title="Filter" size="4" position="right" trigger={<Button>Right SMALL</Button>}>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
      </Drawer>
      <Drawer title="Filter" size="5" position="right" trigger={<Button>Right Medium</Button>}>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
      </Drawer>
      <Drawer title="Filter" size="6" position="right" trigger={<Button>Right Large</Button>}>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
      </Drawer>
      <Drawer title="Filter" size="full" position="right" trigger={<Button>Right Full</Button>}>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
      </Drawer>
      <Drawer title="Filter" size="4" position="top" trigger={<Button>Right Small</Button>}>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
      </Drawer>
      <Drawer title="Filter" size="5" position="top" trigger={<Button>Right Medium</Button>}>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
      </Drawer>
      <Drawer title="Filter" size="6" position="top" trigger={<Button>Right Large</Button>}>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
      </Drawer>
      <Drawer title="Filter" size="full" position="top" trigger={<Button>TOP Full</Button>}>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
      </Drawer>
    </Flex>
  )
}

// export const Playground = Template.bind({});
