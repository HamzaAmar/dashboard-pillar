import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Alert, Flex } from '..'

export default {
  title: 'Components/Core/Alert',
  component: Alert,
  args: {
    message: 'Danger Message Danger Message Danger Message Danger Message',
  },
} as ComponentMeta<typeof Alert>

export const AlertSoftColor = () => {
  return (
    <Flex gap="sm" direction="column">
      <Alert variant="soft" message="Danger Message Danger Message Danger Message Danger Message" type="danger" />
      <Alert variant="soft" message="Success Message Success Message Success Message Success Message" type="success" />
      <Alert variant="soft" message="Warning Message Warning Message Warning Message Warning Message" type="warning" />
      <Alert variant="soft" message="Info Message Info Message Info Message Info Message" type="info" />
    </Flex>
  )
}

export const AlertOutlineColor = () => {
  return (
    <Flex gap="sm" direction="column">
      <Alert variant="outline" message="Danger Message Danger Message Danger Message Danger Message" type="danger" />
      <Alert
        variant="outline"
        message="Success Message Success Message Success Message Success Message"
        type="success"
      />
      <Alert
        variant="outline"
        message="Warning Message Warning Message Warning Message Warning Message"
        type="warning"
      />
      <Alert variant="outline" message="Info Message Info Message Info Message Info Message" type="info" />
    </Flex>
  )
}
export const AlertFillColor = () => {
  return (
    <Flex gap="sm" direction="column">
      <Alert variant="fill" message="Danger Message Danger Message Danger Message Danger Message" type="danger" />
      <Alert variant="fill" message="Success Message Success Message Success Message Success Message" type="success" />
      <Alert variant="fill" message="Warning Message Warning Message Warning Message Warning Message" type="warning" />
      <Alert variant="fill" message="Info Message Info Message Info Message Info Message" type="info" />
    </Flex>
  )
}

export const AlertIcon = () => {
  return (
    <Flex gap="sm" direction="column">
      <Alert
        variant="fill"
        showIcon
        message="Danger Message Danger Message Danger Message Danger Message"
        type="danger"
      />
      <Alert
        variant="fill"
        showIcon
        message="Success Message Success Message Success Message Success Message"
        type="success"
      />
      <Alert
        variant="fill"
        showIcon
        message="Warning Message Warning Message Warning Message Warning Message"
        type="warning"
      />
      <Alert variant="fill" showIcon message="Info Message Info Message Info Message Info Message" type="info" />
    </Flex>
  )
}

export const AlertTitleColor = () => {
  return (
    <Flex gap="sm" direction="column">
      <Alert
        variant="fill"
        title="Hellow orld"
        message="Danger Message Danger Message Danger Message Danger Message"
        type="danger"
      />
      <Alert
        variant="fill"
        title="Hellow orld"
        message="Success Message Success Message Success Message Success Message"
        type="success"
      />
      <Alert
        variant="fill"
        title="Hellow orld"
        message="Warning Message Warning Message Warning Message Warning Message"
        type="warning"
      />
      <Alert
        variant="fill"
        title="Hellow orld"
        message="Info Message Info Message Info Message Info Message"
        type="info"
      />
    </Flex>
  )
}

export const AlertTitleIcon = () => {
  return (
    <Flex gap="sm" direction="column">
      <Alert
        variant="fill"
        showIcon
        title="Hellow orld"
        message="Danger Message Danger Message Danger Message Danger Message"
        type="danger"
      />
      <Alert
        variant="fill"
        showIcon
        title="Hellow orld"
        message="Success Message Success Message Success Message Success Message"
        type="success"
      />
      <Alert
        variant="fill"
        showIcon
        title="Hellow orld"
        message="Warning Message Warning Message Warning Message Warning Message"
        type="warning"
      />
      <Alert
        variant="fill"
        showIcon
        title="Hellow orld"
        message="Info Message Info Message Info Message Info Message"
        type="info"
      />
    </Flex>
  )
}

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />

export const Playground = Template.bind({})

// Alert Type With Icon LongText Section End
