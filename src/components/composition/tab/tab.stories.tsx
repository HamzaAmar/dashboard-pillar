import { Flex, Text } from '@components/core'
import { Home, User } from '@components/icons'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Tabs } from '.'

import type { StorybookTabProps } from './tab.type'

export default {
  default: 'Components/Composition/Avatar',
  component: Tabs,
} as ComponentMeta<typeof Tabs>

export const NormalTab = ({ variant = 'link', ...rest }: StorybookTabProps) => {
  return (
    <Tabs {...rest} defaultValue="one">
      <Tabs.List className="">
        <Tabs.Trigger variant={variant} value="one">
          One
        </Tabs.Trigger>
        <Tabs.Trigger variant={variant} value="two">
          Two
        </Tabs.Trigger>
        <Tabs.Trigger variant={variant} value="three">
          Three
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="one">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, ipsam consectetur et impedit hic molestiae
        libero, perferendis iure pariatur, quidem obcaecati dolore blanditiis? Ut, vero similique. Numquam ipsam saepe
        hic!
      </Tabs.Content>
      <Tabs.Content value="two">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nihil, corporis quaerat eaque aut nostrum nemo
        ex ipsum numquam nesciunt tenetur rem. Voluptas rem vitae excepturi perferendis facere quo sunt.
      </Tabs.Content>
      <Tabs.Content value="three">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum obcaecati expedita provident optio placeat
        officia nihil voluptates? Possimus esse, facilis corporis ipsa fuga recusandae ipsum, non nostrum voluptatibus
        aliquam sint.
      </Tabs.Content>
    </Tabs>
  )
}

export const TabVariant = () => {
  return (
    <Flex direction="column" gap="md">
      <NormalTab variant="solid" />
      <NormalTab variant="outline" />
      <NormalTab variant="soft" />
      <NormalTab />
    </Flex>
  )
}

export const TabColorSoft = () => {
  return (
    <Flex direction="column" gap="md">
      <NormalTab variant="soft" />
      <NormalTab variant="soft" color="danger" />
      <NormalTab variant="soft" color="indigo" />
      <NormalTab variant="soft" color="purple" />
      <NormalTab variant="soft" color="slate" />
      <NormalTab variant="soft" color="success" />
      <NormalTab variant="soft" color="warning" />
      <NormalTab variant="soft" color="yellow" />
    </Flex>
  )
}

export const TabColorOutline = () => {
  return (
    <Flex direction="column" gap="md">
      <NormalTab variant="outline" />
      <NormalTab variant="outline" color="danger" />
      <NormalTab variant="outline" color="indigo" />
      <NormalTab variant="outline" color="purple" />
      <NormalTab variant="outline" color="slate" />
      <NormalTab variant="outline" color="success" />
      <NormalTab variant="outline" color="warning" />
      <NormalTab variant="outline" color="yellow" />
    </Flex>
  )
}

export const TabColorSolid = () => {
  return (
    <Flex direction="column" gap="md">
      <NormalTab variant="solid" />
      <NormalTab variant="solid" color="danger" />
      <NormalTab variant="solid" color="indigo" />
      <NormalTab variant="solid" color="purple" />
      <NormalTab variant="solid" color="slate" />
      <NormalTab variant="solid" color="success" />
      <NormalTab variant="solid" color="warning" />
      <NormalTab variant="solid" color="yellow" />
    </Flex>
  )
}

export const TabColorLink = () => {
  return (
    <Flex direction="column" gap="md">
      <NormalTab />
      <NormalTab color="danger" />
      <NormalTab color="indigo" />
      <NormalTab color="purple" />
      <NormalTab color="slate" />
      <NormalTab color="success" />
      <NormalTab color="warning" />
      <NormalTab color="yellow" />
    </Flex>
  )
}

export const TabIcons = () => {
  return (
    <Flex direction="column" gap="md">
      <Tabs size="lg" defaultValue="one">
        <Tabs.List className="">
          <Tabs.Trigger value="one">
            <Home width="20" />
            <Text className="u_sr-only" size="xs">
              Home
            </Text>
          </Tabs.Trigger>
          <Tabs.Trigger value="two">
            <Flex items="center" gap="2xs">
              <Home width="20" />
              <Text size="xs">Home</Text>
            </Flex>
          </Tabs.Trigger>
          <Tabs.Trigger value="three">
            <Flex items="center" gap="2xs">
              <Text size="xs">User</Text>
              <User width="20" />
            </Flex>
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="one">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, ipsam consectetur et impedit hic molestiae
          libero, perferendis iure pariatur, quidem obcaecati dolore blanditiis? Ut, vero similique. Numquam ipsam saepe
          hic!
        </Tabs.Content>
        <Tabs.Content value="two">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nihil, corporis quaerat eaque aut nostrum
          nemo ex ipsum numquam nesciunt tenetur rem. Voluptas rem vitae excepturi perferendis facere quo sunt.
        </Tabs.Content>
        <Tabs.Content value="three">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum obcaecati expedita provident optio placeat
          officia nihil voluptates? Possimus esse, facilis corporis ipsa fuga recusandae ipsum, non nostrum voluptatibus
          aliquam sint.
        </Tabs.Content>
      </Tabs>
    </Flex>
  )
}

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />

export const Playground = Template.bind({})
