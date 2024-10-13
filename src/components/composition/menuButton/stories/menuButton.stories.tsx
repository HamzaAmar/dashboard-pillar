import { Button, Text } from '@pillar-ui/core'
import { useState } from 'react'
import { Caret } from '@components/icons'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { MenuButton } from '..'

export default {
  title: 'Components/Composition/MenuButtonRegular',
  component: MenuButton,
} as ComponentMeta<typeof MenuButton>

export const SortMenuButton = () => {
  const [state, setState] = useState('lowest-price')
  return (
    <MenuButton
      trigger={
        <Button iconPosition="end" size="4" icon={<Caret />} variant="outline" color="b">
          Sort by
        </Button>
      }
    >
      <MenuButton.Content>
        <MenuButton.RadioGroup value={state} onValueChange={setState}>
          <MenuButton.Radio value="lowest-price">
            <Text size="3" weight={state === 'lowest-price' ? '5' : '4'}>
              Lowest Price
            </Text>
          </MenuButton.Radio>
          <MenuButton.Radio value="highest-price">
            <Text size="3" weight={state === 'highest-price' ? '5' : '4'}>
              Highest Price
            </Text>
          </MenuButton.Radio>
          <MenuButton.Radio value={'top-review'}>
            <Text size="3" weight={state === 'top-review' ? '5' : '4'}>
              Top Customers Review
            </Text>
          </MenuButton.Radio>
          <MenuButton.Radio value="recent">
            <Text size="3" weight={state === 'recent' ? '5' : '4'}>
              Most Recent
            </Text>
          </MenuButton.Radio>
        </MenuButton.RadioGroup>
      </MenuButton.Content>
    </MenuButton>
  )
}

const Template: ComponentStory<typeof MenuButton> = (args) => <MenuButton {...args} />

export const Playground = Template.bind({})
