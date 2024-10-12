import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Flex } from '..'
import { ProgressBar, ProgressBarStack, ProgressCircle } from './progress'

export default {
  title: 'COMPONENTS/CORE/ProgressBar',
  component: ProgressBar,
  args: {
    label: 'hello',
  },
} as ComponentMeta<typeof ProgressBar>

export const ProgressBarSize = () => {
  return (
    <Flex direction="column" gap="sm">
      <ProgressBar size="sm" value={90} label="hello" />
      <ProgressBar size="md" value={90} label="hello" />
      <ProgressBar size="lg" value={90} label="hello" />
    </Flex>
  )
}

export const ProgressCircleSize = () => {
  return (
    <Flex gap="sm">
      <ProgressCircle size="xs" value={15} label="hello" />
      <ProgressCircle size="sm" value={30} label="hello" />
      <ProgressCircle size="md" value={45} label="hello" />
      <ProgressCircle size="lg" value={60} label="hello" />
      <ProgressCircle size="xl" value={90} label="hello" />
      <ProgressCircle size="xl" value={95} label="hello" />
    </Flex>
  )
}

export const ProgressCircleColor = () => {
  return (
    <Flex gap="sm">
      <ProgressCircle color="red" value={15} label="hello" />
      <ProgressCircle color="green" value={30} label="hello" />
      <ProgressCircle color="indigo" value={45} label="hello" />
      <ProgressCircle color="yellow" value={60} label="hello" />
      <ProgressCircle color="purple" value={90} label="hello" />
    </Flex>
  )
}

export const NormalProgressBarStack = () => {
  return (
    <Flex direction="column" gap="sm">
      <ProgressBarStack label="Nice to meet you">
        <ProgressBarStack.Item label="hello" color="danger" value={30}>
          <button>CSS 30</button>
        </ProgressBarStack.Item>
        <ProgressBarStack.Item label="hello" color="success" value={15}>
          <button>HTML 15%</button>
        </ProgressBarStack.Item>
        <ProgressBarStack.Item label="hello" color="purple" value={25}>
          <button>React 25%</button>
        </ProgressBarStack.Item>
        <ProgressBarStack.Item label="hello" color="indigo" value={15}>
          <button>Node 15%</button>
        </ProgressBarStack.Item>
        <ProgressBarStack.Item label="hello" color="warning" value={15}>
          <button>SCSS 15%</button>
        </ProgressBarStack.Item>
      </ProgressBarStack>
    </Flex>
  )
}

const Template: ComponentStory<typeof ProgressBar> = (args) => <ProgressBar {...args} />

export const Playground = Template.bind({})
Playground.args = {
  value: 50,
}
