import { Avatar, Badge, Chips, Flex, Heading, IconButton, Text } from '@components/core'
import { Dots } from '@components/icons'
import { classnames } from '@utils/classnames'
import { getNotifications } from '@api/notifacation'
import type { NotificationItemProps } from './notification.type'

const NotificationCard = ({ user, unread, request, type, description, ...rest }: NotificationItemProps) => {
  const NotificationItemClassname = classnames('notifications-item', {
    highlight: unread,
  })

  return (
    <Flex as="article" {...NotificationItemClassname} items="center" justify="between">
      <Flex gap="sm" items="center">
        <Avatar variant="image" title="hello" image={user.avatar} />
        <div className="l_flow-sm">
          <div>
            <Heading as="h2" truncate="multiline" numberLine={1} size="2xs" weight="medium">
              {user.name}
            </Heading>
            <Text size="xs" truncate="multiline" numberLine={2}>
              {description}
            </Text>
            <Text size="xs" color="slate" contrast="low">
              5min
            </Text>
          </div>
          <Flex gap="sm">
            <Chips>{type}</Chips>
            <Chips variant="soft">{request}</Chips>
          </Flex>
        </div>
      </Flex>
      <Flex gap="xs" items="center">
        {unread && <Badge className="notification-badge" variant="dot" />}
        <IconButton title="notification settings" icon={<Dots />} />
      </Flex>
    </Flex>
  )
}

const notification = () => {
  const notifications = getNotifications()
  return (
    <section aria-labelledby="notification-page-id" className="l_flow-md">
      <Heading id="notification-page-id" as="h1" size="sm">
        All Notification
      </Heading>
      <div className="notifications l_box">
        {notifications.map((notification) => (
          <NotificationCard key={notification.id} {...notification} />
        ))}
      </div>
    </section>
  )
}

export default notification
