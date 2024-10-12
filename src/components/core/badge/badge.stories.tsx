import { Check } from '@components/icons'
import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { Badge, Flex } from '..'

export default {
  title: 'Components/Core/Badge',
  component: Badge,
  argTypes: {
    number: { if: { arg: 'variant', eq: 'number' } },
    max: { if: { arg: 'variant', eq: 'number' } },
  },
} as ComponentMeta<typeof Badge>

export const BadgeNumericColor = () => {
  return (
    <Flex gap="sm">
      <Badge variant="number" number={15} max={15} color="danger" />
      <Badge variant="number" number={15} max={15} color="success" />
      <Badge variant="number" number={15} max={15} color="warning" />
      <Badge variant="number" number={15} max={15} color="indigo" />
      <Badge variant="number" number={15} max={15} color="mint" />
      <Badge variant="number" number={15} max={15} color="purple" />
      <Badge variant="number" number={15} max={15} color="yellow" />
      <Badge variant="number" number={15} max={15} color="slate" />
    </Flex>
  )
}
export const BadgeIconColor = () => {
  return (
    <Flex gap="sm">
      <Badge variant="icon" icon={<Check />} color="danger" />
      <Badge variant="icon" icon={<Check />} color="success" />
      <Badge variant="icon" icon={<Check />} color="warning" />
      <Badge variant="icon" icon={<Check />} color="indigo" />
      <Badge variant="icon" icon={<Check />} color="mint" />
      <Badge variant="icon" icon={<Check />} color="purple" />
      <Badge variant="icon" icon={<Check />} color="yellow" />
      <Badge variant="icon" icon={<Check />} color="slate" />
    </Flex>
  )
}
export const BadgeDotColor = () => {
  return (
    <Flex gap="sm">
      <Badge variant="dot" color="danger" />
      <Badge variant="dot" color="success" />
      <Badge variant="dot" color="warning" />
      <Badge variant="dot" color="indigo" />
      <Badge variant="dot" color="mint" />
      <Badge variant="dot" color="purple" />
      <Badge variant="dot" color="yellow" />
      <Badge variant="dot" color="slate" />
    </Flex>
  )
}

export const BadgeNumericMaxValue = () => {
  return (
    <Flex gap="sm">
      <Badge variant="number" number={15} max={10} color="danger" />
      <Badge variant="number" number={150} max={100} color="success" />
      <Badge variant="number" number={5} max={0} color="warning" />
      <Badge variant="number" number={0} max={15} color="indigo" />
      <Badge variant="number" number={12211} max={10000} color="mint" />
      <Badge variant="number" number={1500} max={100} color="purple" />
      <Badge variant="number" number={15} max={1} color="yellow" />
      <Badge variant="number" number={15} max={15} color="slate" />
    </Flex>
  )
}

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />
export const Playground = Template.bind({})
