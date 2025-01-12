import { Flex, Heading, Text, Switch, Paper } from '@pillar-ui/core'
import { useId } from 'react'

export interface NotificationItemProps {
  title: string
  description: string
}

const NotificationItem = ({ title, description }: NotificationItemProps) => {
  const id = `notification-${useId()}-setting`
  return (
    <Flex aria-labelledby={id} as="article" justify="between" items="center">
      <div>
        <Heading as="h3" id={id} size="3" weight="5">
          {title}
        </Heading>
        <Text size="3" color="b" low>
          {description}
        </Text>
      </div>
      <Switch name="Hello" label="Hello" />
    </Flex>
  )
}

const notification = () => {
  return (
    <Paper flow="7">
      <NotificationItem
        title="Show desktop notifications"
        description='   Choose the option you want as your default setting. Block a site: Next to "Not allowed to send
            notifications," click Add.'
      />
      <NotificationItem
        title="Show email notifications"
        description="Under Settings, choose Notifications. Under Select an account, choose the account to enable notifications
        for."
      />
      <NotificationItem
        title="Show chat notifications"
        description="To prevent duplicate mobile notifications from the Gmail and Chat apps, in settings, turn off Chat
        notifications."
      />
      <NotificationItem
        title="Show purchase notifications"
        description="Get real-time purchase alerts to protect yourself from fraudulent charges."
      />
      <NotificationItem
        title="Show Jobs notifications"
        description="Get real-time Jobs alerts to make me respond fast to the best opportunity."
      />
    </Paper>
  )
}

export default notification
